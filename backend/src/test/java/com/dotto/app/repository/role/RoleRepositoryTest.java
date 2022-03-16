package com.dotto.app.repository.role;

import com.dotto.app.entity.member.Role;
import com.dotto.app.exception.RoleNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.DataIntegrityViolationException;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static com.dotto.app.factory.entity.RoleFactory.createRole;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class RoleRepositoryTest {
    @Autowired RoleRepository roleRepository;
    @PersistenceContext
    EntityManager em;

    @Test
    void createAndReadTest(){
        //given
        Role role = createRole();

        //when
        roleRepository.save(role);
        clear();

        //then
        Role foundRole = roleRepository.findById(role.getNo()).orElseThrow(RoleNotFoundException::new);

    }

    @Test
    void deleteTest(){
        //given
        Role role = roleRepository.save(createRole());
        clear();

        //when
        roleRepository.delete(role);
        clear();

        //then
        assertThatThrownBy(() -> roleRepository.findById(role.getNo()).orElseThrow(RoleNotFoundException::new))
                .isInstanceOf(RoleNotFoundException.class);

    }

    @Test
    void uniqueRoleTypeTest(){
        //given
        roleRepository.save(createRole());
        clear();

        //when, then
        assertThatThrownBy(() -> roleRepository.save(createRole()))
                .isInstanceOf(DataIntegrityViolationException.class);
    }


    private void clear(){
        em.flush();
        em.clear();
    }

}