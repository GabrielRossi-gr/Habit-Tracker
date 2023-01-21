const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)


const button = document.querySelector('header button')
button.addEventListener('click', add)
form.addEventListener('change', save)



function add(){
    const toDay = new Date().toLocaleDateString('pt-br').slice(0, 5)

    const DaiExist = nlwSetup.dayExists(toDay)
    if(DaiExist){    
        alert('the day already exist 😒')
    }else{
        nlwSetup.addDay(toDay)
    }
}

function save(){
 
    localStorage.setItem('NLWsetup@Habits', JSON.stringify(nlwSetup.data) )
}


const data = JSON.parse(localStorage.getItem("NLWsetup@Habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()



