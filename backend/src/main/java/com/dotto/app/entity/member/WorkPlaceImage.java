package com.dotto.app.entity.member;

import com.dotto.app.entity.common.ImageCreateSupport;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WorkPlaceImage extends ImageCreateSupport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long workPlaceImgNo;


    private String originName;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private WorkPlace workPlace;


    public WorkPlaceImage(String originName){
        this.name = generateName(extractExtension(originName));
        this.originName = originName;
    }

    public void initWorkPlace(WorkPlace workPlace ) {
        if(this.workPlace == null) this.workPlace = workPlace;
    }


    @Override
    protected String extractExtension(String originName) {
        return super.extractExtension(originName);
    }


    @Override
    protected String generateName(String extension) {
        return super.generateName(extension);
    }
}
