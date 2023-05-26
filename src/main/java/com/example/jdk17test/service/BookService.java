package com.example.jdk17test.service;

import com.example.jdk17test.entity.Book;
import com.example.jdk17test.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    public Book saveBook(Book book){
        return bookRepository.save(book);
    }
    public List<Book>  saveBooks(List<Book> books){
        return bookRepository.saveAll(books);
    }
    public List<Book>  getBooks(){
        return bookRepository.findAll();
    }

    public Book getBookById(int id){
        return bookRepository.findById(id).get();
    }
    public Book getBookByTitle(String title){
        return bookRepository.findByTitle(title);
    }

    public String deleteBook(int id){
        bookRepository.deleteById(id);
        return "Book with id "+id+" removed\n";
    }

    public Book updateBook(Book book){
        Book prev=bookRepository.findById(book.getBook_id()).orElse(null);
        prev.setAuthor(book.getAuthor());
        prev.setGenre(book.getGenre());
        prev.setTitle(book.getTitle());
        prev.setPrice(book.getPrice());
        prev.setPublisher(book.getPublisher());
        prev.setYear_of_publish(book.getYear_of_publish());
        return bookRepository.save(prev);
    }
}
