const express = require('express')
const Routes = express.Router();
const { signup, Verify } = require('../Controllers/userContoller')
const valid = require('../Validator/userValidator')

function initilizer() {
    postRequestVeryfy();
    postRequestSignup();
}
initilizer();

function postRequestVeryfy() {
    Routes.post('/verify', Verify)
}
function postRequestSignup() {
    Routes.post('/', valid.forSignup(),valid.checkError, signup)
}
module.exports = Routes;