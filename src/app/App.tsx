import React, { useState } from 'react';
import { Clock, Zap, ClipboardList, Activity, TrendingUp, X } from 'lucide-react';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('annual');

  return (
    <div className="min-h-screen bg-black sm:bg-zinc-950 flex items-center justify-center font-sans">
      {/* Mobile container - optimized to fit on most screens without scrolling */}
      <div className="w-full h-[100dvh] sm:h-[844px] sm:max-h-[90vh] max-w-[400px] bg-[#121212] text-white flex flex-col relative sm:rounded-[40px] shadow-2xl overflow-hidden sm:border border-zinc-800/50">
        
        {/* Absolute Floating Close Button */}
        <button className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-zinc-800/50 hover:bg-zinc-700 rounded-full text-zinc-400 transition-colors backdrop-blur-md">
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable content area - scrollbar hidden but scrollable if absolutely needed on tiny screens */}
        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col p-5 pt-14">
          
          <div className="flex flex-col items-center flex-1">
            
            {/* Trial Banner - Compacted to save vertical space */}
            <div className="w-full bg-[#16271A] border border-green-900/40 rounded-2xl p-3 flex items-center gap-3 mb-6 relative shadow-sm">
              <div className="bg-green-500/10 p-2 rounded-full shrink-0">
                <Clock className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex-1 pr-8">
                <p className="text-[13px] font-semibold text-white leading-tight">10 trial days remaining</p>
                <p className="text-[11px] text-green-400/80 mt-0.5">Saved as a bonus credit</p>
              </div>
            </div>

            {/* Hero & Logo */}
            <div className="bg-green-500 w-[52px] h-[52px] rounded-full flex items-center justify-center mb-4 shadow-[0_0_24px_rgba(34,197,94,0.25)]">
              <Zap className="w-7 h-7 text-black" fill="currentColor" />
            </div>
            
            <div className="text-center space-y-1.5 w-full max-w-[320px]">
              <h1 className="text-[26px] leading-[1.15] font-bold tracking-tight">Your Fitness Journey Starts Here</h1>
              <p className="text-zinc-400 text-[13px]">Unlock full access to Ruknify Pro</p>
            </div>

            {/* Features List - Transformed from bulky grid to compact vertical list */}
            <div className="w-full mt-6 space-y-3 px-1">
              <div className="flex items-center gap-3.5 p-1">
                <div className="bg-[#1c1c1e] p-2.5 rounded-[14px] text-green-500 shrink-0 border border-zinc-800/50">
                  <ClipboardList size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold tracking-tight">Personalized Workout Plans</p>
                  <p className="text-[12px] text-zinc-500 mt-0.5 leading-snug">Custom tailored routines to hit your goals</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3.5 p-1">
                <div className="bg-[#1c1c1e] p-2.5 rounded-[14px] text-green-500 shrink-0 border border-zinc-800/50">
                  <Activity size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold tracking-tight">Smart Tracking & Analytics</p>
                  <p className="text-[12px] text-zinc-500 mt-0.5 leading-snug">Log sets, reps, and view deep insights</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3.5 p-1">
                <div className="bg-[#1c1c1e] p-2.5 rounded-[14px] text-green-500 shrink-0 border border-zinc-800/50">
                  <TrendingUp size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold tracking-tight">Progressive Overload</p>
                  <p className="text-[12px] text-zinc-500 mt-0.5 leading-snug">Algorithms that safely push your limits</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Area: Plans & CTA (Pushed to bottom naturally via flex spacing) */}
          <div className="w-full mt-6 flex flex-col gap-5 shrink-0 pt-2 border-t border-zinc-800/50">
            
            {/* Side-by-side plans to save vertical space instead of stacked */}
            <div className="flex gap-3">
              {/* Monthly Plan */}
              <div 
                onClick={() => setSelectedPlan('monthly')}
                className={`flex-1 rounded-[20px] p-4 flex flex-col relative cursor-pointer transition-all duration-200 ${
                  selectedPlan === 'monthly' 
                    ? 'bg-[#1c1c1e] border border-green-500 shadow-[0_0_12px_rgba(34,197,94,0.08)]' 
                    : 'bg-[#161616] border border-zinc-800/60 opacity-80 hover:bg-[#1a1a1a]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[14px] font-medium">Monthly</span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedPlan === 'monthly' ? 'border-green-500' : 'border-zinc-600'}`}>
                    {selectedPlan === 'monthly' && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                  </div>
                </div>
                <div className="mt-auto flex items-baseline gap-1">
                  <span className="text-xl font-bold">--</span>
                  <span className="text-[13px] text-zinc-500">/mo</span>
                </div>
              </div>
              
              {/* Annual Plan */}
              <div 
                onClick={() => setSelectedPlan('annual')}
                className={`flex-1 rounded-[20px] p-4 flex flex-col relative cursor-pointer transition-all duration-200 ${
                  selectedPlan === 'annual' 
                    ? 'bg-[#16271A] border-[1.5px] border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.12)]' 
                    : 'bg-[#161616] border border-zinc-800/60 opacity-80 hover:bg-[#1a1a1a]'
                }`}
              >
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-green-500 text-black text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[14px] font-semibold text-white">Annual</span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedPlan === 'annual' ? 'border-green-500' : 'border-zinc-600'}`}>
                    {selectedPlan === 'annual' && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                  </div>
                </div>
                <div className="mt-auto flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">--</span>
                  <span className="text-[13px] text-green-400/80">/yr</span>
                </div>
              </div>
            </div>

            <div className="space-y-3.5">
              <button className="w-full bg-green-500 text-black font-bold text-[16px] py-4 rounded-full shadow-[0_4px_16px_rgba(34,197,94,0.25)] hover:bg-[#20b855] hover:scale-[1.01] active:scale-[0.98] transition-all">
                Subscribe Now
              </button>
              <p className="text-center text-[12px] text-zinc-500 font-medium">Cancel anytime. No commitment.</p>
            </div>
            
            <div className="flex justify-center gap-5 text-[11px] text-zinc-600 pb-2">
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}