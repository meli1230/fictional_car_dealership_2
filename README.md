# Car Dealership Database Management - Advanced Features

## Overview  
This project builds upon a SQL-based car dealership database by adding **procedural SQL (PL/SQL) features** and **MongoDB integration** for extended functionality.

## Project Structure  
- Package.txt → Defines and implements the PL/SQL package (pkg_vanzari).
- Triggers.txt → Contains triggers for automated logging and data integrity.
- Sequence.txt → Implements an auto-incrementing sequence for activity logging.
- Queries.txt → SQL queries for generating sales reports and retrieving client history.
- MongoDB.js → Scripts for MongoDB collections and data insertion.
- CRUD_initial.txt & CRUD_additional.txt → SQL scripts for table creation and data population.

## Features  

### **PL/SQL Package**  
Encapsulates business logic through:  
- **Procedures** for adding clients and recording sales.  
- **Functions** for sales reporting and purchase history retrieval.  

### **Triggers & Sequences**  
- **Triggers** automate activity logging and key assignment.  
- **Sequences** ensure unique IDs for logs.  

### **Complex Queries**  
- Generate sales performance reports.  
- Retrieve client purchase history.  
- Track database activity logs.  

### **MongoDB Integration**  
- NoSQL collections for vehicle sales, inventory, and employees.  
- Efficient queries for dealership data retrieval.  

## **How to Run**  

### **SQL Execution**  
1. Use an SQL tool (e.g., Oracle SQL Developer).  
2. Run `CRUD_initial.txt` followed by `CRUD_additional.txt`.  
3. Execute `Package.txt`, `Triggers.txt`, and `Sequence.txt`.  
4. Use `Queries.txt` for reporting and retrieval.  

### **MongoDB Execution**  
1. Install and start MongoDB.  
2. Run `MongoDB.js` in the MongoDB shell.  
3. Query collections using `find()`.  

## **Conclusion**  
This project improves **automation, security, and performance** in dealership database management using **procedural SQL and NoSQL approaches**.
