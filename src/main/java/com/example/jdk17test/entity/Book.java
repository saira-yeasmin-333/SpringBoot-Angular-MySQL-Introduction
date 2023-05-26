package com.example.jdk17test.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Table(name = "book")
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int book_id;
    private String title;
    private long price;
    private int  year_of_publish;
    private String author;
    private String genre;
    private String publisher;

}
