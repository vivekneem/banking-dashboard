export interface CardData {
  id: string;
  cardNumber: string;
  cardHolder: string;
  validThru: string;
  balance: number;
  isLight?: boolean;
}
export interface CreditCardProps extends CardData {
  cardNumber: string;
  cardHolder: string;
  validThru: string;
  balance: number;
  isLight?: boolean;
}
