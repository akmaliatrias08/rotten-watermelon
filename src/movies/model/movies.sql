create table movies (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	movie_type_id UUID not null, 
    title varchar(255), 
    synopsis text, 
    distributor varchar(255), 
    rating text, 
    production_co varchar(255), 
    original_lang varchar(255), 
    release_date_theather date, 
    release_date_streaming date, 
    runtime time, 
    soundmix varchar(255), 
    
	
    CONSTRAINT fk_movie_type_id FOREIGN KEY (movie_type_id) REFERENCES movies_types(id),
	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);