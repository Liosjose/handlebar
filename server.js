import express from 'express';
import router from './routes/index.js'
import exphbs from 'express-handlebars'
const app = express ();


app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));

app.set("view engine", ".hbs");
app.set("views", "./views");



app.use(express.json())
app.use('/',router);
app.use('/static',express.static('public'))


     
const PORT = 8081

;
  const server = app.listen(PORT, ()=>{ 
     console.log(`escuchando del puerto ${server.address().port}`)
})

server.on('error', error => { 
     console.log(`Error : ${error}`)
})