SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- Database: `querodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `querotable`
--

CREATE TABLE `querotable` (
  `id` int(255) NOT NULL,
  `data` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `querotable`
--

INSERT INTO `querotable` (`id`, `data`) VALUES
(1, 'Hello World!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `querotable`
--
ALTER TABLE `querotable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `querotable`
--
ALTER TABLE `querotable`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;