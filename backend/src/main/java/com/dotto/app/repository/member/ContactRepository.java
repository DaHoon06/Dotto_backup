package com.dotto.app.repository.member;

import com.dotto.app.entity.member.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
