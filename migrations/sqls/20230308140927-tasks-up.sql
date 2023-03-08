CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    descriprion text,
    completed BOOLEAN,
    user_id foreign key referencing users
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
)