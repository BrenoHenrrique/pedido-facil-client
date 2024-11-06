import ModuleAuth from "./auth/ModuleAuth";

export default function routesService() {
    return {
        auth: {...ModuleAuth()},
    }
}