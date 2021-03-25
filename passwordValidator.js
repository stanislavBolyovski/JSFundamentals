function passwordValidator(pass) {

    function passwordLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function passwordConsistance(pass) {
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {

            } else {
                return false;
            }
        }
        return true;
    }

    function passwordDigits(pass) {
        let digits = 0;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if (code >= 48 && code <= 57) {
                digits++;
            }
        }
        if (digits >= 2) {
            return true;
        } else {
            return false;
        }
    }


    if (passwordLength(pass) && passwordConsistance(pass) && passwordDigits(pass)) {
        console.log('Password is valid');
    } else {
        if (!passwordLength(pass)) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!passwordConsistance(pass)) {
            console.log('Password must consist only of letters and digits');
        }
        if (!passwordDigits(pass)) {
            console.log('Password must have at least 2 digits');
        }
    }
}

passwordValidator('Pa$s$s');