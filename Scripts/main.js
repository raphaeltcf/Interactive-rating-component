const num = document.querySelectorAll(".valor");

document.querySelector(".submit").addEventListener("click", () => {
    let valor = 0
    for(let i = 0; i < num.length; i++) {
        if (num[i].checked){
            valor = num[i].value
        }
    }
    if (valor != 0) {
        window.location.href=`final.html?valor=${valor}`
    } 
})