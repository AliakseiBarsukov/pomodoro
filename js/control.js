import { startTimer } from "./startTimer.js";
import { state } from "./state.js";




export const initControl = () => {

  const btnStart = document.querySelector('.control__btn_start');
  const btnStop = document.querySelector('.control__btn_stop');

  btnStart.addEventListener('click', () => {

    if (state.isActive) {
      clearTimeout(state.timerId);
      state.isActive = false;
      btnStart.textContent = 'Старт';
    } else {
      state.isActive = true;
      btnStart.textContent = 'Пауза';
      startTimer();
    }
  })
}