package com.example.jdk17test.controller;

import com.example.jdk17test.entity.Book;
import com.example.jdk17test.service.BookService;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class BookController {
    @Autowired
    private BookService bookService;
    @PostMapping(value = "/addBook")
    public Book addBook(@RequestBody Book book){
        System.out.println(book);
//        Gson gson = new Gson();
//        JsonElement jsonElement = gson.toJsonTree(book);
//        Book pojo = gson.fromJson(jsonElement, Book.class);
        return bookService.saveBook(book);
//        System.out.println("Payload: "+payload);
//        System.out.println("debug author:"+payload.get("author").toString());
//        final DozerBeanMapper mapper = new DozerBeanMapper();
//        final Book book = mapper.map(map, Book.class);
        //System.out.println(pojo);
        //return book;
    }
    @PostMapping("/addBooks")
    public List<Book> addBooks(@RequestBody List<Book> books){
        return bookService.saveBooks(books);
    }

    @GetMapping("/books")
    public List<Book> findAllBooks(){
        return bookService.getBooks();
    }

    @GetMapping("/book/{id}")
    public Book findBookByTd(@PathVariable int id){
        return bookService.getBookById(id);
    }

    @GetMapping("/book_name/{title}")
    public Book findBookByTd(@PathVariable String title){
        return bookService.getBookByTitle(title);
    }
    @PutMapping("/update")
    public Book updateBook(@RequestBody Book book){
        return bookService.updateBook(book);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteBook(@PathVariable int id){
        return bookService.deleteBook(id);
    }
}
