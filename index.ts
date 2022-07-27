import './style.css';
import { of, distinctUntilChanged } from 'rxjs';

const startTestButton = document.querySelector('.start-test');
startTestButton.addEventListener('click', startTest);

function startTest() {
  const dataBase = [1, 1, 1, 2, 3, 3, 3];
  const source$ = of(...dataBase);

  // Operador distinctUntilChanged (Filtro)
  // Só emite quando o valor atual for diferente do último.
  source$.pipe(distinctUntilChanged()).subscribe((data) => {
    console.log(data);
  });
}
