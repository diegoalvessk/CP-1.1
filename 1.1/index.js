const readXlsFile = require('read-excel-file/node')
let contador = 0

readXlsFile("C:/Users/diego/OneDrive/Documentos/FLIT/FRONT-END/MODULO 3/SEÇÃO 1/Alunos.xlsx").then((rows) => {

    while(contador<11){
        console.log(rows[contador][0])
        contador++
    }
})