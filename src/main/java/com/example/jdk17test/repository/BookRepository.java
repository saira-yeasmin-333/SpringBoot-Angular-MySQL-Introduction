package com.example.jdk17test.repository;

import com.example.jdk17test.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {
    Book findByTitle(String title);
}
