export const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/


export const isLoginValid = (email, password) => {
    if (!emailFormat.test(email)) {
        alert("Enter valid email address!")
        return false

    }
    if (!passwordFormat.test(password)) {
        alert("8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character!")
        return false
    }
    return true
}

export const isSignupValid = (name, email, password, confirmPassword) => {
    if (name == "") {
        alert("Enter name!")
        return false
    }
    if (!emailFormat.test(email)) {
        alert("Enter valid email address!")
        return false
    }
    if (!passwordFormat.test(password)) {
        alert("8 Characters required, One Uppercase, One Lowercase, One Number and one special case Character!")
        return false
    }
    if (password != confirmPassword) {
        alert("password did not matched!")
        return false
    }
    return true
}