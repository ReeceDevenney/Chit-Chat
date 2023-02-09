package util

import (
	"encoding/json"
	"errors"
	"strconv"

	"github.com/ReeceDevenney/Chit-Chat/db"
	"github.com/gofiber/fiber/v2"
)

// Parse incoming message informaiton into a usable message object
func ParseReqMessage(c *fiber.Ctx) (db.Message, error) {
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

func ParseUser(c *fiber.Ctx) (db.User, error) {
	usrBuf := make(map[string]string)

	json.Unmarshal([]byte(c.Body()), &usrBuf)

	var usr db.User

	un, unPrs := usrBuf["username"]
	if !unPrs {
		return usr, errors.New("`username` field required in body")
	}

	pw, pwPrs := usrBuf["password"]
	if !pwPrs {
		return usr, errors.New("`password` field required in body")
	}

	usr = db.User{
		Un:     un,
		Pw:     pw,
		HashPw: Hasher(pw),
	}

	return usr, nil
}
