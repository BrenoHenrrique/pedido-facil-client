import Authenticate from "../pages/Login/Authenticate";
import {Route, Switch} from "react-router-dom";
import CreateUser from "../pages/Login/CreateUser";

export default function RoutesApp() {
    return (
        <Switch>
            <Route exact path="/login" component={Authenticate} />
            <Route exact path="/create-user" component={CreateUser} />
        </Switch>
    );
}