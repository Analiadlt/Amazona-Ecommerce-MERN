import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;