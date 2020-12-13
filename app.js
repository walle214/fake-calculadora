if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }

let screen = document.querySelector('#screen-result');
let screenM = document.querySelector('#screen-result-memo');
let  getData = (ref) => {
    let value = ref.value;
    screen.value += value;
}

let limpiar = () => {
    screen.value = '';
}

let resultado = () => {
    try{
        screen.value = eval(screen.value);

    }catch(error){
        screen.value = 'error';
        setTimeout(() => {
            clean();
        },500);
    }
}
let M = () => {
   
  
}
