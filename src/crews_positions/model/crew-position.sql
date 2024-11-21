create table crews_positions (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	position varchar(255), 
	
	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);