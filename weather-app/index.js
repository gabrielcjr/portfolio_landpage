import express from 'express';
import path from 'path';

const PORT = 4000;
const app = express();
const __dirname = path.resolve();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './src/views'));

app.get('/weather', (req, res) => {
    res.render('weather');
})

import weatherRouter from './src/routes/weather.js';

// This line separates the city route to another module. 
app.use('/weather/api/', weatherRouter);

app.listen(PORT, () => console.log(`Running on ${PORT}`));
