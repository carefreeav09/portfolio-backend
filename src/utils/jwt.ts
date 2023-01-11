/* eslint-disable indent */
import jwt from "jsonwebtoken";

export const jwtConfig = {
  access: {
    secret: process.env.JWT_SECRET || "this_is_access_secret",
    expiration: process.env.JWT_EXPIRATION || "1d",
  },
  refresh: {
    secret: process.env.JWT_REFRESH_SECRET || "this_is_refresh_secret",
    expiration: process.env.JWT_REFRESH_EXPIRATION || "10d",
  },
};

interface IJwtHelperClass {
  createJwtTokens(payload: any): any;
  verifyRefreshToken(payload: any): any;
  setToken(accessToken: string, refreshToken: string): void;
  validateAccessToken(token: string): boolean;
}

class JwtHelperClass implements IJwtHelperClass {
  private token: Map<string, string>;
  constructor() {
    this.token = new Map<string, string>([]);
  }

  async createJwtTokens(payload: any) {
    const accessToken = jwt.sign(payload, jwtConfig.access.secret, {
      expiresIn: jwtConfig.access.expiration,
    });

    const refreshToken = jwt.sign(payload, jwtConfig.refresh.secret, {
      expiresIn: jwtConfig.refresh.expiration,
    });

    return { accessToken, refreshToken };
  }

  async verifyRefreshToken(oldRefreshToken: any) {
    if (!this.token.has(oldRefreshToken)) {
      const error: any = new Error("Refresh token not found.");
      error.code = 404;
      throw error;
    }

    const jwtData = jwt.verify(oldRefreshToken, jwtConfig.refresh.secret);

    //@ts-ignore
    delete jwtData.iat;
    //@ts-ignore
    delete jwtData.exp;

    const accessToken = jwt.sign(jwtData, jwtConfig.access.secret, {
      expiresIn: jwtConfig.access.expiration,
    });
    const refreshToken = jwt.sign(jwtData, jwtConfig.refresh.secret, {
      expiresIn: jwtConfig.refresh.expiration,
    });

    this.token.delete(oldRefreshToken);

    this.token.set(refreshToken, accessToken);

    return {
      accessToken,
      refreshToken,
    };
  }

  setToken(accessToken: string, refreshToken: string) {
    this.token.set(refreshToken, accessToken);
  }

  validateAccessToken(accessToken: string) {
    if (this.token) {
      const compare = [...this.token.values()];
      return compare.includes(accessToken);
    } else return true;
  }
}

export const JwtHelper = new JwtHelperClass();