import axios, { AxiosInstance } from 'axios';

export class ServiceBase {
  private readonly _backendUrl: string;
  protected readonly _axios: AxiosInstance;
  constructor() {
    this._backendUrl = process.env.BACKEND_URL || 'http://localhost:5295/api';
    this._axios = axios.create({
      baseURL: this._backendUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
