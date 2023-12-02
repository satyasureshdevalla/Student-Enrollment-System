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
public class DropController {
    @Autowired
    private DropRepository dropRepository;

    @GetMapping("/drops")
    public List<Drop> getAllDrops(){
        return dropRepository.findAll();
    }

    @PostMapping("/drops")
    public Drop createDrop(@RequestBody Drop drop) {
        return dropRepository.save(drop);
    }

    @GetMapping("/drops/{id}")
    public ResponseEntity<Drop> getDropById(@PathVariable String id) {
        Drop drop = dropRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Drop not exist with id :" + id));
        return ResponseEntity.ok(drop);
    }

    @PutMapping("/drops/{id}")
    public ResponseEntity<Drop> updateDrop(@PathVariable String id, @RequestBody Drop dropDetails) {
        Drop drop = dropRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Drop not exist with id :" + id));
        drop.setStudent_id(dropDetails.getStudent_id());
        drop.setEnrollment_id(dropDetails.getEnrollment_id());
        Drop updatedDrop = dropRepository.save(drop);
        return ResponseEntity.ok(updatedDrop);
    }

    @DeleteMapping("/drops/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDrop(@PathVariable String id) {
        Drop drop = dropRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Drop not exist with id :" + id));
        dropRepository.delete(drop);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
