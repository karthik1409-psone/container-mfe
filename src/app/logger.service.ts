import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class LoggerService {

  constructor() { }

  public LogMessage()
  {
    return "This is from LoggerService inside CONTAINER";
  }
}
