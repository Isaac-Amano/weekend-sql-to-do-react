CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
description TEXT NOT NULL,
is_complete BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (description, is_complete) VALUES ('Buy groceries', false);

INSERT INTO tasks (description, is_complete) VALUES ('Clean the house', false);

INSERT INTO tasks (description, is_complete) VALUES ('Finish project', false);