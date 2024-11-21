create table movies_posters (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	movie_id UUID not null, 
	poster text,
	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ, 
    
    CONSTRAINT fk_movie_id FOREIGN KEY (movie_id) REFERENCES movies(id)
);