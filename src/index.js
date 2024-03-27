// const express = require('express')
import express from 'express';

import userRoutes from '../routes/users.js';
// const cors = require('cors');
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

 app.use("/", userRoutes);

 app.listen(3002);

// const PORT =    3002
// app.get('/', (req, res)=>{
//     console.log('entrou aqui')
//     res.send("APP GET")
// })

// app.get('/get', (req, res)=>{
//     console.log('entrou aqui')
//     res.send("APP GET na rota get")
// })

// app.post('/', (req, res)=>{
//     res.send("APP POST")
// })

// app.delete('/', (req, res)=>{
//     res.send("APP DELETE")
// })

// app.listen(PORT, ()=>{
//     console.log(`App online na porta ${PORT}`)
// })