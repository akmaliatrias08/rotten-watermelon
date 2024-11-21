create table movies_crew_position (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	movie_id UUID not null, 
	movie_type_id UUID not null,
	position_id UUID not null,
	crew_id UUID not null,
    add_txt text, 

	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ, 
    
    CONSTRAINT fk_movie_id FOREIGN KEY (movie_id) REFERENCES movies(id),
    CONSTRAINT fk_type_id FOREIGN KEY (movie_type_id) REFERENCES movies_types(id)
    CONSTRAINT fk_position_id FOREIGN KEY (position_id) REFERENCES crews_positions(id)
    CONSTRAINT fk_crew_id FOREIGN KEY (crew_id) REFERENCES crews(id)
);