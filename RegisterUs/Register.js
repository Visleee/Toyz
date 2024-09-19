function validate(){
        const username = document.getElementById("username").value
        const calender = document.getElementById("calender")
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const agreement = document.getElementById("agreement")

        if(username.length < 8){
                alert("Username must be 8 character")
        }else if(calender.value === ''){
                alert("Calender cannot be empty")
        }else if(!email.endsWith("@gmail.com")){
                alert("Email must be end with @gmail.com")
        }else if(isAlphaNum(password) == false){
                alert("Password must be contain at least 1 alphabet and 1 number")
        }else if(!agreement.checked){
                alert("You must agree terms and conditions")
        }else{
                window.location.href = "../Login/Login.html"
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
}