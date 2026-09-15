const calcular = async (callback, v1, v2) => {
    console.log("Iniciando o cálculo...")
    await callback(v1, v2)
    console.log("Cálculo finalizado!!!")
}

const somar = (v1, v2) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('Somando...')
            console.log(v1 + v2)
            res()
        }, 1500)
    })
}

const subtrair = (v1, v2) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('Subtraindo...')
            console.log(v1 - v2)
            res()
        }, 1500)
    })
}

const multiplicar = (v1, v2) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('Multiplicando...')
            console.log(v1 * v2)
            res()
        }, 1500)
    })
}

const dividir = (v1, v2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (v2 == 0){
                console.log("Impossível dividir por 0!")
                reject()
            } else {
                console.log("Dividindo...")
                console.log(v1 / v2)
                resolve()
            }
        }, 1500)
    })
}

const main = async () => {
    await calcular(somar, 20, 5)
    await calcular(subtrair, 20, 5)
    await calcular(multiplicar, 20, 5)
    await calcular(dividir, 20, 5)
}

main()