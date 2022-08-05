package com.dotto.app.entity.post;

import com.dotto.app.dto.post.DottoPostUpdateRequest;
import com.dotto.app.entity.common.EntityDate;
import com.dotto.app.entity.member.Member;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DottoPost extends EntityDate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "memberNo",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Member member;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private int price;

    @Column
    private int salesPrice;

    @Column
    private char salesYn;

    @Column
    private String genre;

    @Column
    private int totalTime;

    @Column
    private char deletedYn;

    @Column
    private String tags;

    @Column
    private String salesPct;

    @OneToMany(mappedBy = "dottoPost",cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<Image> images;

    public DottoPost(Member member, String title, String content, int price, int salesPrice, char salesYn, String genre, int totalTime, String tags, String salesPct, List<Image> images, char deletedYn ){
        this.member = member;
        this.title = title;
        this.content = content;
        this.price = price;
        this.salesPrice = salesPrice;
        this.salesYn = salesYn;
        this.genre = genre;
        this.totalTime = totalTime;
        this.tags = tags;
        this.salesPct = salesPct;
        this.images = new ArrayList<>();
        addImage(images);
        this.deletedYn = deletedYn;
    }

    public void setDeletedY(char Y){
        this.deletedYn = Y;
    }


    public ImageUpdateResult update(DottoPostUpdateRequest req, String salesPct, String tags){
        this.title = req.getTitle();
        this.content = req.getContent();
        this.price = req.getPrice();
        this.salesPrice = req.getSalesPrice();
        this.salesYn = req.getSalesYn();
        this.genre = req.getGenre();
        this.totalTime = req.getTotalTime();
        this.salesPct = salesPct;
        this.tags = tags;
        ImageUpdateResult rs = findImageUpdatedResult(req.getAddedImages(), req.getDeletedImages());
        addImage(rs.getAddedImages());
        deleteImages(rs.getDeletedImages());
        return rs;
    }

    private ImageUpdateResult findImageUpdatedResult(List<MultipartFile> addedImageFiles, List<Long> deleteImageIds){
        List<Image> addedImages = convertImageFilesToImages(addedImageFiles);
        List<Image> deletedImages = convertImageIdsToImages(deleteImageIds);
        return new ImageUpdateResult(addedImageFiles, addedImages, deletedImages);
    }
    private void addImage(List<Image> added){
        added.stream().forEach(i -> {images.add(i);
        i.initDottoPost(this);
        });
    }

    private void deleteImages(List<Image> deletedImages){
        deletedImages.stream().forEach(image -> this.images.remove(image));
    }

    private List<Image> convertImageFilesToImages(List<MultipartFile> imageFiles){
        return imageFiles.stream().map(imageFile -> new Image(imageFile.getOriginalFilename())).collect(toList());
    }

    private List<Image> convertImageIdsToImages(List<Long> imageIds){
        return imageIds.stream().map(id -> convertImageIdToImage(id))
                .filter(i -> i.isPresent())
                .map(i -> i.get())
                .collect(toList());
    }

    private Optional<Image> convertImageIdToImage(Long imageIds){
        return this.images.stream().filter(image -> image.getImgNo().equals(imageIds)).findAny();
    }

    @Getter
    @AllArgsConstructor
    public static class ImageUpdateResult{
        private List<MultipartFile> addedImageFiles;
        private List<Image> addedImages;
        private List<Image> deletedImages;
    }
}
