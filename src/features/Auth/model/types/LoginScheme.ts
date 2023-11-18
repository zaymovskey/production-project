export interface ILoginScheme {
  email: string;
  password: string;
  isLoading: boolean;
  loginError?: string;
  registerError?: string;
}
