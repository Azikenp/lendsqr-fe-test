export type UserType = {
  _id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: number;
  dateJoined: string;
  status: string
  fullName: string;
  bvn: number;
  gender: string;
  maritalStatus:  string;
  children: number;
  residenceType: string;
  education: string;
  employmentStatus: string;
  employmentSector: string;
  employmentDuration: string;
  officeEmail: string;
  monthlyIncome: [string, string];
  loanRepayment: string;
  socials: {
    twitter: string;
    instagram: string;
    facebook: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: number;
    email: string;
    relationship: string;
  };
  secondGuarantor: {
    fullName: string;
    phoneNumber: number;
    email: string;
    relationship: string;
  };
  bankDetails: {
    bankName: string;
    accountNumber: number;
    accountName: string;
  };
  documents: {
    nin: number;
    driverLicense: string;
    passport: string;
  };
  loans: {
    totalLoans: string;
    outstanding: string;
    lastLoanDate: string;
  };
  savings: {
    totalSavings: string;
    monthlyContribution: string;
  };
  appData: {
    lastLogin: string;
    device: string;
    appVersion: string;
  };
  systemData: {
    createdAt: string;
    updatedAt: string;
    lastActivity: string;
  };
};

export type PaginationProps= {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
