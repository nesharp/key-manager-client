export interface ILoginResponse {
  user: User;
  token: string;
}
export interface IRegisterResponse extends User {}
export interface User {
  id: number;
  avatarUrl: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  sessions: Session[];
  applications: any[];
}

export interface Session {
  id: number;
  sessionToken: string;
  ipAddress: string;
  userAgent: string;
  createdAt: string;
  lastUsedAt: string;
}
