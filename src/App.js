import { Route } from 'react-router-dom';
import "./App.css";
import MovieListPage from "../src/components/MovieListPage";
import MovieDetailsPage from "../src/components/MovieDetailsPage";

function App() {
  return (
    <div className="App">
    
        <Route path="/" component={MovieListPage} exact />
        <Route path="/movie/:movieId" component={MovieDetailsPage} />
    
    </div>
  );
}

export default App;
