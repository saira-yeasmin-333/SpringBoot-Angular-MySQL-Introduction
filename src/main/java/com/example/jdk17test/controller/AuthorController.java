package com.example.jdk17test.controller;

import com.example.jdk17test.entity.Author;
import com.example.jdk17test.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class AuthorController {
    @Autowired
    private AuthorService authorService;
    @PostMapping(value = "/author/add")
    public Author addAuthor(@RequestBody Author author){
        return authorService.saveAuthor(author);
    }
    @PostMapping("/author/addAll")
    public List<Author> addAuthors(@RequestBody List<Author> authors){
        return authorService.saveAuthors(authors);
    }
    @GetMapping("/author/getAll")
    public List<Author> findAllAuthors(){
        return authorService.getAllAuthors();
    }
    @GetMapping("/author/getById/{authorId}")
    public Author findAuthorByTd(@PathVariable Long authorId){
        return authorService.getAuthorById(authorId);
    }
    @PutMapping("author/update/{authorId}")
    public Author updateAuthor(@RequestBody Author author,@PathVariable Long authorId){
        return authorService.updateAuthor(author,authorId);
    }
    @DeleteMapping("author/delete/{authorId}")
    public String deleteAuthor(@PathVariable Long authorId){
        return authorService.deleteAuthor(authorId);
    }
    @GetMapping(path = "/author/book/{bookId}")
    public List<Author> findAuthorsByBookTd(@PathVariable Long bookId) {
        return authorService.getAuthorsByBookId(bookId);
    }
}
