USE hyfData;

-- // Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ("Listen to Podcast", "The Stoic: E3", "2021-03-21 11:23:16", "2021-03-21 11:25:46", NULL, 2, 2); 

-- Change the title of a task
UPDATE task
SET title = "Become a trillionaire"
WHERE id=2; 

-- Change a task due date
UPDATE task
SET due_date = "2021-03-21 11:25:46"
WHERE id=11;

-- Change a task status
UPDATE task
SET status_id = 3
WHERE id = 4;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 22;

-- Delete a task
DELETE FROM task 
WHERE id = 33;