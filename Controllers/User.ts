// import db from "../Configuration/database";
import BaseControllerAction from "../Models/BaseModels/BaseControllerAction";

let Create = new BaseControllerAction("Create", "/Users/Create", "UsersController");

Create.Function = ((req: any, res: any, next: any) => {
    return res.json("Hello There!");
})

module.exports = {
    Create
}
