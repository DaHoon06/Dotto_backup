package com.dotto.app.repository.role;

import com.dotto.app.entity.member.Role;
import com.dotto.app.entity.member.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role,Long> {
    Optional<Role> findByRoleType(RoleType roleType);
}
