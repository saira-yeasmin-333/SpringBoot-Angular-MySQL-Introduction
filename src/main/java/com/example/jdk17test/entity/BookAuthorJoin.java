package com.example.jdk17test.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "book_authors")
public class BookAuthorJoin {
    @Id
    @ManyToOne
    private Author author;
    @Id
    @ManyToOne
    private Book book;

}
