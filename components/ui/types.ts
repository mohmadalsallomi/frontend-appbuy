export type RootStackParamList = {
    AdDetails: { adId: string }; // تأكد من أن تعريف `adId` متوافق
  };
  // types.ts
export interface Ad {
    id: number;
    title: string;
    price: string;
    location: string;
    image: any;  // أو قم بتحديد النوع المناسب للصورة
    description: string;
  }