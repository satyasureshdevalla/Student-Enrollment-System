package edu.ucmo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SectionController {
    @Autowired
    private SectionRepository sectionRepository;

    @GetMapping("/sections")
    public List<Section> getAllSections(){
        return sectionRepository.findAll();
    }

    @PostMapping("/sections")
    public Section createSection(@RequestBody Section section) {
        return sectionRepository.save(section);
    }

    @GetMapping("/sections/{id}")
    public ResponseEntity<Section> getSectionById(@PathVariable String id) {
        Section section = sectionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Section not exist with id :" + id));
        return ResponseEntity.ok(section);
    }

    @PutMapping("/sections/{id}")
    public ResponseEntity<Section> updateSection(@PathVariable String id, @RequestBody Section sectionDetails) {
        Section section = sectionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Section not exist with id :" + id));
        section.setCourse_id(sectionDetails.getCourse_id());
        section.setSection_code(sectionDetails.getSection_code());
        section.setInstructor_id(sectionDetails.getInstructor_id());
        section.setSchedule(sectionDetails.getSchedule());
        section.setRoom_id(sectionDetails.getRoom_id());
        section.setEnrollment_count(sectionDetails.getEnrollment_count());
        section.setMax_capacity(sectionDetails.getMax_capacity());
        section.setTerm(sectionDetails.getTerm());
        Section updatedSection = sectionRepository.save(section);
        return ResponseEntity.ok(updatedSection);
    }

    @DeleteMapping("/sections/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSection(@PathVariable String id) {
        Section section = sectionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Section not exist with id :" + id));
        sectionRepository.delete(section);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
