CREATE TABLE IF NOT EXISTS countries (
  id INTEGER PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  currency TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS locations (
  id INTEGER PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  country_slug TEXT NOT NULL,
  region TEXT,
  cost_index REAL,
  average_rent INTEGER,
  FOREIGN KEY (country_slug) REFERENCES countries(slug)
);

CREATE TABLE IF NOT EXISTS salary_data (
  id INTEGER PRIMARY KEY,
  location_slug TEXT NOT NULL,
  job_slug TEXT,
  median_salary INTEGER NOT NULL,
  source TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
