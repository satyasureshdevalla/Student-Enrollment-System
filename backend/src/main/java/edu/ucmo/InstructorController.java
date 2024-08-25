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
public class InstructorController {
    @Autowired
    private InstructorRepository instructorRepository;

    @GetMapping("/instructors")
    public List<Instructor> getAllInstructors(){
        return instructorRepository.findAll();
    }

    @PostMapping("/instructors")
    public Instructor createInstructor(@RequestBody Instructor instructor) {
        return instructorRepository.save(instructor);
    }

    @GetMapping("/instructors/{id}")
    public ResponseEntity<Instructor> getInstructorById(@PathVariable String id) {
        Instructor instructor = instructorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Instructor not exist with id :" + id));
        return ResponseEntity.ok(instructor);
    }

    @PutMapping("/instructors/{id}")
    public ResponseEntity<Instructor> updateInstructor(@PathVariable String id, @RequestBody Instructor instructorDetails) {
        Instructor instructor = instructorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Instructor not exist with id :" + id));
        instructor.setUsername(instructorDetails.getUsername());
        instructor.setPassword(instructorDetails.getPassword());
        instructor.setName(instructorDetails.getName());
        instructor.setEmail(instructorDetails.getEmail());
        instructor.setContact_details(instructorDetails.getContact_details());
        instructor.setSchedule(instructorDetails.getSchedule());
        instructor.setSubjects_taught(instructorDetails.getSubjects_taught());

        Instructor updatedInstructor = instructorRepository.save(instructor);
        return ResponseEntity.ok(updatedInstructor);
    }

    @DeleteMapping("/instructors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteInstructor(@PathVariable String id) {
        Instructor instructor = instructorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Instructor not exist with id :" + id));
        instructorRepository.delete(instructor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



}
