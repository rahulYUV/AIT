import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Router>
      <div className={isDark ? 'dark' : ''}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard isDark={isDark} setIsDark={setIsDark} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;