package com.example.apigetway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiGetWayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGetWayApplication.class, args);
	}

	@Bean
	public RouteLocator gatewayRoutes (RouteLocatorBuilder builder) {
		return builder.routes()
				.route("Contrat", r -> r.path("/Contrat/**")
						.uri("lb://CONTRAT"))

				.route("Universite", r -> r.path("/Universite/**")
						.uri("lb://UNIVERSITE"))

				.route("Ressource", r -> r.path("/Ressource/**")
						.uri("lb://RESSOURCE"))

				.route("departementMicroService", r -> r.path("/departementMicroService/**")
					.uri("lb://DEPARTEMENTMICROSERVICE"))

				.route("Formation", r -> r.path("/formation/**").uri("lb://FORMATION"))

				.route("equipe", r -> r.path("/equipe/**")
						.uri("lb://EQUIPE"))

				.route("evaluation", r -> r.path("/evaluation/**")
						.uri("lb://EVALUATION-SERVICE"))

				.build();


				
	}
}
