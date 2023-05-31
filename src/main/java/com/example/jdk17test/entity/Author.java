package com.example.jdk17test.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long authorId;
    private String authorName;
    @JsonIgnore
    @ManyToMany(cascade = CascadeType.REMOVE,mappedBy = "authors")
    private List<Book>books;
}
