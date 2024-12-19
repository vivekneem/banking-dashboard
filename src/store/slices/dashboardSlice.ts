import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockApi } from "../../services/mockApi";
import { CardData } from "../../components/Dashboard/CreditCard/types";
import { Transaction } from "../../components/Dashboard/RecentTransactions/types";
import { ExpenseStats } from "../../components/Dashboard/ExpenseStatistics/types";
import { WeeklyActivityData } from "../../components/Dashboard/WeeklyActivity/types";
import { TransferContact } from "../../components/Dashboard/QuickTransfer/types";

interface DashboardState {
  cards: CardData[];
  transactions: Transaction[];
  expenseStats: ExpenseStats | null;
  weeklyActivity: WeeklyActivityData | null;
  quickTransfer: TransferContact[];
  balanceHistory: number[] | null;
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

export const fetchCards = createAsyncThunk<CardData[]>(
  "dashboard/fetchCards",
  async () => {
    const response = await mockApi.get("/cards");
    return response.data as CardData[];
  }
);

export const fetchTransactions = createAsyncThunk<Transaction[]>(
  "dashboard/fetchTransactions",
  async () => {
    const response = await mockApi.get("/transactions");
    return response.data as Transaction[];
  }
);

export const fetchExpenseStats = createAsyncThunk<ExpenseStats>(
  "dashboard/fetchExpenseStats",
  async () => {
    const response = await mockApi.get("/expense-statistics");
    return response.data as ExpenseStats;
  }
);

export const fetchWeeklyActivity = createAsyncThunk<WeeklyActivityData>(
  "dashboard/fetchWeeklyActivity",
  async () => {
    const response = await mockApi.get("/weekly-activity");
    return response.data as WeeklyActivityData;
  }
);

export const fetchQuickTransfer = createAsyncThunk<TransferContact[]>(
  "dashboard/fetchQuickTransfer",
  async () => {
    const response = await mockApi.get("/quick-transfer/contacts");
    return response.data as TransferContact[];
  }
);

export const fetchBalanceHistory = createAsyncThunk<number[]>(
  "dashboard/fetchBalanceHistory",
  async () => {
    const response = await mockApi.get("/balance-history");
    return response.data as number[];
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    cards: [] as CardData[],
    transactions: [] as Transaction[],
    expenseStats: null,
    weeklyActivity: null,
    quickTransfer: [] as TransferContact[],
    balanceHistory: null,
    loading: {
      cards: false,
      transactions: false,
      expenseStats: false,
      weeklyActivity: false,
      quickTransfer: false,
      balanceHistory: false,
    },
    error: null,
  } as DashboardState,
  reducers: {},
  extraReducers: (builder) => {
    // Cards
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading.cards = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.loading.cards = false;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading.cards = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchTransactions.pending, (state) => {
        state.loading.transactions = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.loading.transactions = false;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading.transactions = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchExpenseStats.pending, (state) => {
        state.loading.expenseStats = true;
      })
      .addCase(fetchExpenseStats.fulfilled, (state, action) => {
        state.expenseStats = action.payload;
        state.loading.expenseStats = false;
      })
      .addCase(fetchExpenseStats.rejected, (state, action) => {
        state.loading.expenseStats = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchWeeklyActivity.pending, (state) => {
        state.loading.weeklyActivity = true;
      })
      .addCase(fetchWeeklyActivity.fulfilled, (state, action) => {
        state.weeklyActivity = action.payload;
        state.loading.weeklyActivity = false;
      })
      .addCase(fetchWeeklyActivity.rejected, (state, action) => {
        state.loading.weeklyActivity = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchQuickTransfer.pending, (state) => {
        state.loading.quickTransfer = true;
      })
      .addCase(fetchQuickTransfer.fulfilled, (state, action) => {
        state.quickTransfer = action.payload;
        state.loading.quickTransfer = false;
      })
      .addCase(fetchQuickTransfer.rejected, (state, action) => {
        state.loading.quickTransfer = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchBalanceHistory.pending, (state) => {
        state.loading.balanceHistory = true;
      })
      .addCase(fetchBalanceHistory.fulfilled, (state, action) => {
        state.balanceHistory = action.payload;
        state.loading.balanceHistory = false;
      })
      .addCase(fetchBalanceHistory.rejected, (state, action) => {
        state.loading.balanceHistory = false;
        state.error = action.error.message || null;
      });
  },
});

export const { actions } = dashboardSlice; // if you need to export actions
export default dashboardSlice.reducer; // export the reducer
