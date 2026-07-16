package com.school.controller;

import com.school.model.*;
import com.school.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/public")
@RequiredArgsConstructor
public class PublicController {
    private final NewsService newsService;
    private final GalleryService galleryService;
    private final SchoolInfoService schoolInfoService;

    @GetMapping("/school-info")
    public ResponseEntity<SchoolInfo> getSchoolInfo() {
        return ResponseEntity.ok(schoolInfoService.getSchoolInfo());
    }

    @GetMapping("/news")
    public ResponseEntity<List<NewsAnnouncement>> getNews() {
        return ResponseEntity.ok(newsService.getPublishedNews());
    }

    @GetMapping("/gallery")
    public ResponseEntity<List<GalleryItem>> getGallery() {
        return ResponseEntity.ok(galleryService.getPublishedItems());
    }

    @GetMapping("/gallery/photos")
    public ResponseEntity<List<GalleryItem>> getPhotos() {
        return ResponseEntity.ok(galleryService.getAllItems().stream()
                .filter(i -> i.isPublished() && i.getMediaType() == GalleryItem.MediaType.PHOTO)
                .toList());
    }

    @GetMapping("/gallery/videos")
    public ResponseEntity<List<GalleryItem>> getVideos() {
        return ResponseEntity.ok(galleryService.getAllItems().stream()
                .filter(i -> i.isPublished() && i.getMediaType() == GalleryItem.MediaType.VIDEO)
                .toList());
    }
}
