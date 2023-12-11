const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j] / notasGerais[i].length
    }
}

media = media / notasGerais.length

console.log(media)

let TextoGrande = "Olá, tudo bem? Esse é um texto grande que vamos ter que quebrar, Esse é um texto grande que vamos ter que quebrar, Esse é um texto grande que vamos ter que quebrar, Esse é um texto grande que vamos ter que quebrar, Esse é um texto grande que vamos ter que quebrar, Esse é um texto grande que vamos ter que quebrar, Esse é um texto grande que vamos ter que quebrar, Esse é um texto grande que vamos ter que quebrar, Esse é um texto grande que vamos ter que quebrar, Esse é um texto grande que vamos ter que quebrar, "

console.log(TextoGrande)

let palavras = ["oi", "ok"]

for (let i = 0; i < palavras.length; i++) {
    const element = palavras[i]; 
}


const X = 1
const x=3
const c= 8
//esse é um comentário que já existia