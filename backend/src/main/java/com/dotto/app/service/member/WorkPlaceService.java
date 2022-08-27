package com.dotto.app.service.member;

import com.dotto.app.dto.member.workplace.WorkPlaceCreateRequest;
import com.dotto.app.dto.member.workplace.WorkPlaceCreateResponse;
import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.member.RoleType;
import com.dotto.app.entity.member.WorkPlace;
import com.dotto.app.entity.member.WorkPlaceImage;
import com.dotto.app.exception.MemberNotFoundException;
import com.dotto.app.exception.MemberRoleAuthorizationException;
import com.dotto.app.repository.member.MemberRepository;
import com.dotto.app.repository.member.WorkplaceRepository;
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
public class WorkPlaceService {

    private final WorkplaceRepository workplaceRepository;
    private final MemberRepository memberRepository;

    private final FileService fileService;


    @Transactional
    public WorkPlaceCreateResponse create (WorkPlaceCreateRequest req){
        Member member = memberRepository.findByMemberNoAndDeletedYnEqualsN(req.getMemberNo()).orElseThrow(MemberNotFoundException::new);

        log.info("workPlace memberNo, memberRoleType ={}, {}",member.getMemberNo(), member.getRoles().stream().map(r -> r.getRole()).map(role -> role.getRoleType()).collect(Collectors.toList()));
        //임시 권한 제어 로직
        if(!artistCheck(member)) {
            log.info("artistCheck ={}" ,artistCheck(member));
            throw new MemberRoleAuthorizationException("내 작업실을 작성할 권한이 없습니다.");
        }
        log.info("artistCheck ={}" ,artistCheck(member));
        List<WorkPlaceImage> images = req.getWorkImg().stream().map(i -> new WorkPlaceImage(i.getOriginalFilename())).collect(Collectors.toList());

        WorkPlace wk = workplaceRepository.save(new WorkPlace(member, req, images));
        uploadImages(images, req.getWorkImg());

        return new WorkPlaceCreateResponse(wk.getMember().getMemberNo());

    }

    private boolean artistCheck(Member member){
       return member.getRoles().stream().map( r -> r.getRole()).map( role -> role.getRoleType()).anyMatch(roleType -> roleType.equals(RoleType.ROLE_ARTIST));

    }

    private void uploadImages(List<WorkPlaceImage> images, List<MultipartFile> fileImages){
        IntStream.range(0, images.size()).forEach(i -> fileService.upload(fileImages.get(i), images.get(i).getName()));
    }

}
