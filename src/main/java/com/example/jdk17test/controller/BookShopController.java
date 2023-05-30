package com.example.jdk17test.controller;

import com.example.jdk17test.entity.BookShop;
import com.example.jdk17test.service.BookShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping( "/api/bookshops")
public class BookShopController {
    @Autowired
    private BookShopService bookShopService;
    @PostMapping
    public BookShop addBookShop(@RequestBody BookShop bookShop){
        return bookShopService.saveShop(bookShop);
    }
//    @PostMapping("/shop/addAll")
//    public List<BookShop> addBookShops(@RequestBody List<BookShop> bookShops){
//        return bookShopService.saveBookShops(bookShops);
//    }

    @GetMapping
    public List<BookShop> findAllBookShops(){
        return bookShopService.getBookShops();
    }

    @GetMapping(path = "/{shopId}")
    public BookShop findBookShopByTd(@PathVariable Long shopId){
        return bookShopService.getBookShopById(shopId);
    }

    @GetMapping(path = "/{name}")
    public BookShop findBookShopByName(@PathVariable String name){
        return bookShopService.getShopByName(name);
    }
    @PutMapping(path = "/{shopId}")
    public BookShop updateBookShop(@PathVariable Long shopId,@RequestBody BookShop bookShop){
        return bookShopService.updateBookShop(shopId,bookShop);
    }
    @DeleteMapping(path = "/{shopId}")
    public String deleteBookShop(@PathVariable Long shopId){
        return bookShopService.deleteBookShop(shopId);
    }
    @DeleteMapping()
    public String deleteAllBookShops(){
        return bookShopService.deleteAllBookShops();
    }
}
