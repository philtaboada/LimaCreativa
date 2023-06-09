const express = require('express')
const app = express()

app.use(express.json())

app.post('/suma', (req,res) => {
    const {suma1 , suma2} = req.body;
    const resultado = suma1 + suma2;
    res.json(resultado);
})

app.listen(3000, (() => {
    console.log('API REST en http://localhost:3000')
}))