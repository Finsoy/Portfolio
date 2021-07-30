"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryRouter_1 = __importDefault(require("./Components/categoryRouter"));
const app = express_1.default();
const port = process.env.PORT || 3000;
// app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use("/category", categoryRouter_1.default);
app.get("/", (req, res) => {
    // res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    res.send("Heroku");
});
app.listen(port, () => {
    try {
        console.log(`server is listening on ${port}`);
    }
    catch (e) {
        console.log(e);
    }
});
//# sourceMappingURL=app.js.map