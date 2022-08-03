package com.dotto.app.service.post;

import com.dotto.app.dto.post.*;
import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.member.RoleType;
import com.dotto.app.entity.post.DottoPost;
import com.dotto.app.entity.post.Image;
import com.dotto.app.exception.DottoPostNotFoundException;
import com.dotto.app.exception.MemberNotFoundException;
import com.dotto.app.exception.MemberRoleAuthorizationException;
import com.dotto.app.repository.member.MemberRepository;
import com.dotto.app.repository.post.DottoPostRepository;
import com.dotto.app.repository.role.RoleRepository;
import com.dotto.app.service.file.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class DottoPostService {

    private final MemberRepository memberRepository;
    private final DottoPostRepository dottoPostRepository;
    private final RoleRepository roleRepository;
    private final FileService fileService;


    @Transactional
    public DottoPostCreateResponse create (DottoPostCreateRequest req){
        log.info("memberReq id  :: "+req.getMemberNo());
        Member member = memberRepository.findWithRolesByMemberNo(req.getMemberNo()).orElseThrow(MemberNotFoundException::new);
         if(!rolesArtistTF(member)){
             throw new MemberRoleAuthorizationException("권한이 없습니다");
         };

        String salesPct = req.getSalesYn()== 'Y'? salesPctCalc(req): "";

        List<Image> images = req.getPostPhoto().stream().map(i -> new Image(i.getOriginalFilename())).collect(Collectors.toList());

        String tags = req.getTags().toString().replace("[","").replace("]","");
        DottoPost dottoPost = dottoPostRepository.save(
                new DottoPost(member, req.getTitle(),req.getContent(), req.getPrice(), req.getSalesPrice(),req.getSalesYn(),req.getGenre(),req.getTotalTime(),tags,salesPct, images)
        );
        uploadImages(dottoPost.getImages(), req.getPostPhoto());

        return new DottoPostCreateResponse(dottoPost.getPostNo());
    }

    public DottoPostListDto readAll(PostReadCondition cond){
        return DottoPostListDto.toDto(
                dottoPostRepository.findAllCondition(cond)
        );
    }

    public DottoPostDetailDto read(Long id){
        return DottoPostDetailDto.toDto(dottoPostRepository.findById(id).orElseThrow(DottoPostNotFoundException::new));
    }

    private String salesPctCalc(DottoPostCreateRequest req){
        double salesPrice = req.getSalesPrice();
        double price = req.getPrice();
        return Math.round(((1-salesPrice/price))*100)+"%";
    }

    private boolean rolesArtistTF(Member member){

        String memberRoles = String.valueOf(member.getRoles().stream()
                .map(memberRole -> memberRole.getRole())
                .map(role -> role.getRoleType())
                .map(roleType -> roleType.toString()).collect(Collectors.toList()));

        return memberRoles.contains(String.valueOf(RoleType.ROLE_ARTIST));
    }

    private void uploadImages(List<Image> images, List<MultipartFile> fileImages){
        IntStream.range(0, images.size()).forEach(i -> fileService.upload(fileImages.get(i), images.get(i).getName()));
    }
}
