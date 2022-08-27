package com.dotto.app.repository.post;

import com.dotto.app.dto.post.DottoPostDto;
import com.dotto.app.dto.post.PostReadCondition;
import com.dotto.app.dto.post.QDottoPostDto;
import com.dotto.app.entity.post.DottoPost;
import com.dotto.app.entity.post.QImage;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.function.Function;

import static com.dotto.app.entity.post.QDottoPost.dottoPost;


@Transactional(readOnly = true)
public class CustomPostRepositoryImpl extends QuerydslRepositorySupport implements  CustomPostRepository{

    private final JPAQueryFactory jpaqueryFactory;


    public CustomPostRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        super(DottoPost.class);
        this.jpaqueryFactory = jpaQueryFactory;
    }


    @Override
    public Page<DottoPostDto> findAllCondition(PostReadCondition cond) {
        Pageable pageable = PageRequest.of(cond.getPage(), cond.getSize());
        Predicate predicate = createPredicate(cond);
        return new PageImpl<>(fetchAll(predicate, pageable), pageable, fetchCount(predicate));
    }

    private List<DottoPostDto> fetchAll(Predicate predicate, Pageable pageable){
        return Objects.requireNonNull(getQuerydsl()).applyPagination(
                pageable,
                jpaqueryFactory
                        .select(new QDottoPostDto(dottoPost.postNo, dottoPost.title, dottoPost.member.id, dottoPost.price, dottoPost.salesPrice, dottoPost.salesYn, dottoPost.salesPct ,dottoPost.tags, QImage.image.originName))
                        .from(dottoPost)
                        .join(dottoPost.member)
                        .leftJoin(QImage.image)
                        .on(dottoPost.postNo.eq(QImage.image.dottoPost.postNo))
                        .where(predicate)
                        .orderBy(dottoPost.postNo.desc()))
                .fetch();
    }

    private Long fetchCount(Predicate predicate){
        return jpaqueryFactory.select(dottoPost.count()).from(dottoPost).where(predicate).fetchOne();
    }
    private Predicate createPredicate(PostReadCondition cond){
        return new BooleanBuilder()
                .and(orConditionByEqMemberNo(cond.getMemberNo()));

    }

    private Predicate orConditionByEqMemberNo(List<Long> memberNo){
        return orConditions(memberNo, dottoPost.member.memberNo::eq);
    }


    private <T> Predicate orConditions(List<T> values, Function<T, BooleanExpression> term){
        return values.stream()
                .map(term)
                .reduce(BooleanExpression::or)
                .orElse(null);
    }

}
