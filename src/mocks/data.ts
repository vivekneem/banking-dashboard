import ContactAvatar1 from "../assets/quick-transfer-contact-1.png";
import ContactAvatar2 from "../assets/quick-transfer-contact-2.png";
import ContactAvatar3 from "../assets/quick-transfer-contact-3.png";
import ProfileImage from "../assets/profile-user.png";

export const mockData = {
  cards: [
    {
      id: "1",
      cardNumber: "3778 **** **** 1234",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      balance: 5756,
    },
    {
      id: "2",
      cardNumber: "3778 **** **** 1234",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      balance: 5756,
      isLight: true,
    },
  ],
  transactions: [
    {
      id: "1",
      type: "withdrawal",
      amount: 850,
      description: "Deposit from my Card",
      date: "28 January 2021",
    },
    {
      id: "2",
      type: "deposit",
      amount: 2500,
      description: "Deposit Paypal",
      date: "25 January 2021",
    },
    {
      id: "3",
      type: "other",
      amount: 5400,
      description: "Jemi Wilson",
      date: "21 January 2021",
    },
  ],
  expenseStats: {
    labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
    data: [30, 15, 35, 20],
  },
  weeklyActivity: {
    withdraw: [450, 350, 300, 450, 150, 380, 380],
    deposit: [220, 120, 250, 350, 230, 230, 320],
  },
  balanceHistory: [150, 300, 450, 750, 250, 550, 600],
  quickTransferContacts: [
    {
      id: "1",
      name: "Livia Bator",
      role: "CEO",
      avatar: ContactAvatar1,
    },
    {
      id: "2",
      name: "Randy Press",
      role: "Director",
      avatar: ContactAvatar2,
    },
    {
      id: "3",
      name: "Workman",
      role: "Designer",
      avatar: ContactAvatar3,
    },
  ],
  userProfile: {
    name: "Charlene Reed",
    userName: "Charlene Reed",
    email: "charlenereed@gmail.com",
    profileImage: ProfileImage,
    password: "123456",
    dateOfBirth: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  },
};
