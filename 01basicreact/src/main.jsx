import React from 'react';
import ReactDOM from 'react-dom/client';

function MyApp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);