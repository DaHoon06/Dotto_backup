package com.dotto.app.repository.post;

import com.dotto.app.entity.post.Image;
import com.dotto.app.service.search.convert.ImgNoPostNoConvert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image,Long> {

    @Query("select new com.dotto.app.service.search.convert.ImgNoPostNoConvert (min(imgNo), dottoPost.postNo) from Image where dottoPost.postNo in(:postNo) group by dottoPost.postNo")
    List<ImgNoPostNoConvert> findTitleToImages(List<Long> postNo);
}
