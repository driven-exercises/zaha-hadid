import express from 'express';
import { signUp, signIn } from './controllers/authController.js';
import { deleteUser, getUser, updateUser } from './controllers/userController.js';

const app = express();
app.use(express.json());

app.post("/sign-up", signUp);

app.post("/sign-in", signIn);

app.get("/user", getUser);

app.put("/user", updateUser);

app.delete("/user", deleteUser);

app.listen(5000, () => {
  console.log('Server is listening on port 5000.');
});
