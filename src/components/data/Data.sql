CREATE TABLE `block` (
  `block_no` int,
  `block_name` varchar(10),
  PRIMARY KEY (`block_no` , `block_name`)
) 
CREATE TABLE `apartment` (
  `apartment_no` int PRIMARY KEY,
  `block_no` int,
  FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`)
) 
CREATE TABLE `owner` (
  `owner_id` int PRIMARY KEY,
  `name` varchar(20),
  `apartment_no` int,
  `email` varchar(30),
  `phone` int,
  FOREIGN KEY (`apartment_no`) REFERENCES `apartment` (`apartment_no`)
) 
CREATE TABLE `tenant` (
  `tenant_id` int PRIMARY KEY,
  `name` varchar(30),
  `apartment_no` int,
  `email` varchar(30),
  `phone` int,
  FOREIGN KEY (`apartment_no`) REFERENCES `apartment` (`apartment_no`)
)
INSERT INTO `block` VALUES (100,'ganga'),(200,'yamuna'),(300,'godavari'),(400,'kaveri');
INSERT INTO `apartment` VALUES (101,100),(102,100),(201,200),(202,200),(301,300),(302,300),(401,400),(402,400);
INSERT INTO `owner` VALUES (11111,'abhi',101,'abhi@gamil.com',987654),(22222,'riya',202,'riya@gamil.com');
INSERT INTO `tenant` VALUES (10101,'priya',101,'priya@gamil.com',56437);