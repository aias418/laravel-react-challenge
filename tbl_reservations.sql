-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 30, 2022 at 04:23 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thepropolis_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guesty_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `integration` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `listingId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `source` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accountId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guestId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `money` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `checkIn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checkOut` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customFields` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `guest` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `listing` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `saltoks_user_existed` tinyint(1) DEFAULT NULL,
  `saltoks_user_blocked` tinyint(1) DEFAULT NULL,
  `saltoks_user_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accessGroupExist` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `confirmedAt` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nightsCount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=598;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
