package com.example.jdk17test.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Table(name = "book")
public class BookShop {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int shop_no;
    private long price;
    private int  year_of_publish;
    private String shop_name;
    private String location;
    private String email;
    private String contact_no;
}
