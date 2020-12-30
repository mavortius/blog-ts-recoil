import { Suspense } from 'react';
import { BrowserRouter,NavLink, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import './App.css';
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense fallback={<p>Loading...</p>}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/posts" component={PostsPage} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
