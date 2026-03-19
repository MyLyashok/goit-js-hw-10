import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const myForm = document.querySelector('.form');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = Number(myForm.elements.delay.value);
  const state = myForm.elements.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then((resultDelay) => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${resultDelay}ms`,
      position: 'topRight'});
    
    }).catch((errorDelay) => {
      iziToast.error({
        message: `❌ Rejected promise in ${errorDelay}ms`,
      position: 'topRight'});
    
    });
});