package tn.esprit.microservice.kassil.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;
import tn.esprit.microservice.kassil.entities.Equipe;
import tn.esprit.microservice.kassil.services.IEquipeService;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/equipe")
public class EquipeRestController {
    IEquipeService equipeService;

    @GetMapping("/retrieve-all-equipes")
    public List<Equipe> getEquipes() {
        List<Equipe> listEquipes = equipeService.retrieveAllEquipes();
        return listEquipes;
    }
    @GetMapping("/retrieve-equipe/{equipe-id}")
    public Equipe retrieveEquipe(@PathVariable("equipe-id") Integer equipeId) {
        return equipeService.retrieveEquipe(equipeId);
    }

    @PostMapping("/add-equipe")
    public Equipe addEquipe(@RequestBody Equipe e) {
        Equipe equipe = equipeService.addEquipe(e);
        return equipe;
    }

    @DeleteMapping("/remove-equipe/{equipe-id}")
    public void removeEquipe(@PathVariable("equipe-id") Integer equipeId) {
        equipeService.deleteEquipe(equipeId);
    }

    // http://localhost:8089/Kaddem/equipe/update-equipe
    @PutMapping("/update-equipe")
    public Equipe updateEtudiant(@RequestBody Equipe e) {
        Equipe equipe= equipeService.updateEquipe(e);
        return equipe;
    }

    @Scheduled(cron="0 0 13 * * *")
    @PutMapping("/faireEvoluerEquipes")
    public ResponseEntity<String> faireEvoluerEquipes() {
        equipeService.evoluerEquipes();
        return ResponseEntity.ok("Les équipes ont été mises à jour avec succès.");
    }
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Long>> getStats() {
        return ResponseEntity.ok(equipeService.getEquipeStats());
    }

}
