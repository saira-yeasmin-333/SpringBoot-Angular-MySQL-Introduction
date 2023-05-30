package com.example.jdk17test.controller;

import com.example.jdk17test.entity.Author;
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
    public Book addBook(@RequestBody Book book){
        System.out.println(book);
        return bookService.saveBook(book);
    }
//    @PostMapping("/book/addAll")
//    public List<Book> addBooks(@RequestBody List<Book> books){
//        return bookService.saveBooks(books);
//    }

    @GetMapping
    public List<Book> findAllBooks(){
        return bookService.getBooks();
    }

    @GetMapping(path = "/{bookId}")
    public Book findBookByTd(@PathVariable Long bookId){
        return bookService.getBookById(bookId);
    }

    @GetMapping(path = "/{title}")
    public Book findBookByTitle(@PathVariable String title){
        return bookService.getBookByTitle(title);
    }
    @PutMapping(path = "/{bookId}")
    public Book updateBook(@PathVariable Long bookId,@RequestBody Book book){
        return bookService.updateBook(bookId,book);
    }
    @DeleteMapping(path = "/{bookId}")
    public String deleteBook(@PathVariable Long bookId){
        return bookService.deleteBook(bookId);
    }
    @DeleteMapping
    public String deleteAllBooks(){
        return bookService.deleteAllBooks();
    }

    @PutMapping(path = "/{bookId}/author/{authorID}")
    public Book assignAuthor(@PathVariable Long bookId,@PathVariable Long authorID){
        return bookService.assignAuthor(bookId,authorID);
    }
    @GetMapping(path = "/getAuthors/{authorId}")
    public List<Book> findAuthorsByTd(@PathVariable Long authorId) {
        return bookService.getBooksByAuthorId(authorId);
    }
}
