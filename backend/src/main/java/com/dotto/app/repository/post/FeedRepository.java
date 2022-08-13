package com.dotto.app.repository.post;

import com.dotto.app.entity.post.Feed;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedRepository extends JpaRepository<Feed, Long> {
}
