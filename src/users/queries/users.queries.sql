/*  @name CreateUser */
INSERT INTO 
    mst_users (role_id, email, username, password, salt, avatar) 
VALUES (:role_id, :email, :username, :password, :salt, :avatar) RETURNING *;

/* @name FindAllUser */
SELECT id, role_id, username, email, avatar FROM mst_users;

/* @name FindUserById */
SELECT id, role_id, username, email FROM mst_users WHERE id = :id;

/* @name UpdateUserById */
UPDATE mst_users SET 
    role_id = :role_id, 
    username = :username, 
    email = :email, 
    avatar = :avatar
WHERE id = :id RETURNING *;

/* @name DeleteuserById */
UPDATE mst_users SET deleted_at = NOW() WHERE id = :id RETURNING id;

/* @name CheckUserUnique */
SELECT id, email, username FROM mst_users WHERE email = :email OR username = :username;

/* @name FindUserByEmail */
SELECT id, email, password FROM mst_users WHERE email = :email;
