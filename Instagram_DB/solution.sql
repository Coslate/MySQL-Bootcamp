
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

--5. Calculate avg number of photos per user
SELECT 
    (SELECT COUNT(*) FROM photos) / (SELECT COUNT(*) FROM users) AS avg;

--6. Five most popular hashtags
SELECT 
    tags.tag_name, 
    COUNT(photos.image_url) AS total 
FROM photo_tags 
LEFT JOIN tags 
    ON photo_tags.tag_id = tags.id 
LEFT JOIN photos 
    ON photo_tags.photo_id=photos.id 
GROUP BY tags.id
ORDER BY total DESC LIMIT 5;


--7. Finding the bots - the users who have liked every single photo
SELECT 
    users.username, 
    COUNT(photos.image_url) AS total 
FROM likes 
LEFT JOIN users 
    ON users.id=likes.user_id 
LEFT JOIN photos 
    ON photos.id=likes.photo_id 
GROUP BY users.id 
    HAVING total=(SELECT COUNT(*) FROM photos);
