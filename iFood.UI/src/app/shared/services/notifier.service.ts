import { NotificationType, NotificationBarService } from 'ngx-notification-bar';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotifierService {

  constructor(public notifier: NotificationBarService) { }

  public success(message: string): void {
    this.notifier.create(this.buildNotification(message, NotificationType.Success));
  }

  public info(message: string): void {
    this.notifier.create(this.buildNotification(message, NotificationType.Info));
  }

  public error(message: string): void {
    const notification = this.buildNotification(message, NotificationType.Error);
    notification.hideDelay = 4000;
    this.notifier.create(notification);
  }

  public warning(message: string): void {
      this.notifier.create(this.buildNotification(message, NotificationType.Warning));
  }

  private buildNotification(message: string, type: NotificationType): any {
    return {
      message,
      type,
      hideDelay: 1000,
      autoHide: true,
      allowClose: false,
      hideOnHover: true
    };
  }
}
