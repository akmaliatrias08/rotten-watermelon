create table movies_genres (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	movie_id UUID not null, 
	genre_id UUID not null,
	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ, 
    
    CONSTRAINT fk_movie_id FOREIGN KEY (movie_id) REFERENCES movies(id),
    CONSTRAINT fk_genre_id FOREIGN KEY (genre_id) REFERENCES genres(id)
);