CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured boolean,
date_time TIMESTAMP,
PRIMARY KEY (id)
);