package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.demo.model.Chat;

@Mapper
public interface ChatMapper {//dao
	
	@Insert("insert into chat(name,subject,content) values(#{name},#{subject},#{content})")
	void addChat(Chat c);
	
	@Select("select * from Chat")
	List<Chat> selectAll();
	
	@Select("select * from chat where id=#{id}")
	List<Chat> selectById(int id);
	
	@Select("select * from chat where id>=#{start} and id<=#{end}")
	List<Chat> selectByIdRange(int start,int end);
	
	
	@Update("update chat set name=#{name},subject=#{subject},content=#{content} where id=#{id}")
	void update(Chat c);
	
	@Delete("delete from chat where id=#{id}")
	void deleteById(int id);
	
	

}