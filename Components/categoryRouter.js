"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryRouter = express_1.Router();
categoryRouter.get("/", (req, res) => {
    try {
        res.json([]);
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = categoryRouter;
//# sourceMappingURL=categoryRouter.js.map