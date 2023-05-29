package com.example.jdk17test.controller;

import com.example.jdk17test.entity.Book;
import com.example.jdk17test.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
public class BookController {
    @Autowired
    private BookService bookService;
    @PostMapping(value = "/book/add")
    public Book addBook(@RequestBody Book book){
        System.out.println(book);
        return bookService.saveBook(book);
    }
    @PostMapping("/book/addAll")
    public List<Book> addBooks(@RequestBody List<Book> books){
        return bookService.saveBooks(books);
    }

    @GetMapping("/book/getAll")
    public List<Book> findAllBooks(){
        return bookService.getBooks();
    }

    @GetMapping("/book/getById/{bookId}")
    public Book findBookByTd(@PathVariable Long bookId){
        return bookService.getBookById(bookId);
    }

    @GetMapping("/book/getByName/{title}")
    public Book findBookByTitle(@PathVariable String title){
        return bookService.getBookByTitle(title);
    }
    @PutMapping("book/update")
    public Book updateBook(@RequestBody Book book){
        return bookService.updateBook(book);
    }
    @DeleteMapping("book/delete/{bookId}")
    public String deleteBook(@PathVariable Long bookId){
        return bookService.deleteBook(bookId);
    }
}
