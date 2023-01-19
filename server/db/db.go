package db

import (
	"context"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Db struct {
	Connection   *gorm.DB
	FileLocation string
	User         *context.Context
}

type Message struct {
	gorm.Model
	To      uint
	From    uint
	Message string
}

type User struct {
	gorm.Model
	Un     string
	Pw     string
	HashPw []byte
}

func (d *Db) Connect() error {
	conn, err := gorm.Open(sqlite.Open(d.FileLocation), &gorm.Config{})
	if err != nil {
		return err
	}

	d.Connection = conn

	d.Connection.AutoMigrate(&Message{})
	d.Connection.AutoMigrate(&User{})

	return nil
}

func (d *Db) CreateMessage(msg *Message) {
	d.Connection.Create(msg)
}

func (d *Db) CreateUser(u *User) {
	// TODO: hash password
	d.Connection.Create(u)
}
