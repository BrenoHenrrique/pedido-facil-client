import Login from "../pages/Login/Login";
import {Route, Switch} from "react-router-dom";

export default function RoutesApp() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
        </Switch>
    );
}