create table movies_types (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	type varchar(255), 
	
	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);