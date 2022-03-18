import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Alert, AlertType } from './alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  alertSubject: Subject<Alert> = new Subject<Alert>();

  success(message: string) {
    this.alert(AlertType.SUCCESS, message);
  }

  warning(message: string) {
    this.alert(AlertType.WARNING, message);
  }
  info(message: string) {
    this.alert(AlertType.INFO, message);
  }

  error(message: string) {
    this.alert(AlertType.ERROR, message);
  }

  private alert(alertType: AlertType, message: string) {
    // Emitindo um novo alerta
    this.alertSubject.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }
}
