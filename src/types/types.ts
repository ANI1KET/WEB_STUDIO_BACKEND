export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export type User = {
  id: string;
  role: Role;
  name: string;
  email: string;
};

export interface ErrorLogPayload {
  // Error details
  type?: string;
  // stack?: string;
  status: number;
  message: string;

  // Request metadata
  ip: string;
  url: string;
  body: unknown;
  query: unknown;
  method: string;
  params: unknown;
  // userAgent?: string;

  // Authenticated user
  user: User | null;
}
