export type TAuthRes = {
  accessToken: string;
};
export interface TUserAuthInf {
  userId: string;
  userName: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export type UserProfile = {
  id: string;
  userId: string;
  profilePhoto: string | null;
  bio: string;
  age: number;
  createdAt: string;
  updatedAt: string;
  user: TUserRegisteredRes
};

export type TUserRegisteredRes = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profile: UserProfile;
};

export type TFoundItemRes = {
  id: string;
  userId: string;
  category: string;
  foundItemName: string;
  photo: string | null;
  description: string;
  location: string;
  foundDate: string;
  phoneNumber: number | null;
  email: string | null;
  createdAt: string;
  updatedAt: string;
};
export type TAdminFoundItemRes = {
  id: string;
  userId: string;
  category: string;
  foundItemName: string;
  photo: string | null;
  description: string;
  location: string;
  foundDate: string;
  phoneNumber: number | null;
  email: string | null;
  Claim: TClaimRes;
  createdAt: string;
  updatedAt: string;
};

export type TLostItemRes = {
  id: string;
  userId: string;
  category: string;
  lostItemName: string;
  photo: string | null;
  description: string;
  location: string;
  lostDate: string;
  phoneNumber: number | null;
  email: string | null;
  createdAt: string;
  updatedAt: string;
};

export interface TMyServiceRes {
  totalFoundReport: number;
  totalLostReport: number;
  totalClaimReport: {
    total: number;
    pending: number;
    approved: number;
  };
}

export interface TClaimRes {
  id: string;
  userId: string;
  foundItemId: string;
  status: string;
  distinguishingFeatures?: string;
  lostDate: string;
  foundItem: TFoundItemRes;
  createdAt: string;
  updatedAt: string;
}

export type TAllUserRes = {
  id: string;
  role: string;
  name: string;
  email: string;
  needPasswordChange: boolean;
  createdAt: string;
  updatedAt: string;
  profile: UserProfile;
};
