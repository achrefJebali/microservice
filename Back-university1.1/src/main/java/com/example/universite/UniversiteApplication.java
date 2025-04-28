package com.example.universite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient

public class UniversiteApplication {

    public static void main(String[] args) {
        SpringApplication.run(UniversiteApplication.class, args);
    }

}
