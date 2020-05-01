const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static(__dirname + '/public'))



/* app.use(bodyParser.urlencoded({extended:false})) //middleware
app.use(bodyParser.json()) //middleware postman will not understand the data before we told it to


app.get('/:id', (req,res) => {
    // res.send("getting root");
    // console.log(req.query)
    // console.log(req.body)
    // console.log(req.header)
    console.log(req.params) //the id after '/'
    res.status(404).send("not found");
});
 */

app.listen(3000);