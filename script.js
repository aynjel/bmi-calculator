document.querySelector('#bmi-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const feet = document.querySelector('#feet').value;
    const inches = document.querySelector('#inches').value;
    const pounds = document.querySelector('#pounds').value;
    const result = document.querySelector('.result');

    if (feet === '' || inches === '' || pounds === '') {
        alert('Please fill in all fields');
    }

    const totalInches = parseInt(feet) * 12 + parseInt(inches);
    const bmi = (parseInt(pounds) / (totalInches * totalInches)) * 703;

    document.querySelector('.result').style.display = 'flex';

    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.result-details').style.display = 'block';
    }, 1000);
    
    var bmiResult = document.querySelector('#bmi');
    var bmiCategory = document.querySelector('#category');

    bmiResult.innerHTML = bmi.toFixed(1);

    if (bmi < 18.5) {
        bmiCategory.innerHTML = 'Underweight';
        bmiCategory.style.color = '#ffc44d';
        result.style.backgroundColor = '#ffc44d';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory.innerHTML = 'Normal';
        bmiCategory.style.color = '#00e600';
        result.style.backgroundColor = '#00e600';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory.innerHTML = 'Overweight';
        bmiCategory.style.color = '#ff9900';
        result.style.backgroundColor = '#ff9900';
    } else if (bmi >= 30) {
        bmiCategory.innerHTML = 'Obese';
        bmiCategory.style.color = '#ff3300';
        result.style.backgroundColor = '#ff3300';
    }

    document.querySelector('#feet').value = '';
    document.querySelector('#inches').value = '';
    document.querySelector('#pounds').value = '';
});
    

document.querySelector('#reset').addEventListener('click', function () {
    document.querySelector('.result').style.display = 'none';
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.result-details').style.display = 'none';
});