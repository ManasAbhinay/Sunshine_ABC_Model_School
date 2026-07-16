package com.school.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "school_info")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class SchoolInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String schoolName;
    private String tagline;
    private String address;
    private String city;
    private String state;
    private String pincode;
    private String phone;
    private String whatsapp;
    private String email;
    private String admissionsEmail;
    private String mapEmbedUrl;
    private String googleMapsLink;
    private String establishedYear;
    private String totalStudents;
    private String totalTeachers;
    private String classes;
    private String schoolTimings;

    @Column(columnDefinition = "TEXT")
    private String aboutUs;
}
