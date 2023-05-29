package com.example.jdk17test.mapping;

import com.example.jdk17test.entity.Author;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthorOfBook {
    private Author author;
}
