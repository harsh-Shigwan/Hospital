import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Row25 , Doctor1 , Patient, Row31 , Row32} from './pages';
import {Row20 , Row21 , IPD , OPD, Row23 , Row24 , Row1 , Row2 , Row3 , Row4 , Row5 } from './pages';

import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-56 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Patient />)} />
                <Route path="/Row20" element={(<Row20 />)} />
                <Route path="/Row21" element={(<Row21 />)} />
                <Route path="/IPD" element={(<IPD />)} />
                <Route path="/OPD" element={(<OPD />)} />
                <Route path="/Row23" element={(<Row23 />)} />
                <Route path="/Row24" element={(<Row24/>)} />
                <Route path="/Patient" element={<Patient />} />
                {/* pages  */}
                <Route path="/Row25" element={<Row25/>} />
                <Route path="/Patient" element={<Patient />} />
                <Route path='/NewPatients' element={<Row1/>} />
                <Route path='/TriagedPatients' element={<Row2/>} />
                 <Route path='/FinalizedPatients' element={<Row3/>} />
                 <Route path='/BedInformation' element={<Row4/>} />
                 <Route path='/Register' element={<Row5/>} />


                 <Route path="/Row31" element={<Row31/>} />
                 <Route path="/Row32" element={<Row32/>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;