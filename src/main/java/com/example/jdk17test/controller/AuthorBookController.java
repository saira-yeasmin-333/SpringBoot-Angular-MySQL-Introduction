package com.example.jdk17test.controller;

import com.example.jdk17test.entity.Author;
import com.example.jdk17test.mapping.AuthorOfBook;
import com.example.jdk17test.repository.AuthorRepository;
import com.example.jdk17test.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthorBookController {
    @Autowired
    private AuthorRepository authorRepository;
    @Autowired
    private BookRepository bookRepository;
    @PostMapping("/author/writeBooks")
    public Author writeBooks(@RequestBody AuthorOfBook authorOfBook){
        return authorRepository.save(authorOfBook.getAuthor());
    }
    @GetMapping("/findWriters")
    public List<Author> findAllWriters(){
        return authorRepository.findAll();
    }
}
