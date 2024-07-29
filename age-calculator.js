// age-calculator.js

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);

    if (!dobInput) {
        document.getElementById('result').innerText = "Please enter a valid date of birth.";
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}

function resetForm() {
    document.getElementById('age-form').reset();
    document.getElementById('result').innerText = "";
}
