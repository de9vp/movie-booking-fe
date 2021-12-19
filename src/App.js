import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routeList from './routes'

function App() {

  const showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={route.element}
          />
        );
      });
    }
    return <Routes>{result}</Routes>;
  }

  return (
    <Router>
      {showContentMenus(routeList)}
    </Router>
  );


}

export default App;
