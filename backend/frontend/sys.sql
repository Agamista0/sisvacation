-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2024 at 08:30 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `slsvacation`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2b$10$JevyrGTmR.Ol80Dc14pjhuMIeBGHze/QNnHIdTjFm8WUBMzcU3hs.');

-- --------------------------------------------------------

--
-- Table structure for table `call_requests`
--

CREATE TABLE `call_requests` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `country` varchar(16) NOT NULL,
  `inquiry` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `session_id` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `cart_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `session_id`, `product_id`, `quantity`, `cart_date`) VALUES
(21, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', 3, 7, '2024-07-03'),
(22, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzMDczMDQ0MjUsImlhdCI6MTcyMTIzMTE0MSwiZXhwIjoxNzIzODIzMTQxfQ.qIEC_InnNtJi3t8OVDJg9FoWVAcEyhfld9NgPhFQ3eQ', 2, 3, '2024-07-06'),
(24, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI2NzExNDAyMjYsImlhdCI6MTcyMTIzNDk4MywiZXhwIjoxNzIzODI2OTgzfQ.R25zNtOVFZxLCDOjfVnn_28XkvFkNUZVzwhp7lkeD7Y', 2, 4, '2024-07-04'),
(25, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4ODU5Njk5OTAsImlhdCI6MTcyMTIzNDI5NywiZXhwIjoxNzIzODI2Mjk3fQ.ZYkKg407iXbsBGMCC9Rd463_xP1EqOP0838eGWn6a98', 2, 1, '2024-07-03'),
(26, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4ODU5Njk5OTAsImlhdCI6MTcyMTIzNDI5NywiZXhwIjoxNzIzODI2Mjk3fQ.ZYkKg407iXbsBGMCC9Rd463_xP1EqOP0838eGWn6a98', 6, 4, '2024-07-10');

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

CREATE TABLE `offer` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` varchar(4096) NOT NULL,
  `product_img` varchar(255) NOT NULL,
  `avg_rating` float DEFAULT 0,
  `includes` varchar(4096) NOT NULL,
  `highlights` varchar(4096) NOT NULL,
  `included` varchar(255) NOT NULL,
  `duration` int(255) NOT NULL,
  `img2` varchar(255) NOT NULL,
  `img3` varchar(255) NOT NULL,
  `img4` varchar(255) NOT NULL,
  `meeting` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offer`
--

INSERT INTO `offer` (`id`, `title`, `price`, `location`, `description`, `product_img`, `avg_rating`, `includes`, `highlights`, `included`, `duration`, `img2`, `img3`, `img4`, `meeting`) VALUES
(1, 'LUXOR WITH VALLEY OF KINGS BY BUS', '34', 'Hurgada', 'GUIDED TRIP', 'offer2.webp', 0, '12312', '', '', 0, '', '', '', ''),
(2, 'LUXOR WITH VALLEY OF KINGS BY BUS', '34', 'Hurgada', 'DayTrip', 'offer1.webp', 0, '', '', '', 0, '', '', '', ''),
(3, 'LUXOR WITH VALLEY OF KINGS BY BUS', '234', 'Hurgada', 'Private Trip', 'offer3.webp', 5, '1221412', 'egvergb', 'eb432', 0, '', '', '', ''),
(4, 'LUXOR WITH VALLEY OF KINGS BY BUS', '23', 'Hurgada', 'Entry Ticket', 'offer4.webp', 0, '', '', '', 0, '', '', '', ''),
(5, 'LUXOR WITH VALLEY OF KINGS BY BUS', '21', 'Cairo ', 'Entry Ticket', 'offer5.webp', 0, '', '', '', 0, '', '', '', ''),
(6, 'LUXOR WITH VALLEY OF KINGS BY BUS', '21', 'Cairo ', 'Entry Ticket', 'offer6.webp', 3, '', '', '', 0, '', '', '', ''),
(7, 'LUXOR WITH VALLEY OF KINGS BY BUS', '865', 'Cairo ', 'Entry Ticket', 'offer7.webp', 4.07143, '', '', '', 0, '', '', '', ''),
(8, 'LUXOR WITH VALLEY OF KINGS BY BUS', '124', 'Cairo ', 'Entry Ticket', 'offer8.webp', 0, '', '', '', 0, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(255) NOT NULL,
  `offer_id` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` between 1 and 5),
  `review_text` text DEFAULT NULL,
  `review_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `session_id` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `offer_id`, `rating`, `review_text`, `review_date`, `session_id`, `username`) VALUES
(1, 2, 2, 'very very good ', '2024-07-16 12:06:29', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', 'Seif'),
(2, 2, 5, 'best ever', '2024-07-16 16:14:48', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', 'ahmed'),
(3, 7, 5, 'sadasf', '2024-07-17 11:24:16', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(4, 7, 4, 'asgdsgdsg', '2024-07-17 12:16:01', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(5, 7, 4, 'asgdsgdsg', '2024-07-17 12:16:03', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(6, 7, 4, 'asgdsgdsg', '2024-07-17 12:16:03', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(7, 7, 4, 'asgdsgdsg', '2024-07-17 12:16:03', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(8, 7, 4, 'asgdsgdsg', '2024-07-17 12:16:03', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(9, 7, 4, 'asgdsgdsg', '2024-07-17 12:16:03', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(10, 7, 4, 'ewgweg', '2024-07-17 12:16:11', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(11, 7, 4, 'ewgweg', '2024-07-17 12:16:11', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(12, 7, 4, 'ewgweg', '2024-07-17 12:16:12', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(13, 7, 4, 'ewgweg', '2024-07-17 12:16:12', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(14, 7, 4, 'ewgweg', '2024-07-17 12:16:12', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(15, 7, 4, 'very good\n', '2024-07-17 12:39:49', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(16, 7, 4, 'saf', '2024-07-17 12:40:40', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(17, 3, 5, 'asagv', '2024-07-17 12:40:51', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', ''),
(18, 6, 3, 'very good ', '2024-07-18 15:43:22', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4ODU5Njk5OTAsImlhdCI6MTcyMTIzNDI5NywiZXhwIjoxNzIzODI2Mjk3fQ.ZYkKg407iXbsBGMCC9Rd463_xP1EqOP0838eGWn6a98', '');

-- --------------------------------------------------------

--
-- Table structure for table `trips`
--

CREATE TABLE `trips` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `country` varchar(10) DEFAULT NULL,
  `Phone` varchar(20) NOT NULL,
  `address` text DEFAULT NULL,
  `tripType` varchar(255) NOT NULL,
  `numberOfTravelers` int(11) NOT NULL,
  `averageAge` int(11) NOT NULL,
  `budget` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `checkInDate` date NOT NULL,
  `checkOutDate` date NOT NULL,
  `additionalInfo` text DEFAULT NULL,
  `subscribeNewsletter` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL,
  `session_id` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `session_id`, `product_id`, `quantity`) VALUES
(42, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MDc1MjQ1MTAsImlhdCI6MTcyMDQ0MzY4NCwiZXhwIjoxNzIzMDM1Njg0fQ.pzfVevgKWNsMX7CjwyVeBzBq0xYIcTRL6C6tJtFQ8Ac', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `call_requests`
--
ALTER TABLE `call_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `offer_id` (`offer_id`);

--
-- Indexes for table `trips`
--
ALTER TABLE `trips`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `call_requests`
--
ALTER TABLE `call_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `offer`
--
ALTER TABLE `offer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `trips`
--
ALTER TABLE `trips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `offer` (`id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`offer_id`) REFERENCES `offer` (`id`);

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist` FOREIGN KEY (`product_id`) REFERENCES `offer` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
