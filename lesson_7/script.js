const arrows = ['.', '|', '`', '}'];
const links = ['@','@','@','@','@','@'];

function   spinner(ob) {
    console.clear();
    ob.counter = (ob.counter + 1) % arrows.length;
    console.log(arrows[ob.counter]);
}

function   spinner1(ob) {
    //console.clear();
    let links1 = links.slice(ob.counter + 1)
    console.log(links1[ob.counter]);
}

setInterval(spinner, 500, {counter:0});
setInterval(spinner1, 500, {counter:0});
