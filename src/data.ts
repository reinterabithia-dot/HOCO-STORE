import { Service, Team, FAQItem, StepItem } from './types';

// Admin WhatsApp configuration - configured in a single place as requested
export const WHATSAPP_NUMBER = '6285819171466';

export const BRAND_INFO = {
  name: 'HOCO STORE',
  tagline: 'YOUR RAID. OUR GRIND.',
  description: 'Jasa joki Arena Breakout dengan tim profesional, proses mudah, dan layanan yang dapat disesuaikan dengan kebutuhanmu.',
};

export const SERVICES: Service[] = [
  {
    id: 'mandor',
    name: 'JOKI MANDOR',
    badge: 'BEST VALUE',
    normalPrice: 15000,
    promoPrice: 12000,
    minPromoQty: 3,
    pricePerUnit: 15000, // standard base price
    description: 'Jasa joki Mandor untuk membantu meningkatkan progress akun dengan proses yang efisien dan profesional.',
    buttonText: 'PILIH JOKI MANDOR',
    features: [
      'Minimal order promo 3M (Hemat Rp3.000/M)',
      'Progress Mandor stabil & aman',
      'Anti rollback / aman dari sanksi',
      'Daily report & screenshot progress',
      'Selesai tepat waktu'
    ]
  },
  {
    id: 'koen',
    name: 'JOKI KOEN',
    normalPrice: 20000,
    pricePerUnit: 20000,
    description: 'Jasa joki Koen untuk membantu meningkatkan jumlah Koen akun Arena Breakout.',
    buttonText: 'PILIH JOKI KOEN',
    features: [
      'Rate pengerjaan cepat',
      'Akun aman dengan metode extraction profesional',
      'Hasil loot dijamin melimpah',
      'Laporan berkala oleh joki',
      'Bebas konsultasi taktik'
    ]
  },
  {
    id: 'value',
    name: 'JOKI VALUE',
    normalPrice: 20000,
    pricePerUnit: 20000,
    description: 'Jasa joki Value untuk membantu meningkatkan value dan progress akun.',
    buttonText: 'PILIH JOKI VALUE',
    features: [
      'Meningkatkan storage value & total net worth',
      'Sangat disarankan untuk season starter',
      'Menggunakan taktik safe-extraction',
      'Full inventory gear didokumentasikan',
      'Jaminan keamanan akun'
    ]
  }
];

export const TEAMS: Team[] = [
  {
    id: 'tim1',
    name: 'TIM 1',
    specialization: 'Fast Progress',
    status: 'ONLINE',
    rating: 5,
    description: 'Tim dengan fokus pada proses cepat dan progress stabil.',
    avatarSeed: 'alpha',
    activeOrders: 4
  },
  {
    id: 'tim2',
    name: 'TIM 2',
    specialization: 'Experienced Team',
    status: 'ONLINE',
    rating: 5,
    description: 'Tim berpengalaman untuk berbagai jenis layanan joki.',
    avatarSeed: 'bravo',
    activeOrders: 2
  },
  {
    id: 'tim3',
    name: 'TIM 3',
    specialization: 'Elite Specialist',
    status: 'ONLINE',
    rating: 5,
    description: 'Tim dengan pengalaman tinggi untuk berbagai target order.',
    avatarSeed: 'charlie',
    activeOrders: 3
  }
];

export const STEPS: StepItem[] = [
  {
    num: '01',
    title: 'PILIH LAYANAN',
    description: 'Pilih layanan joki yang kamu butuhkan.',
    iconName: 'Gamepad2'
  },
  {
    num: '02',
    title: 'MASUKKAN JUMLAH',
    description: 'Masukkan jumlah M yang ingin dikerjakan.',
    iconName: 'Hash'
  },
  {
    num: '03',
    title: 'PILIH TIM',
    description: 'Pilih TIM 1, TIM 2, atau TIM 3.',
    iconName: 'Users'
  },
  {
    num: '04',
    title: 'HUBUNGI ADMIN',
    description: 'Review order dan lanjutkan ke WhatsApp Admin.',
    iconName: 'Send'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Berapa harga Joki Mandor?',
    answer: 'Harga normal Joki Mandor adalah Rp15.000/M. Harga promo Rp12.000/M berlaku untuk minimal order 3M.'
  },
  {
    question: 'Berapa harga Joki Koen?',
    answer: 'Rp20.000/M.'
  },
  {
    question: 'Berapa harga Joki Value?',
    answer: 'Rp20.000/M.'
  },
  {
    question: 'Apakah saya bisa memilih tim?',
    answer: 'Ya, kamu dapat memilih TIM 1, TIM 2, atau TIM 3 sesuai ketersediaan.'
  },
  {
    question: 'Bagaimana cara melakukan order?',
    answer: 'Pilih layanan, masukkan jumlah, pilih tim, review pesanan, lalu klik Lanjut ke WhatsApp.'
  },
  {
    question: 'Apakah harga yang tampil sudah final?',
    answer: 'Harga yang ditampilkan adalah estimasi berdasarkan layanan dan jumlah yang dipilih. Konfirmasi akhir dilakukan bersama Admin HOCO STORE.'
  }
];
