//COOKIE

const dom = {
    inp : document.querySelector('#inp-info'),
    btn : document.querySelector('#btn-memo'),
}; 

// dom.btn.addEventListener('click', ()=>{
//     Cookie.set(Date.now(), dom.inp.value, 2);
//     // const coo = new Cookie();
//     // coo.set(Date.now(), dom.inp.value, 2);
//     dom.inp.value = '';
//     //setCookie(Date.now(), dom.inp.value, 2);

// });
dom.btn.addEventListener('click', ()=>{
    
    //localStorage.setItem(Date.now(), dom.inp.value, 2);
    const arr = JSON.parse(localStorage.getItem('inputs')) || [];
    arr.push(dom.inp.value);
    localStorage.setItem('inputs', JSON.stringify(arr));
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = `${cname} = ${cvalue};${expires};path=/`;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = document.cookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      c = c.trim();
      if (c.indexOf(name) == 0) {
        return c.slice(name.length);
      }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = `${cname}=; expires =Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

class Cookie {
    static del(cname) {
        document.cookie = `${cname}=; expires =Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    }
    static get(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = document.cookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            c = c.trim();
            if (c.indexOf(name) == 0) {
                return c.slice(name.length);
            }
        }
        return "";
    }
    static set(cname, cvalue, exdays){
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = `${cname} = ${cvalue};${expires};path=/`;
    }
}

// localStorage

