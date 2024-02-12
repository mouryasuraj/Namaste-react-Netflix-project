export const checkValidate = (name, email, password, isSignInForm) => {
    if (name === '') {
        return 'Enter your full name'
    } else if (email === '') {
        return 'Enter your email'
    } else if (password === '') {
        return 'Please enter your password'
    }

    const isNameValid = /[a-zA-Z]/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    if (!isSignInForm) {
        const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
        if (!isPasswordValid) return ' Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters';
    }
    // const isMobileNumberValid = /[0-9]{10,10}/.test(phoneNumber)
    if (!isNameValid) return 'Please your full name';
    if (!isEmailValid) return 'Email is not valid';
    // if (!isMobileNumberValid) return 'Please enter your 10 digit mobile number';

    return null;
};