package com.dotto.app.repository.post;

import com.dotto.app.entity.post.DottoPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface DottoPostRepository extends JpaRepository<DottoPost,Long> {


    @Query("SELECT p from DottoPost p JOIN fetch p.member WHERE p.postNo = :id")
    Optional<DottoPost> findByIdWithMember(Long id);
}
