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
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket_id` int(11) NOT NULL,
  `seat_id` int(11) NOT NULL,
  `ticket_date` datetime(6) NOT NULL,
  PRIMARY KEY (`booking_id`,`ticket_id`,`seat_id`),
  KEY `ticket_id_idx` (`ticket_id`),
  KEY `seat_id_idx` (`seat_id`),
  CONSTRAINT `seat_id` FOREIGN KEY (`seat_id`) REFERENCES `seat` (`seat_id`),
  CONSTRAINT `ticket_id` FOREIGN KEY (`ticket_id`) REFERENCES `ticket` (`ticket_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinemabranch`
--

LOCK TABLES `cinemabranch` WRITE;
/*!40000 ALTER TABLE `cinemabranch` DISABLE KEYS */;
INSERT INTO `cinemabranch` VALUES (4,'Cineworld','Hamra-Beirut','71-124521','Joe Badawe',500),(5,'CineWorld','Jbeil','70-740530','Hoda hannah',200),(6,'CineWorld','Kaslik-Jounieh','03-755390','Raymond Sleiman',200),(8,'Vox','Hamra','7178904','Wissam',300);
/*!40000 ALTER TABLE `cinemabranch` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Robin','Karaa','71-124412','robin.karaa@lau.edu','Jounieh','Male','robz00','rkpass'),(2,'Georgio','Abi Antoun','03-124552','georgio.antoun@lau.edu','Tripoli','Male','Geo10','gapass');
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
  `movie_urlImage` varchar(500) NOT NULL,
  `movie_urlPosterImage` varchar(500) NOT NULL,
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
  PRIMARY KEY (`movie_eventId`,`movie_id`,`room_id`),
  KEY `room_id_idx` (`room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_event`
--

LOCK TABLES `movie_event` WRITE;
/*!40000 ALTER TABLE `movie_event` DISABLE KEYS */;
INSERT INTO `movie_event` VALUES (1,1,2,'2019-12-30 08:00:00.000000','2019-12-30 10:00:00.000000'),(2,1,2,'2019-12-30 10:00:00.000000','2019-12-31 12:00:00.000000'),(3,1,4,'2019-12-30 05:00:00.000000','2019-12-30 07:00:00.000000'),(4,1,5,'2019-12-30 12:00:00.000000','2019-12-30 10:00:00.000000'),(5,1,7,'2019-12-30 12:00:00.000000','2019-12-30 10:00:00.000000'),(5,4,6,'2019-12-02 11:00:00.000000','2019-12-02 12:00:00.000000'),(6,4,3,'2019-12-30 12:00:00.000000','2019-12-30 10:00:00.000000'),(7,4,6,'2019-12-30 12:00:00.000000','2019-12-30 10:00:00.000000'),(8,4,8,'2019-12-02 11:00:00.000000','2019-12-02 12:00:00.000000'),(9,6,2,'2019-12-08 16:15:41.000000','2019-12-08 15:15:41.000000'),(12,9,2,'2019-12-08 17:44:45.000000','2019-12-08 19:44:45.000000'),(13,6,11,'2019-12-08 17:44:45.000000','2019-12-08 18:44:45.000000');
/*!40000 ALTER TABLE `movie_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_rating`
--

DROP TABLE IF EXISTS `movie_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_rating` (
  `movie_review_rating` double NOT NULL,
  `movie_review_comment` varchar(100) NOT NULL,
  `customer_ratedId` int(11) NOT NULL,
  `movie_ratedId` int(11) NOT NULL,
  PRIMARY KEY (`movie_ratedId`,`customer_ratedId`),
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
INSERT INTO `movie_rating` VALUES (8,'Great Movie, The story is well written',1,1),(7,'Decent movie to watch',2,1),(9,'Was a great movie to watch, same as all terminator movies',1,4);
/*!40000 ALTER TABLE `movie_rating` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (2,200,'A',1,4),(3,200,'A',1,4),(4,100,'B',1,4),(5,100,'B',1,5),(6,100,'B',1,5),(7,50,'C',1,6),(8,50,'C',1,6),(9,100,'B',1,6),(11,200,'A',1,8);
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
  `seat_row` varchar(45) NOT NULL,
  `seat_status` tinyint(4) NOT NULL,
  PRIMARY KEY (`seat_id`),
  KEY `room_id_idx` (`roomId_seat`),
  CONSTRAINT `roomId_seat` FOREIGN KEY (`roomId_seat`) REFERENCES `room` (`room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (63,2,'1',1),(64,2,'2',1),(65,3,'3',1),(66,3,'1',1),(67,4,'2',1),(68,4,'3',1),(69,5,'3',1),(70,5,'1',1),(71,6,'1',1),(72,6,'2',1),(73,7,'3',1),(74,7,'2',1),(75,8,'2',1),(76,8,'1',1),(77,9,'2',1),(78,9,'3',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'Joe','Badawe','03-141251','Mtayleb','Manager',4),(2,'Hoda','Hannah','70-124151','Achrafieh','Manager',5),(3,'Roben','Karaa','71-746212','Zook','Manager',6),(10,'Wissam','Atiye','81890404','Beirut','Manager',8);
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
  `ticket_price` varchar(45) NOT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `customer_id_idx` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-08 22:51:03
