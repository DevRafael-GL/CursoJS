let num = [3,1,7,3,4,0]
console.log(`Nosso vetor é o ${num}`)
/*for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(`A possição ${pos} recebe os valores ${num[pos]}`)
}
