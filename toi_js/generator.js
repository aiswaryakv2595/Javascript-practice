function* mygenerator(){
    yield 1
    yield 2
    yield 3
}
const gen = mygenerator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
