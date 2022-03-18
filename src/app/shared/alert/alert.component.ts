import { AlertService } from './alert.service';
import { Component, Input, OnInit } from '@angular/core';
import { Alert, AlertType } from './alert';

@Component({
  selector: 'ap-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(private alertService: AlertService) {
    this.alertService.getAlert().subscribe((alert) => {
      if (!alert) {
        this.alerts = [];
        return;
      }
      this.alerts.push(alert);
      setTimeout(() => this.removeAlert(alert), this.timeout);
    });
  }

  @Input() timeout = 3000;

  alerts: Alert[] = [];

  removeAlert(alerToRemove: Alert) {
    this.alerts = this.alerts.filter((x) => x !== alerToRemove);
  }

  getAlertClass(alert: Alert) {
    if (!alert) {
      return;
    }

    switch (alert.alertType) {
      case AlertType.SUCCESS:
        return 'alert alert-success';
      case AlertType.ERROR:
        return 'alert alert-danger';
      case AlertType.INFO:
        return 'alert alert-info';
      case AlertType.WARNING:
        return 'alert alert-warning';
    }
  }

  ngOnInit(): void {}
}
