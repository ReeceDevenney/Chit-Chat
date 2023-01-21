package util

import (
	"crypto/sha256"
	"fmt"

	"github.com/ReeceDevenney/Chit-Chat/db"
	"github.com/gofiber/fiber/v2"
)

type State struct {
	App    *fiber.App
	DbConn *db.Db
}

func Hasher(s string) string {
	h := sha256.New()
	h.Write([]byte(s))
	hashed := h.Sum(nil)

	hString := fmt.Sprintf("%x\n", hashed)

	return hString
}
