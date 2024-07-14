import React from 'react';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar'; // แก้เส้นทางการ import ให้ถูกต้อง

const App = () => {
    return (
        <div className="App">
            <Sidebar /> {/* แสดง Sidebar */}
            <div className="content">
                <HomePage />
            </div>
        </div>
    );
};

export default App;
