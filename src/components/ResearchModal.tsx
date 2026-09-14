import React from 'react';
import { X, FileText, CheckCircle2, TrendingUp, ShieldAlert, Download } from 'lucide-react';

interface ResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0F1722] text-white rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-black/40 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#C10202]/20 text-[#C10202] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Investment Research Note</h3>
              <p className="text-[11px] text-gray-400">Dangote Petroleum Refinery & Petrochemicals FZE</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-300">
          {/* Executive Summary */}
          <div>
            <h4 className="text-base font-bold text-white mb-2">Executive Summary</h4>
            <p className="leading-relaxed">
              Dangote Petroleum Refinery & Petrochemicals FZE operates the world's largest single-train crude oil refinery, situated across 2,635 hectares in the Lekki Free Trade Zone, Lagos, Nigeria. Designed to process 650,000 barrels per day (bpd), the facility satisfies 100% of Nigeria's domestic demand for refined petroleum products with substantial surplus for export across Sub-Saharan Africa and global markets.
            </p>
          </div>

          {/* Core Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-black/40 border border-gray-800">
              <div className="flex items-center gap-2 font-bold text-white mb-1">
                <span className="w-2 h-2 rounded-full bg-[#C10202]" />
                Single-Train Efficiency
              </div>
              <p className="text-xs text-gray-400">
                Advanced Nelson Complexity Index configuration allows processing of diverse global crudes into Euro-V compliant fuels with high margin yields.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-gray-800">
              <div className="flex items-center gap-2 font-bold text-white mb-1">
                <span className="w-2 h-2 rounded-full bg-[#C10202]" />
                Deepwater Marine Port
              </div>
              <p className="text-xs text-gray-400">
                World-class offshore single-point mooring (SPM) facilities enable direct loading of VLCCs (Very Large Crude Carriers) without dredging bottlenecks.
              </p>
            </div>
          </div>

          {/* Product Basket */}
          <div>
            <h4 className="text-base font-bold text-white mb-2">Output & Product Mix</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-3 bg-gray-900/90 rounded-xl border border-gray-800">
                <div className="text-[#C10202] font-black text-base">53M L/d</div>
                <div className="text-gray-400 mt-0.5">Premium Motor Spirit</div>
              </div>
              <div className="p-3 bg-gray-900/90 rounded-xl border border-gray-800">
                <div className="text-[#C10202] font-black text-base">34M L/d</div>
                <div className="text-gray-400 mt-0.5">Diesel / AGO</div>
              </div>
              <div className="p-3 bg-gray-900/90 rounded-xl border border-gray-800">
                <div className="text-[#C10202] font-black text-base">10M L/d</div>
                <div className="text-gray-400 mt-0.5">Aviation Jet A1</div>
              </div>
              <div className="p-3 bg-gray-900/90 rounded-xl border border-gray-800">
                <div className="text-[#C10202] font-black text-base">900k T/y</div>
                <div className="text-gray-400 mt-0.5">Polypropylene</div>
              </div>
            </div>
          </div>

          {/* Sharia & Ethical Compliance */}
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
            <h5 className="font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Lotus Capital Shariah & Ethical Screening
            </h5>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              Lotus Capital's Shariah Advisory Board has reviewed the core operating activities of Dangote Petroleum Refinery and confirmed alignment with non-interest and ethical investment guidelines, establishing the company as an ethical equity asset class.
            </p>
          </div>

          {/* Key Risk Factors */}
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs">
            <h5 className="font-bold text-amber-400 flex items-center gap-2 mb-1">
              <ShieldAlert className="w-4 h-4" />
              Investment Risks to Consider
            </h5>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Global crude oil price volatility and crack spread fluctuations.</li>
              <li>Exchange rate movements affecting dollarized maintenance parts.</li>
              <li>Regulatory changes in Nigerian and regional downstream petroleum pricing.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-800 bg-black/40 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-gray-400">Source: Lotus Capital & Vetiva Research Syndicate</span>
          <button
            onClick={onClose}
            className="py-2 px-4 rounded-xl bg-[#C10202] hover:bg-[#a00202] text-white font-bold text-xs transition-colors"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchModal;
