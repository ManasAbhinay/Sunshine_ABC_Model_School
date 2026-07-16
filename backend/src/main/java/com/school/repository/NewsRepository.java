package com.school.repository;
import com.school.model.NewsAnnouncement;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface NewsRepository extends JpaRepository<NewsAnnouncement, Long> {
    List<NewsAnnouncement> findByPublishedTrueOrderByCreatedAtDesc();
    List<NewsAnnouncement> findAllByOrderByCreatedAtDesc();
    List<NewsAnnouncement> findByCategoryAndPublishedTrue(NewsAnnouncement.Category category);
}
