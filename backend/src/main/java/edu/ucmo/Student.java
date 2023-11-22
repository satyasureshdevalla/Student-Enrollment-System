package edu.ucmo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "student")
public class Student {
    @Id
    private String id;

    private String username;

    private String password;

    private String name;

    private String email;

    private String contact_details;

    private ArrayList<String> schedule;

    private String max_credits;

    private String current_term;

    public Student() {
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

    public String getMax_credits() {
        return max_credits;
    }

    public void setMax_credits(String max_credits) {
        this.max_credits = max_credits;
    }

    public String getCurrent_term() {
        return current_term;
    }

    public void setCurrent_term(String current_term) {
        this.current_term = current_term;
    }
}
