package com.example.jdk17test.service;

import com.example.jdk17test.entity.Book;
import com.example.jdk17test.entity.BookShop;
import com.example.jdk17test.repository.BookRepository;
import com.example.jdk17test.repository.BookShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookShopService {
    @Autowired
    private BookShopRepository bookShopRepository;
    public BookShop saveShop(BookShop bookShop){
        return bookShopRepository.save(bookShop);
    }
    public List<BookShop> saveBookShops(List<BookShop> bookShops){
        return bookShopRepository.saveAll(bookShops);
    }
    public List<BookShop>  getBookShops(){
        return bookShopRepository.findAll();
    }

    public BookShop getBookShopById(int id){
        return bookShopRepository.findById(id).get();
    }
    public BookShop getBookShopByName(String name){
        return bookShopRepository.findByTitle(name);
    }

    public String deleteBookShop(int id){
        bookShopRepository.deleteById(id);
        return "BookShop with id "+id+" removed\n";
    }

    public BookShop updateBookShop(BookShop bookShop){
        BookShop prev=bookShopRepository.findById(bookShop.getShop_no()).orElse(null);
        prev.setLocation(bookShop.getLocation());
        prev.setEmail(bookShop.getEmail());
        prev.setContact_no(bookShop.getContact_no());
        prev.setPrice(bookShop.getPrice());
        prev.setShop_name(bookShop.getShop_name());
        prev.setYear_of_publish(bookShop.getYear_of_publish());
        return bookShopRepository.save(prev);
    }
}
