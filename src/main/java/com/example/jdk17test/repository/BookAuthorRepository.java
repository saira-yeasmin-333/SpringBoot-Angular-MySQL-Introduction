package com.example.jdk17test.repository;

import com.example.jdk17test.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public class BookAuthorRepository extends JpaRepository<Book,Long> {
}
