CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users(email) VALUES
('katie34@yahoo.com'),
('Tunde@gmail.com');
