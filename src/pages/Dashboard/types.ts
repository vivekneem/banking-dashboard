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
  loading: {
    cards: boolean;
    // other loading states...
  };
  error: string | null;
}