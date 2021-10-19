const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

it('should return 2', () => {
    expect(returnTwo()).toEqual(2)

})

it('take in a name and return Hello, [name].', () => {
    expect(greeting('James')).toEqual('Hello, James.')
    expect(greeting('Jill')).toEqual('Hello, Jill.')
})

describe('Math functions', () =>{
it('take in numbers and add them together', () => {
    expect(add(1,2)).toEqual(3)
    expect(add(5,9)).toEqual(14)
})

it('multiplies two numbers', () => {
    expect(multiply(3,5)).toEqual(15)
    expect(multiply(5,5)).toEqual(25)
})

it('divides two numbers', () => {
    expect(divide(90,10)).toEqual(9)
    expect(divide(80,2)).toEqual(40)
})

it('take in two numbers and subtract them', () => {
    expect(subtract(875,343)).toEqual(532)
    expect(subtract(8968,434)).toEqual(8534)
})

})