import {ApiService} from "../ApiService";

export class AuthenticateService extends ApiService {
    constructor(api) {
        super(api);
    }

    index = () => {
        return super.get("/auth/")
    }
}