--1
SELECT
    name, phone
FROM
    user;

--2
SELECT
    name
FROM
    user
WHERE
    id=10; 

--3
SELECT COUNT(id)
FROM user;

--4
SELECT 
name
FROM
user
LIMIT 5;

--5
SELECT
name
FROM
user
ORDER BY id DESC
LIMIT 3;

--6
SELECT SUM(id)
FROM
user;

--7
SELECT
name
FROM 
user
ORDER BY name ASC;

--8
SELECT
title, description
FROM
task
WHERE
title LIKE '%SQL%' OR description LIKE '%SQL%'
;

--9
SELECT
    title
    FROM
    task
    LEFT JOIN 
    user
    ON task.user_id = user.id
    WHERE
    name LIKE "Maryrose%"; 
    
--10
SELECT COUNT(user_id), name
FROM
task
LEFT JOIN 
    user
    ON task.user_id = user.id
GROUP BY
user_id;
