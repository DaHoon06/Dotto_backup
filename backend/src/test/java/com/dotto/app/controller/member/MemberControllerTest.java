package com.dotto.app.controller.member;

import com.dotto.app.service.member.MemberService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@ExtendWith(MockitoExtension.class)
class MemberControllerTest {


    @InjectMocks MemberController memberController;
    @Mock
    MemberService memberService;
    MockMvc mockMvc;

    @BeforeEach
    void beforeEach(){
        mockMvc = MockMvcBuilders.standaloneSetup(memberController).build();

    }

    @Test
    void readTest() throws Exception {
        //given
        Long no = 1L;

        //when, then
        mockMvc.perform(
                get("/api/members/{id}", no)
        )
                .andExpect(status().isOk());

        verify(memberService).read(no);
    }

    @Test
    void deleteTest() throws Exception{
        //given
        Long no = 1L;

        //when, then
        mockMvc.perform(
                delete("/api/members/{id}",no)
        )
                .andExpect(status().isOk());

        verify(memberService).delete(no);
    }
}