export default class AdminUserAuthRequestBodyType {
    login: string;
    password: string;

    constructor(requestBody: any) {
        this.setProps(requestBody)
    }

    private setProps(requestBody: any) {
        this.login = requestBody.login;
        this.password = requestBody.password;
    }
}
