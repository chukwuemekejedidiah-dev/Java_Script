function validatePassword(password){

    let length = 0
    let hasNumber = false
    let hasUpper = false

    for(let i = 0; password[i] !== undefined; i++){

        let ch = password[i]
        length++

        if(ch >= '0' && ch <= '9'){
            hasNumber = true
        }

        if(ch >= 'A' && ch <= 'Z'){
            hasUpper = true
        }

    }

    if(length >= 8 && hasNumber && hasUpper){
        return true
    }

    return false
}

console.log(validatePassword("Hello123"))
console.log(validatePassword("hello"))