const { createProxyMiddleware } = require('http-proxy-middleware');

const cors = require('cors');
const {use} = require("./src/App");
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
use(cors(corsOptions));
