package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
	UserService userService;
    @GetMapping
    public List<User> getAllUsers(){
    	return userService.getAllUsers();
    }
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
    	return userService.getUserById(id);
    	
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
    	return userService.createUser(user);
    }
   
    
    @DeleteMapping("/{id}")
    public void deleteUser (@PathVariable Long id) {
    	userService.deleteUser(id);
    	
    }
    
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        // Fetch the existing user by ID
        User existingUser = userService.getUserById(id);

        // Update the relevant fields (e.g., name, email, etc.) from the updatedUser
        existingUser.setFirstname(updatedUser.getFirstname());
        existingUser.setName(updatedUser.getName());
        existingUser.setEmail(updatedUser.getEmail());

        // Save the modified user back to the database
        return userService.createUser(existingUser);
    }

	
}
