package main

import (
	"context"
	"flag"
	"fmt"

	"github.com/ReeceDevenney/Chit-Chat/db"
	"github.com/ReeceDevenney/Chit-Chat/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	// "globals"
	// path to db file
	dbPath := flag.String("db-path", "", "File name and location for local db")
	flag.Parse()

	// server app
	app := fiber.New()

	// user context
	userCtx := context.Background()

	// db connection
	dbConn := db.Db{
		FileLocation: *dbPath,
		User:         &userCtx,
	}

	u := db.User{
		Pw: "asdf",
	}
	dbConn.CreateUser(&u)

	err := dbConn.Connect()
	if err != nil {
		e := fmt.Sprint("Failed to connect to db: ", err)
		// panic because fatal error
		panic(e)
	}

	// setup routes
	routes.SetRoutes(app, &dbConn)

	app.Listen("localhost:5000")
}
