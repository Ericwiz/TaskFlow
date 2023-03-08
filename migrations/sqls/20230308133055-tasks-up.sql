CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    descriprion text,
    completed BOOLEAN,
    user_id bigint REFERENCES  users(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
)