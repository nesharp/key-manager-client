import { ServiceBase } from '../../api/ServiceBase';
import { ILoginResponse } from '../types';

class AuthService extends ServiceBase {
  public async Login({ email, password }: { email: string; password: string }) {
    const response = await this._axios<ILoginResponse>({
      url: '/auth/login',
      data: {
        email,
        password,
      },
    });
    return response.data;
  }
  public async Register() {}
  public async Logout() {}
}
export const authService = new AuthService();
