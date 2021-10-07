-- Start a "transaction"
-- if any of the commands inside fail
-- the entire transaction is rolled back
-- so your DB is never left is a half-broken state
BEGIN;

-- Delete existing tables
-- also "cascade" to delete any relations
DROP TABLE IF EXISTS products_category, products, users CASCADE;

-- Create tables and define their columns

CREATE TABLE products_category (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(255)
);

-- creating user
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) 
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(150) NOT NULL,
  product_description TEXT NOT NULL,
  product_price VARCHAR(6) NOT NULL, 
  product_seller INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES products_category(id)
);

-- Insert some example data for us to test with

INSERT INTO users (username) VALUES 
  ('mouse4000'),
  ('safia320'),
  ('cemal2000'),
  ('bobby5000'),
  ('jess20'),
  ('danilo2021'),
  ('mohamed021')
;

INSERT INTO products_category (category_name) VALUES
  ('🎥 Film'),
  ('📚 Book'),
  ('👕 Clothing'),
  ('🪑 Furniture'),
  ('🎹 Music'),
  ('💾 Technology'),
  ('🔨 DIY')
;

INSERT INTO products (product_name, product_description, product_price, category_id, product_seller) VALUES
  ('Dune', 'Film about something everyone is really into', '89.56', 1, 6),
  ('Harry Potter', 'Book about wizards and hats that scare people', '12.34', 2, 3),
  ('T-Shirt', 'Green t-shirt with elephant on it, it nevre forgets you', '2.23', 3, 4),
  ('Goofy movie', 'Disney film about Goofey, VHS, one careful owner', '14.23', 1, 5),
  ('Perfume', 'Book about smelly things, smells alright', '18.23', 2, 1),
  ('Eames Chair', 'Set of modern chairs in really great condition!', '250', 4, 2)
;

-- End the transaction and commit all changes
COMMIT;