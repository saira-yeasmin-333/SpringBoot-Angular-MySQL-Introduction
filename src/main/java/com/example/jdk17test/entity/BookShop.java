package com.example.jdk17test.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private long price;
    private int  yearOfPublish;
    private String shopName;
    private String location;
    private String email;
    private String contactNo;
    @JsonIgnore
    @OneToMany(mappedBy = "bookShop")
    List<Book>books;
}
