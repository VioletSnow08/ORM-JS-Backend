import db from "../Configuration/database";
import BaseControllerAction from "../Models/BaseModels/BaseControllerAction";
import User from "../Models/User";
import md5 from "md5";

let Create = new BaseControllerAction("Create", "/Users/Create", "UsersController");

Create.Function = (async (req: any, res: any, next: any) => {
    console.log(req.body);
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.username,
        password: md5(req.body.password)
    }).then((newUser : object) => {
        return res.json(newUser);
    }).catch((error : object) => {
        return res.json(error);
    })
})

module.exports = {
    Create
}
