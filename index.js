const express = require('express')
const chamadoRoutes = require('../API-AULA-main/routes/chamadoRoutes')
const tecnicoRoutes = require('../API-AULA-main/routes/tecnicoRoutes')
const app = express();
const PORT = 3000


app.use(express.json());

app.use('/chamados', chamadoRoutes)
app.use('/tecnicos', tecnicoRoutes)

app.listen(PORT, function(){
    console.log('Servidor rodando na porta ' + PORT);
})