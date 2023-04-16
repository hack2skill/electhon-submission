-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2023 at 08:35 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electhon`
--

-- --------------------------------------------------------

--
-- Table structure for table `birth_certificate`
--

CREATE TABLE `birth_certificate` (
  `Full_Name` varchar(100) DEFAULT NULL,
  `Date` varchar(100) DEFAULT NULL,
  `Place` varchar(100) DEFAULT NULL,
  `Gender` varchar(100) DEFAULT NULL,
  `Parents_Info` varchar(100) DEFAULT NULL,
  `Physician_Info` varchar(100) DEFAULT NULL,
  `Registration_No` varchar(100) NOT NULL,
  `Date_of_registration` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `birth_certificate`
--
ALTER TABLE `birth_certificate`
  ADD PRIMARY KEY (`Registration_No`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
