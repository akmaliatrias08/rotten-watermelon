/* @name FindAllGenre */
SELECT id, genre FROM genres WHERE deleted_at IS NULL; 

/* @name FindGenreById */
SELECT id, genre FROM genres WHERE id = :id AND  deleted_at IS NULL;

/* @name CreateGenre */
INSERT INTO genres (genre) VALUES (:genre) RETURNING *;

/* @name UpdateGenreById */
UPDATE genres SET genre = :genre WHERE id = :id RETURNING *;

/* @name DeleteGenreById */
UPDATE genres SET deleted_at = NOW() WHERE id = :id RETURNING id;
