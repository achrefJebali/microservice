package com.esprit.microservice.departementmicroservice.controllers;

import com.esprit.microservice.departementmicroservice.entities.Departement;
import com.esprit.microservice.departementmicroservice.services.Impl.DepartementService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/departementMicroService")
public class DepartementController {
    @Autowired
     private  DepartementService departementService;
    @GetMapping("/retrieve-all-departements")
    public List<Departement> getDepartements() {
        List<Departement> listDepartements = this.departementService.retrieveAllDepartements();
        return listDepartements;
    }
    @GetMapping("/retrieve-departement/{departement-id}")
    public Departement retrieveDepartement(@PathVariable("departement-id") Integer departementId) {
        return this.departementService.retrieveDepartement(departementId);
    }


    @PostMapping("/add-departement")
    public Departement addDepartement(@RequestBody Departement d){
        Departement departement = this.departementService.addDepartement(d);
        System.out.println("Received Departement: " + d.toString());
        return departement;
    }


    @DeleteMapping("/remove-departement/{departement-id}")
    public void removeDepartement(@PathVariable("departement-id") Integer departementId) {
        this.departementService.deleteDepartement(departementId);
    }


    @PutMapping("/update-departement/{id}")
    public Departement updateDepartement(@RequestBody Departement e,@PathVariable Integer id) {
        Departement departement= this.departementService.updateDepartement(e,id);
        return departement;
    }
}
