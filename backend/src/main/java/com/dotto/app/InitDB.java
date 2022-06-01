package com.dotto.app;

import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.member.Role;
import com.dotto.app.entity.member.RoleType;
import com.dotto.app.exception.RoleNotFoundException;
import com.dotto.app.repository.member.MemberRepository;
import com.dotto.app.repository.role.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
@Slf4j
@Profile("local")
public class InitDB {

    private final RoleRepository roleRepository;
    private final MemberRepository memberRepository;

    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void initDB(){
        initRole();
        initMember();
        log.info("initialize database");
    }

    private void initRole() {
        roleRepository.saveAll(
                List.of(RoleType.values()).stream().map(roleType -> new Role(roleType)).collect(Collectors.toList())
        );
    }

    private void initMember(){
        memberRepository.saveAll(
                List.of(new Member("member1", "1234", "nickname", "male", "01012345678"
                                , List.of(roleRepository.findByRoleType(RoleType.ROlE_NORMAL).orElseThrow(RoleNotFoundException::new))),
                        new Member("member2", "1234", "nickname2", "female", "01012345678"
                                , List.of(roleRepository.findByRoleType(RoleType.ROLE_ARTIST).orElseThrow(RoleNotFoundException::new))
                        ),
                        new Member("member3", "1234", "nickname3", "none", "01012345678"
                                ,List.of(roleRepository.findByRoleType(RoleType.ROLE_ADMIN).orElseThrow(RoleNotFoundException::new))
                        )
                )
        );
    };
}
