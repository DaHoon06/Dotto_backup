package com.dotto.app.factory.entity;

import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.member.Role;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static java.util.Collections.emptyList;

public class MemberFactory {

    public static Member createMember(){
        return new Member("email@email.com","qwe123!","nickname","male","01012345678", emptyList(),"서울특별시 강남구","강남동");
    }

    public static Member createMember(String id, String password, String nickname, String gender, String phone, String addr, String subAddr, String intro){
        return new Member(id, password, nickname, gender, phone, emptyList(), addr, subAddr );
    }

    public static Member createMemberWithRoles(List<Role> roles){
        return new Member("email@email.com","qwe123!","nickname","male","01012345678", roles,"서울특별시 강남구","강남동");
    }

    public static Member createMemberWithNo(Long no){
        Member member = new Member("email@email.com","qwe123!","nickname","male","01012345678", emptyList(),"서울특별시 강남구","강남동");
        ReflectionTestUtils.setField(member, "no",no);
        return member;
    }
}
