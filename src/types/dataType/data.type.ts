export type TCreateLostItem = {
  userId: string;
  category: string;
  lostItemName: string;
  description: string;
  location: string;
  lostDate: string;
  photo?: string | null;
  phoneNumber?: number | null;
  email?: string | null;
};

export interface TCreateFoundItem {
  // userId: string; // dynamically will add from logged user
  category: string;
  foundItemName: string;
  photo?: string | null;
  description: string;
  location: string;
  foundDate: string;
  phoneNumber: string | null;
  email: string;
}
export interface TCreateClaim {
  foundItemId: string;
  status: string;
  distinguishingFeatures?: string;
  lostDate: string;
  createdAt: string;
  updatedAt: string;
}


export type TUpdateLostItem = {
  id: string;
  data: Partial<TCreateLostItem>;
};

export type TUpdateFoundItem = {
  id: string;
  data: Partial<TCreateFoundItem>;
};
export type TUpdateUserRole = {
  id: string;
  data: {
    role: string
  }
};