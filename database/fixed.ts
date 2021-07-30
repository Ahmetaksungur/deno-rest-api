import { client } from "../src/db.ts";

async function fixed() {
  await client.execute(`CREATE TABLE IF NOT EXISTS tokens (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
        token VARCHAR(2555) NOT NULL,
        create_date VARCHAR(500) NOT NULL
    ) CHARACTER SET utf8`);

  await client.execute(`CREATE TABLE IF NOT EXISTS users (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
        user_name VARCHAR(64) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(64) NOT NULL,
        password VARCHAR(255) NOT NULL,
        user_type VARCHAR(50) NOT NULL,
        user_status VARCHAR(50) NOT NULL,
        create_date VARCHAR(500) NOT NULL,
        last_login VARCHAR(2000) NOT NULL
    ) CHARACTER SET utf8`);

  await client.execute(`CREATE TABLE IF NOT EXISTS users (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
        user_name VARCHAR(64) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(64) NOT NULL,
        password VARCHAR(255) NOT NULL,
        user_type VARCHAR(50) NOT NULL,
        user_status VARCHAR(50) NOT NULL,
        create_date VARCHAR(500) NOT NULL,
        last_login VARCHAR(2000) NOT NULL
    ) CHARACTER SET utf8`);

  await client.execute(`CREATE TABLE IF NOT EXISTS user_meta (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
        user_id INT(11) NOT NULL,
        name LONGTEXT NOT NULL,
        value LONGTEXT NOT NULL
    ) CHARACTER SET utf8`);

  await client.execute(`CREATE TABLE IF NOT EXISTS options (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
        name LONGTEXT NOT NULL,
        value LONGTEXT NOT NULL,
        language LONGTEXT NOT NULL
    ) CHARACTER SET utf8`);
}

export { fixed };
