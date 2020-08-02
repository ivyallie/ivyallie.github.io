let stylesheet = document.getElementById('colorscheme');

let scheme = localStorage.getItem('scheme');

if(!(scheme)) {
    let scheme = 'light';
    localStorage.setItem('scheme','light');
}

if (scheme === 'dark') {
    setmode('dark')
}

function switchmode(){
    if(scheme === 'light') {
        scheme = 'dark';
    } else {
        scheme = 'light';
    }
   return scheme;
}


function setmode(mode){
    let sheetAddress = '/assets/css/'+mode+'.css';
    stylesheet.setAttribute('href', sheetAddress)
    localStorage.setItem('scheme',mode);
}

function modebutton(){
    let newmode = switchmode()
    setmode(newmode)
}