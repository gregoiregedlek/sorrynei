CREATE TABLE user (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nickname TEXT,
    email TEXT,
    password_hash TEXT,
    birthdate Date
);

CREATE TABLE scenario (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT,
    is_explicit BOOLEAN
);

CREATE TABLE excuse (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content TEXT,
    owner_id UUID CONSTRAINT owner__excuses REFERENCES user (id)
);




