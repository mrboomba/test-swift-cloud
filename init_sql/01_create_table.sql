
CREATE TABLE `Song` (
  `Song` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Artist` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Writer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Album` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Year` int(11) NOT NULL,
  `PlaysJune` int(11) NOT NULL,
  `PlaysJuly` int(11) NOT NULL,
  `PlaysAugust` int(11) NOT NULL,
  UNIQUE KEY `Song_Song_key` (`Song`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;