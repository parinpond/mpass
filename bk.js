const express = require('express');

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method==='OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,PATCH,DELETE');
        return res.status(200).json({});
    }
    next(); // Right here
});
var movies = [
    {
        id: 0,
        name: "The Flash",
        type: "series",
        isPublished: false
    },{
        id: 1,
        name: "The",
        type: "series",
        isPublished: false
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});
app.get('/api/movies', (req, res) => {
    res.send(movies);
});
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        name: req.body.name,
        type: req.body.typeMovie,
        isPublished: req.body.isPublished
    };
    movies.push(movie);
    res.send(movie);
});
app.put('/api/movies/:id', (req, res) => {
	console.log(req);
    const movie = movies.find(m => m.id === parseInt(req.body.id));

    if(!movie) {
        res.status(404).send('The movie with the given ID was not found ')
    }else {
        movie.name = req.body.name;
        movie.type = req.body.typeMovie;
        movie.isPublished = req.body.isPublished;
    
        res.send(movie);
    }
});
app.delete('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) {
        res.status(404).send('The movie with the given ID was not found ')
    }else {

        const index = movies.indexOf(movie);
        movies.splice(index, 1);
    
        res.send(movie);
    }
});
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );