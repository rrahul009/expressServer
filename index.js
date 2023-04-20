const server = require('./Server')
// const jwt=require('jsonwebtoken')
const PORT = 5001;
// const createToken=async()=>{
//     const token=await jwt.sign({_id:"3436456347"},"hedgehdjnhhdsbn")
//     console.log(token)

// }
// createToken();
server.listen(PORT, () => {
    console.log(`server is running on http://localhost${PORT}`)
});