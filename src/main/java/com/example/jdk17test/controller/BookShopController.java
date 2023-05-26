package com.example.jdk17test.controller;

import com.example.jdk17test.entity.Book;
import com.example.jdk17test.entity.BookShop;
import com.example.jdk17test.service.BookService;
import com.example.jdk17test.service.BookShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class BookShopController {
    @Autowired
    private BookShopService bookShopService;
    @PostMapping(value = "/addBookShop")
    public BookShop addBookShop(@RequestBody BookShop bookShop){
        return bookShopService.saveShop(bookShop);
    }
    @PostMapping("/addBookShops")
    public List<BookShop> addBookShops(@RequestBody List<BookShop> bookShops){
        return bookShopService.saveBookShops(bookShops);
    }

    @GetMapping("/bookShops")
    public List<BookShop> findAllBookShops(){
        return bookShopService.getBookShops();
    }

    @GetMapping("/bookShop/{id}")
    public BookShop findBookShopByTd(@PathVariable int id){
        return bookShopService.getBookShopById(id);
    }

    @GetMapping("/bookshop_name/{title}")
    public BookShop findBookShopByName(@PathVariable String name){
        return bookShopService.getBookShopByName(name);
    }
    @PutMapping("/updateShop")
    public BookShop updateBookShop(@RequestBody BookShop bookShop){
        return bookShopService.updateBookShop(bookShop);
    }
    @DeleteMapping("/deleteShop/{id}")
    public String deleteBookShop(@PathVariable int id){
        return bookShopService.deleteBookShop(id);
    }
}
