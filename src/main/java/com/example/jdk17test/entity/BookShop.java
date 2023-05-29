package com.example.jdk17test.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class BookShop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long shopId;
    @OneToMany
    private List<Book>books;
    private long price;
    private int  yearOfPublish;
    private String shopName;
    private String location;
    private String email;
    private String contactNo;
}
