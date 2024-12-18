export interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "other";
  amount: number;
  description: string;
  date: string;
  icon?: string;
}
