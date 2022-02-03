import { _setup } from "../utils/serverRunner";
import fs from "fs";

describe("Usage of controllers", () => {
  it("should be using routers", () => {
    const authRouter = fs.readFileSync("./src/routes/authRouter.js", "utf8");
    const userRouter = fs.readFileSync("./src/routes/userRouter.js", "utf8");

    expect(authRouter.length).toBeGreaterThan(1);
    expect(userRouter.length).toBeGreaterThan(1);
  });
});
