package com.example.jdk17test.repository;

import com.example.jdk17test.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Long> {
    Book findByTitle(String title);
    @Query(value = "select b from Book b inner join b.authors a  where a.authorId =:authorId" )
    List<Book> getBooksByAuthorId(@Param("authorId") Long authorId);
    @Query(value = "select b from Book b inner join b.bookShop a  where a.shopId =:shopId" )
    List<Book> getBooksByShopId(Long shopId);
}
