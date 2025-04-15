import express from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');

const __dirname = path.resolve();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('pad')
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})