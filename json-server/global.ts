export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;

      PORT: number;
      API_URL: string;

      JWT_ACCESS_SECRET: string;
      JWT_REFRESH_SECRET: string;
      ACCESS_EXPIRES: string;
      REFRESH_EXPIRES: string;

      SMTP_HOST: string;
      SMTP_PORT: number;
      SMTP_APP_PASSWORD: string;
      SMTP_USER: string;
    }
  }
}
