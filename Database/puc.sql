-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2023 at 04:18 AM
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
-- Database: `election`
--

-- --------------------------------------------------------

--
-- Table structure for table `puc`
--

CREATE TABLE `puc` (
  `Name` varchar(50) NOT NULL,
  `Reg_No` varchar(50) NOT NULL,
  `puc_aadhar_no` varchar(50) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `DateofBirth` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `puc`
--

INSERT INTO `puc` (`Name`, `Reg_No`, `puc_aadhar_no`, `Address`, `DateofBirth`) VALUES
('Ravi Kumar', '123400', '123456789003', 'HMT Main Road, Mathikere, Bengaluru, Karnataka.', '10-04-2001'),
('Lakshmi', '123401', '123456789004', 'HMT Main Road, Mathikere, Bengaluru, Karnataka.', '10-08-2002'),
('Swathi', '123403', '123456789008', 'No 01 Chikka Basthi, Main Rd, Ramasandra, Karnataka.', '17-05-2002'),
('Tharun', '123404', '123456789011', '#1113, 8th A Main Rd, 3rd Block, 3rd Stage, Basavesshwara nagar, Banglore, Karnataka.', '10-04-2004'),
('Yashvanth', '123405', '123456789015', '4th G Main Rd, HRBR Layout, Kalyan Nagar, Bengalore, Karnataka.', '10-04-2000'),
('Anirudh', '123406', '123456789029', 'Devanur Main Road 5th Cross, Decatur Main Road, Vijayanagar, Tumkur, Karntaka.', '13-04-2001'),
('Prashanth', '123407', '123456789034', 'TUDA Layout, Tumakuru, Karnataka 572106.', '20-08-2003'),
('Nirmala', '123408', '123456789035', 'TUDA Layout, Tumakuru, Karnataka 572106.', '22-02-2002'),
('Chandana', '123409', '123456789036', 'TUDA Layout, Tumakuru, Karnataka 572106.', '19-02-1999'),
('Raju', '123410', '123456789039', '6th Cross Rd, Hosamane, Shivamogga, Karnataka.', '03-04-2004'),
('Aishwarya', '123411', '123456789040', '6th Cross Rd, Hosamane, Shivamogga, Karnataka.', '04-04-2001');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `puc`
--
ALTER TABLE `puc`
  ADD PRIMARY KEY (`Reg_No`),
  ADD KEY `p_aadhar_fk` (`puc_aadhar_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
