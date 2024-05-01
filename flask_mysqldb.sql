create database registration;
use registration;
create table account (
id int(5),
username varchar(20),
password varchar(20),
mail varchar(30),
primary key(id)
);
create table account_1(
id int(5),
username varchar(20),
password varchar(20),
mail varchar(30),
primary key(id)
) engine=InnoDB auto_increment=2;