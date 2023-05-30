package com.example.jdk17test.service;

import com.example.jdk17test.entity.Author;
import com.example.jdk17test.entity.Book;
import com.example.jdk17test.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AuthorService {
    @Autowired
    private AuthorRepository authorRepository;
    public Author saveAuthor(Author author){
        return authorRepository.save(author);
    }
    public List<Author> saveAuthors(List<Author> authors){
        return authorRepository.saveAll(authors);
    }
    public List<Author>  getAllAuthors(){
        return authorRepository.findAll();
    }
    public Author getAuthorById(Long authorId){
        return authorRepository.findById(authorId).get();
    }
    public String deleteAuthor(Long authorId){
        authorRepository.deleteById(authorId);
        return "Author with id "+authorId+" removed\n";
    }
    public Author updateAuthor(Author author){
        Author prev=authorRepository.findById(author.getAuthorId()).orElse(null);
        prev.setAuthorName(author.getAuthorName());
        prev.setBooks(author.getBooks());
        return authorRepository.save(prev);
    }

    public List<Book>getBooks(Long authorId){
        Author author=authorRepository.findById(authorId).get();
        return author.getBooks();
    }
}
