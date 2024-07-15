import { ServiceBase } from '../../api/ServiceBase';

class ProfileService extends ServiceBase {
  public async GetProfile() {}
}
export const profileService = new ProfileService();
