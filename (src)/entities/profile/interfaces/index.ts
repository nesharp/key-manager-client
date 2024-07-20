
export interface IProfile {
  user: User;
  session: Session;
}
interface User {
  id: number;
  avatarUrl: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  sessions: Session[];
  applications: any[];
}

interface Session {
  id: number;
  sessionToken: string;
  ipAddress: string;
  userAgent: string;
  createdAt: string;
  lastUsedAt: string;
}
