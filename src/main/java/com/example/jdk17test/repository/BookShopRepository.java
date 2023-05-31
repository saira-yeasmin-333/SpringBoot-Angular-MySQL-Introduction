package com.example.jdk17test.repository;

import com.example.jdk17test.entity.BookShop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookShopRepository extends JpaRepository<BookShop,Long> {
    List<BookShop> findBookShopByShopName(String shopName);
}
