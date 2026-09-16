import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  onOpenSubscribe: () => void;
}

const FAQS_COL_1: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Dangote Petroleum Refinery & Petrochemicals FZE?',
    answer:
      'Dangote Petroleum Refinery & Petrochemicals FZE is the issuer of the ordinary shares being offered to the public. The company owns and operates the Dangote Petroleum Refinery, located in the Lekki Free Trade Zone, Lagos. Investors should refer to the Prospectus for detailed information about the company, its business, operations, risks, and the terms of the Offer.',
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
      "Applications are completed securely through the CardinalStone Securities IPO platform via LOTUS Wealth's dedicated application link.",
  },
  {
    id: 'faq-7',
    question: 'Does applying guarantee an allotment?',
    answer:
      'No. Allotment is subject to the terms of the offer and overall investor demand. The number of shares allotted may differ from the number applied for.',
  },
  {
    id: 'faq-8',
    question: 'Is this a suitable investment for me?',
    answer:
      'Every investment carries risks and may not be suitable for all investors. Before investing, carefully review the Prospectus and consider your investment objectives, financial circumstances and risk tolerance. If you are uncertain whether this investment is appropriate for you, please seek independent professional advice.',
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
      'The offer will close on Tuesday October 13, 2026.',
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
            href="https://app.getlotuswealth.com/register"
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

        {/* Live WhatsApp Support Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFF8F8] border border-red-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900">
              Still have questions about the Dangote Refinery IPO?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Our dedicated investment support desk is active and ready to assist you on WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/2347081108201?text=Hello%20Lotus%20Wealth%2C%20I%20have%20an%20inquiry%20regarding%20the%20Dangote%20Refinery%20IPO."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.4 1.25-1.92 1.33-.51.08-1.18.11-1.91-.12-.45-.14-1.04-.34-1.79-.67-3.17-1.38-5.23-4.59-5.39-4.8-.16-.21-1.28-1.7-1.28-3.25 0-1.54.81-2.3 1.1-2.6.29-.3.64-.37.85-.37.21 0 .43 0 .62.01.2.01.47-.08.73.56.27.65.91 2.22.99 2.38.08.16.14.35.03.56-.11.22-.16.35-.32.54-.16.19-.34.42-.49.57-.16.16-.33.34-.14.66.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.6 1.6.32.16.51.14.7-.08.19-.22.81-.94 1.03-1.26.21-.32.43-.27.73-.16.29.11 1.87.88 2.19 1.04.32.16.54.24.62.38.08.14.08.8-.16 1.48z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
