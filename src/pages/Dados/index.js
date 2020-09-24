const dados = [];

// function armazenaDados(val, sobre, email, senha) {
//     const teste = val;  
//    dados.push(teste);
// }



function armazenaDados(nome, sobrenome, email, senha) {

    const teste = {id: dados.length + 1,  nome: nome, sobrenome: sobrenome, email: email, senha: senha}
    
    dados.push(teste);
}

// function armazenaDados(val) {

//     const teste = val;
    
//    dados.push(teste);
// }

function enviaDados (){
    // return JSON.stringify(dados);
    return dados;
}

export {armazenaDados, enviaDados};




// function armazenaDados(nome, sobrenome, email, senha) {

//     const teste = {nome: nome, sobrenome: sobrenome, email: email, senha: senha}
    
//    dados.push(teste);
// }
