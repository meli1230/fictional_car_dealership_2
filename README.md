# Car Dealership Database Management - Advanced Features

## Overview  
This project builds upon the SQL-based car dealership database by adding **procedural SQL (PL/SQL) features** and **MongoDB integration** for extended functionality.

## Project Structure  
- Package.txt --> Defines and implements the PL/SQL package (pkg_vanzari).
- Triggers.txt --> Contains triggers for automated logging and data integrity.
- Sequence.txt --> Implements an auto-incrementing sequence for activity logging.
- Queries.txt --> SQL queries for generating sales reports and retrieving client history.
- MongoDB.js --> Scripts for MongoDB collections and data insertion.
- CRUD_initial.txt & CRUD_additional.txt --> SQL scripts for table creation and data population.

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

# How to run
In order to run the program, you will need to download a tool that can execute SQL scripts, such as SQLite or DB Browser (provides a graphical interface). You then need to clone the files in this repo and then run create_alter_tables.sql and then populate_tables.sql. In order to see the views, and queries, you need to run them separately.
In order to run the MongoDB code, you will need to install a tool such as MongoDB Compass.

