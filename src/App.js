import React from 'react';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ChangeTheme from './components/ChangeTheme';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          
          <ChangeTheme />
        </ThemeContextProvider>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
