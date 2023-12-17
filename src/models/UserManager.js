const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
    constructor() {
        super({ table: "users" });
    }
}

module.exports = UserManager;
