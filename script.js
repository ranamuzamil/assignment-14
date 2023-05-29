let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');
let sciBtn = document.querySelectorAll('.sci-btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '/') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}
for (item of sciBtn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '/') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}
function asin() {
    screen.value = Math.asin(screen.value);
}


function cos() {
    screen.value = Math.cos(screen.value);
}
function acos() {
    screen.value = Math.acos(screen.value);
}


function tan() {
    screen.value = Math.tan(screen.value);
}function atan() {
    screen.value = Math.atan(screen.value);
}



function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}
function mplus() {
    screen.value = screen.value +sceen.value;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
function clearResult() {
    screen.value = ""; 
}

let memory = screen.value;

function mPlus(number) {
  memory += number;
  screen.value = memory;
}