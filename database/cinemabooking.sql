-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cinemabooking
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_fname` varchar(45) NOT NULL,
  `admin_lname` varchar(45) NOT NULL,
  `admin_username` varchar(45) NOT NULL,
  `admin_password` varchar(45) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Roland','Salloum','Ror24','password24'),(2,'Hadi','Khairallah','Hadi','hadikh');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket_id` int(11) NOT NULL,
  `seat_id` int(11) NOT NULL,
  `movie_eventId` int(11) NOT NULL,
  `seat_status` tinyint(4) NOT NULL,
  `booking_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`booking_id`),
  KEY `ticket_id_idx` (`ticket_id`),
  KEY `seat_id_idx` (`seat_id`),
  CONSTRAINT `seat_id` FOREIGN KEY (`seat_id`) REFERENCES `seat` (`seat_id`),
  CONSTRAINT `ticket_id` FOREIGN KEY (`ticket_id`) REFERENCES `ticket` (`ticket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (28,28,1960,16,1,'2019-12-14 10:26:54'),(29,29,1960,17,1,'2019-12-14 10:39:53'),(30,30,1966,17,1,'2019-12-14 10:40:25'),(31,31,1580,1,1,'2019-12-14 13:22:43'),(32,32,1522,1,1,'2019-12-14 13:23:14'),(33,33,1502,1,1,'2019-12-14 13:24:39'),(34,34,1558,1,1,'2019-12-14 13:30:16'),(35,35,1519,1,1,'2019-12-14 14:01:47'),(36,36,1518,1,1,'2019-12-14 14:01:54'),(37,37,1579,1,1,'2019-12-14 14:02:17');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinema_rating`
--

DROP TABLE IF EXISTS `cinema_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinema_rating` (
  `cinemaRating_id` int(11) NOT NULL AUTO_INCREMENT,
  `cinemaRated_id` int(11) NOT NULL,
  `customerRater_id` int(11) NOT NULL,
  `date_of_rating` datetime(6) NOT NULL,
  `cinema_review_Rating` double NOT NULL,
  `cinema_rating_Review` varchar(150) NOT NULL,
  PRIMARY KEY (`cinemaRating_id`,`cinemaRated_id`,`customerRater_id`),
  KEY `cinemaRating_id_idx` (`cinemaRated_id`),
  KEY `customerRater_id_idx` (`customerRater_id`),
  CONSTRAINT `cinemaRating_id` FOREIGN KEY (`cinemaRated_id`) REFERENCES `cinemabranch` (`cinema_id`),
  CONSTRAINT `customerRater_id` FOREIGN KEY (`customerRater_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinema_rating`
--

LOCK TABLES `cinema_rating` WRITE;
/*!40000 ALTER TABLE `cinema_rating` DISABLE KEYS */;
INSERT INTO `cinema_rating` VALUES (1,4,1,'2019-12-30 09:14:00.000000',7,'Decent Cinema Service'),(2,5,1,'2019-11-21 10:30:00.000000',8,'Great Environement'),(3,6,1,'2019-05-06 07:22:00.000000',9,'Great Service, Neat branch'),(4,4,2,'2019-12-12 11:00:00.000000',7,'Good Service'),(5,5,2,'2019-04-05 08:00:00.000000',7,'Audio needs some fix issues');
/*!40000 ALTER TABLE `cinema_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinemabranch`
--

DROP TABLE IF EXISTS `cinemabranch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinemabranch` (
  `cinema_id` int(11) NOT NULL AUTO_INCREMENT,
  `cinema_name` varchar(45) NOT NULL,
  `cinema_address` varchar(45) NOT NULL,
  `cinema_phone` varchar(45) NOT NULL,
  `cinema_manager` varchar(45) NOT NULL,
  `cinema_seat_capacity` int(11) NOT NULL,
  PRIMARY KEY (`cinema_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinemabranch`
--

LOCK TABLES `cinemabranch` WRITE;
/*!40000 ALTER TABLE `cinemabranch` DISABLE KEYS */;
INSERT INTO `cinemabranch` VALUES (4,'Cineworld','Hamra-Beirut','71-124521','Joe Badawe',800),(5,'CineWorld','Jbeil','70-740530','Hoda hannah',400),(6,'CineWorld','Kaslik-Jounieh','03-755390','Raymond Sleiman',400),(9,'CineWorld','Batroun','03804427','roro',200),(15,'Test','Testing','03804427','Roland ',200);
/*!40000 ALTER TABLE `cinemabranch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `current_timestamp_demos`
--

