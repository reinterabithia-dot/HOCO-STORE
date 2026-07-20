export type ServiceId = 'mandor' | 'koen' | 'value';

export interface Service {
  id: ServiceId;
  name: string;
  badge?: string;
  normalPrice: number;
  promoPrice?: number;
  minPromoQty?: number;
  pricePerUnit: number; // For non-promo types
  description: string;
  buttonText: string;
  features: string[];
}

export type TeamId = 'tim1' | 'tim2' | 'tim3';

export interface Team {
  id: TeamId;
  name: string;
  specialization: string;
  status: 'ONLINE' | 'OFFLINE';
  rating: number;
  description: string;
  avatarSeed: string; // for custom avatar icon or styling
  activeOrders: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  num: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}
