package com.school.service;

import com.school.model.SchoolInfo;
import com.school.repository.SchoolInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SchoolInfoService {
    private final SchoolInfoRepository schoolInfoRepository;

    public SchoolInfo getSchoolInfo() {
        return schoolInfoRepository.findTopByOrderByIdAsc();
    }

    public SchoolInfo updateSchoolInfo(SchoolInfo updated) {
        SchoolInfo existing = schoolInfoRepository.findTopByOrderByIdAsc();
        if (existing == null) return schoolInfoRepository.save(updated);
        updated.setId(existing.getId());
        return schoolInfoRepository.save(updated);
    }
}
