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
public class EnrollController {
    @Autowired
    private EnrollRepository enrollRepository;

    @GetMapping("/enrolls")
    public List<Enroll> getAllEnrolls(){
        return enrollRepository.findAll();
    }

    @PostMapping("/enrolls")
    public Enroll createEnroll(@RequestBody Enroll enroll) {
        return enrollRepository.save(enroll);
    }

    @GetMapping("/enrolls/{id}")
    public ResponseEntity<Enroll> getEnrollById(@PathVariable String id) {
        Enroll enroll = enrollRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Enroll not exist with id :" + id));
        return ResponseEntity.ok(enroll);
    }

    @PutMapping("/enrolls/{id}")
    public ResponseEntity<Enroll> updateEnroll(@PathVariable String id, @RequestBody Enroll enrollDetails) {
        Enroll enroll = enrollRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Enroll not exist with id :" + id));
        enroll.setStudent_id(enrollDetails.getStudent_id());
        enroll.setSection_id(enrollDetails.getSection_id());
        enroll.setGrade(enrollDetails.getGrade());
        Enroll updatedEnroll = enrollRepository.save(enroll);
        return ResponseEntity.ok(updatedEnroll);
    }

    @DeleteMapping("/enrolls/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEnroll(@PathVariable String id) {
        Enroll enroll = enrollRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Enroll not exist with id :" + id));
        enrollRepository.delete(enroll);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
