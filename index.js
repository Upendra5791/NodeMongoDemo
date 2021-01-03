import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nodedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

routes(app);

// serving static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`Node and express servers running on port ${PORT}`);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});