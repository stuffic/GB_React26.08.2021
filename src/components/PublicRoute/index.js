import { Route, Redirect } from "react-router";

export const PublicRoute = ({auth, ...props}) => 
!auth ? <Route {...props} ></Route> : <Redirect to = "/profile"/>