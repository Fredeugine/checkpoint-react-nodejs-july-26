import express, {Request, response, Response} from "express";
import cors from 'cors'
const app = express();
const port = 3001

var ID = 1
app.use(express.json());
app.use(cors())


type posts = {
    id: number,
    text: string
}


const posts: posts[] = [
    {
     id: ID,
     text: 'My first Text'
    }
]
// http req and functions

app.get('/api/posts/', function getAll(req: Request, res: Response){
    res.json(posts)
})
// (getAll, create, updateByID, deleteByID)
//
app.post('/api/posts/', function create(req: Request, res: Response){
    ID++
    const {text} = req.body
    const newPost: posts = {
        id: ID,
        text: text
    }
    posts.push(newPost)
    res.json(posts)
})
app.put('/api/posts/:id', function updateByID(req: Request, res: Response){
    const id = Number(req.params.id)
    const {text} = req.body
    for (const texts of posts) {
        if (texts.id === id){
            texts.text = text
        }
    }
    res.json(posts)



})

app.delete('/api/posts/:id', function  deleteByID(req: Request, res: Response){
    const id = Number(req.params.id)
    posts.splice(id - 1, 1)
    res.json(posts)
})
app.listen(port, () => {
    console.log(`Server started on port, ${port}`);
});
