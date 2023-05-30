package com.example.jdk17test.repository;

import com.example.jdk17test.entity.Author;
import com.example.jdk17test.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Long> {
    Book findByTitle(String title);
//    @Query(value = "select b from Book b inner join b.authors a  on a.authorId = :authorId" )
    @Query("select b from Book b ,BookAuthorJoin j where j.author.authorId=:authorId and j.book.bookId=b.bookId")
    List<Book> getBooksByAuthorId(@Param("authorId") Long authorId);
}
