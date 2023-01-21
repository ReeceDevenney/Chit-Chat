package main

import (
	"flag"
	"fmt"

	"github.com/ReeceDevenney/Chit-Chat/db"
	"github.com/ReeceDevenney/Chit-Chat/routes"
	"github.com/ReeceDevenney/Chit-Chat/util"
	"github.com/gofiber/fiber/v2"
)

func main() {
	// "globals"
	// path to db file
	dbPath := flag.String("db-path", "test.db", "File name and location for local db")
	flag.Parse()

	// server app
	app := fiber.New()

	user := db.User{}

	// db connection
	dbConn := db.Db{
		FileLocation: *dbPath,
		User:         &user,
	}

	state := util.State{
		App:    app,
		DbConn: &dbConn,
	}

	err := dbConn.Connect()
	if err != nil {
		e := fmt.Sprint("Failed to connect to db: ", err)
		// panic because fatal error
		panic(e)
	}

	// setup routes
	routes.SetRoutes(state)

	app.Listen("localhost:5000")
}
