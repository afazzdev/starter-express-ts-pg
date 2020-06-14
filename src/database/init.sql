-- CREATE DATABASE si_absensi;

-- Table example

CREATE EXTENSION
IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    uuid UUID NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    UNIQUE(username)
);