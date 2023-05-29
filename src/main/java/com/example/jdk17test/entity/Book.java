package com.example.jdk17test.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Book  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;
    @ManyToOne
    private BookShop bookShop;
    private String title;
    private long price;
    private int  yearOfPublish;
    private String genre;
    private String publisher;

}
