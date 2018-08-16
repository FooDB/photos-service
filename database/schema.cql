DROP KEYSPACE IF EXISTS foodb;

CREATE KEYSPACE foodb
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 1
};

USE foodb;

/* DROP TABLE IF EXISTS foodb.photos; */

CREATE TABLE IF NOT EXISTS photos (
  id int,
  restaurant_name text,
  username text,
  description text,
  created_at text,
  photo_urls set<int>,
  PRIMARY KEY (id)
);

COPY photos (id, restaurant_name, username, description, created_at, photo_urls)
FROM 'combined.tsv'
WITH DELIMITER='\t';

CREATE TABLE IF NOT EXISTS photo_names (
  id int,
  restaurant_name text,
  username text,
  description text,
  created_at text,
  photo_urls set<int>,
  PRIMARY KEY (restaurant_name)
);

COPY photo_names (id, restaurant_name, username, description, created_at, photo_urls)
FROM 'combined.tsv'
WITH DELIMITER='\t';
