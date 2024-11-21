create table crew_photos (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	crew_id UUID not null, 
	photo text,
	
	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ,
	
	CONSTRAINT fk_crew_id FOREIGN KEY (crew_id) REFERENCES crews(id),
);