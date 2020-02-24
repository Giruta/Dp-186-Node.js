function getUser() {
    info.value = 'Происходит загрузка пользователя';
    loadUser();
}

function loadUser() {
    const aja = new XMLHttpRequest();
    aja.onload = function(){
        if(this.status == 200) {
            showUser(JSON.parse(this.responseText));
        } else {
            info.value = 'Ошибка в загрузке данных';
        }
    } 
    aja.open('GET','https://randomuser.me/api/');
    aja.send();
}

function showUser(data) {
    console.log(data);
    info.value = `${data.results[0].name.first} ${data.results[0].dob.age}`
}

