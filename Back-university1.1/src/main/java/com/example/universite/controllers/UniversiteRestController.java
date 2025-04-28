package com.example.universite.controllers;

import com.example.universite.entities.Universite;
import com.example.universite.services.IUniversiteService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.*;

@RestController
@AllArgsConstructor
@RequestMapping("/Universite")
public class UniversiteRestController {
	@Autowired
	IUniversiteService universiteService;


	@GetMapping("/retrieve-all-universites")
	public List<Universite> getUniversites() {
		List<Universite> listUniversites = universiteService.retrieveAllUniversites();
		return listUniversites;
	}


	@GetMapping("/retrieve-universite/{universite-id}")
	public Universite retrieveUniversite(@PathVariable("universite-id") Integer universiteId) {
		return universiteService.retrieveUniversite(universiteId);
	}

	@PostMapping("/add-universite")
	public Universite addUniversite(@RequestBody Universite u) {
		Universite universite = universiteService.addUniversite(u);
		return universite;
	}

	@DeleteMapping("/remove-universite/{universite-id}")
	public void removeUniversite(@PathVariable("universite-id") Integer universiteId) {
		universiteService.deleteUniversite(universiteId);
	}
	@PutMapping("/update-universite")
	public Universite updateUniversite(@RequestBody Universite u) {
		Universite u1= universiteService.updateUniversite(u);
		return u1;
	}

	@PutMapping("/update-location/{id}")
	public ResponseEntity<Universite> updateLocation(
			@PathVariable Integer id,
			@RequestParam Double latitude,
			@RequestParam Double longitude) {

		Universite univ = universiteService.retrieveUniversite(id);
		univ.setLatitude(latitude);
		univ.setLongitude(longitude);
		Universite updated = universiteService.updateUniversite(univ);
		return ResponseEntity.ok(updated);
	}



	@GetMapping("/map-link/{id}")
	public ResponseEntity<String> getMapLink(@PathVariable Integer id) {
		Universite univ = universiteService.retrieveUniversite(id);
		if (univ.getLatitude() != null && univ.getLongitude() != null) {
			String url = "https://www.google.com/maps?q=" + univ.getLatitude() + "," + univ.getLongitude();
			return ResponseEntity.ok(url);
		}
		return ResponseEntity.badRequest().body("Location not available");
	}

}


