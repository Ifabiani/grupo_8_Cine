-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: movies
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actor_movie`
--

DROP TABLE IF EXISTS `actor_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actor_movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actor_id` int(11) DEFAULT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_987b0cb7-e169-47a3-874e-b24b0dbe01a8` (`actor_id`),
  KEY `FK_d29faafe-bf60-4071-946f-1886bd85d0c9` (`movie_id`),
  CONSTRAINT `FK_987b0cb7-e169-47a3-874e-b24b0dbe01a8` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_d29faafe-bf60-4071-946f-1886bd85d0c9` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actor_movie`
--

LOCK TABLES `actor_movie` WRITE;
/*!40000 ALTER TABLE `actor_movie` DISABLE KEYS */;
INSERT INTO `actor_movie` VALUES (1,1,1,NULL,NULL),(2,2,1,NULL,NULL),(3,3,1,NULL,NULL),(4,4,1,NULL,NULL),(5,5,2,NULL,NULL),(6,6,2,NULL,NULL),(7,6,3,NULL,NULL),(8,7,3,NULL,NULL),(9,8,3,NULL,NULL),(10,1,4,NULL,NULL),(11,10,4,NULL,NULL),(12,11,4,NULL,NULL),(13,7,5,NULL,NULL),(14,12,5,NULL,NULL),(15,13,5,NULL,NULL),(16,14,5,NULL,NULL),(17,15,6,NULL,NULL),(18,16,6,NULL,NULL),(19,17,6,NULL,NULL),(20,18,7,NULL,NULL),(21,19,7,NULL,NULL),(22,20,7,NULL,NULL),(23,21,7,NULL,NULL),(24,18,8,NULL,NULL),(25,19,8,NULL,NULL),(26,20,8,NULL,NULL),(27,21,8,NULL,NULL),(28,18,9,NULL,NULL),(29,20,9,NULL,NULL),(30,21,9,NULL,NULL),(31,18,10,NULL,NULL),(32,22,10,NULL,NULL),(33,23,10,NULL,NULL),(34,24,10,NULL,NULL),(35,25,11,NULL,NULL),(36,26,11,NULL,NULL),(37,9,3,NULL,NULL),(38,27,11,NULL,NULL),(39,28,12,NULL,NULL),(40,29,12,NULL,NULL),(48,1,26,NULL,NULL),(49,2,26,NULL,NULL),(50,3,26,NULL,NULL);
/*!40000 ALTER TABLE `actor_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actors`
--

DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES (1,'Sean','Penn',NULL,NULL),(2,'Kevin','Bacon',NULL,NULL),(3,'Tim','Robbins',NULL,NULL),(4,'Laura','Linney',NULL,NULL),(5,'Daniel','Day-Lewis',NULL,NULL),(6,'Pete','Postletwhaite',NULL,NULL),(7,'Leonardo','DiCaprio',NULL,NULL),(8,'Cameron','Diaz',NULL,NULL),(9,'Liam','Neeson',NULL,NULL),(10,'Naomi','Watts',NULL,NULL),(11,'Benicio','Del Toro',NULL,NULL),(12,'Tom','Hardy',NULL,NULL),(13,'Joseph','Gordon-Levitt',NULL,NULL),(14,'Cillian','Murphy',NULL,NULL),(15,'Haley Joel','Osment',NULL,NULL),(16,'Kevin','Spacey',NULL,NULL),(17,'Helen','Hunt',NULL,NULL),(18,'Al','Pacino',NULL,NULL),(19,'Marlo','Brando',NULL,NULL),(20,'Robert','De Niro',NULL,NULL),(21,'Diane','Keaton',NULL,NULL),(22,'Chris','O\'Donell',NULL,NULL),(23,'Gabrielle','Anwar',NULL,NULL),(24,'Philip','Seymour Hoffman',NULL,NULL),(25,'Russell','Crowe',NULL,NULL),(26,'Joaquin','Phoenix',NULL,NULL),(27,'Connie','Nielsen',NULL,NULL),(28,'Brad','Pitt',NULL,NULL),(29,'Edward','Norton',NULL,NULL);
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calification`
--

DROP TABLE IF EXISTS `calification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calification`
--

LOCK TABLES `calification` WRITE;
/*!40000 ALTER TABLE `calification` DISABLE KEYS */;
INSERT INTO `calification` VALUES (1,'ATP',NULL,NULL),(2,'+13',NULL,NULL),(3,'+16',NULL,NULL),(4,'+18',NULL,NULL),(5,'C',NULL,NULL);
/*!40000 ALTER TABLE `calification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Administrador',NULL,NULL),(2,'Usuario',NULL,NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `director_movie`
--

DROP TABLE IF EXISTS `director_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `director_movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_id` int(11) NOT NULL,
  `director_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6a115c39-445b-46db-afc2-5155823d3f76` (`movie_id`),
  KEY `FK_89ca4618-0320-406c-8cb2-a793162d44d7` (`director_id`),
  CONSTRAINT `FK_6a115c39-445b-46db-afc2-5155823d3f76` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_89ca4618-0320-406c-8cb2-a793162d44d7` FOREIGN KEY (`director_id`) REFERENCES `directors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `director_movie`
--

LOCK TABLES `director_movie` WRITE;
/*!40000 ALTER TABLE `director_movie` DISABLE KEYS */;
INSERT INTO `director_movie` VALUES (1,1,1,NULL,NULL),(2,2,2,NULL,NULL),(3,3,3,NULL,NULL),(4,4,4,NULL,NULL),(5,5,5,NULL,NULL),(6,6,6,NULL,NULL),(7,7,7,NULL,NULL),(8,8,7,NULL,NULL),(9,9,7,NULL,NULL),(10,10,8,NULL,NULL),(11,11,9,NULL,NULL),(12,12,10,NULL,NULL),(14,26,1,NULL,NULL);
/*!40000 ALTER TABLE `director_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directors`
--

DROP TABLE IF EXISTS `directors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `directors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directors`
--

LOCK TABLES `directors` WRITE;
/*!40000 ALTER TABLE `directors` DISABLE KEYS */;
INSERT INTO `directors` VALUES (1,'Clint','Eastwood',NULL,NULL),(2,'Jim','Sheridan',NULL,NULL),(3,'Martin','Scorsese',NULL,NULL),(4,'Alejandro','Gonzalez Iñarritu',NULL,NULL),(5,'Christopher','Nolan',NULL,NULL),(6,'Mimi','Leder',NULL,NULL),(7,'Francis','Ford Coppola',NULL,NULL),(8,'Martin','Brest',NULL,NULL),(9,'Ridley','Scott',NULL,NULL),(10,'David','Fincher',NULL,NULL);
/*!40000 ALTER TABLE `directors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Crimen/Drama',1,NULL,NULL),(2,'Drama',1,NULL,NULL),(3,'Acción/ Ciencia Ficción',1,NULL,NULL),(4,'Drama/Romance',1,NULL,NULL),(5,'Acción',1,NULL,NULL),(6,'Suspenso/Drama',1,NULL,NULL);
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `rating` decimal(10,2) NOT NULL,
  `length` int(10) NOT NULL,
  `genre_id` int(10) NOT NULL,
  `origin_id` int(10) NOT NULL,
  `calification_id` int(10) NOT NULL,
  `synopsis` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `delete_at` timestamp NULL DEFAULT NULL,
  `release_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fbc4259d-490e-4a8e-bbfe-b15b04472ee8` (`genre_id`),
  KEY `FK_c2f7b9c3-57d8-4483-b858-7908c15a67ab` (`origin_id`),
  KEY `FK_f460f33b-aebc-4b14-ba37-d7b74bfa825c` (`calification_id`),
  CONSTRAINT `FK_c2f7b9c3-57d8-4483-b858-7908c15a67ab` FOREIGN KEY (`origin_id`) REFERENCES `origin` (`id`),
  CONSTRAINT `FK_f460f33b-aebc-4b14-ba37-d7b74bfa825c` FOREIGN KEY (`calification_id`) REFERENCES `calification` (`id`),
  CONSTRAINT `FK_fbc4259d-490e-4a8e-bbfe-b15b04472ee8` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Rio Místico',9.10,137,1,1,2,'Los viejos amigos de la infancia Jimmy, Sean y Dave se reencuentran de adultos tras el asesinato de la hija de uno de ellos. Las rencillas del pasado envenenan la investigación que, de forma paralela a la policía, llevan para hallar al asesino.',NULL,NULL,NULL,NULL,'pelicula-1.jpg'),(2,'En el nombre del padre',8.70,141,2,1,2,'Se basa en la historia real de los Cuatro de Guildford, cuatro personas falsamente condenadas por los atentados con bombas en el pub de Guildford de 1974, en los que murieron cuatro soldados británicos fuera de servicio y un civil.',NULL,NULL,NULL,NULL,'pelicula-2.jpg'),(3,'Pandilla de New York',8.80,125,1,1,2,'En medio de una guerra civil, la joven nación se encuentra al borde del caos. Pero en Five Points, el barrio más pobre de Nueva York, donde impera la miseria, la delincuencia y el crimen organizado, se está librando otra guerra.',NULL,NULL,NULL,NULL,'pelicula-3.jpg'),(4,'21 gramos',8.30,117,1,1,2,'Paul es un profesor universitario con una dolencia coronaria muy grave. Cristina vive una existencia de cuento de hadas. Y Jack es un exconvicto de fuertes convicciones religiosas que lucha por sacar adelante a su familia.',NULL,NULL,NULL,NULL,'pelicula-4.jpg'),(5,'El Orgien',8.10,121,3,1,2,'Dom Cobb es un ladrón con una extraña habilidad para entrar a los sueños de la gente y robarles los secretos de sus subconscientes. Cobb obtiene la oportunidad de redimirse cuando recibe una tarea imposible: plantar una idea en la mente de una persona.',NULL,NULL,NULL,NULL,'pelicula-5.jpg'),(6,'Cadena de Favores',7.90,107,4,1,2,'Trevor decide llevar a cabo un experimento para su clase de ciencias sociales bajo una simple premisa: él hará una serie de favores a tres personas y, a cambio, ellos le devolverán el favor haciendo algo para otras tres, y así sucesivamente.',NULL,NULL,NULL,NULL,'pelicula-6.jpg'),(7,'El Padrino',8.90,181,1,1,2,'Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York en los años 40. El hombre tiene cuatro hijos: Connie, Sonny, Fredo y Michael, que no quiere saber nada de los negocios sucios de su padre.',NULL,NULL,NULL,NULL,'pelicula-7.jpg'),(8,'El Padrino II',9.00,185,1,1,2,'Michael es elegido para liderar los negocios familiares. El nuevo cabeza de familia debe lidiar con un panorama cambiante de amistades y enemistades, al tener que negociar con la mafia judía y perder el apoyo de Frankie.',NULL,NULL,NULL,NULL,'pelicula-8.jpg'),(9,'El Padrino III',8.70,179,1,1,2,'Michael intenta legitimizar todas las posesiones de la familia negociando con el Vaticano. Después de luchar toda su vida se encuentra cansado y centra todas sus esperanzas en encontrar a un sucesor que se haga cargo de los negocios.',NULL,NULL,NULL,NULL,'pelicula-9.jpg'),(10,'Perfume de mujer',7.80,157,2,1,2,'Frank, un militar ciego, emprende un viaje a Nueva York con un joven recluta que le cuida durante Acción de Gracias. Frank está dispuesto a matar a un antiguo compañero de armas, y después, suicidarse',NULL,NULL,NULL,NULL,'pelicula-10.jpg'),(11,'Gladiador',8.10,155,5,1,2,'El general romano Máximo es el soporte más leal del emperador Marco Aurelio, que lo ha conducido de victoria en victoria. Sin embargo, Cómodo, el hijo de Marco Aurelio, está celoso del prestigio de Máximo y aún más del amor que su padre siente por él.',NULL,NULL,NULL,NULL,'pelicula-11.jpg'),(12,'El club del a pelea',8.50,139,6,1,2,'Un empleado de oficina insomne, harto de su vida, se cruza con un vendedor peculiar. Ambos crean un club de lucha clandestino como forma de terapia y, poco a poco, la organización crece y sus objetivos toman otro rumbo.',NULL,NULL,NULL,NULL,'pelicula-12.jpg'),(26,'Titanic la ultima',6.80,230,1,1,1,'Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido.','2021-12-15 20:04:40',NULL,NULL,'2021-12-15 21:34:19','default-image.png');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `origin`
--

DROP TABLE IF EXISTS `origin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `origin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `origin`
--

LOCK TABLES `origin` WRITE;
/*!40000 ALTER TABLE `origin` DISABLE KEYS */;
INSERT INTO `origin` VALUES (1,'Estados Unidos',NULL,NULL),(2,'Reino Unido',NULL,NULL),(3,'Argentina',NULL,NULL),(4,'Francia',NULL,NULL),(5,'Italia',NULL,NULL),(6,'España',NULL,NULL);
/*!40000 ALTER TABLE `origin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birth` date NOT NULL,
  `category_id` int(11) DEFAULT 2,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `FK_1534d214-6b41-44b3-b5c4-34e59a7c05da` (`category_id`),
  CONSTRAINT `FK_1534d214-6b41-44b3-b5c4-34e59a7c05da` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ignacio','Fabiani','ignacio@gmail.com','ignacio123','1987-07-02',1,NULL,NULL,'usuario-5'),(2,'Thomas','Whitney','thomas@gmail.com','$2a$10$15vIhBP9yLB9Haochm/nSuGQBtPR2Y/vvI7pBgEU9FYZfGgP5RzMG','1985-01-01',2,NULL,'2021-12-14 20:46:12','usuario-5'),(3,'Marcos','Corti','marcos@gmail.com','marcos123','1985-01-01',1,NULL,NULL,'usuario-5'),(4,'Juan Manuel','Pedrozo','juanmanuel@gmail.com','juanmanuel123','1985-01-01',1,NULL,NULL,'usuario-5'),(5,'Ignacio','Fabiani','ignacio6@gmail.com','$2a$10$UeST40etFr49RXmBoGoyDue7saM6QKxL51Se/SqyPRjP5JaheNeme','1987-07-02',1,'2021-12-13 05:01:02','2021-12-15 21:40:43','default-image.jpg'),(17,'Jose','Perez','jose1234@gmail.com','$2a$10$PsApnyceDjda3nSaP4fkB.VRsO9HeZiZHJHlI.N3AKuXy2Ak.Yy0y','1987-08-02',1,'2021-12-13 18:02:44','2021-12-15 21:43:17','default-image.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'movies'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-16 21:42:48
