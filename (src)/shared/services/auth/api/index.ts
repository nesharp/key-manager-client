import { ServiceBase } from '../../api/ServiceBase';
import { ILoginResponse, IRegisterResponse } from '../types';

class AuthService extends ServiceBase {
  public async Login({ email, password }: { email: string; password: string }) {
    try {
      const response = await this._axios<ILoginResponse>({
        url: '/auth/login',
        data: {
          email,
          password,
        },
      });
      return response.data;
    } catch (error) {
      console.log('Error from AuthService:', error);
      throw error;
    }
  }
  public async Register(data: {
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
    phoneNumber: string;
    password: string;
  }) {
    try {
      const response = await this._axios<IRegisterResponse>({
        url: '/auth/register',
        data,
      });
      return response.data;
    } catch (error) {
      console.log('Error from AuthService', error);
      throw error;
    }
  }
  public async Logout({ token }: { token: string }) {
    try {
      this._axios({
        url: 'auth/logout',
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.log('Error from AuthService', error);
      throw error;
    }
  }
}
export const authService = new AuthService();
