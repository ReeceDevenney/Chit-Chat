package routes

import (
	"github.com/ReeceDevenney/Chit-Chat/util"
	"github.com/gofiber/fiber/v2"
)

func SetRoutes(state util.State) {
	state.App.Post("/api/message", func(c *fiber.Ctx) error {
		msg, err := util.ParseReqMessage(c)
		if err != nil {
			return err
		}

		go state.DbConn.CreateMessage(&msg)

		return nil
	})

	state.App.Post("/api/user", func(c *fiber.Ctx) error {
		usr, err := util.ParseUser(c)
		if err != nil {
			return err
		}

		state.DbConn.CreateUser(&usr)

		return nil
	})
}
