///admin-dashboard/src/App.tsx`typescript

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import ReportsPage from './pages/ReportsPage';
import ModerationPage from './pages/ModerationPage';
import RevenuePage from './pages/RevenuePage';
import AnalyticsPage from './pages/AnalyticsPage';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : ;
}

function App() {
  return (
    
      
        
          } />
          
                
              
            }
          >
            } />
            } />
            } />
            } />
            } />
            } />
          
        
      
    
  );
}

export default App;