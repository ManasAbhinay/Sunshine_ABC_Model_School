package com.school.repository;
import com.school.model.GalleryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface GalleryRepository extends JpaRepository<GalleryItem, Long> {
    List<GalleryItem> findByPublishedTrueOrderByCreatedAtDesc();
    List<GalleryItem> findAllByOrderByCreatedAtDesc();
    List<GalleryItem> findByMediaTypeAndPublishedTrue(GalleryItem.MediaType mediaType);
}
