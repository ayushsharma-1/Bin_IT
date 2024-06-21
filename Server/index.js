const http=require('http');
const express=require('express');
const {Server}=require('socket.io');
require('dotenv').config();
const userRoutes=require('./Routes/userRoutes')
const {notFound,errorHandler}=require('./middleware/error');
const connectDB=require('./database/mongo')
const cors=require('cors');
const chatRoutes=require('./Routes/chatRoutes')
connectDB();
const app=express();

const corsOption={
    origin:`http://localhost:3000`,
    optionSuccessStatus:200,
}

app.use(cors(corsOption));
app.use(express.json());
const httpServer=http.createServer(app);
// const domain=process.env.DOMAIN
// const io=new Server(httpServer,{
//     cors:{origin:`${domain}`}
// });
const PORT=process.env.PORT || 3002;

app.use('/api/user',cors(corsOption),userRoutes)
app.use('/api/chat',cors(corsOption),chatRoutes);
app.use(notFound)
app.use(errorHandler)

// io.on('connection',(socket)=>{
//     console.log('a user is connected');
//     socket.emit('message','Hello');
// })

httpServer.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})
