-- Start a "transaction"
-- if any of the commands inside fail
-- the entire transaction is rolled back
-- so your DB is never left is a half-broken state
BEGIN;

-- Delete existing tables
-- also "cascade" to delete any relations
DROP TABLE IF EXISTS products_category, products CASCADE;

-- Create tables and define their columns

CREATE TABLE products_category (
  id SERIAL PRIMARY KEY,
  catagory_name VARCHAR(255)
);

-- creating user
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(20) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(150) NOT NULL,
  product_description TEXT NOT NULL,
  product_price MONEY NOT NULL, 
  product_seller INTEGER NOT NULL REFERENCES users(id),
  category_id INTEGER REFERENCES products_category(id)
);

-- Insert some example data for us to test with

INSERT INTO users (user_name) VALUES 
  ('mario'),
  ('safia')
;

INSERT INTO products_category (catagory_name) VALUES
  ('Film'),
  ('Book'),
  ('Clothing'),
  ('Furniture'),
  ('Music'),
  ('Technology'),
  ('DIY')
;

INSERT INTO products (product_name, product_description, product_price, category_id) VALUES
  ('Dune', 'Film about complex stuff', '89.56', 1),
  ('Harry Potter', 'Book about wizards', '12.34', 2),
  ('T-Shirt', 'Green t-shirt with elephant on it', '2.23', 3),
  ('Goofy movie', 'Disney film about Goofey', '14.23', 1),
  ('Perfume', 'Book about smelly things', '18.23', 2),
  ('Eames Chair', 'Set of modern chairs', '250', 4)
;

-- End the transaction and commit all changes
COMMIT;