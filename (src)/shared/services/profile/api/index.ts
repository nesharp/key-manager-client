import { ServiceBase } from '../../api/ServiceBase';
import { ProfileResponse } from '../types';

class ProfileService extends ServiceBase {
  public async GetProfile({ token }: { token: string }) {
    try {
      const response = await this._axios<ProfileResponse>({
        url: '/auth/profile',
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      return response.data;
    } catch (e) {
      //TODO:delete it after deploiment to production
      console.log('Error from profile service', e);
      return null;
    }
  }
}
export const profileService = new ProfileService();
