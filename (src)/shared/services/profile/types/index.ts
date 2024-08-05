import { User } from '@/(src)/shared/services/auth/index';

export interface ProfileResponse {
  profile: Profile;
  token: string;
}
export interface Profile {
  id: number;
  avatarUrl: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  sessions: Session[];
  applications: Application[];
}

export interface Session {
  id: number;
  sessionToken: string;
  ipAddress: string;
  userAgent: string;
  createdAt: string;
  lastUsedAt: string;
}
export interface Application {}
