import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

// خريطة بين أيقونات SF Symbols و Material Icons
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'heart.fill': 'favorite',
  'star.fill': 'star',
} as Partial< 
  Record< 
    import('expo-symbols').SymbolViewProps['name'], 
    React.ComponentProps<typeof MaterialIcons>['name']
  > 
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * مكون أيقونة يستخدم SF Symbols على iOS و MaterialIcons على Android و Web.
 * هذا يضمن مظهراً متسقاً عبر الأنظمة المختلفة.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}) {
  // فحص ما إذا كان الاسم مرفقًا في الـ MAPPING وإذا كان صحيحًا
  const iconName = MAPPING[name];

  if (!iconName) {
    console.warn('Icon name not found in MAPPING:', name); // طباعة تحذير في حالة عدم العثور على الأيقونة في MAPPING
  }

  return iconName ? (
    <MaterialIcons color={color} size={size} name={iconName} style={style} />
  ) : (
    <MaterialIcons color={color} size={size} name="help-outline" style={style} /> // عرض أيقونة بديلة في حالة الخطأ
  );
}
