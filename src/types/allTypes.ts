import { Dispatch, SetStateAction } from "react";

type InputSetter = React.Dispatch<React.SetStateAction<string>>;

export type UserType = {
  _id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: number;
  dateJoined: string;
  status: string;
  fullName: string;
  bvn: number;
  gender: string;
  maritalStatus: string;
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

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type SelectProps = {
  total: number;
  setUsersPerPage: (value: number) => void;
};

export type TableFilterProps = {
  fullData: UserType[];
  data: UserType[];
  username: string;
  setUsername: InputSetter;
  organization: string;
  setOrganization: InputSetter;
  email: string;
  setEmail: InputSetter;
  phoneNumber: string;
  setPhoneNumber: InputSetter;
  status: string;
  setStatus: InputSetter;
  date: string;
  setDate: InputSetter;
  filtering?: boolean;
  setFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilter: () => void;
  setFilter: Dispatch<SetStateAction<boolean>>;
};

export type TableProps = {
  data: UserType[];
  fullData: UserType[];
  selectedId: string | null;
  setSelectedId: (id: string) => void;
  handleClick: (id: string) => void;
  filter: boolean;
  setFilter: Dispatch<SetStateAction<boolean>>;
  username: string;
  setUsername: InputSetter;
  organization: string;
  setOrganization: InputSetter;
  email: string;
  setEmail: InputSetter;
  phoneNumber: string;
  setPhoneNumber: InputSetter;
  status: string;
  setStatus: InputSetter;
  date: string;
  setDate: InputSetter;
  filtering: boolean;
  setFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilter: () => void;
};

export type UserDetailsProps = {
  data: UserType | undefined;
  handleClose?: () => void;
};

export type SearchContextType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};
