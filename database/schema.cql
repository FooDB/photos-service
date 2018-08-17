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

CREATE MATERIALIZED VIEW photo_names AS SELECT photo_urls, restaurant_name FROM photos WHERE restaurant_name IS NOT NULL AND ID IS NOT NULL PRIMARY KEY (restaurant_name, id);

/* Run this optimiziation in the console */
/* ALTER TABLE photos with compaction = { 'class' : 'SizeTieredCompactionStrategy' }; */
