import { Switch, Redirect, Route } from "react-router-dom";
import Result from "./Result";
const Routes = () => (
  <div className="p-4">
    <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path={["/", "/search", "/images", "/news", "/videos"]}>
        <Result />
      </Route>
    </Switch>
  </div>
);
export default Routes;
