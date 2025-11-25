// export enum Gender {
//   MALE = 'MALE',
//   OTHER = 'OTHER',
//   FEMALE = 'FEMALE',
// }

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  BROKER = 'BROKER',
}

export enum Permission {
  room = 'room',
  hostel = 'hostel',
  vehicle = 'vehicle',
  // property = 'property',
  // reMarketItem = 'reMarketItem',
}

export type User = {
  // age: number;
  // name: string;
  email: string;
  userId: string;
  //   image?: string;
  //   address: string;
  number?: string;
  //   password?: string;
  //   documentId: string;

  role: Role;
  //   gender?: Gender;
  //   promoting: Permission[];
  permission: Permission[];
  //   servicesOffered: Permission[];
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
