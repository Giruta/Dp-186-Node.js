function loadData(link = '/lesson_9/data/data.csv', isJSON) {
    // создание объекта AJAX
    const aja = new XMLHttpRequest();

    // aja.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(`readyState: ${this.readyState},
    //         status: ${this.status}`, 'background-color:black');
    //         console.log('responseText = ', this.responseText);
    //     }
    // }

    // aja.onload = function() {
    //         console.log(`%creadyState: ${this.readyState},
    //         status: ${this.status}`);
    //         //console.log('responseText = ', this.responseText);
    // }

    aja.onload = function() {
        if (this.status == 200) {
            showData(this.responseText, isJSON);
        }
    // настройка получения данных
    }
        // настройка отправки данных
        aja.open('GET', link);
        // отправка данных
        aja.send();

        return `OK the message was sent to ${link}`
    }
    function showData (data, isJSON) {
        const phones = isJSON? JSON.parse(data):data.split(/\n/).map(str=>str.split(';'));
        console.log(data);
        console.table(data);
    }
