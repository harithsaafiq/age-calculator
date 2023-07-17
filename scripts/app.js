const calculateButton = document.getElementById('calculate-btn');

function calculateAge() {
    const inputBirthday = document.getElementById('birthday');
    const inputBirthdayValue = inputBirthday.value;

    if (inputBirthdayValue === '') {
        alert('Invalid input, please enter your date of birth !');
    } else {
        const yearSpan = document.getElementById('year');
        const monthSpan = document.getElementById('month');
        const daySpan = document.getElementById('day');

        let ageYear = getAge(inputBirthdayValue)[0];
        let ageMonth = getAge(inputBirthdayValue)[1];
        let ageDay = getAge(inputBirthdayValue)[2];

        yearSpan.innerText = `${ageYear} ${ageYear > 1 ? "years" : "year"}`;
        monthSpan.innerText = ` ${ageMonth} ${ageMonth > 1 ? "months" : "month"}`;
        daySpan.innerText = ` ${ageDay} ${ageDay > 1 ? "days" : "day"}`;

        const showAgeResult = document.getElementById('age-result');
        showAgeResult.classList.add('display');
    }
}

function getAge(inputBirthdayValue) {
    const ageResult = [];
    const currentDate = new Date();
    const birthdayDate = new Date(inputBirthdayValue);

    const diff = new Date(currentDate - birthdayDate);
    const currentDateYear = currentDate.getFullYear();
    const birthdayDateYear = birthdayDate.getFullYear();

    let countDateYears = currentDateYear - birthdayDateYear;
    let countDateMonths = diff.getUTCMonth();
    let countDateDays = diff.getUTCDate() - 1;

    ageResult.push(countDateYears, countDateMonths, countDateDays);
    console.log(ageResult);
    return ageResult;
}

calculateButton.addEventListener('click', calculateAge);