//THIS IS A TUTORIAL FILE TO SHOW HOW THE BACKEND IS BUILT
//ITS ALL CONFUSING AND SHIT BUT HANG ON WITH ME.

// THIS PROJECT USES OOP CONCENT AND S.O.L.I.D PRINCIPLES
// S is -> Single Responsibility Principle: A class should have one and only one reason to change, meaning that a class should have only one job.
// O is -> Open Closed Principle: Objects or entities should be open for extension, but closed for modification.
// L is -> Liskov Substitution Principle: This principle states that “objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.”
// I is -> Interface Segregation Principle: This principle states that “no client should be forced to depend on methods it does not use.”
// D is -> Dependency Inversion Principle: This principle states that “one should “depend upon abstractions, [not] concretions.”

// THIS USES SEQUELIZE-TYPESCRIPT AND THE PROJECT IS BUILT AS FOLLOWS

// LETS SAY WE WANT TO CREATE A POST CRUD

// 1. CREATE A MODEL IN THE MODEL FILE -> post.model
// 2. CREATE A SERVICE IN THE SERVICE FILE -> post.service : perform all the database logics in this file
// 3. CREATE A CONTROLLER IN THE CONTROLLER FILE -> post.controller : communicate with router and service in this file
// 4. CREATE A ROUTER IN THE ROUTER FILE -> post.router : handle all the routes in this file
// 5. CREATE A FILE TO HANDLE BUSINESS LOGIC IN THE BUSINESS FILE -> post.business -> handle all the functions that modify the responses from services
// 6. CREATE A FILE TO HANDLE VALIDATION IN THE VALIDATION FILE -> post.validation -> handle all the validation in this file
// 7. CREATE A MAIN FILE, CALL IT index.ts -> this file exports service class, which takes model and business file as parameters. This file is imported in the controller file

// ITS FUN.