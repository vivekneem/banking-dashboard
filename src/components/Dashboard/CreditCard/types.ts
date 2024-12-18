export interface CreditCardProps {
  cardNumber: string;
  cardHolder: string;
  validThru: string;
  balance: number;
  isLight?: boolean;
}
