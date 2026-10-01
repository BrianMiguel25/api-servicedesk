function suporteN1(chamado){
    console.log("N1 recebeu o chamado");
    if(chamado.prioridade === "normal"){
        console.log("N1 assumiu o chamado");
        return "Suporte N1 Atendeu o chamado";
    }
    console.log("N1 não conseguiu resolver");
    console.log("Encaminhado para N2");
    return suporteN2(chamado);
}

function suporteN2(chamado){
    console.log("N2 recebeu o chamado");
    if(chamado.prioridade === "medio"){
        console.log("N2 assumiu o chamado");
        return "Suporte N2 Atendeu o chamado";
    }
    console.log("N2 não conseguiu resolver");
    console.log("Encaminhado para para o ESPECIALISTA...");
    return especialista(chamado);
}

function especialista(chamado){
    console.log("ESPECIALISTA recebeu o chamado");
    if(chamado.prioridade === "alto"){
        console.log("N2 assumiu o chamado");
        return "ESPECIALISTA Atendeu o chamado";
    }
    throw new Error("Nenhum responsável encontrado");
}

module.exports = {
    suporteN1
}

