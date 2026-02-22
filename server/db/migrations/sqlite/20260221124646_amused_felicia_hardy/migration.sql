CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`email` text NOT NULL UNIQUE,
	`password` text NOT NULL,
	`avatar` text NOT NULL,
	`createdAt` integer NOT NULL
);
