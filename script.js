const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)


const button = document.querySelector('header button')
button.addEventListener('click', add)
function add(){
    alert('alerta')
}

/*
const data = {
    run: ["01-16","01-17","01-18","01-19", "01-20", "01-21", "01-22", "01-23", "01-24", "01-25", "01-26", "01-27", "01-28", "01-29", "01-30", "02-01", "02-02", "02-03", "02-04", "02-05", "02-06"],
    water: ["01-17", "01-18", "01-19"],
}


nlwSetup.setData(data)
nlwSetup.load()

*/