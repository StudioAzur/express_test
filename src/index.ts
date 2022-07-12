import { UsersController } from './controller/usersController';
import { UserModel } from './model/userModel';
import express from "express";
import "dotenv/config";
import userRouter from './router/user.router'
import * as path from "path";

const router = express.Router();
const app = express();

const port = process.env.PORT;

router.get("", (request, result) => {
  const data = [{ comment: "commentaire de Cindy" }, { comment: "Fais chaud" }];
  const title = "Titre depuis le body";
  result.render("demo", { data, title });
});

router.post('/traitement', (request,result)=>{
    console.log(request.body);
    result.send('ok');
})

router.get('/addComment', (request, result)=>{
    result.render("form");
})


app.set("views", path.join(process.cwd(), "src/view"));
app.set("view engine", "ejs");
app.use(express.urlencoded({
    extended: true
}))

app.get("/demo", (request, result) => {
  result.send("<h1>Hello</h1>");
});

app.use(router);
app.use('/users', userRouter)

app.use("/bootstrap", express.static(path.join(process.cwd(), "/node_modules/bootstrap/dist/css")))
app.use("/static", express.static(path.join(process.cwd(), "/src/public")))

app.listen(port, () => {
  console.log(`Le serveur est lancé sur ${port}`);
});
