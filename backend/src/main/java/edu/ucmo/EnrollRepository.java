package edu.ucmo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface EnrollRepository extends MongoRepository<Enroll, String> {
}
