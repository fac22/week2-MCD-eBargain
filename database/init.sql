-- Start a "transaction"
-- if any of the commands inside fail
-- the entire transaction is rolled back
-- so your DB is never left is a half-broken state
BEGIN;

-- Delete existing tables
-- also "cascade" to delete any relations
DROP TABLE IF EXISTS products, products_category CASCADE;

-- Create tables and define their columns

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(150) NOT NULL,
  product_description TEXT NOT NULL,
  product_price SMALLMONEY NOT NULL,
  category_id INTEGER REFERENCES products_category(id)
);

CREATE TABLE products_category (
  id SERIAL PRIMARY KEY,
  catagory_name VARCHAR(255),
);

-- Insert some example data for us to test with

INSERT INTO users (username, age) VALUES
  ('Sery1976', 28),
  ('Notne1991', 3),
  ('Moull1990', 41),
  ('Spont1935', 72),
  ('Precand', 19)
;

INSERT INTO blog_posts (text_content, user_id) VALUES
  ('Announcing of invitation principles in.', 1),
  ('Peculiar trifling absolute and wandered yet.', 2),
  ('Far stairs now coming bed oppose hunted become his.', 3),
  ('Curabitur arcu quam, imperdiet ac orci ac.', 4),
  ('Aenean blandit risus sed pellentesque.', 5)
;

-- End the transaction and commit all changes
COMMIT;