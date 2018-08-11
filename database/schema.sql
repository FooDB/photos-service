DROP TABLE IF EXISTS restaurants;

CREATE DATABASE foodb;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  restaurantName VARCHAR (50) NOT NULL,
  username VARCHAR (50) NOT NULL,
  description VARCHAR (500) NOT NULL,
  createdAt VARCHAR (50) NOT NULL,
  photoUrls VARCHAR (500)
);

\COPY restaurants FROM 'data_seedtest.tsv' DELIMITER E'\t';

