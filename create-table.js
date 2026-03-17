import sql from './db.js'

sql `
    CREATE TABLE TAREFA(
        ID INT PRIMARY KEY,
        CONCLUIDA BOOL,
        DESCRICAO TEXT,
        TITULO TEXT
    )
`.then(() => {
    console.log("Tabela Criada!")
}).catch((err)=>{
    console.error("Erro ao criar tabela", err)
})