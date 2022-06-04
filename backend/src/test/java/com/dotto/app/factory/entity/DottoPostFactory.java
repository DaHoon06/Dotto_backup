package com.dotto.app.factory.entity;

import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.post.DottoPost;

public class DottoPostFactory {

    public static DottoPost createDottoPost(Member member){

        return new DottoPost(member, "title","content",1000,900,"N","블랙앤그레이",30);
    }
}
