import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Alert, AlertType } from './alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private router: Router) {
    // validando se mudei de rota depois que emoiti o evento da menssagem
    // quando mudar de rota o subcribe ira informar que a menssagem deve ser excluida
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfertRouteChange) {
          this.keepAfertRouteChange = false;
        } else {
          this.destroy();
        }
      }
    });
  }

  alertSubject: Subject<Alert> = new Subject<Alert>();

  // valida se é pra excluri a menssagem quando mudar de rota
  keepAfertRouteChange = false;

  success(message: string, keepAfterRouteChange = false) {
    console.log('success');
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.WARNING, message, keepAfterRouteChange);
  }
  info(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.INFO, message, keepAfterRouteChange);
  }

  error(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.ERROR, message, keepAfterRouteChange);
  }

  private destroy() {
    this.alert(AlertType.DESTROY, '', false);
  }

  private alert(
    alertType: AlertType,
    message: string,
    keepAfterRouteChange: boolean
  ) {
    // Emitindo um novo alerta
    this.keepAfertRouteChange = keepAfterRouteChange; // validando se é pra excluir a msg quando mudar de rota
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }
}
