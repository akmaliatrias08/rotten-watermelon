/* @name FindAllMovieType */
SELECT id, type FROM movies_types WHERE deleted_at IS NULL; 

/* @name FindMovieTypeById */
SELECT id, type FROM movies_types WHERE id = :id AND  deleted_at IS NULL;

/* @name CreateMovieType */
INSERT INTO movies_types (type) VALUES (:type) RETURNING *;

/* @name UpdateMovieTypeById */
UPDATE movies_types SET type = :type WHERE id = :id RETURNING *;

/* @name DeleteMovieTypeById */
UPDATE movies_types SET deleted_at = NOW() WHERE id = :id RETURNING id;
