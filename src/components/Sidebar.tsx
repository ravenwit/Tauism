import React from 'react';
import { PRESETS } from '../constants';
import { ParamState } from '../types';
import { Settings2, RefreshCw, Box } from 'lucide-react';

interface SidebarProps {
  params: ParamState;
  updateParam: (key: string, value: any) => void;
  preset: string;
  onPresetChange: (name: string) => void;
  wireframe: boolean;
  setWireframe: (val: boolean) => void;
  resolution: number;
  setResolution: (val: number) => void;
}

export function Sidebar({
  params,
  updateParam,
  preset,
  onPresetChange,
  wireframe,
  setWireframe,
  resolution,
  setResolution
}: SidebarProps) {
  return (
    <aside className="w-80 bg-zinc-900 border-r border-zinc-800 flex flex-col h-full overflow-y-auto custom-scrollbar">
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-2 text-zinc-100 mb-1">
          <Box className="w-5 h-5 text-indigo-400" />
          <h1 className="text-lg font-semibold tracking-tight">Manifold Explorer</h1>
        </div>
        <p className="text-xs text-zinc-400">Unified Parametric Generator</p>
      </div>

      <div className="p-6 space-y-8 flex-1">
        {/* Presets */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
            <RefreshCw className="w-3 h-3" />
            Presets
          </label>
          <select
            value={preset}
            onChange={(e) => onPresetChange(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
          >
            <option value="Custom" disabled>Custom</option>
            {Object.keys(PRESETS).map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Base Space */}
        <div className="space-y-4">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
            <Settings2 className="w-3 h-3" />
            Base Space (S¹)
          </label>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-zinc-300">Radius (R)</span>
              <span className="text-sm text-zinc-500 font-mono">{params.R.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={params.R}
              onChange={(e) => updateParam('R', parseFloat(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <span className="text-xs text-zinc-500">u min</span>
              <input
                type="text"
                value={params.uMin}
                onChange={(e) => updateParam('uMin', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-2 py-1.5 text-sm font-mono text-zinc-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-zinc-500">u max</span>
              <input
                type="text"
                value={params.uMax}
                onChange={(e) => updateParam('uMax', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-2 py-1.5 text-sm font-mono text-zinc-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Structural Group */}
        <div className="space-y-4">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Structural Group (SO(2))
          </label>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-zinc-300">Twist (τ)</span>
              <span className="text-sm text-zinc-500 font-mono">{params.tau.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={params.tau}
              onChange={(e) => updateParam('tau', parseFloat(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>
        </div>

        {/* Fiber */}
        <div className="space-y-4">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Fiber (F)
          </label>
          
          <div className="space-y-3">
            <div className="space-y-1">
              <span className="text-xs text-zinc-500">f₁(v)</span>
              <input
                type="text"
                value={params.f1}
                onChange={(e) => updateParam('f1', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 text-sm font-mono text-zinc-200 focus:outline-none focus:border-indigo-500"
                placeholder="e.g. cos(v)"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-zinc-500">f₂(v)</span>
              <input
                type="text"
                value={params.f2}
                onChange={(e) => updateParam('f2', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 text-sm font-mono text-zinc-200 focus:outline-none focus:border-indigo-500"
                placeholder="e.g. sin(v)"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <span className="text-xs text-zinc-500">v min</span>
              <input
                type="text"
                value={params.vMin}
                onChange={(e) => updateParam('vMin', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-2 py-1.5 text-sm font-mono text-zinc-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-zinc-500">v max</span>
              <input
                type="text"
                value={params.vMax}
                onChange={(e) => updateParam('vMax', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-2 py-1.5 text-sm font-mono text-zinc-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Rendering */}
        <div className="space-y-4 pt-4 border-t border-zinc-800">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Rendering
          </label>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-zinc-300">Resolution</span>
              <span className="text-sm text-zinc-500 font-mono">{resolution}</span>
            </div>
            <input
              type="range"
              min="20"
              max="200"
              step="10"
              value={resolution}
              onChange={(e) => setResolution(parseInt(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={wireframe}
                onChange={(e) => setWireframe(e.target.checked)}
              />
              <div className={`block w-10 h-6 rounded-full transition-colors ${wireframe ? 'bg-indigo-500' : 'bg-zinc-700'}`}></div>
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${wireframe ? 'translate-x-4' : ''}`}></div>
            </div>
            <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Wireframe Mode</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
