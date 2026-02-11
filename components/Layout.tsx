
import React, { useState } from 'react';
import { Icons, MOCK_USER } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Icons.Home },
    { id: 'instruments', label: 'Instruments', icon: Icons.Beaker },
    { id: 'purchasing', label: 'Purchasing', icon: Icons.ShoppingCart },
    { id: 'meetings', label: 'Meetings', icon: Icons.Calendar },
    { id: 'files', label: 'File Links', icon: Icons.CloudUpload },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-emerald-900 text-white transition-all duration-300 ease-in-out flex flex-col`}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-emerald-400 p-2 rounded-lg">
             <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-emerald-900 font-bold text-xs">C</div>
          </div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight">CelluHub</span>}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${
                activeTab === item.id 
                ? 'bg-emerald-700 text-white shadow-lg' 
                : 'hover:bg-emerald-800 text-emerald-100'
              }`}
            >
              <item.icon />
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-emerald-800">
          <div className="flex items-center gap-3 p-2 bg-emerald-950/50 rounded-xl">
            <img src={MOCK_USER.avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
            {isSidebarOpen && (
              <div className="overflow-hidden">
                <p className="text-sm font-semibold truncate">{MOCK_USER.name}</p>
                <p className="text-xs text-emerald-400">{MOCK_USER.role}</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-slate-100 border-none rounded-full py-2 px-4 text-sm w-64 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              New Request
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
