package edu.ucmo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "instructor")
public class Instructor {
    @Id
    private String id;

    private String username;

    private String password;

    private String name;

    private String email;

    private String contact_details;

    private ArrayList<String> schedule;

    private ArrayList<String> subjects_taught;

    public Instructor() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContact_details() {
        return contact_details;
    }

    public void setContact_details(String contact_details) {
        this.contact_details = contact_details;
    }

    public ArrayList<String> getSchedule() {
        return schedule;
    }

    public void setSchedule(ArrayList<String> schedule) {
        this.schedule = schedule;
    }

    public ArrayList<String> getSubjects_taught() {
        return subjects_taught;
    }

    public void setSubjects_taught(ArrayList<String> subjects_taught) {
        this.subjects_taught = subjects_taught;
    }
}
