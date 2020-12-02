export const validateAll = (inputs) => {
    let isValid = false;
    let checkedErrors = {};

    Object.keys(inputs).forEach((key) => {
        if (key !== "description" && key !== "job") {
            let errorMessage = validate(key, inputs[key]);
            if (errorMessage) {
                checkedErrors[key] = errorMessage;
            }
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

        case "bookRate":
        case "page":
        case "runningTimeInMinutes":
        case "totalAudience":
            return checkNumber(value) && "숫자만 입력 가능합니다.";

        default:
            return;
    }
};

export const isEmpty = (input) => {
    return String(input).trim() === "" ? true : false;
};

export const checkNumber = (input) => {
    const regexp = /^[0-9]*$/;
    return !regexp.test(input) ? true : false;
};

// true 일때 에러 / false
export const checkEmail = (input) => {
    if (!input) return false;
    const regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return !regexp.test(input) ? true : false;
};

export const checkRegPassword = (password) => {
    const numbers = /[0-9]/;
    const spellings = /[a-zA-Z]/;
    const specialCharacters = /[~!@#$%&*]/;

    return !numbers.test(password) ||
        !spellings.test(password) ||
        !specialCharacters.test(password) ||
        password.length < 8 ||
        password.length > 16
        ? true
        : false;
};

const errorMessageObj = {
    category: "카테고리",
    contents: "내용",
    description: "설명",
    elaboration: "출판사 설명",
    mainTitle: "메인 제목",
    subtitle: "부제목",
    page: "총페이지 수",
    productionDate: "제작년도",
    runningTimeInMinutes: "상영시간",
    totalAudience: "관객수",
    name: "이름",
    characterName: "극중이름",
    role: "역할",
    countryCode: "국가코드",
    originTitle: "원제목",
    bookRate: "예매율",
};
