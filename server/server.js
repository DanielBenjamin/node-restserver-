require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

const port = process.env.PORT || 3000;


app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});
app.post('/usuario', function (req, res) {

    let body = req.body;

    if( body.nombre == undefined ) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es nesesario'
        });
    }else {
        res.json({
            persona: body
        })
    }

    res.json("post Usuario");
});
app.put('/usuario:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});
app.delete('/usuario', function (req, res) {
    res.send('Deleted User');
});




app.listen(process.env.PORT, () => {
    console.log('La pagina se esta ejecutando en localhost:',process.env.PORT)
})