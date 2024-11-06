import {ApiService} from "../ApiService";

export class CreateUserService extends ApiService {
    constructor(api) {
        super(api, "/auth");
    }

    index = () => {
        return super.get(`/v1/public/`)
    }
}