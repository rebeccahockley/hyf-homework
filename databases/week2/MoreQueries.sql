
-- Get all the tasks assigned to the user who's email ends in @spotify.com
SELECT 
    task.title, user.email
FROM 
    task
JOIN 
    user
WHERE
    user.email LIKE "%@spotify.com";

-- Get all the tasks for Donald Duck with status "Not Started"
SELECT
task.title, status.name, user.name
FROM 
task
JOIN
user
JOIN
status
WHERE
user.name = "Donald Duck" AND status.name = "Not started";

-- Get all the tasks for Maryrose Meadows that were created in September
SELECT
task.title, user.name, created
FROM
task
JOIN
user
WHERE
user.name = "Maryrose Meadows" AND month(created)=9; 

-- Find how many tasks were created in each month
SELECT
COUNT(task.id) as "No. of Tasks Created",
month(created) as "Month Created"
FROM
task
GROUP BY month(created); 
