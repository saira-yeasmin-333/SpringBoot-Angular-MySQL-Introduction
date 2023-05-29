package com.example.jdk17test.controller;

import com.example.jdk17test.entity.BookShop;
import com.example.jdk17test.service.BookShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class BookShopController {
    @Autowired
    private BookShopService bookShopService;
    @PostMapping(value = "/shop/add")
    public BookShop addBookShop(@RequestBody BookShop bookShop){
        return bookShopService.saveShop(bookShop);
    }
    @PostMapping("/shop/addAll")
    public List<BookShop> addBookShops(@RequestBody List<BookShop> bookShops){
        return bookShopService.saveBookShops(bookShops);
    }

    @GetMapping("/shop/getAllShops")
    public List<BookShop> findAllBookShops(){
        return bookShopService.getBookShops();
    }

    @GetMapping("/shop/findById/{shopId}")
    public BookShop findBookShopByTd(@PathVariable Long shopId){
        return bookShopService.getBookShopById(shopId);
    }

    @GetMapping("/shop/findByName/{name}")
    public BookShop findBookShopByName(@PathVariable String name){
        return bookShopService.getShopByName(name);
    }
    @PutMapping("/shop/update")
    public BookShop updateBookShop(@RequestBody BookShop bookShop){
        return bookShopService.updateBookShop(bookShop);
    }
    @DeleteMapping("/shop/delete/{shopId}")
    public String deleteBookShop(@PathVariable Long shopId){
        return bookShopService.deleteBookShop(shopId);
    }
}
