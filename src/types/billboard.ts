export type Billboard = {
  id: string;
  x: number;
  y: number;
  photosTaken: number;
  advertiser: string;
  address: string;
  billboardText: string;
  image: string;
};

export type ApiResponse = {
  success: boolean;
  billboard: Billboard;
};
