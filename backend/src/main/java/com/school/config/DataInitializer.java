package com.school.config;

import com.school.model.Admin;
import com.school.model.SchoolInfo;
import com.school.repository.AdminRepository;
import com.school.repository.SchoolInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    private final AdminRepository adminRepository;
    private final SchoolInfoRepository schoolInfoRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (!adminRepository.existsByUsername("admin")) {
            Admin admin = Admin.builder()
                    .username("admin")
                    .password(passwordEncoder.encode("Admin@2025"))
                    .fullName("School Administrator")
                    .email("admin@sunshineabcschool.edu.in")
                    .build();
            adminRepository.save(admin);
            System.out.println("✅ Default admin created — username: admin | password: Admin@2025");
        }

        if (schoolInfoRepository.findTopByOrderByIdAsc() == null) {
            SchoolInfo info = SchoolInfo.builder()
                    .schoolName("Sunshine ABC Model School")
                    .tagline("Nurturing Young Minds, Building Bright Futures")
                    .address("Hyderabad, Telangana")
                    .city("Hyderabad")
                    .state("Telangana")
                    .pincode("500001")
                    .phone("+91 63002 08950")
                    .whatsapp("+91 63002 08950")
                    .email("info@sunshineabcschool.edu.in")
                    .admissionsEmail("admissions@sunshineabcschool.edu.in")
                    .googleMapsLink("https://maps.app.goo.gl/iHXsgDiE6zmhzDnS9")
                    .mapEmbedUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.5583667!3d17.4750253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b83bae81e79%3A0x3000b4dd6500ac27!2sSUNSHINE%20ABC%20MODEL%20SCHOOL!5e0!3m2!1sen!2sin!4v1700000000000")
                    .establishedYear("2005")
                    .totalStudents("1200+")
                    .totalTeachers("80+")
                    .classes("LKG to 12th")
                    .schoolTimings("Monday – Saturday, 8:00 AM – 4:30 PM")
                    .aboutUs("We believe every child is gifted. Sunshine ABC Model School provides a safe, joyful, and inspiring environment where curiosity leads to success. Located in Hyderabad, Telangana, we are committed to academic excellence, cultural values, and holistic development.")
                    .build();
            schoolInfoRepository.save(info);
            System.out.println("✅ School info initialized for Sunshine ABC Model School");
        }
    }
}
