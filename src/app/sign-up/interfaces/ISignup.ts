export interface ISignupRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ISignupResponse {
  status: string;
  message: string;
  data?: {
    userId: number;
    username: string;
    email: string;
    role: string;
    token: string;
  };
  errors?: {
    email: string;
    password: string;
  };
}
