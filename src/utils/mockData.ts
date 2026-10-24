import { Category, Product, StoreConfig, Discount } from '../types/pos';

// Kategori & produk dimulai kosong (seperti baru diinstal). Pengguna menambahkannya sendiri
// lewat menu Katalog Produk. Kategori virtual "Semua" ditambahkan di tampilan, bukan disimpan.
export const INITIAL_CATEGORIES: Category[] = [];

export const INITIAL_DISCOUNTS: Discount[] = [
  { id: 'staff', label: 'Staff Discount (20%)', type: 'percentage', value: 20 },
  { id: 'happy_hour', label: 'Happy Hour (15%)', type: 'percentage', value: 15 },
  { id: 'student', label: 'Student Discount (10%)', type: 'percentage', value: 10 },
  { id: 'voucher_5', label: 'Loyalty Voucher ($5.00)', type: 'fixed', value: 5.00 },
  { id: 'voucher_10', label: 'VIP Voucher ($10.00)', type: 'fixed', value: 10.00 }
];

export interface GalleryImage {
  id: string;
  name: string;
  category: string;
  url: string;
}

export const APP_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal_latte',
    name: 'Artisan Hot Latte',
    category: 'Coffee',
    url: '/src/assets/images/pos_coffee_latte_1792822015620.jpg'
  },
  {
    id: 'gal_cold_brew',
    name: 'Nitro Cold Brew Bottle',
    category: 'Coffee',
    url: '/src/assets/images/pos_cold_brew_bottle_1792822016788.jpg'
  },
  {
    id: 'gal_matcha',
    name: 'Ceremonial Matcha Iced',
    category: 'Beverages',
    url: '/src/assets/images/pos_matcha_drink_1792824433107.jpg'
  },
  {
    id: 'gal_croissant',
    name: 'Butter Flaky Croissant',
    category: 'Bakery',
    url: '/src/assets/images/pos_croissant_pastry_1792822016692.jpg'
  },
  {
    id: 'gal_panini',
    name: 'Truffle Mushroom Panini',
    category: 'Bistro',
    url: '/src/assets/images/pos_panini_sandwich_1792824462130.jpg'
  },
  {
    id: 'gal_avocado',
    name: 'Heirloom Avocado Toast',
    category: 'Bistro',
    url: '/src/assets/images/pos_avocado_toast_1792822016781.jpg'
  },
  {
    id: 'gal_beans',
    name: 'Specialty Coffee Whole Beans',
    category: 'Retail',
    url: '/src/assets/images/pos_coffee_beans_1792824447859.jpg'
  }
];

export const INITIAL_STORE_CONFIG: StoreConfig = {
  storeName: '',
  taxRate: 0,
  currencySymbol: 'Rp',
  currencyCode: 'IDR',
  language: 'id',
  addressLine1: '',
  addressLine2: '',
  phone: '',
  receiptHeaderMsg: '',
  receiptFooterMsg: '',
  soundEnabled: true,
  defaultCashier: '',
  enableBarcodeScanner: true,
  whatsappNumber: '',
  whatsappRecipientName: '',
  autoSendWhatsAppDaily: false,
  whatsappDailyTime: '21:00',
  lowStockDefaultThreshold: 15
};

export const INITIAL_PRODUCTS: Product[] = [];
