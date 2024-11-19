/* @name FindRoleById */
SELECT * FROM mst_roles WHERE id = :id;

/* @name CreateRole */
INSERT INTO mst_roles (role) VALUES (:role) RETURNING *;