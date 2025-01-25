export interface Job {
  id: number;
  payAmount: number;
  startDate: string;       // ISO date string
  endDate: string;         // ISO date string
  startTime: string;       // Time in HH:mm format
  endTime: string;         // Time in HH:mm format
  categoryId: number;
  workWeekDays: string[];  // Array of strings representing days
  isClosed: boolean;
  business: {
      id: number;
      name: string;
      ownerName: string;
      employeesCount: number;
      location: {
          latitude: number;
          longitude: number;
      };
      email: string;
      establishedDate: string;  // ISO date string
      websiteUrl: string;
      address: {
          zipCode: string | null;  // Nullable
          provinceCode: string;
          cityCode: string;
          roadAddress: string;
          jibunAddress: string;
          addressDetail: string;
      };
  };
  i18nDescription: {
      EN_US: string;
      KO_KR: string;
  };
  i18nTitle: {
      EN_US: string;
      KO_KR: string;
  };
  location: {
      latitude: number;
      longitude: number;
  };
  address: {
      zipCode: string;
      provinceCode: string;
      cityCode: string;
      roadAddress: string;
      jibunAddress: string;
      addressDetail: string;
  };
}