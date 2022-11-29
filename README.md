# Calculator App
Assignment #2 for Programming II Course at Alexandria University

---

### The Calculator is Available on the Internet! 🥳 🚀

- Web: [http://embaby.tech](http://embaby.tech:6401)
- Android/IOS: coming soon 👀

---

YouTube Video: https://youtu.be/G4J1aZEYq3k

### 👨‍💻 Tech Stack

Here's a brief high-level overview of the tech stack the Calculator app uses:

- This project uses [Angular web framework](https://angular.io/). Angular is a TypeScript-based web application framework led by the Angular Team at Google.
- For backend (evaluating the results), the app uses [Spring boot framework](https://spring.io/projects/spring-boot).

<p align="left"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>



### Installation
#### Pre-Requisites:
- Java 17.0.2
- Springboot 3.0.0 (Maven) with Spring Web dependencies
- Angular CLI: 15.0.1
- Node: 18.12.1
- Package Manager: npm 9.1.2
- lite-server package

#### Deploying:
1. Build Spring Boot project to a .jar file.
2. Run spring boot (`java -jar fileName.jar`)
3. Build Angular project (`ng build`)
4. Run light-server (`lite-server`)

### 💾 Behind the Scenes:
When a user enters an input equation, presses ENTER or clicks on the "=" button, a GET request is sent to the backend with the equation to be evaluated. The backend receives the equation, evaluates it and returns a JSON Response with the result or an error message. The frontend process the returned Response and displays the result to the user.

### 😮 Hidden Features:
1. You can use your keyboard keypad!
2. The application is mobile-friendly!
3. Your data is safe and secure.
