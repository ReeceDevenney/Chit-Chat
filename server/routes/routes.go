package routes

import (
	"github.com/ReeceDevenney/Chit-Chat/db"
	"github.com/ReeceDevenney/Chit-Chat/util"
	"github.com/gofiber/fiber/v2"
)

func SetRoutes(app *fiber.App, db *db.Db) {
	app.Post("/message", func(c *fiber.Ctx) error {
		msg, err := util.ParseMessage(c)
		if err != nil {
			return err
		}

		go db.CreateMessage(&msg)

		return nil
	})
}
