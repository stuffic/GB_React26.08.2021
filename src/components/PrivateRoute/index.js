import { Route, Redirect } from "react-router";

export const PrivateRoute = ({auth, ...props}) => 
auth ? <Route {...props} ></Route> : <Redirect to = "/login"/>