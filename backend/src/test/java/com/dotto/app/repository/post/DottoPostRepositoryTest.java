package com.dotto.app.repository.post;

import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.post.DottoPost;
import com.dotto.app.exception.PostNotFoundException;
import com.dotto.app.repository.member.MemberRepository;
import com.dotto.app.repository.role.RoleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

import static com.dotto.app.factory.entity.DottoPostFactory.createDottoPost;
import static com.dotto.app.factory.entity.MemberFactory.createMember;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@DataJpaTest
class DottoPostRepositoryTest {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    DottoPostRepository dottoPostRepository;

    @PersistenceContext
    EntityManager em;

    Member member;

    @BeforeEach
    void beforeEach(){
        member = memberRepository.save(createMember());
    }


    @Test
    void  createAndReadTest(){
        //given
        DottoPost post = dottoPostRepository.save(createDottoPost(member));
        clear();

        //when
       DottoPost foundPost = dottoPostRepository.findById(post.getPostNo()).orElseThrow(PostNotFoundException::new);

       //then
        assertThat(post.getPostNo()).isEqualTo(foundPost.getPostNo());
        assertThat(post.getTitle()).isEqualTo(foundPost.getTitle());
    }

    void clear(){
        em.flush();
        em.clear();
    }

    @Test
    void deleteTest (){
        //given
        DottoPost post = dottoPostRepository.save(createDottoPost(member));
        clear();

        //when
        dottoPostRepository.deleteById(post.getPostNo());
        clear();
        //then
        assertThatThrownBy(() -> dottoPostRepository.findById(post.getPostNo()).orElseThrow(PostNotFoundException::new)).isInstanceOf(PostNotFoundException.class);
    }

    @Test
    void deletedCascadeByMemberTest(){
        //given
        dottoPostRepository.save(createDottoPost(member));
        clear();

        //when
        memberRepository.deleteById(member.getMemberNo());
        clear();

        //then
        List<DottoPost> result = dottoPostRepository.findAll();
        assertThat(result.size()).isZero();
    }

    @Test
    void findByIdWithMember(){
        //given
        DottoPost post = dottoPostRepository.save(createDottoPost(member));

        //when
        DottoPost foundPost = dottoPostRepository.findByIdWithMember(post.getPostNo()).orElseThrow(PostNotFoundException::new);

        //then
        Member foundMember = foundPost.getMember();
        assertThat(foundMember.getId()).isEqualTo(member.getId());
    }
}
