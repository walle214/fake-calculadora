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
//añade memoria 
let M = () => {
    try{
        screen.value = eval(screen.value);

    }catch(error){
        screen.value = 'error';
        setTimeout(() => {
            clean();
        },500);
    }
    screen.value = eval(screen.value);
    screenM.value = screen.value;
}
//limpia memoria 
let MR = () => {
    screenM.value = '';
}
//copia memoria
let MC = () => {
    if(screenM.value==="0"){
    }else{

      screen.value = screen.value  + screenM.value;
    }
  }

  

 

  