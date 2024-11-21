/* @name FindAllCrews */
SELECT id, name, birthday::TEXT as birthday, birthplace FROM crews WHERE deleted_at IS NULL;

/* @name FindCrewById */
SELECT id, name, birthday::TEXT as birthday, birthplace, biography FROM crews WHERE id = :id;

/* @name FindCrewPhotosByCrewId */
SELECT id, photo FROM crew_photos WHERE crew_id = :crew_id;

/* @name CreateCrew */
INSERT INTO crews (name, birthday, birthplace, biography) 
VALUES (:name, :birthday, :birthplace, :biography) RETURNING *;

/* @name CreateCrewPhotos 
   @param crewPhotos -> ((crew_id, photo)...)
*/
INSERT INTO crew_photos (crew_id, photo) VALUES :crewPhotos RETURNING *;

/* @name UpdateCrewById */
UPDATE crews SET 
    name = :name, 
    birthplace = :birthplace, 
    biography = :biography
WHERE id = :id RETURNING *;

/* @name DeleteCrewId */
UPDATE crews SET deleted_at = NOW() WHERE id = :id RETURNING id;

/* @name DeleteCrewPhotosByCrewId */
DELETE FROM crew_photos WHERE crew_id = :crew_id RETURNING id;

