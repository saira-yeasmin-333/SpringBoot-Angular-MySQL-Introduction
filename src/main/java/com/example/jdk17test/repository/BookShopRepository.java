package com.example.jdk17test.repository;

import com.example.jdk17test.entity.Book;
import com.example.jdk17test.entity.BookShop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookShopRepository extends JpaRepository<BookShop,Integer> {
    BookShop findByTitle(String name);
}
