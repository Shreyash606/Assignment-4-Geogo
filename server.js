
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const res = require('express/lib/response');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var ingredients = [
    {
        "id":"35akdhs",
        "text":"eggs"
    },
    {
        "id":"dkhs45h",
        "text":"Bacon"
    },
    {
        "id":"djdhfsj",
        "text":"prawns"
    }
];



app.get('/ingredients' , function(request,response) {
    response.send(ingredients);
});

// To update a post

app.post('/ingredients', function(request,response){
    var ingredient = request.body;
    if(!ingredient || ingredient.text ==""){
        response.status(500).send({error:"your ingredient must have text"});
    }else{
        ingredients.push(ingredient);
        response.status(200).send(ingredient);
    }
});

// To update using id

app.put('/ingredients/:ingredientId', function(request,response){
    
    
    var newText = request.body.text;

    if( !newText || newText ===""){
        response.status(500).send({error:'You must provide ingredient text'})
    } else {
        
        for(var x=0; x<ingredients.length; x++){
            var ing = ingredients[x];
        
            if(ing.id === request.params.ingredientId){
                ingredients[x].text = newText;
                break;
        }

    }
    response.send(ingredients);
}
});

// To delete a post

app.delete()

app.listen(8080, function() {
    console.log('First API running on port 3000');
});