package com.example.demo.mapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.Chat;

@SpringBootTest
public class ChatTest {
	@Autowired
	ChatMapper chatmapper;
	
	@Test
	public void chatTest()
	{
		//chatmapper.addChat(new Chat("tt","ss","tt"));
		
		//System.out.println(chatmapper.selectAll());
		//System.out.println(chatmapper.selectById(1));
		System.out.println(chatmapper.selectByIdRange(1, 5));
		System.out.println("success");
	}

}