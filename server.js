const express       = require('express');
const bodyParser    = require('body-parser');
const path          = require('path');
const http          = require('http');
const app           = express();
const PORT          = process.env.PORT||4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',express.static(path.join(__dirname,'dist')));
app.get('/',function(request,response){
    response.send(path.join(__dirname,'dist/index.html'));
})
http.createServer(app).listen(PORT);
console.log(`Server running in port:${PORT}/`);