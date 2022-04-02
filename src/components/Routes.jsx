import { Switch, Redirect, Route } from "react-router-dom";
const Routes = () => (
  <div className="p-4">
    <Switch>
      <Route exacte to="/">
        <Redirect to="/search" />
      </Route>
      <Route to={["/search", "/images", "/news", "/videos"]}>
        <Result />
      </Route>
    </Switch>
  </div>
);
export default Routes;
