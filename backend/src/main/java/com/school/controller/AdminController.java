package com.school.controller;

import com.school.model.*;
import com.school.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final NewsService newsService;
    private final GalleryService galleryService;
    private final SchoolInfoService schoolInfoService;

    // ---- School Info ----
    @GetMapping("/school-info")
    public ResponseEntity<SchoolInfo> getSchoolInfo() {
        return ResponseEntity.ok(schoolInfoService.getSchoolInfo());
    }

    @PutMapping("/school-info")
    public ResponseEntity<SchoolInfo> updateSchoolInfo(@RequestBody SchoolInfo info) {
        return ResponseEntity.ok(schoolInfoService.updateSchoolInfo(info));
    }

    // ---- News ----
    @GetMapping("/news")
    public ResponseEntity<List<NewsAnnouncement>> getAllNews() {
        return ResponseEntity.ok(newsService.getAllNews());
    }

    @PostMapping("/news")
    public ResponseEntity<NewsAnnouncement> createNews(@RequestBody NewsAnnouncement news) {
        return ResponseEntity.ok(newsService.createNews(news));
    }

    @PutMapping("/news/{id}")
    public ResponseEntity<NewsAnnouncement> updateNews(@PathVariable Long id, @RequestBody NewsAnnouncement news) {
        return ResponseEntity.ok(newsService.updateNews(id, news));
    }

    @DeleteMapping("/news/{id}")
    public ResponseEntity<Void> deleteNews(@PathVariable Long id) {
        newsService.deleteNews(id);
        return ResponseEntity.noContent().build();
    }

    // ---- Gallery ----
    @GetMapping("/gallery")
    public ResponseEntity<List<GalleryItem>> getAllGallery() {
        return ResponseEntity.ok(galleryService.getAllItems());
    }

    @PostMapping("/gallery/upload")
    public ResponseEntity<GalleryItem> uploadMedia(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("mediaType") String mediaType) throws IOException {
        GalleryItem.MediaType type = GalleryItem.MediaType.valueOf(mediaType.toUpperCase());
        return ResponseEntity.ok(galleryService.uploadMedia(file, title, description, type));
    }

    @PutMapping("/gallery/{id}")
    public ResponseEntity<GalleryItem> updateGalleryItem(
            @PathVariable Long id,
            @RequestParam("title") String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("published") boolean published) {
        return ResponseEntity.ok(galleryService.updateItem(id, title, description, published));
    }

    @DeleteMapping("/gallery/{id}")
    public ResponseEntity<Void> deleteGalleryItem(@PathVariable Long id) throws IOException {
        galleryService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}
