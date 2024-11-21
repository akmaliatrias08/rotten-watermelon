create table crews (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	name varchar(100), 
	birthday DATE nullable,
	birthplace varchar(255), 
	biography text, 
	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);