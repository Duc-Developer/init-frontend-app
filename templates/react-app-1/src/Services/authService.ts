import { BaseResponse } from '@src/Models';
import { FormLogin, FormLoginResponse, UserInfo } from '@src/Models/auth';
import { BaseService } from '.';

export const AUTH_API_SERVICE = {
    ROOT: 'auth',
    LOGIN: '/login',
    ABOUT_ME: '/me',
}

class AuthService extends BaseService<BaseResponse> {
    constructor() {
        super(AUTH_API_SERVICE.ROOT);
    }

    async login(data: FormLogin) {
        return this.post<FormLoginResponse>(data, { url: AUTH_API_SERVICE.LOGIN });
    }

    async getMyProfile() {
        this.get<BaseResponse<UserInfo>>(AUTH_API_SERVICE.ABOUT_ME);
    }
}

const authService = new AuthService();
export default authService;
