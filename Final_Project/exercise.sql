
-- 1. Find Earliest Date A User Joined
--Way1. 
SELECT DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date FROM users ORDER BY created_at ASC LIMIT 1;
--Way2.
SELECT DATE_FORMAT(MIN(created_at), '%M %D %Y' ) AS earliest_date FROM users;
+-----------------+
| earliest_date   |
+-----------------+
| March 12th 2019 |
+-----------------+

--2. Find Email Of The First(Earliest) User
--Way1.
SELECT email, DATE_FORMAT(created_at, '%M %D %Y') FROM users ORDER BY created_at ASC LIMIT 1;
--Way2.
SELECT email, DATE_FORMAT(created_at, '%M %D %Y') 
FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);
+-----------------+-------------------------------------+
| email           | DATE_FORMAT(created_at, '%M %D %Y') |
+-----------------+-------------------------------------+
| Lia83@yahoo.com | March 12th 2019                     |
+-----------------+-------------------------------------+

--3. Users According To the Month They Joined
SELECT MONTHNAME(created_at) AS Month, COUNT(email) AS Total_Joined_Email FROM users GROUP BY MONTHNAME(created_at) ORDER BY COUNT(email) DESC;
+-----------+--------------------+
| Month     | Total_Joined_Email |
+-----------+--------------------+
| August    |                 57 |
| December  |                 49 |
| June      |                 47 |
| January   |                 45 |
| November  |                 44 |
| September |                 40 |
| February  |                 40 |
| May       |                 39 |
| April     |                 38 |
| July      |                 37 |
| October   |                 33 |
| March     |                 31 |
+-----------+--------------------+

--4. Count Number of Users With Yahoo Emails
SELECT COUNT(email) FROM users WHERE email LIKE '%@yahoo.com';
+--------------+
| COUNT(email) |
+--------------+
|          151 |
+--------------+

--5. Calculate Total Numbers of Users for Each Email Host
SELECT 
    CASE
        WHEN email LIKE '%@gmail.com' THEN 'gmail'
        WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END as provider,
    COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;

+----------+-------------+
| provider | total_users |
+----------+-------------+
| gmail    |         182 |
| hotmail  |         167 |
| yahoo    |         151 |
+----------+-------------+


