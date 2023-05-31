package com.example.jdk17test.controller;

import com.example.jdk17test.entity.Book;
import com.example.jdk17test.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping( "api/books")
public class BookController {
    @Autowired
    private BookService bookService;
    @PostMapping
    public Book addBook(@RequestBody Book book){return bookService.saveBook(book);}
    @GetMapping
    public List<Book> findAllBooks(){
        return bookService.getBooks();
    }
    @GetMapping(path = "/id/{bookId}")
    public Book findBookByTd(@PathVariable Long bookId){
        return bookService.getBookById(bookId);
    }
    @GetMapping(path = "/title/{title}")
    public Book findBookByTitle(@PathVariable String title){
        return bookService.getBookByTitle(title);
    }
    @PutMapping(path = "/{bookId}")
    public Book updateBook(@PathVariable Long bookId,@RequestBody Book book){return bookService.updateBook(bookId,book);}
    @DeleteMapping(path = "/{bookId}")
    public String deleteBook(@PathVariable Long bookId){
        return bookService.deleteBook(bookId);
    }
    @DeleteMapping
    public String deleteAllBooks(){
        return bookService.deleteAllBooks();
    }
    @PutMapping(path = "/{bookId}/author/{authorID}")
    public Book assignAuthor(@PathVariable Long bookId,@PathVariable Long authorID){return bookService.assignAuthor(bookId,authorID);}
    @GetMapping(path = "/author/{authorId}")
    public List<Book> findBooksByAuthorId(@PathVariable Long authorId) {return bookService.getBooksByAuthorId(authorId);}
    @GetMapping(path = "/bookshop/{shopId}")
    public List<Book> findBooksByBookShopId(@PathVariable Long shopId) {return bookService.getBooksByBookShopId(shopId);}
}
