import errorMessageObj from "../siteConfig/errorMessageObj";

export const validateAll = (inputs) => {
    let isValid = false;
    let checkedErrors = {};

    Object.keys(inputs).forEach((key) => {
        let errorMessage = validate(key, inputs[key]);
        if (errorMessage) {
            checkedErrors[key] = errorMessage;
        }
    });

    if (Object.keys(checkedErrors).length === 0) {
        isValid = true;
    }

    return { isValid, checkedErrors };
};

export const validate = (name, value) => {
    if (
        isEmpty(value) &&
        name !== "file" &&
        name !== "roles" &&
        name !== "tags"
    ) {
        return errorMessageObj[name] + "을(를) 입력해주세요.";
    }

    // 필수 체크
    switch (name) {
        case "password222":
            return (
                checkRegPassword(value) &&
                "비밀번호는 8자이상이며 숫자, 영어, 특수문자가 포함되어야 합니다."
            );

        case "":
            return checkEmail(value) && "이메일 형식에 맞게 작성해주세요.";

        // case "bookRate":
        case "page":
        case "runningTimeInMinutes":
        case "totalAudience":
            return checkNumber(value) && "숫자만 입력 가능합니다.";

        default:
            return;
    }
};

export const isEmpty = (input) => {
    if (String(input).trim() === "") return true;
    else return false;
};

export const checkNumber = (input) => {
    const regexp = /^[0-9]*$/;
    if (!regexp.test(input)) return true;
    else return false;
};

// true 일때 에러 / false
export const checkEmail = (input) => {
    if (!input) return false;
    const regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regexp.test(input)) return true;
    else return false;
};

export const checkRegPassword = (password) => {
    const numbers = /[0-9]/;
    const spellings = /[a-zA-Z]/;
    const specialCharacters = /[~!@#$%&*]/;

    if (
        !numbers.test(password) ||
        !spellings.test(password) ||
        !specialCharacters.test(password) ||
        password.length < 8 ||
        password.length > 16
    ) {
        return true;
    } else {
        return false;
    }
};
