import {Pool} from "pg"
import dotenv from "dotenv";

dotenv.config()

const{
    POSTGRES_DB,
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DB,
    ENV
} = process.env;

let client
if(ENV === 'dev') {
    client = new Pool ({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        password: POSTGRES_PASSWORD,
        user: POSTGRES_USER
    })
}

if(ENV === 'test') {
    client = new Pool ({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        password: POSTGRES_PASSWORD,
        user: POSTGRES_USER
        
    })
}

export default client;