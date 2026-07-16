package com.school.repository;
import com.school.model.SchoolInfo;
import org.springframework.data.jpa.repository.JpaRepository;
public interface SchoolInfoRepository extends JpaRepository<SchoolInfo, Long> {
    SchoolInfo findTopByOrderByIdAsc();
}
