package com.school.service;

import com.school.model.GalleryItem;
import com.school.repository.GalleryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GalleryService {
    private final GalleryRepository galleryRepository;

    @Value("${app.upload.dir}")
    private String uploadDir;

    public List<GalleryItem> getPublishedItems() {
        return galleryRepository.findByPublishedTrueOrderByCreatedAtDesc();
    }

    public List<GalleryItem> getAllItems() {
        return galleryRepository.findAllByOrderByCreatedAtDesc();
    }

    public GalleryItem uploadMedia(MultipartFile file, String title, String description, GalleryItem.MediaType mediaType) throws IOException {
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) Files.createDirectories(uploadPath);

        String originalName = file.getOriginalFilename();
        String extension = originalName != null ? originalName.substring(originalName.lastIndexOf('.')) : "";
        String fileName = UUID.randomUUID() + extension;
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        GalleryItem item = GalleryItem.builder()
                .title(title)
                .description(description)
                .fileName(fileName)
                .fileUrl("/uploads/" + fileName)
                .mediaType(mediaType)
                .published(true)
                .build();
        return galleryRepository.save(item);
    }

    public GalleryItem updateItem(Long id, String title, String description, boolean published) {
        GalleryItem item = galleryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Gallery item not found: " + id));
        item.setTitle(title);
        item.setDescription(description);
        item.setPublished(published);
        return galleryRepository.save(item);
    }

    public void deleteItem(Long id) throws IOException {
        GalleryItem item = galleryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Gallery item not found: " + id));
        Path filePath = Paths.get(uploadDir, item.getFileName());
        Files.deleteIfExists(filePath);
        galleryRepository.deleteById(id);
    }
}
