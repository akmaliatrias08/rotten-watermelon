create table mst_users (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY, 
	role_id UUID not null, 
	username varchar(255),
	email varchar(255), 
	password text, 
	avatar text,
	salt text,
	created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ,
	
	CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES mst_roles(id),
	CONSTRAINT uq_username UNIQUE (username),
	CONSTRAINT uq_email UNIQUE (email)
);