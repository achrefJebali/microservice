package tn.esprit.microservice.kassil.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Entity
public class Equipe implements Serializable {
    @ManyToMany
    private java.util.List<Etudiant> etudiants;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "detail_equipe_id")
    @JsonIgnore
    private DetailEquipe detailEquipe;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEquipe;

    private String nomEquipe;

    @Enumerated(EnumType.STRING)
    private Niveau niveau;

    // 📊 New fields for AI
    private Integer nbMembres;
    private Double ageMoyen;
    private Integer projetsLivres;

    // 🧠 Prediction output (optional)
    private Boolean prochaineEvolution;
}


