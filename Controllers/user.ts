import db from "../Configuration/database";
import baseControllerAction from "../Models/BaseModels/baseControllerAction";
import user from "../Models/user";
import Services from "../Services";

let create = new baseControllerAction("create", "/users/create", "usersController");

create.Function = (async (req: any, res: any, next: any) => {

    if(!Services.passwordService.isValid(req.body.password)) return res.json({"Error": "Invalid Password"});
    user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.username,
        password: Services.passwordService.hashPassword(req.body.password)
    }).then((newUser : object) => {
        return res.json(newUser);
    }).catch((error : object) => {
        return res.json(error);
    })
})

module.exports = {
    create
}
