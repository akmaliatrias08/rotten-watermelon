create table genres (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	genre varchar(255), 
	
	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);