package com.esprit.microservice.departementmicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class DepartementMicroServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DepartementMicroServiceApplication.class, args);
	}

}
