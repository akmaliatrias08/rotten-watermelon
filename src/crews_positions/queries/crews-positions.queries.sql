/* @name FindAllCrewPosition */
SELECT id, position FROM crews_positions WHERE deleted_at IS NULL; 

/* @name FindCrewPositionById */
SELECT id, position FROM crews_positions WHERE id = :id AND  deleted_at IS NULL;

/* @name CreateCrewPosition */
INSERT INTO crews_positions (position) VALUES (:position) RETURNING *;

/* @name UpdateCrewPositionById */
UPDATE crews_positions SET position = :position WHERE id = :id RETURNING *;

/* @name DeleteCrewPositionById */
UPDATE crews_positions SET deleted_at = NOW() WHERE id = :id RETURNING id;
