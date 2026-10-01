function criar(dados){
    console.log("2 - SERVICE recebeu", dados);
    const tecnico = {
        id: 1, 
        titulo:dados.titulo,
        especialidade:dados.especialidade,
        status: "aberto"
    }
    console.log("3 - SERVICE criou", tecnico)
    return tecnico
}

module.exports = {criar};