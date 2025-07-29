import dashboard from "../assets/icons/dashboard.png";
import users from "../assets/icons/users.png";
import guarantors from "../assets/icons/guarantors.png";
import loans from "../assets/icons/loans.png";
import decisionModels from "../assets/icons/decision-models.png";
import savings from "../assets/icons/savings.png";
import loanRequests from "../assets/icons/loan-requests.png";
import whitelist from "../assets/icons/whitelist.png";
import karma from "../assets/icons/karma.png";
import organization from "../assets/icons/organization.png";
import savingsProdutcs from "../assets/icons/savings-products.png";
import fees from "../assets/icons/fees.png";
import transactions from "../assets/icons/transactions.png";
import services from "../assets/icons/services.png";
import serviceAccount from "../assets/icons/service-account.png";
import settlement from "../assets/icons/settlements.png";
import reports from "../assets/icons/reports.png";
import preferences from "../assets/icons/preferences.png";
import feesAndPricing from "../assets/icons/fees-and-pricing.png";
import audit from "../assets/icons/audit.png";

type sideBarRouteItem = {
  title: string;
  icon: string;
  path?: string | null;
};

type sideBarRouteGroup = {
  section: string | null;
  items: sideBarRouteItem[];
};

export const rawDashboardRoutes: sideBarRouteGroup[] = [
  {
    section: null,
    items: [
      {
        title: "Dashboard",
        icon: dashboard,
      },
    ],
  },
  {
    section: "Customers",
    items: [
      {
        title: "users",
        icon: users,
        path: "/users",
      },
      {
        title: "guarantors",
        icon: guarantors,
      },
      {
        title: "loans",
        icon: loans,
      },
      {
        title: "decision models",
        icon: decisionModels,
      },
      {
        title: "savings",
        icon: savings,
      },
      {
        title: "loan requests",
        icon: loanRequests,
      },
      {
        title: "whitelist",
        icon: whitelist,
      },
      {
        title: "karma",
        icon: karma,
      },
    ],
  },
  {
    section: "Businesses",
    items: [
      {
        title: "preferences",
        icon: organization,
      },
      {
        title: "loan products",
        icon: loanRequests,
      },
      {
        title: "savings product",
        icon: savingsProdutcs,
      },
      {
        title: "fees and charges",
        icon: fees,
      },
      {
        title: "transactions",
        icon: transactions,
      },
      {
        title: "services",
        icon: services,
      },
      {
        title: "service account",
        icon: serviceAccount,
      },
      {
        title: "settlement",
        icon: settlement,
      },
      {
        title: "reports",
        icon: reports,
      },
    ],
  },
  {
    section: "Settings",
    items: [
      {
        title: "preferences",
        icon: preferences,
      },
      {
        title: "fees and pricing",
        icon: feesAndPricing,
      },
      {
        title: "audit logs",
        icon: audit,
      },
    ],
  },
];

export const dashboardRoutes = rawDashboardRoutes.map((group) => ({
  ...group,
  items: group.items.map((item) => ({
    ...item,
    path: item.path ?? null,
  })),
}));
