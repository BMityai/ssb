import Helper from "sosise-core/build/Helper/Helper";
import GramarketDbRepositoryInterface from "../Repositories/GramarketDbRepositoryInterface";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import AdminUserAuthRequestBodyType from "../Types/AdminUserAuthRequestBodyType";
import AdminUserNotFoundException from "../Exceptions/AdminUserNotFoundException";
import PasswordIsNotValidException from "../Exceptions/PasswordIsNotValidException";
import authConfig from "../../config/auth";
import PrimevueTableParamsConverterUnifier from "../Components/Content/Block/adminhtml/Unifiers/PrimevueTableParamsConverterUnifier";
import { result } from "lodash";

export default class AdminhtmlService {
    protected gramarketDbRepository: GramarketDbRepositoryInterface

    /**
     * Constructor
     */
    constructor(repository: GramarketDbRepositoryInterface) {
        this.gramarketDbRepository = repository;
    }

    public async auth(params: AdminUserAuthRequestBodyType) {
        const user = await this.gramarketDbRepository.getAdminUser(params.login)
        if (!user) {
            throw new AdminUserNotFoundException('User not found', params.login);
        }

        if( user.username === params.login || user.email.toUpperCase() === params.login.toUpperCase() ) {
            const passwordIsValid = await bcrypt.compare(params.password, user.password);

            if (!passwordIsValid) {
                throw new PasswordIsNotValidException('Password is not valid', user.login);
            }
            const token = jwt.sign(
                { id: user.id },
                authConfig.secret,
                { expiresIn: authConfig.expires }
            )
            return {
                auth: true,
                token: token,
                user: user
            };
        }
        throw new AdminUserNotFoundException('User not found', params.login);
    }

    public async getUserByJwt(token: string) {
        try {
            const decoded = jwt.verify(token, authConfig.secret) as {id: string};
            const user = await this.gramarketDbRepository.getUserById(decoded.id);
            return { auth: true, user}
        } catch(e) {
            return false;
        }
    }
}
