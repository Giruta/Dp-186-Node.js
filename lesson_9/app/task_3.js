// Task 3:

const link = 'https://randomuser.me/api/?results=1000'

function loadUsers(link = "https://randomuser.me/api/?results=1000") {
    const aja = new XMLHttpRequest();
    aja.onload = function(){
        console.log('status = ', this.status);
        if(this.status == 200) {
            showUsers(JSON.parse(this.responseText).results);
        } else {
            young.value = 'Error loading data';
        }
    } 
    aja.open('GET',link);
    aja.send();
}

function showUsers(data) {
    theYoungest(data);
    theOldest(data);
    numberMen(data);
    numberWomen(data);
    averageAgeMen(data);
    averageAgeWomen(data);
    city(data);
}

function theYoungest(data) {
    let minAge = data[0].dob.age;
    let nameFirst = '', nameSecond = '', age = 0;
    data.forEach(user => {
        if (user.dob.age < minAge) {
            minAge = user.dob.age;
            nameFirst = user.name.first;
            nameSecond = user.name.last;
            age = user.dob.age;
        }
    }) 
    console.log('string = ', `${nameFirst} ${nameSecond} ${age} years old`);
    young.value = `${nameFirst} ${nameSecond} ${age} years old`;
}

function theOldest(data) {
    let maxAge = data[0].dob.age;
    let nameFirst = '', nameSecond = '', age = 0;
    data.forEach(user => {
        if (user.dob.age > maxAge) {
            maxAge = user.dob.age;
            nameFirst = user.name.first;
            nameSecond = user.name.last;
            age = user.dob.age;
        }
    }) 
    console.log('string = ', `${nameFirst} ${nameSecond} ${age} years old`);
    old.value = `${nameFirst} ${nameSecond} ${age} years old`;
}

function numberMen(data) {
    let number = data.filter(user => user.gender === 'male').length;
    console.log('numberMen = ', number);
    menNumber.value = number;
    
    return number;
}

function numberWomen(data) {
    let number = data.filter(user => user.gender === 'female').length;
    console.log('numberWomen = ', number);
    womenNumber.value = number;
    
    return number;
}

function averageAgeMen(data) {
    let res = data.filter(user => user.gender === 'male');
    res = res.reduce((acc,cur) => {
        acc+=cur.dob.age;
        return acc;
    }, 0);
    let number = Math.floor(res / numberMen(data));
    menAverageAge.value = number;
}

function averageAgeWomen(data) {
    let res = data.filter(user => user.gender === 'female');
    res = res.reduce((acc,cur) => {
        acc+=cur.dob.age;
        return acc;
    }, 0);
    let number = Math.floor(res / numberWomen(data));
    womenAverageAge.value = number;
}

function city(data) {
    let cities = [];
    let maxCity = 0;
    let nameCity = '';

    data.forEach(item => {
        if(!cities.includes(item.location.city)) {
            cities[item.location.city] = 1;
        } else cities[item.location.city]++;
    });
    cities.forEach((item, i, arr) => {
        if(item > max) {
            max = item;
            nameCity = i;
        }
    })
    city.value = `${max}, ${nameCity}`;
}