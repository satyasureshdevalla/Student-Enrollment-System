package edu.ucmo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface InstructorRepository extends MongoRepository<Instructor, String> {
}
