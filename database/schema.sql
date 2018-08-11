DROP TABLE IF EXISTS restaurants;

CREATE DATABASE foodb;

CREATE TABLE restaurants (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  restaurantName VARCHAR (50) NOT NULL,
  username VARCHAR (50) NOT NULL,
  description VARCHAR (500) NOT NULL,
  createdAt VARCHAR (50) NOT NULL,
  photoUrls VARCHAR (500)
);

\COPY restaurants FROM 'data_seedtest.tsv' DELIMITER E'\t';

SELECT setval(pg_get_serial_sequence('restaurants', 'id'), MAX(id)) FROM restaurants;

/* CREATE TABLE photos ( */
/*   id INTEGER PPRIMARY KEY PRIMARY KEY GENERATED BY DEFAULY AS IDENTITY, */
/*   restaurant_id FOREIGN KEY */
/* ) */
