package com.dotto.app.repository.policy;

import com.dotto.app.entity.policy.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface PolicyRepository extends JpaRepository<Policy, Long> {

    @Query("select p from Policy p order by p.modifiedAt desc")
    Optional<Policy> findByPolicyNoOrderByModifiedAtDescLimit1();

}
