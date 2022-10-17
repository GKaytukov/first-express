import express from 'express'

const app = express()
//Will usually always app as the variable 
app.get('/test', (request, response) => {
    response.send({ message: "It's all good, man!"})
})
//This is a JSON version 
//app.get('/test', (request, response) => {
//    response.send({message: "It's all good, man!"})
//})

app.get('/', (request, response) => response.send('Welcome to our first API'))
//Control C to stop running the program 
//The request and response WILL ALWAYS BE TOGETHER in the function
//Tell it what to do and we are going to write our function with a big arrow

app.get('/error', (request, response) => {
    response
    .status(500)
    .send({ message: 'Something went wrong', success: false})

})

app.listen(3030, () => console.log('Listening on http://localhost:3030...'))

//Telling Express- we have to open a window/port
//Now, we need to tell Express who can come in and everyone else gets denied 
//We add a list of everyone who is allowed, we will allow a Get Request
