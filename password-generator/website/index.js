
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+{}:"<>?';

    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if (passwordLength < 1) {
        return 'Password length must be at least 1 character';
    }

    if (allowedChars.length === 0) {
        return 'Must include at least one character type';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length) + 1;
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;

const includeLowercase = true;
const incluseUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  incluseUppercase, 
                                  includeNumbers, 
                                  includeSymbols);

console.log(`Generated password: ${password}`);