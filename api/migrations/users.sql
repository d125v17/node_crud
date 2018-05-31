CREATE TABLE IF NOT EXISTS users (
    id int(10) auto_increment primary key,
    name varchar(128) default null,
    email varchar(128) default null,
    password varchar(128) default null,
    token varchar(128) default null
)