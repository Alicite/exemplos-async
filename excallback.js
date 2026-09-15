const calcular = (callback, v1, v2) => {
    console.log("Iniciando o cálculo...")
    return callback(v1, v2)
}

const somar = (v1, v2) => {
    console.log("Somando...")
    return v1 + v2
}

const subtrair = (v1, v2) => {
    console.log("Subtraindo...")
    return v1 - v2
}

const multiplicar = (v1, v2) => {
    console.log("Multiplicando...")
    return v1 * v2
}

const dividir = (v1, v2) => {
    console.log("Dividindo...")
    return v1 + v2
}

console.log(calcular(somar, 27, 3))
console.log(calcular(subtrair, 27, 3))
console.log(calcular(multiplicar, 27, 3))
console.log(calcular(dividir, 27, 3))