DROP TABLE IF EXISTS `current_timestamp_demos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `current_timestamp_demos` (
  `id` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `current_timestamp_demos`
--

LOCK TABLES `current_timestamp_demos` WRITE;
/*!40000 ALTER TABLE `current_timestamp_demos` DISABLE KEYS */;
INSERT INTO `current_timestamp_demos` VALUES (1,'2','2019-12-12 01:14:36');
/*!40000 ALTER TABLE `current_timestamp_demos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_fname` varchar(45) NOT NULL,
  `customer_lname` varchar(45) NOT NULL,
  `customer_phone` varchar(45) NOT NULL,
  `customer_email` varchar(45) NOT NULL,
  `customer_address` varchar(45) NOT NULL,
  `customer_gender` varchar(45) NOT NULL,
  `customer_username` varchar(45) DEFAULT NULL,
  `customer_password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Robin','Karaa','71-124412','robin.karaa@lau.edu','Jounieh','Male','robz00','rkpass'),(2,'Georgio','Abi Antoun','03-124552','georgio.antoun@lau.edu','Tripoli','Male','Geo10','gapass'),(6,'firname','lname','phone','email','Address','gendr','username','pass');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `movie_id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_name` varchar(45) NOT NULL,
  `movie_genre` varchar(45) NOT NULL,
  `movie_duration` int(11) NOT NULL,
  `movie_description` varchar(500) NOT NULL,
  `movie_releasedate` date NOT NULL,
  `movie_directors` varchar(45) NOT NULL,
  `movie_stars` varchar(45) NOT NULL,
  `movie_urlImage` varchar(300) NOT NULL,
  `movie_urlPosterImage` varchar(300) NOT NULL,
  PRIMARY KEY (`movie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'Joker','Drama/Thriller',122,'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he\'s part of the world around him','2019-12-27','Todd Philipts','Joaquin Phoenix','https://images-na.ssl-images-amazon.com/images/I/51E%2Bo6036kL.jpg','https://images3.alphacoders.com/104/thumb-1920-1041825.jpg'),(4,'Terminator: Dark Fate','Fantansy/Sci-fi',128,'In Mexico City, a newly modified liquid Terminator -- the Rev-9 model -- arrives from the future to kill a young factory worker named Dani Ramos. Also sent back in time is Grace, a hybrid cyborg human who must protect Ramos from the seemingly indestructible robotic assassin. But the two women soon find some much-needed help from a pair of unexpected allies -- seasoned warrior Sarah Connor and the T-800 Terminator.','2019-12-28','Tim Miller','Arnold, Linda Hamilton','https://images-na.ssl-images-amazon.com/images/I/71mUOdelVeL._SL1481_.jpg','https://www.vitalthrills.com/wp-content/uploads/2019/10/darkfateimax.jpg'),(6,'Avengers: Endgame','Science fiction',182,'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.','2019-04-22','Anthony Russo, Joe Russo','Robert Downey Jr.','https://images-na.ssl-images-amazon.com/images/I/91e9898R7QL._RI_.jpg','https://www.graciaviva.cat/png/big/30/305023_endgame-wallpaper.jpg'),(8,'Spider-Man: Far From Home','Science fiction',129,'Peter Parker\'s relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.','2019-06-26','Jon Watts','Tom Holland','https://i.redd.it/82kayix03uz21.png','https://wallpaperaccess.com/full/1342814.jpg'),(9,'Maleficent: Mistress of Evil','Fantasy',118,'Maleficent travels to a grand old castle to celebrate young Aurora\'s upcoming wedding to Prince Phillip. While there, she meets Aurora\'s future mother-in-law -- a conniving queen who hatches a devious plot to destroy the land\'s fairies. Hoping to stop her, Maleficent joins forces with a seasoned warrior and a group of outcasts to battle the queen and her powerful army.','2019-10-16','Joachim Ronning','Angelina Jolie','https://i.imgur.com/LM9Htu7.jpg','https://wallpapercave.com/wp/wp1875236.jpg');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_event`
--

DROP TABLE IF EXISTS `movie_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_event` (
  `movie_eventId` int(11) NOT NULL AUTO_INCREMENT,
  `movie_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `movie_start_time` datetime(6) NOT NULL,
  `movie_end_time` datetime(6) NOT NULL,
  `ticket_price` double NOT NULL,
  PRIMARY KEY (`movie_eventId`,`movie_id`,`room_id`),
  UNIQUE KEY `movie_eventId_UNIQUE` (`movie_eventId`),
  KEY `room_id_idx` (`room_id`),
  KEY `movie_id_idx` (`movie_id`),
  CONSTRAINT `movieIDF` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`movie_id`),
  CONSTRAINT `movie_id` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`movie_id`),
  CONSTRAINT `roomIDF` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`),
  CONSTRAINT `room_id` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_event`
--

LOCK TABLES `movie_event` WRITE;
/*!40000 ALTER TABLE `movie_event` DISABLE KEYS */;
INSERT INTO `movie_event` VALUES (1,1,2,'2019-12-30 08:00:00.000000','2019-12-30 10:00:00.000000',10),(2,1,2,'2019-12-30 10:00:00.000000','2019-12-31 12:00:00.000000',15),(3,1,4,'2019-12-30 05:00:00.000000','2019-12-30 07:00:00.000000',20),(4,1,5,'2019-12-30 12:00:00.000000','2019-12-30 10:00:00.000000',15),(5,1,7,'2019-12-30 12:00:00.000000','2019-12-30 10:00:00.000000',10),(6,4,3,'2019-12-30 12:00:00.000000','2019-12-30 10:00:00.000000',15),(7,4,6,'2019-12-30 12:00:00.000000','2019-12-30 10:00:00.000000',20),(8,4,8,'2019-12-02 11:00:00.000000','2019-12-02 12:00:00.000000',15),(15,1,45,'2019-12-13 17:30:32.000000','2019-12-13 19:30:32.000000',10),(16,4,45,'2019-12-13 17:32:32.000000','2019-12-13 19:30:32.000000',32),(17,6,45,'2019-08-02 12:00:00.000000','2019-08-02 14:00:00.000000',10);
/*!40000 ALTER TABLE `movie_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_rating`
--

DROP TABLE IF EXISTS `movie_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_rating` (
  `customer_ratedId` int(11) NOT NULL,
  `movie_ratedId` int(11) NOT NULL,
  `movie_review_rating` double NOT NULL,
  `movie_review_comment` varchar(100) NOT NULL,
  PRIMARY KEY (`customer_ratedId`,`movie_ratedId`),
  KEY `customer_id_idx` (`customer_ratedId`),
  KEY `movie_id_idx` (`movie_ratedId`),
  CONSTRAINT `customer_ratedId` FOREIGN KEY (`customer_ratedId`) REFERENCES `customer` (`customer_id`),
  CONSTRAINT `movie_ratedId` FOREIGN KEY (`movie_ratedId`) REFERENCES `movie` (`movie_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_rating`
--

LOCK TABLES `movie_rating` WRITE;
/*!40000 ALTER TABLE `movie_rating` DISABLE KEYS */;
INSERT INTO `movie_rating` VALUES (1,1,8.5,'Great Movie, The story is well written'),(1,4,9.5,'Was a great movie to watch, same as all terminator movies'),(2,1,7,'Decent movie to watch');
/*!40000 ALTER TABLE `movie_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!50001 DROP VIEW IF EXISTS `reservation`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `reservation` AS SELECT 
 1 AS `customer_id`,
 1 AS `customer_username`,
 1 AS `movie_name`,
 1 AS `cinema_address`,
 1 AS `room_type`,
 1 AS `seat_Row`,
 1 AS `seat_column`,
 1 AS `ticket_price`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `room_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_capacity` int(11) NOT NULL,
  `room_type` varchar(45) NOT NULL,
  `room_status` tinyint(4) NOT NULL,
  `cinema_branch` int(11) NOT NULL,
  PRIMARY KEY (`room_id`),
  KEY `cinema_id_idx` (`cinema_branch`),
  CONSTRAINT `cinema_branch` FOREIGN KEY (`cinema_branch`) REFERENCES `cinemabranch` (`cinema_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (2,200,'A',0,4),(3,200,'A',1,4),(4,100,'B',0,4),(5,100,'B',1,5),(6,100,'B',1,5),(7,50,'C',1,6),(8,50,'C',1,6),(9,100,'B',1,6),(20,100,'B',1,9),(21,100,'B',1,9),(23,50,'C',1,9),(28,200,'A',1,5),(29,200,'A',1,6),(34,100,'B',1,4),(44,200,'A',0,4),(45,200,'A',0,15);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `seat_id` int(11) NOT NULL AUTO_INCREMENT,
  `roomId_seat` int(11) NOT NULL,
  `seat_row` int(11) NOT NULL,
  `seat_column` int(11) NOT NULL,
  PRIMARY KEY (`seat_id`),
  KEY `room_id_idx` (`roomId_seat`),
  CONSTRAINT `roomId_seat` FOREIGN KEY (`roomId_seat`) REFERENCES `room` (`room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2051 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (501,20,0,0),(502,20,0,1),(503,20,0,2),(504,20,0,3),(505,20,0,4),(506,20,0,5),(507,20,0,6),(508,20,0,7),(509,20,0,8),(510,20,0,9),(511,20,1,0),(512,20,1,1),(513,20,1,2),(514,20,1,3),(515,20,1,4),(516,20,1,5),(517,20,1,6),(518,20,1,7),(519,20,1,8),(520,20,1,9),(521,20,2,0),(522,20,2,1),(523,20,2,2),(524,20,2,3),(525,20,2,4),(526,20,2,5),(527,20,2,6),(528,20,2,7),(529,20,2,8),(530,20,2,9),(531,20,3,0),(532,20,3,1),(533,20,3,2),(534,20,3,3),(535,20,3,4),(536,20,3,5),(537,20,3,6),(538,20,3,7),(539,20,3,8),(540,20,3,9),(541,20,4,0),(542,20,4,1),(543,20,4,2),(544,20,4,3),(545,20,4,4),(546,20,4,5),(547,20,4,6),(548,20,4,7),(549,20,4,8),(550,20,4,9),(551,20,5,0),(552,20,5,1),(553,20,5,2),(554,20,5,3),(555,20,5,4),(556,20,5,5),(557,20,5,6),(558,20,5,7),(559,20,5,8),(560,20,5,9),(561,20,6,0),(562,20,6,1),(563,20,6,2),(564,20,6,3),(565,20,6,4),(566,20,6,5),(567,20,6,6),(568,20,6,7),(569,20,6,8),(570,20,6,9),(571,20,7,0),(572,20,7,1),(573,20,7,2),(574,20,7,3),(575,20,7,4),(576,20,7,5),(577,20,7,6),(578,20,7,7),(579,20,7,8),(580,20,7,9),(581,20,8,0),(582,20,8,1),(583,20,8,2),(584,20,8,3),(585,20,8,4),(586,20,8,5),(587,20,8,6),(588,20,8,7),(589,20,8,8),(590,20,8,9),(591,20,9,0),(592,20,9,1),(593,20,9,2),(594,20,9,3),(595,20,9,4),(596,20,9,5),(597,20,9,6),(598,20,9,7),(599,20,9,8),(600,20,9,9),(601,21,0,0),(602,21,0,1),(603,21,0,2),(604,21,0,3),(605,21,0,4),(606,21,0,5),(607,21,0,6),(608,21,0,7),(609,21,0,8),(610,21,0,9),(611,21,1,0),(612,21,1,1),(613,21,1,2),(614,21,1,3),(615,21,1,4),(616,21,1,5),(617,21,1,6),(618,21,1,7),(619,21,1,8),(620,21,1,9),(621,21,2,0),(622,21,2,1),(623,21,2,2),(624,21,2,3),(625,21,2,4),(626,21,2,5),(627,21,2,6),(628,21,2,7),(629,21,2,8),(630,21,2,9),(631,21,3,0),(632,21,3,1),(633,21,3,2),(634,21,3,3),(635,21,3,4),(636,21,3,5),(637,21,3,6),(638,21,3,7),(639,21,3,8),(640,21,3,9),(641,21,4,0),(642,21,4,1),(643,21,4,2),(644,21,4,3),(645,21,4,4),(646,21,4,5),(647,21,4,6),(648,21,4,7),(649,21,4,8),(650,21,4,9),(651,21,5,0),(652,21,5,1),(653,21,5,2),(654,21,5,3),(655,21,5,4),(656,21,5,5),(657,21,5,6),(658,21,5,7),(659,21,5,8),(660,21,5,9),(661,21,6,0),(662,21,6,1),(663,21,6,2),(664,21,6,3),(665,21,6,4),(666,21,6,5),(667,21,6,6),(668,21,6,7),(669,21,6,8),(670,21,6,9),(671,21,7,0),(672,21,7,1),(673,21,7,2),(674,21,7,3),(675,21,7,4),(676,21,7,5),(677,21,7,6),(678,21,7,7),(679,21,7,8),(680,21,7,9),(681,21,8,0),(682,21,8,1),(683,21,8,2),(684,21,8,3),(685,21,8,4),(686,21,8,5),(687,21,8,6),(688,21,8,7),(689,21,8,8),(690,21,8,9),(691,21,9,0),(692,21,9,1),(693,21,9,2),(694,21,9,3),(695,21,9,4),(696,21,9,5),(697,21,9,6),(698,21,9,7),(699,21,9,8),(700,21,9,9),(901,23,0,0),(902,23,0,1),(903,23,0,2),(904,23,0,3),(905,23,0,4),(906,23,0,5),(907,23,0,6),(908,23,0,7),(909,23,0,8),(910,23,0,9),(911,23,1,0),(912,23,1,1),(913,23,1,2),(914,23,1,3),(915,23,1,4),(916,23,1,5),(917,23,1,6),(918,23,1,7),(919,23,1,8),(920,23,1,9),(921,23,2,0),(922,23,2,1),(923,23,2,2),(924,23,2,3),(925,23,2,4),(926,23,2,5),(927,23,2,6),(928,23,2,7),(929,23,2,8),(930,23,2,9),(931,23,3,0),(932,23,3,1),(933,23,3,2),(934,23,3,3),(935,23,3,4),(936,23,3,5),(937,23,3,6),(938,23,3,7),(939,23,3,8),(940,23,3,9),(941,23,4,0),(942,23,4,1),(943,23,4,2),(944,23,4,3),(945,23,4,4),(946,23,4,5),(947,23,4,6),(948,23,4,7),(949,23,4,8),(950,23,4,9),(1251,44,0,0),(1252,44,0,1),(1253,44,0,2),(1254,44,0,3),(1255,44,0,4),(1256,44,0,5),(1257,44,0,6),(1258,44,0,7),(1259,44,0,8),(1260,44,0,9),(1261,44,0,10),(1262,44,0,11),(1263,44,0,12),(1264,44,0,13),(1265,44,0,14),(1266,44,0,15),(1267,44,0,16),(1268,44,0,17),(1269,44,0,18),(1270,44,0,19),(1271,44,1,0),(1272,44,1,1),(1273,44,1,2),(1274,44,1,3),(1275,44,1,4),(1276,44,1,5),(1277,44,1,6),(1278,44,1,7),(1279,44,1,8),(1280,44,1,9),(1281,44,1,10),(1282,44,1,11),(1283,44,1,12),(1284,44,1,13),(1285,44,1,14),(1286,44,1,15),(1287,44,1,16),(1288,44,1,17),(1289,44,1,18),(1290,44,1,19),(1291,44,2,0),(1292,44,2,1),(1293,44,2,2),(1294,44,2,3),(1295,44,2,4),(1296,44,2,5),(1297,44,2,6),(1298,44,2,7),(1299,44,2,8),(1300,44,2,9),(1301,44,2,10),(1302,44,2,11),(1303,44,2,12),(1304,44,2,13),(1305,44,2,14),(1306,44,2,15),(1307,44,2,16),(1308,44,2,17),(1309,44,2,18),(1310,44,2,19),(1311,44,3,0),(1312,44,3,1),(1313,44,3,2),(1314,44,3,3),(1315,44,3,4),(1316,44,3,5),(1317,44,3,6),(1318,44,3,7),(1319,44,3,8),(1320,44,3,9),(1321,44,3,10),(1322,44,3,11),(1323,44,3,12),(1324,44,3,13),(1325,44,3,14),(1326,44,3,15),(1327,44,3,16),(1328,44,3,17),(1329,44,3,18),(1330,44,3,19),(1331,44,4,0),(1332,44,4,1),(1333,44,4,2),(1334,44,4,3),(1335,44,4,4),(1336,44,4,5),(1337,44,4,6),(1338,44,4,7),(1339,44,4,8),(1340,44,4,9),(1341,44,4,10),(1342,44,4,11),(1343,44,4,12),(1344,44,4,13),(1345,44,4,14),(1346,44,4,15),(1347,44,4,16),(1348,44,4,17),(1349,44,4,18),(1350,44,4,19),(1351,44,5,0),(1352,44,5,1),(1353,44,5,2),(1354,44,5,3),(1355,44,5,4),(1356,44,5,5),(1357,44,5,6),(1358,44,5,7),(1359,44,5,8),(1360,44,5,9),(1361,44,5,10),(1362,44,5,11),(1363,44,5,12),(1364,44,5,13),(1365,44,5,14),(1366,44,5,15),(1367,44,5,16),(1368,44,5,17),(1369,44,5,18),(1370,44,5,19),(1371,44,6,0),(1372,44,6,1),(1373,44,6,2),(1374,44,6,3),(1375,44,6,4),(1376,44,6,5),(1377,44,6,6),(1378,44,6,7),(1379,44,6,8),(1380,44,6,9),(1381,44,6,10),(1382,44,6,11),(1383,44,6,12),(1384,44,6,13),(1385,44,6,14),(1386,44,6,15),(1387,44,6,16),(1388,44,6,17),(1389,44,6,18),(1390,44,6,19),(1391,44,7,0),(1392,44,7,1),(1393,44,7,2),(1394,44,7,3),(1395,44,7,4),(1396,44,7,5),(1397,44,7,6),(1398,44,7,7),(1399,44,7,8),(1400,44,7,9),(1401,44,7,10),(1402,44,7,11),(1403,44,7,12),(1404,44,7,13),(1405,44,7,14),(1406,44,7,15),(1407,44,7,16),(1408,44,7,17),(1409,44,7,18),(1410,44,7,19),(1411,44,8,0),(1412,44,8,1),(1413,44,8,2),(1414,44,8,3),(1415,44,8,4),(1416,44,8,5),(1417,44,8,6),(1418,44,8,7),(1419,44,8,8),(1420,44,8,9),(1421,44,8,10),(1422,44,8,11),(1423,44,8,12),(1424,44,8,13),(1425,44,8,14),(1426,44,8,15),(1427,44,8,16),(1428,44,8,17),(1429,44,8,18),(1430,44,8,19),(1431,44,9,0),(1432,44,9,1),(1433,44,9,2),(1434,44,9,3),(1435,44,9,4),(1436,44,9,5),(1437,44,9,6),(1438,44,9,7),(1439,44,9,8),(1440,44,9,9),(1441,44,9,10),(1442,44,9,11),(1443,44,9,12),(1444,44,9,13),(1445,44,9,14),(1446,44,9,15),(1447,44,9,16),(1448,44,9,17),(1449,44,9,18),(1450,44,9,19),(1451,2,0,0),(1452,2,0,1),(1453,2,0,2),(1454,2,0,3),(1455,2,0,4),(1456,2,0,5),(1457,2,0,6),(1458,2,0,7),(1459,2,0,8),(1460,2,0,9),(1461,2,0,10),(1462,2,0,11),(1463,2,0,12),(1464,2,0,13),(1465,2,0,14),(1466,2,0,15),(1467,2,0,16),(1468,2,0,17),(1469,2,0,18),(1470,2,0,19),(1471,2,1,0),(1472,2,1,1),(1473,2,1,2),(1474,2,1,3),(1475,2,1,4),(1476,2,1,5),(1477,2,1,6),(1478,2,1,7),(1479,2,1,8),(1480,2,1,9),(1481,2,1,10),(1482,2,1,11),(1483,2,1,12),(1484,2,1,13),(1485,2,1,14),(1486,2,1,15),(1487,2,1,16),(1488,2,1,17),(1489,2,1,18),(1490,2,1,19),(1491,2,2,0),(1492,2,2,1),(1493,2,2,2),(1494,2,2,3),(1495,2,2,4),(1496,2,2,5),(1497,2,2,6),(1498,2,2,7),(1499,2,2,8),(1500,2,2,9),(1501,2,2,10),(1502,2,2,11),(1503,2,2,12),(1504,2,2,13),(1505,2,2,14),(1506,2,2,15),(1507,2,2,16),(1508,2,2,17),(1509,2,2,18),(1510,2,2,19),(1511,2,3,0),(1512,2,3,1),(1513,2,3,2),(1514,2,3,3),(1515,2,3,4),(1516,2,3,5),(1517,2,3,6),(1518,2,3,7),(1519,2,3,8),(1520,2,3,9),(1521,2,3,10),(1522,2,3,11),(1523,2,3,12),(1524,2,3,13),(1525,2,3,14),(1526,2,3,15),(1527,2,3,16),(1528,2,3,17),(1529,2,3,18),(1530,2,3,19),(1531,2,4,0),(1532,2,4,1),(1533,2,4,2),(1534,2,4,3),(1535,2,4,4),(1536,2,4,5),(1537,2,4,6),(1538,2,4,7),(1539,2,4,8),(1540,2,4,9),(1541,2,4,10),(1542,2,4,11),(1543,2,4,12),(1544,2,4,13),(1545,2,4,14),(1546,2,4,15),(1547,2,4,16),(1548,2,4,17),(1549,2,4,18),(1550,2,4,19),(1551,2,5,0),(1552,2,5,1),(1553,2,5,2),(1554,2,5,3),(1555,2,5,4),(1556,2,5,5),(1557,2,5,6),(1558,2,5,7),(1559,2,5,8),(1560,2,5,9),(1561,2,5,10),(1562,2,5,11),(1563,2,5,12),(1564,2,5,13),(1565,2,5,14),(1566,2,5,15),(1567,2,5,16),(1568,2,5,17),(1569,2,5,18),(1570,2,5,19),(1571,2,6,0),(1572,2,6,1),(1573,2,6,2),(1574,2,6,3),(1575,2,6,4),(1576,2,6,5),(1577,2,6,6),(1578,2,6,7),(1579,2,6,8),(1580,2,6,9),(1581,2,6,10),(1582,2,6,11),(1583,2,6,12),(1584,2,6,13),(1585,2,6,14),(1586,2,6,15),(1587,2,6,16),(1588,2,6,17),(1589,2,6,18),(1590,2,6,19),(1591,2,7,0),(1592,2,7,1),(1593,2,7,2),(1594,2,7,3),(1595,2,7,4),(1596,2,7,5),(1597,2,7,6),(1598,2,7,7),(1599,2,7,8),(1600,2,7,9),(1601,2,7,10),(1602,2,7,11),(1603,2,7,12),(1604,2,7,13),(1605,2,7,14),(1606,2,7,15),(1607,2,7,16),(1608,2,7,17),(1609,2,7,18),(1610,2,7,19),(1611,2,8,0),(1612,2,8,1),(1613,2,8,2),(1614,2,8,3),(1615,2,8,4),(1616,2,8,5),(1617,2,8,6),(1618,2,8,7),(1619,2,8,8),(1620,2,8,9),(1621,2,8,10),(1622,2,8,11),(1623,2,8,12),(1624,2,8,13),(1625,2,8,14),(1626,2,8,15),(1627,2,8,16),(1628,2,8,17),(1629,2,8,18),(1630,2,8,19),(1631,2,9,0),(1632,2,9,1),(1633,2,9,2),(1634,2,9,3),(1635,2,9,4),(1636,2,9,5),(1637,2,9,6),(1638,2,9,7),(1639,2,9,8),(1640,2,9,9),(1641,2,9,10),(1642,2,9,11),(1643,2,9,12),(1644,2,9,13),(1645,2,9,14),(1646,2,9,15),(1647,2,9,16),(1648,2,9,17),(1649,2,9,18),(1650,2,9,19),(1851,45,0,0),(1852,45,0,1),(1853,45,0,2),(1854,45,0,3),(1855,45,0,4),(1856,45,0,5),(1857,45,0,6),(1858,45,0,7),(1859,45,0,8),(1860,45,0,9),(1861,45,0,10),(1862,45,0,11),(1863,45,0,12),(1864,45,0,13),(1865,45,0,14),(1866,45,0,15),(1867,45,0,16),(1868,45,0,17),(1869,45,0,18),(1870,45,0,19),(1871,45,1,0),(1872,45,1,1),(1873,45,1,2),(1874,45,1,3),(1875,45,1,4),(1876,45,1,5),(1877,45,1,6),(1878,45,1,7),(1879,45,1,8),(1880,45,1,9),(1881,45,1,10),(1882,45,1,11),(1883,45,1,12),(1884,45,1,13),(1885,45,1,14),(1886,45,1,15),(1887,45,1,16),(1888,45,1,17),(1889,45,1,18),(1890,45,1,19),(1891,45,2,0),(1892,45,2,1),(1893,45,2,2),(1894,45,2,3),(1895,45,2,4),(1896,45,2,5),(1897,45,2,6),(1898,45,2,7),(1899,45,2,8),(1900,45,2,9),(1901,45,2,10),(1902,45,2,11),(1903,45,2,12),(1904,45,2,13),(1905,45,2,14),(1906,45,2,15),(1907,45,2,16),(1908,45,2,17),(1909,45,2,18),(1910,45,2,19),(1911,45,3,0),(1912,45,3,1),(1913,45,3,2),(1914,45,3,3),(1915,45,3,4),(1916,45,3,5),(1917,45,3,6),(1918,45,3,7),(1919,45,3,8),(1920,45,3,9),(1921,45,3,10),(1922,45,3,11),(1923,45,3,12),(1924,45,3,13),(1925,45,3,14),(1926,45,3,15),(1927,45,3,16),(1928,45,3,17),(1929,45,3,18),(1930,45,3,19),(1931,45,4,0),(1932,45,4,1),(1933,45,4,2),(1934,45,4,3),(1935,45,4,4),(1936,45,4,5),(1937,45,4,6),(1938,45,4,7),(1939,45,4,8),(1940,45,4,9),(1941,45,4,10),(1942,45,4,11),(1943,45,4,12),(1944,45,4,13),(1945,45,4,14),(1946,45,4,15),(1947,45,4,16),(1948,45,4,17),(1949,45,4,18),(1950,45,4,19),(1951,45,5,0),(1952,45,5,1),(1953,45,5,2),(1954,45,5,3),(1955,45,5,4),(1956,45,5,5),(1957,45,5,6),(1958,45,5,7),(1959,45,5,8),(1960,45,5,9),(1961,45,5,10),(1962,45,5,11),(1963,45,5,12),(1964,45,5,13),(1965,45,5,14),(1966,45,5,15),(1967,45,5,16),(1968,45,5,17),(1969,45,5,18),(1970,45,5,19),(1971,45,6,0),(1972,45,6,1),(1973,45,6,2),(1974,45,6,3),(1975,45,6,4),(1976,45,6,5),(1977,45,6,6),(1978,45,6,7),(1979,45,6,8),(1980,45,6,9),(1981,45,6,10),(1982,45,6,11),(1983,45,6,12),(1984,45,6,13),(1985,45,6,14),(1986,45,6,15),(1987,45,6,16),(1988,45,6,17),(1989,45,6,18),(1990,45,6,19),(1991,45,7,0),(1992,45,7,1),(1993,45,7,2),(1994,45,7,3),(1995,45,7,4),(1996,45,7,5),(1997,45,7,6),(1998,45,7,7),(1999,45,7,8),(2000,45,7,9),(2001,45,7,10),(2002,45,7,11),(2003,45,7,12),(2004,45,7,13),(2005,45,7,14),(2006,45,7,15),(2007,45,7,16),(2008,45,7,17),(2009,45,7,18),(2010,45,7,19),(2011,45,8,0),(2012,45,8,1),(2013,45,8,2),(2014,45,8,3),(2015,45,8,4),(2016,45,8,5),(2017,45,8,6),(2018,45,8,7),(2019,45,8,8),(2020,45,8,9),(2021,45,8,10),(2022,45,8,11),(2023,45,8,12),(2024,45,8,13),(2025,45,8,14),(2026,45,8,15),(2027,45,8,16),(2028,45,8,17),(2029,45,8,18),(2030,45,8,19),(2031,45,9,0),(2032,45,9,1),(2033,45,9,2),(2034,45,9,3),(2035,45,9,4),(2036,45,9,5),(2037,45,9,6),(2038,45,9,7),(2039,45,9,8),(2040,45,9,9),(2041,45,9,10),(2042,45,9,11),(2043,45,9,12),(2044,45,9,13),(2045,45,9,14),(2046,45,9,15),(2047,45,9,16),(2048,45,9,17),(2049,45,9,18),(2050,45,9,19);
/*!40000 ALTER TABLE `seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_fname` varchar(45) NOT NULL,
  `staff_lname` varchar(45) NOT NULL,
  `staff_phone` varchar(45) NOT NULL,
  `staff_address` varchar(45) NOT NULL,
  `staff_role` varchar(45) NOT NULL,
  `cinema_id` int(11) NOT NULL,
  PRIMARY KEY (`staff_id`),
  KEY `cinema_id_idx` (`cinema_id`),
  CONSTRAINT `cinema_id` FOREIGN KEY (`cinema_id`) REFERENCES `cinemabranch` (`cinema_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (2,'Hoda','Hannah','70-124151','Achrafieh','Manager',5),(3,'Roben','Karaa','71-746212','Zook','Manager',6),(16,'Test Fname','Test Lname','Test phone','Test Address','Test Role',15),(17,'Joe','Badawi','70-124122','Mtalyeb','Manager',4);
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `ticket_price` double NOT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `customer_id_idx` (`customer_id`),
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (28,1,15),(29,1,15),(30,1,15),(31,6,10),(32,6,10),(33,6,10),(34,6,10),(35,6,10),(36,6,10),(37,6,10);
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `reservation`
--

/*!50001 DROP VIEW IF EXISTS `reservation`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `reservation` AS select `c`.`customer_id` AS `customer_id`,`c`.`customer_username` AS `customer_username`,`m`.`movie_name` AS `movie_name`,`cb`.`cinema_address` AS `cinema_address`,`r`.`room_type` AS `room_type`,`s`.`seat_row` AS `seat_Row`,`s`.`seat_column` AS `seat_column`,`t`.`ticket_price` AS `ticket_price` from (((((((`cinemabranch` `cb` join `room` `r`) join `movie_event` `me`) join `movie` `m`) join `seat` `s`) join `booking` `b`) join `ticket` `t`) join `customer` `c`) where ((`cb`.`cinema_id` = `r`.`cinema_branch`) and (`me`.`room_id` = `r`.`room_id`) and (`m`.`movie_id` = `me`.`movie_id`) and (`s`.`roomId_seat` = `r`.`room_id`) and (`b`.`seat_id` = `s`.`seat_id`) and (`b`.`ticket_id` = `t`.`ticket_id`) and (`t`.`customer_id` = `c`.`customer_id`) and (`b`.`movie_eventId` = `me`.`movie_eventId`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-14 14:08:43
