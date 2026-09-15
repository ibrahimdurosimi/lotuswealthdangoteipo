import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  onOpenSubscribe: () => void;
}

const FAQS_COL_1: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who is Dangote Petroleum Refinery & Petrochemicals FZE?',
    answer:
      'Dangote Petroleum Refinery & Petrochemicals FZE is the company offering ordinary shares through this public offer. The refinery is located in the Lekki Free Zone, Lagos. Full details are contained in the official prospectus.',
  },
  {
    id: 'faq-2',
    question: 'How do I apply for the offer?',
    answer:
      'Click the application link provided by LOTUS Wealth to access the subscription. Complete your registration, review the offer documents, choose your subscription amount, and submit your application.',
  },
  {
    id: 'faq-3',
    question: 'Do I need a CSCS account?',
    answer:
      'Yes. A valid CSCS account is required to hold allotted shares and one is created for you when you open your account.',
  },
  {
    id: 'faq-4',
    question: 'What is the minimum number of shares I can buy?',
    answer:
      'The minimum application is 10 shares, equivalent to ₦5,250 at the offer price of ₦525 per share.',
  },
  {
    id: 'faq-5',
    question: 'How will I receive my shares?',
    answer:
      'If allotted, your shares will be credited to your CSCS account in accordance with the offer terms.',
  },
];

const FAQS_COL_2: FAQItem[] = [
  {
    id: 'faq-6',
    question: 'Where will I complete my application?',
    answer:
      "Applications are completed securely through the CardinalStone IPO platform via LOTUS Wealth's dedicated application link.",
  },
  {
    id: 'faq-7',
    question: 'Does applying guarantee an allotment?',
    answer:
      'No. Allotment is subject to the terms of the offer and overall investor demand. The number of shares allotted may differ from the number applied for.',
  },
  {
    id: 'faq-8',
    question: 'Is this a good investment?',
    answer:
      'Every investment carries risk. Review the prospectus and offer documents and consider your investment appetite before investing. If in doubt, seek independent professional advice.',
  },
  {
    id: 'faq-9',
    question: 'Where can I find more information?',
    answer:
      'Contact info@lotuscapitallimited.com or call 0908708405 or 09087058406 and read the offer prospectus for full details.',
  },
  {
    id: 'faq-10',
    question: 'When does the offer close?',
    answer:
      'The reported closing date for the offer is Tuesday October 13, 2026.',
  },
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenSubscribe }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-[#EAEAEA] text-gray-900 border-t border-gray-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
              Questions & Answers
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <a
            href="https://beta.lotuswealth.lotuscapitallimited.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>Apply for the offer</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C10202]" />
          </a>
        </div>

        {/* 2-Column Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-3">
          {/* Column 1 */}
          <div className="space-y-3">
            {FAQS_COL_1.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-gray-300/80 pb-3.5 transition-colors"
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between text-left py-1.5 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-gray-900 group-hover:text-[#C10202] transition-colors pr-4 leading-snug">
                      {item.question}
                    </span>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-gray-500 group-hover:text-[#C10202] flex-shrink-0 transition-colors">
                      {isOpen ? <Minus className="w-4 h-4 text-[#C10202]" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'max-h-96 opacity-100 mt-2'
                        : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                    }`}
                  >
                    <div className="text-xs sm:text-sm text-gray-600 leading-relaxed pr-6 pb-0.5">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            {FAQS_COL_2.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-gray-300/80 pb-3.5 transition-colors"
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between text-left py-1.5 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-gray-900 group-hover:text-[#C10202] transition-colors pr-4 leading-snug">
                      {item.question}
                    </span>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-gray-500 group-hover:text-[#C10202] flex-shrink-0 transition-colors">
                      {isOpen ? <Minus className="w-4 h-4 text-[#C10202]" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'max-h-96 opacity-100 mt-2'
                        : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                    }`}
                  >
                    <div className="text-xs sm:text-sm text-gray-600 leading-relaxed pr-6 pb-0.5">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
