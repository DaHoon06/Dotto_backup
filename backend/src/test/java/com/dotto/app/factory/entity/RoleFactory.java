package com.dotto.app.factory.entity;

import com.dotto.app.entity.member.Role;
import com.dotto.app.entity.member.RoleType;

public class RoleFactory {

    public static Role createRole(){
        return new Role(RoleType.ROlE_NORMAL);
    }
}
