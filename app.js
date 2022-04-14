const express = require("express")
const config = require("config")
const mongoose = require('mongoose')
const app = express()

app.use('/api/auth', require('./routes/auth.routes'))
const port = config.get("port") || 5000

async function start(){
    try{
      await mongoose.connect(config.get('mongoUri'), {
        
      })
      app.listen(port, () => {
        console.log("Сервер запущен. Порт: " + port);
    })
    } catch (e){
        console.log('Server error', e.message);
        process.exit(1)
    }
}

start();
