package com.dotto.app.repository.post;

import com.dotto.app.dto.post.DottoPostDto;
import com.dotto.app.dto.post.PostReadCondition;
import org.springframework.data.domain.Page;

public interface CustomPostRepository {

    Page<DottoPostDto> findAllCondition(PostReadCondition cond);
}
