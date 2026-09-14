export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  icon: 'phone' | 'bell' | 'file';
}

export interface BusinessPillar {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: 'leaf' | 'scale' | 'market';
}

export interface WaitlistSubmission {
  fullName: string;
  email: string;
  phone: string;
  investorType: 'individual' | 'corporate' | 'hni';
  timestamp: string;
}

export interface SubscriptionFormData {
  accountType: 'individual' | 'corporate';
  fullName: string;
  email: string;
  phone: string;
  bvn: string;
  cscsNumber: string;
  chnNumber?: string;
  shares: number;
  sharePrice: number;
  totalAmount: number;
  agreedToTerms: boolean;
}
