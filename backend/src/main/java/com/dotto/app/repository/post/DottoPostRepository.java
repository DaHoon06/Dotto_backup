package com.dotto.app.repository.post;

import com.dotto.app.dto.search.DottoPostList;
import com.dotto.app.entity.post.DottoPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DottoPostRepository extends JpaRepository<DottoPost,Long>, CustomPostRepository {


    @Query("SELECT p from DottoPost p JOIN fetch p.member WHERE p.postNo = :id ")
    Optional<DottoPost> findByIdWithMember(Long id);

    @Query("SELECT p from DottoPost p JOIN fetch p.member WHERE p.postNo = :id AND p.deletedYn='N' ")
    Optional<DottoPost> findByIdWithMemberAndDeletedN(Long id);

    @Query("SELECT p from DottoPost p JOIN fetch p.member WHERE p.postNo = :id AND p.deletedYn='Y' ")
    Optional<DottoPost> findByIdWithMemberAndDeletedY(Long id);

    @Modifying(clearAutomatically = true)
    @Query("Update DottoPost p Set p.deletedYn ='Y' WHERE p.postNo = :postNo")
    void deleted(Long postNo);

    @Query("select new com.dotto.app.dto.search.DottoPostList(p.title, p.member.nickname, p.price, p.salesPrice, p.salesYn, p.salesPct, p.tags, i.originName) from DottoPost p join Image i on p.postNo = i.dottoPost.postNo and p.title like concat('%',:title,'%') ")
    List<DottoPostList> findBySearchTitleToDottoPosts(String title);
}
