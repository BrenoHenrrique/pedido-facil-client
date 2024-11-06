import {CreateUserService} from "./CreateUserService";
import {AuthenticateService} from "./AuthenticateService";
import {ApiService} from "../ApiService";

export default function ModuleAuth() {
    const api = new ApiService();

    return {
        createUserService: new CreateUserService(api),
        authenticateService: new AuthenticateService(api),
    }
}