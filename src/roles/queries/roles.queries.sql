/* @name FindAllRole */
SELECT id, role FROM mst_roles; 

/* @name FindRoleById */
SELECT id, role FROM mst_roles WHERE id = :id;

/* @name CreateRole */
INSERT INTO mst_roles (role) VALUES (:role) RETURNING *;

/* @name UpdateRoleById */
UPDATE mst_roles SET role = :role WHERE id = :id RETURNING *;

/* @name DeleteRoleById */
DELETE FROM mst_roles WHERE id = :id RETURNING id;
