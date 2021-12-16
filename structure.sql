CREATE DATABASE movies;
USE movies;

CREATE TABLE `movies` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `title` VARCHAR(255) NOT NULL,
   `rating` DECIMAL NOT NULL,
   `length` INT(10) NOT NULL,
   `genre_id` INT(10) NOT NULL,
   `origin_id` INT(10) NOT NULL,
   `calification_id` INT(10) NOT NULL,
   `synopsis` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

ALTER TABLE movies
   ADD image VARCHAR(255)
;

CREATE TABLE `genres` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `active` TINYINT(1) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `actors` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(100) NOT NULL,
   `last_name` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `actor_movie` (
   `id` INT NOT NULL,
   `actor_id` INT,
   `movie_id` INT,
    PRIMARY KEY (`id`)
);

CREATE TABLE `origin` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `calification` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `director` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `director_movie` (
   `id` INT NOT NULL,
   `movie_id` INT NOT NULL,
   `director_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `birth` TIMESTAMP NOT NULL,
   `category_id` INT NOT NULL,
   `created_at` TIMESTAMP NULL,
   `updated_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

ALTER TABLE users
   ADD image VARCHAR(255)
;

CREATE TABLE `category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `created_at` TIMESTAMP NULL,
   `updated_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_1534d214-6b41-44b3-b5c4-34e59a7c05da` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`)  ;

ALTER TABLE `movies` ADD CONSTRAINT `FK_fbc4259d-490e-4a8e-bbfe-b15b04472ee8` FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`)  ;

ALTER TABLE `movies` ADD CONSTRAINT `FK_c2f7b9c3-57d8-4483-b858-7908c15a67ab` FOREIGN KEY (`origin_id`) REFERENCES `origin`(`id`)  ;

ALTER TABLE `movies` ADD CONSTRAINT `FK_f460f33b-aebc-4b14-ba37-d7b74bfa825c` FOREIGN KEY (`calification_id`) REFERENCES `calification`(`id`)  ;

ALTER TABLE `actor_movie` ADD CONSTRAINT `FK_987b0cb7-e169-47a3-874e-b24b0dbe01a8` FOREIGN KEY (`actor_id`) REFERENCES `actors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `actor_movie` ADD CONSTRAINT `FK_d29faafe-bf60-4071-946f-1886bd85d0c9` FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `director_movie` ADD CONSTRAINT `FK_89ca4618-0320-406c-8cb2-a793162d44d7` FOREIGN KEY (`director_id`) REFERENCES `director`(`id`) ON DELETE CASCADE UPDATE CASCADE;

ALTER TABLE `director_movie` ADD CONSTRAINT `FK_6a115c39-445b-46db-afc2-5155823d3f76` FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`)  ON DELETE CASCADE UPDATE CASCADE;

ALTER TABLE `movies` ADD `created_at` TIMESTAMP;

ALTER TABLE `movies` ADD `updated_at` TIMESTAMP NULL;

ALTER TABLE `movies` ADD `release_at` TIMESTAMP NULL;

ALTER TABLE `movies` ADD `delete_at` TIMESTAMP NULL;

ALTER TABLE `genres` ADD `created_at` TIMESTAMP;

ALTER TABLE `genres` ADD `updated_at` TIMESTAMP NULL;

ALTER TABLE `actors` ADD `created_at` TIMESTAMP;

ALTER TABLE `actors` ADD `updated_at` TIMESTAMP NULL;

ALTER TABLE `actor_movie` ADD `created_at` TIMESTAMP;

ALTER TABLE `actor_movie` ADD `updated_at` TIMESTAMP NULL;

ALTER TABLE `origin` ADD `created_at` TIMESTAMP;

ALTER TABLE `origin` ADD `updated_at` TIMESTAMP NULL;

ALTER TABLE `calification` ADD `created_at` TIMESTAMP;

ALTER TABLE `calification` ADD `updated_at` TIMESTAMP NULL;

ALTER TABLE `director` ADD `created_at` TIMESTAMP;

ALTER TABLE `director` ADD `updated_at` TIMESTAMP NULL;

ALTER TABLE `director_movie` ADD `created_at` TIMESTAMP;

ALTER TABLE `director_movie` ADD `updated_at` TIMESTAMP NULL;

ALTER TABLE `movies` MODIFY `created_at` TIMESTAMP NULL;

ALTER TABLE `genres` MODIFY `created_at` TIMESTAMP NULL;

ALTER TABLE `actors` MODIFY `created_at` TIMESTAMP NULL;

ALTER TABLE `actor_movie` MODIFY `created_at` TIMESTAMP NULL;

ALTER TABLE `origin` MODIFY `created_at` TIMESTAMP NULL;

ALTER TABLE `calification` MODIFY `created_at` TIMESTAMP NULL;

ALTER TABLE `director` MODIFY `created_at` TIMESTAMP NULL;

ALTER TABLE `director_movie` MODIFY `created_at` TIMESTAMP NULL;
