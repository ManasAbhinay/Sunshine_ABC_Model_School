package com.school.service;

import com.school.model.NewsAnnouncement;
import com.school.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsService {
    private final NewsRepository newsRepository;

    public List<NewsAnnouncement> getPublishedNews() {
        return newsRepository.findByPublishedTrueOrderByCreatedAtDesc();
    }

    public List<NewsAnnouncement> getAllNews() {
        return newsRepository.findAllByOrderByCreatedAtDesc();
    }

    public NewsAnnouncement createNews(NewsAnnouncement news) {
        return newsRepository.save(news);
    }

    public NewsAnnouncement updateNews(Long id, NewsAnnouncement updated) {
        NewsAnnouncement existing = newsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("News not found: " + id));
        existing.setTitle(updated.getTitle());
        existing.setContent(updated.getContent());
        existing.setCategory(updated.getCategory());
        existing.setPublished(updated.isPublished());
        return newsRepository.save(existing);
    }

    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }
}
