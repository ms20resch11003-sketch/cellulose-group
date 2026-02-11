
import React, { useState } from 'react';
import Layout from './components/Layout';
import AIAssistant from './components/AIAssistant';
import { MOCK_INSTRUMENTS, MOCK_MEETINGS, MOCK_ANNOUNCEMENTS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [bookings, setBookings] = useState<any[]>([]);
  const [requests, setRequests] = useState<any[]>([]);

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Research Feed</h1>
          <p className="text-slate-500">Welcome back to the Cellulose Lab Portal.</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-400">Monday, May 20, 2024</p>
          <p className="text-lg font-semibold text-emerald-600">Active Lab Status: Online</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Announcements */}
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
              Latest Announcements
            </h2>
            <div className="space-y-4">
              {MOCK_ANNOUNCEMENTS.map(ann => (
                <div key={ann.id} className="p-4 rounded-xl border border-slate-50 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      ann.category === 'safety' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {ann.category}
                    </span>
                    <span className="text-xs text-slate-400">{ann.date}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800">{ann.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{ann.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
               <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
               Group Activity
            </h2>
            <div className="flex items-center justify-center py-10 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
              <div className="text-center">
                <p className="text-slate-400 text-sm">No new activity reported today.</p>
                <button className="text-emerald-600 font-medium text-sm mt-2">Log progress</button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Meetings & Quick Stats */}
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold mb-4">Upcoming Meetings</h2>
            <div className="space-y-4">
              {MOCK_MEETINGS.map(m => (
                <div key={m.id} className="flex gap-4">
                  <div className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg text-center flex-shrink-0">
                    <p className="text-xs font-bold uppercase">{m.date.split('-')[1]}/{m.date.split('-')[2]}</p>
                    <p className="text-lg font-black leading-none">{m.time.split(':')[0]}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 leading-tight">{m.title}</h3>
                    <p className="text-xs text-slate-500">{m.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-emerald-900 text-emerald-50 p-6 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-lg font-bold mb-2">Instrument Usage</h2>
              <p className="text-3xl font-black">84%</p>
              <p className="text-xs text-emerald-400 mt-1">Utilization this month</p>
              <button className="mt-4 bg-emerald-400 text-emerald-950 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                View Reports
              </button>
            </div>
            {/* Simple decoration */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-800 rounded-full blur-2xl"></div>
          </section>
        </div>
      </div>
    </div>
  );

  const renderInstruments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Instrument Booking</h1>
          <p className="text-slate-500">Reserve equipment for your research experiments.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_INSTRUMENTS.map(inst => (
          <div key={inst.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">
            <div className="h-32 bg-slate-200 relative">
               <img src={`https://picsum.photos/seed/${inst.id}/400/200`} alt={inst.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
               <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                 inst.status === 'available' ? 'bg-emerald-500 text-white' : inst.status === 'busy' ? 'bg-red-500 text-white' : 'bg-slate-500 text-white'
               }`}>
                 {inst.status}
               </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-slate-800 mb-1">{inst.name}</h3>
              <p className="text-xs text-slate-500 mb-4">{inst.location} • {inst.description}</p>
              <button 
                disabled={inst.status !== 'available'}
                className="w-full bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 py-2 rounded-xl text-sm font-semibold border border-slate-100 transition-all disabled:opacity-50"
              >
                {inst.status === 'available' ? 'Book Now' : 'Join Waitlist'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPurchasing = () => (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Purchase Requests</h1>
        <p className="text-slate-500">Request chemicals, solvents, or lab supplies.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Item Description</label>
            <input type="text" placeholder="e.g. 500g Microcrystalline Cellulose" className="w-full p-3 rounded-xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 border" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Quantity</label>
            <input type="text" placeholder="e.g. 2 Bottles" className="w-full p-3 rounded-xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 border" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Urgency</label>
            <select className="w-full p-3 rounded-xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 border">
              <option>Low - Stock replenish</option>
              <option>Medium - Active project</option>
              <option>High - Urgent experiment</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Vendor (if known)</label>
            <input type="text" placeholder="e.g. Sigma-Aldrich" className="w-full p-3 rounded-xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 border" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-slate-700">Justification</label>
            <textarea rows={3} placeholder="Explain why this item is needed for your project..." className="w-full p-3 rounded-xl border-slate-200 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50 border" />
            <p className="text-[10px] text-slate-400">Need help with justification? Ask the AI Assistant below.</p>
          </div>
          <button className="md:col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-[0.98]">
            Submit Purchase Request
          </button>
        </form>
      </div>
    </div>
  );

  const renderFiles = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Research Documents</h1>
        <p className="text-slate-500">Access shared drive links and upload report files.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-800">Shared Google Drive</h3>
            <p className="text-sm text-slate-500 mb-6">Access raw data, literature reviews, and team manuscripts.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            Go to Drive
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
           <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-800">Direct Upload</h3>
            <p className="text-sm text-slate-500 mb-4">Upload weekly reports or characterization results.</p>
            <div className="mt-4">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="text-sm text-slate-500">Click to upload or drag & drop</p>
                  <p className="text-xs text-slate-400 mt-1">PDF, DOCX, XLSX (MAX 50MB)</p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
        </div>
      </div>
    </div>
  );

  const getContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'instruments': return renderInstruments();
      case 'purchasing': return renderPurchasing();
      case 'meetings': return (
        <div className="space-y-8">
           <div>
            <h1 className="text-3xl font-bold text-slate-900">Group Meetings</h1>
            <p className="text-slate-500">View schedule and download meeting minutes.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Meeting</th>
                  <th className="px-6 py-4">Date & Time</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_MEETINGS.map(m => (
                  <tr key={m.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-800">{m.title}</p>
                      <p className="text-xs text-slate-400">{m.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700">{m.date}</p>
                      <p className="text-xs text-slate-500">{m.time}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">{m.location}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-emerald-600 font-bold text-xs hover:underline">Add to Calendar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
      case 'files': return renderFiles();
      default: return renderDashboard();
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {getContent()}
      <AIAssistant context={{ activeTab, instruments: MOCK_INSTRUMENTS }} />
    </Layout>
  );
};

export default App;
