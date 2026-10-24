import React from 'react';
import { Coffee, Croissant, Utensils, CupSoda, Package, Grid } from 'lucide-react';

export const CATEGORY_ICON_OPTIONS = ['Package', 'Coffee', 'Croissant', 'Utensils', 'CupSoda'] as const;

export const CategoryIcon: React.FC<{ name: string; className?: string }> = ({
  name,
  className = 'w-3.5 h-3.5'
}) => {
  switch (name) {
    case 'Coffee':
      return <Coffee className={className} />;
    case 'Croissant':
      return <Croissant className={className} />;
    case 'Utensils':
      return <Utensils className={className} />;
    case 'CupSoda':
      return <CupSoda className={className} />;
    case 'Package':
      return <Package className={className} />;
    default:
      return <Grid className={className} />;
  }
};
