import { ExpenseStats } from "../../components/Dashboard/ExpenseStatistics/types";
import { TransferContact } from "../../components/Dashboard/QuickTransfer/types";
import { WeeklyActivityData } from "../../components/Dashboard/WeeklyActivity/types";

export interface CardData {
  id: string;
  cardNumber: string;
  cardHolder: string;
  validThru: string;
  balance: number;
  cardType: string;
}

export interface Transaction {
  id: string;
  type: "deposit" | "withdrawal";
  amount: number;
  description: string;
  date: string;
  icon?: string;
}

export interface WeeklyActivity {
  day: string;
  deposits: number;
  withdrawals: number;
}

export interface ExpenseCategory {
  name: string;
  percentage: number;
  color: string;
}

export interface DashboardState {
  cards: CardData[];
  transactions: Transaction[];
  weeklyActivity: WeeklyActivityData[];
  expenseStats: ExpenseStats;
  quickTransfer: TransferContact[];
  balanceHistory: number[];
  loading: {
    cards: boolean;
    transactions: boolean;
    expenseStats: boolean;
    weeklyActivity: boolean;
    quickTransfer: boolean;
    balanceHistory: boolean;
  };
  error: string | null;
}