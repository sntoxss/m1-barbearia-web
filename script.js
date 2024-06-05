const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
function buscaCortePorId(id) {
    let corte;
    for(let i = 0 ; i < barbearia.cortes.length; i++){
        if(barbearia.cortes[i].id === id){
            corte = barbearia.cortes[i]
            return corte
        }
    }
    return "Corte não encontrado"
}
function buscaBarbaPorId(id) {
    let barba;
    for(let i = 0 ; i < barbearia.barbas.length; i++){
        if(barbearia.barbas[i].id === id){
            barba = barbearia.barbas[i]
            return barba
        }
    }
    return "Barba não encontrada"
}
function verificaStatusBarbearia() {
    if(barbearia.estaAberto === true){
        return "Estamos abertos"
    }else{
    return "Estamos fechados"
    }
}
function retornaTodosCortes() {
    return barbearia.cortes
}
function retornaTodasBarbas() {
    return barbearia.barbas
}
function criaPedido(nomeCliente, corteId, barbaId) {
    let corte = buscaCortePorId(corteId);
    let barba = buscaBarbaPorId(barbaId);
    let pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor
    };

    return pedido;
}
function atualizarServico(lista, id, valor, tipo) {
    for(let i = 0 ; i < lista.length; i++){
        if(lista[i].id === id){
            lista[i].tipo = tipo;
            lista[i].valor = valor;
            return lista;
        }
    }
    return lista;
   }

function calculaTotal(pedido) {
    if(pedido.pedidoBarbaPreco && pedido.pedidoCortePreco){
        return pedido.pedidoBarbaPreco + pedido.pedidoCortePreco;
    }else{
        return 0;
    }
    
    
}
