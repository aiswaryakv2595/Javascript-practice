let result = document.getElementById('inputext')
let calculate = (number) => {
    console.log(`type -${typeof(number)}`)
    if (typeof number === 'number') {
        
        result.value += number;
        lastClickedIsOperator = false;
    } else if (!lastClickedIsOperator) {
       
        result.value += number;
        lastClickedIsOperator = true;
    }
}
let Result = () =>{
    try {
        result.value = eval(result.value)
    } catch (error) {
        result.value = 'Syntax Error'
    }
}
let clearfn = () =>{
    result.value = ''
}
let deletefn = () =>{
    result.value = result.value.slice(0,-1)
}
