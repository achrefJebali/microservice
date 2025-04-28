  package com.example.contrat.controllers;

import com.example.contrat.entities.Contrat;
import com.example.contrat.entities.HistoriqueModification;
import com.example.contrat.services.HistoriqueModificationService;
import com.example.contrat.services.IContratService;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Contrat")
public class ContratRestController {
	@Autowired
	IContratService contratService;

	private final HistoriqueModificationService historiqueModificationService;

	@GetMapping("/retrieve-all-contrats")
	public List<Contrat> getContrats() {
		List<Contrat> listContrats = contratService.retrieveAllContrats();
		return listContrats;
	}

	@GetMapping("/retrieve-contrat/{contrat-id}")
	public ResponseEntity<Contrat> retrieveContrat(@PathVariable("contrat-id") Integer contratId) {
		Contrat contrat = contratService.retrieveContrat(contratId);

		// Fetch historique modifications for the contract
		List<HistoriqueModification> historiques = historiqueModificationService.getHistoriqueByContrat(contratId);
		contrat.setHistoriques(historiques);  // Adding historique modifications to contract

		return ResponseEntity.ok(contrat);
	}



	@PostMapping("/add-contrat")
	public ResponseEntity<Contrat> addContrat(@RequestBody Contrat c) {
		Contrat contrat = contratService.addContrat(c);
		return ResponseEntity.ok().body(contrat);  // Retourne un ResponseEntity
	}

	@DeleteMapping("/remove-contrat/{contrat-id}")
	public void removeContrat(@PathVariable("contrat-id") Integer contratId) {
		contratService.removeContrat(contratId);
	}



    @PutMapping("/update-contrat/{contrat-id}")
    public Contrat updateContrat(@PathVariable("contrat-id") Integer contratId, @RequestBody Contrat c) {
        Contrat contrat = contratService.retrieveContrat(contratId); // Récupérer l'ancien contrat
        if (contrat == null) {
            throw new RuntimeException("Contrat not found");
        }
        // Empêcher la modification de l'ID
        // Mettre à jour uniquement les autres champs
        if (contrat.getSpecialite() != c.getSpecialite()) {
            historiqueModificationService.ajouterHistorique(
                contrat,
                "Modification de spécialité",
                "Spécialité modifiée de " + contrat.getSpecialite() + " à " + c.getSpecialite()
            );
        }
        // Historique pour chaque champ modifié
        if (contrat.getMontantContrat() != c.getMontantContrat()) {
            historiqueModificationService.ajouterHistorique(
                contrat,
                "Modification du montant",
                "Montant modifié de " + contrat.getMontantContrat() + " à " + c.getMontantContrat()
            );
            contrat.setMontantContrat(c.getMontantContrat());
        }
        if (contrat.getArchive() != c.getArchive()) {
            historiqueModificationService.ajouterHistorique(
                contrat,
                "Modification d'archive",
                "Archive modifiée de " + contrat.getArchive() + " à " + c.getArchive()
            );
            contrat.setArchive(c.getArchive());
        }
        if (!contrat.getNom().equals(c.getNom())) {
            historiqueModificationService.ajouterHistorique(
                contrat,
                "Modification du nom",
                "Nom modifié de " + contrat.getNom() + " à " + c.getNom()
            );
            contrat.setNom(c.getNom());
        }
        if (!contrat.getDateDebutContrat().equals(c.getDateDebutContrat())) {
            contrat.setDateDebutContrat(c.getDateDebutContrat());
        }
        if (!contrat.getDateFinContrat().equals(c.getDateFinContrat())) {
            contrat.setDateFinContrat(c.getDateFinContrat());
        }
        if (contrat.getSpecialite() != c.getSpecialite()) {
            contrat.setSpecialite(c.getSpecialite());
        }
        // Mise à jour du contrat sans modifier l'ID
        return contratService.updateContrat(contrat);
    }
	
	@GetMapping("/retrieve-historique/{contrat-id}")
	public ResponseEntity<List<HistoriqueModification>> getHistoriqueByContrat(@PathVariable("contrat-id") Integer contratId) {
		List<HistoriqueModification> historiques = historiqueModificationService.getHistoriqueByContrat(contratId);
		return ResponseEntity.ok(historiques);
	}

}


