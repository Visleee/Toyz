function validate(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const pass = document.getElementById("pass").value
    
    if(username.length < 8){
        alert("Username must be 8 character")
    }else if(isAlphaNum(password) == false){
        alert("Password must be contain at least 1 alphabet and 1 number")
    }else if(isNum(pass) == false){
        alert("Password must be contain at least 1 alphabet and 1 number")
    }else{
        window.location.href = "../HomePage/HomePage.html"
    }

    function isAlphaNum(password){
        var isAlpha = false
        var isNum = false
        for(let i = 0; i < password.length; i++){
            if(isNaN(password[i])){
                isAlpha = true
            }else isNum = true
        }
        if(isAlpha == false || isNum == false){
            return false
        } 
        return true
    }    

    function isNum(pass){
        var isAlpha = false
        var isNum = false
        for(let i = 0; i < pass.length; i++){
            if(isNaN(pass[i])){
                isAlpha = true
            }else isNum = true
        }
        if(isAlpha == false || isNum == false){
            return false
        } 
        return true
    }
}