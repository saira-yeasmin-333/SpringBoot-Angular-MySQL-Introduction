package com.example.jdk17test.repository;

import com.example.jdk17test.entity.Author;
import com.example.jdk17test.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Long> {
    Book findByTitle(String title);
    @Query(value = "select b from Book b inner join Author a  on a.authorId =:authorId" )
    List<Book> getBooksByAuthorId(@Param("authorId") Long authorId);
}
