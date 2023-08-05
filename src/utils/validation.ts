const minPasswordLength = 8;

export const validateField = (fieldName: string, value: any, form: any) => {
    let isValid = true;
    let errorMessage = '';
    if (!value) {
        return { isValid, errorMessage: '' };
    }

    switch (fieldName) {
        case 'username':
            if (value.length < 3) {
                isValid = false;
                errorMessage = 'Username must be at least 3 characters';
            }
            break;
        case 'email':
            if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                isValid = false;
                errorMessage = isValid ? '' : 'Email is invalid';
            }

            break;
        case 'password':
            if (value.length < minPasswordLength) {
                isValid = false;
                errorMessage = `Password must be longer than ${minPasswordLength} characters`;
            } else if (
                !value.match(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                )
            ) {
                isValid = false;
                errorMessage =
                    'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character';
            }

            break;
        case 'confirmPassword':
            isValid = form?.password === value;
            errorMessage = isValid ? '' : 'Passwords do not match';
            break;
        default:
            break;
    }

    return { isValid, errorMessage };
};
