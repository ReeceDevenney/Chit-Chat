package util

import (
	"encoding/json"
	"errors"
	"strconv"

	"github.com/ReeceDevenney/Chit-Chat/db"
	"github.com/gofiber/fiber/v2"
)

// Parse incoming message informaiton into a usable message object
func ParseMessage(c *fiber.Ctx) (db.Message, error) {
	msgBuf := make(map[string]string)

	json.Unmarshal([]byte(c.Body()), &msgBuf)

	var msg db.Message

	msgBody, msgPrs := msgBuf["message"]
	if !msgPrs {
		return msg, errors.New("`message` field required in body")
	}

	msgTo, toPrs := msgBuf["to"]
	if !toPrs {
		return msg, errors.New("`to` field required in body")
	}

	msgToParse, err := strconv.Atoi(msgTo)
	if err != nil {
		panic(err)
	}

	msgFrom, fromPrs := msgBuf["to"]
	if !fromPrs {
		return msg, errors.New("`from` field required in body")
	}

	msgFromParse, err := strconv.Atoi(msgFrom)
	if err != nil {
		panic(err)
	}

	msg = db.Message{
		Message: msgBody,
		To:      uint(msgToParse),
		From:    uint(msgFromParse),
	}

	return msg, nil
}
