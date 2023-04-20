const express = require('express')
const app = express();
const userRoutes=require('./Routes/Router')
const Cors = require('cors');
const mongoose=require('mongoose');
const mongodb=require('mongodb');


function initilizer() {
    corsConfig();
    parseConfig();
    dbConfig();
    routeConfig();
    error404HandlerConfig();
    errorGlobalHandlerConfig();

} initilizer();

function dbConfig(){
    mongoose.connect('mongodb+srv://rahulyadav900:rahul900@cluster0.viknwdd.mongodb.net/test')
    .then(()=>{
        console.log("Database connect successfully")
    })
}
function parseConfig() {
    app.use(express.json())
}
function corsConfig() {
    app.use(Cors());
}
function routeConfig() {
    app.use('',userRoutes)
}
function error404HandlerConfig() {

}
function errorGlobalHandlerConfig() {

}


module.exports = app;