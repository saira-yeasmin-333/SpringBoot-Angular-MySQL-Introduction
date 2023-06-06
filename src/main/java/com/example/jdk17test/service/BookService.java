package com.example.jdk17test.service;

import com.example.jdk17test.entity.Author;
import com.example.jdk17test.entity.Book;
import com.example.jdk17test.entity.BookShop;
import com.example.jdk17test.repository.AuthorRepository;
import com.example.jdk17test.repository.BookRepository;
import com.example.jdk17test.repository.BookShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private AuthorRepository authorRepository;
    @Autowired
    BookShopRepository bookShopRepository;
    public Book saveBook(Book book){
        return bookRepository.save(book);
    }
    public List<Book>  saveBooks(List<Book> books){
        return bookRepository.saveAll(books);
    }
    public List<Book>  getBooks(){
        return bookRepository.findAll();
    }
    public Book getBookById(Long bookId){
        return bookRepository.findById(bookId).get();
    }
    public List<Book> getBookByTitle(String title){
        return bookRepository.findByTitle(title);
    }
    public ResponseEntity<Map<String, Boolean>> deleteBook(Long bookId){
        bookRepository.deleteById(bookId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    public ResponseEntity<Map<String, Boolean>> deleteAllBooks(){
        bookRepository.deleteAll();
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
//    public String deleteBook(Long bookId){
//        bookRepository.deleteById(bookId);
//        return "Book with id "+bookId+" removed\n";
//    }
//    public String deleteAllBooks(){
//        bookRepository.deleteAll();
//        return "All books removed\n";
//    }
    public Book updateBook(Long bookId, Book book){
        Book prev=bookRepository.findById(bookId).orElse(null);
        prev.setGenre(book.getGenre());
        prev.setTitle(book.getTitle());
        prev.setPrice(book.getPrice());
        prev.setPublisher(book.getPublisher());
        prev.setYearOfPublish(book.getYearOfPublish());
        prev.setBookShop(book.getBookShop());
        return bookRepository.save(prev);
    }
    public Book assignAuthor(Long bookId, Long authorID) {
        Book book=bookRepository.findById(bookId).get();
        Author author=authorRepository.findById(authorID).get();
        Set<Author> authors=book.getAuthors();
        Set<Book>books=author.getBooks();
        books.add(book);
        author.setBooks(books);
        authors.add(author);
        book.setAuthors(authors);
        return bookRepository.save(book);
    }
    public List<Book>getBooksByAuthorId(Long authorId){
        return bookRepository.getBooksByAuthorId(authorId);
    }
    public List<Book> getBooksByBookShopId(Long shopId) {return bookRepository.getBooksByShopId(shopId);}
    public BookShop getShopId(Long bookId){
        return bookRepository.getShopByBookId(bookId);
    }
}
