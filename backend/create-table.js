import sql from './src/database/db.js'




sql `
    CREATE TABLE if not exists tarefa (
        id serial PRIMARY KEY,
        titulo TEXT,
        descricao TEXT,
        concluida BOOLEAN
    );
`.then(() => {
    console.log("Tabela Criada!")
}).catch((err)=>{
    console.error("Erro ao criar tabela", err)
})