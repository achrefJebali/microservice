# Gestion des Universités – Microservices

Ce projet est une application de gestion des universités basée sur une architecture microservices. Il permet de gérer différents aspects liés à l'administration universitaire, tels que les étudiants, enseignants, formations, départements, équipes de recherche, etc.

## Fonctionnalités principales
- **Gestion des étudiants** : Ajout, modification, suppression et consultation des étudiants.
- **Gestion des enseignants** : Administration des enseignants, affectation aux départements et équipes.
- **Gestion des formations** : Création et gestion des formations universitaires.
- **Gestion des départements** : Organisation des départements et rattachement des membres.
- **Gestion des équipes de recherche** : Création, gestion et affectation des membres aux équipes.
- **Configuration centralisée** : Utilisation d'un serveur de configuration pour centraliser les paramètres de chaque microservice.

## Architecture
Le projet est structuré en plusieurs microservices indépendants, chacun responsable d'un domaine fonctionnel spécifique. La communication entre les services se fait via des API REST.

- **Back-Config-Server** : Serveur de configuration centralisé.
- **Back-Equipe** : Gestion des équipes de recherche.
- **Back-Formation** : Gestion des formations.
- **Back-Universite** : Gestion des universités, départements, étudiants, enseignants, etc.

## Prérequis
- Java 17 ou supérieur
- Maven
- Docker

## Démarrage rapide
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/achrefJebali/microservice.git
   ```
2. Construire les services :
   ```bash
   cd micro-main
   mvn clean install
   ```
3. Lancer les microservices :
   - Démarrer le serveur de configuration puis les autres services.
   - Utiliser les commandes Maven ou Docker Compose si disponible.
