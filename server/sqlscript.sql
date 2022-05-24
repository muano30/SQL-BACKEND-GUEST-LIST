CREATE TABLE guest(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    food  text[] NOT NULL,
    day_or_night NUMERIC(2) NOT NULL,
    coming BOOLEAN NOT NULL,
    date_created TIMESTAMP DEFAULT NOW()
    );