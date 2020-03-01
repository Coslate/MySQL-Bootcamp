
--1. Finding 5 oldest users
SELECT * FROM users ORDER BY created_at ASC LIMIT 5;

--2. Most Popular Registration Date
SELECT 
    DAYNAME(created_at) AS day,
    COUNT(username) AS total
FROM users 
GROUP BY day 
ORDER BY total DESC
LIMIT 1;

--3. Identify Inactive Users(users with no photos)
SELECT 
    users.username,
    photos.image_url
FROM users 
LEFT JOIN photos 
    ON users.id=photos.user_id 
WHERE photos.image_url is NULL;

--4. Identify Most Popular Photo(and User Who Created It)
SELECT 
    photos.id,
    photos.image_url,
    users.username AS author,
    COUNT(likes.user_id) AS total
FROM photos
INNER JOIN likes
    ON photos.id=likes.photo_id
INNER JOIN users 
    ON photos.user_id=users.id
GROUP BY photos.id 
ORDER BY total DESC LIMIT 1;
