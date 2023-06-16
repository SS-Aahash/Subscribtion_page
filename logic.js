let button = document.getElementById("subscribe")
let input = document.getElementById('email')
let error_label = document.getElementById("valid_required")
let span = document.getElementById("dismiss_email")

let emailPattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;

button.addEventListener("click",()=>{
    if(emailPattern.test(input.value)){
        error_label.style.display = "none";
        input.classList.remove("error")
        sessionStorage.setItem("email",input.value)
        window.location.href = "confirmation.html"
        input.value = ""
    }
    else{
        error_label.style.display = "block";
        input.classList.add("error")
    }
})
input.addEventListener("keydown",(event)=>{
    if(event.keyCode === 13){
        if(emailPattern.test(input.value)){
            error_label.style.display = "none";
            input.classList.remove("error")
            sessionStorage.setItem("email",input.value)
            window.location.href = "confirmation.html"
            input.value = ""
        }
        else{
            error_label.style.display = "block";
            input.classList.add("error")
        }
    }
})
input.addEventListener("input",(event)=>{
    error_label.style.display = "none";
    input.classList.remove("error")
})

