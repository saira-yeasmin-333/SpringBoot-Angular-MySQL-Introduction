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

    public BookShop getBookShopById(Long shopID){
        return bookShopRepository.findById(shopID).get();
    }
   public BookShop getShopByName(String shopName){
        return bookShopRepository.findBookShopByShopName(shopName);
   }
    public String deleteBookShop(Long shopId){
        bookShopRepository.deleteById(shopId);
        return "BookShop with id "+shopId+" removed\n";
    }

    public BookShop updateBookShop(BookShop bookShop){
        BookShop prev=bookShopRepository.findById(bookShop.getShopId()).orElse(null);
        prev.setLocation(bookShop.getLocation());
        prev.setEmail(bookShop.getEmail());
        prev.setContactNo(bookShop.getContactNo());
        prev.setPrice(bookShop.getPrice());
        prev.setShopName(bookShop.getShopName());
        prev.setYearOfPublish(bookShop.getYearOfPublish());
        return bookShopRepository.save(prev);
    }
}
