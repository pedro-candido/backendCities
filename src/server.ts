import { Server } from "http";
import { format } from "path";
import app from './app' 

const port = 3333
const server = app.listen(port)

process.on('SIGINT', ()=>{
    server.close();
    console.log('Servidor finalizado')
})