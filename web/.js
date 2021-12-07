const array = [1,2,3,4,5]

const Func = (array) => {
    return [Math.max(...array), Math.min(...array)]
}
console.log(Func(array))