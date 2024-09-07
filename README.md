COSC349 Assignment 1: Virtualised Blog Application
Overview
This project demonstrates the use of virtualisation to deploy a multi-tier application using Vagrant and VirtualBox. The application includes:

An SQL server (MySQL) for data storage.
A web server (Node.js) serving a blog website with read-only access.
An admin server (Node.js) for managing blog data with full read/write access.
The project focuses on the automated deployment and configuration of these services across three virtual machines (VMs), using a Vagrantfile to provision the VMs and set up the necessary software.

Prerequisites
Before you start, make sure you have the following installed on your system:

Vagrant
VirtualBox
Getting Started
To clone and run the project, follow these steps:

Clone the repository:

git clone https://github.com/Jayben2145/cosc349-assignment-1
cd YourRepo
Run Vagrant to build and start the VMs:

vagrant up
This command will automatically:

Set up the SQL server with MySQL.
Install Node.js and the necessary dependencies on both the web and admin servers.
Start the web server on port 3000 and the admin server on port 3001.
Access the application:

Open your browser and navigate to http://localhost:3000 to access the blog website.
Navigate to http://localhost:3001 to access the admin interface.
Stopping the VMs: To stop all VMs, run:

vagrant halt

VM Configuration
SQL Server
IP: 192.168.10.100
Ports: MySQL (3306, forwarded to the host)
MySQL is configured to allow external connections.
Web Server
IP: 192.168.10.101
Ports: Web server (3000, forwarded to the host)
The web server runs a Node.js application with read-only access to the MySQL database.
Admin Server
IP: 192.168.10.102
Ports: Admin server (3001, forwarded to the host)
The admin server provides full read/write access to the MySQL database for managing blog entries.

chat gpt assisted in making the readme 
