import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockApi } from "../../services/mockApi";

export const fetchCards = createAsyncThunk("dashboard/fetchCards", async () => {
  const response = await mockApi.get("/cards");
  return response.data;
});

export const fetchTransactions = createAsyncThunk(
  "dashboard/fetchTransactions",
  async () => {
    const response = await mockApi.get("/transactions");
    return response.data;
  }
);

export const fetchExpenseStats = createAsyncThunk(
  "dashboard/fetchExpenseStats",
  async () => {
    const response = await mockApi.get("/expense-statistics");
    return response.data;
  }
);

export const fetchWeeklyActivity = createAsyncThunk(
  "dashboard/fetchWeeklyActivity",
  async () => {
    const response = await mockApi.get("/weekly-activity");
    return response.data;
  }
);

export const fetchQuickTransfer = createAsyncThunk(
  "dashboard/fetchQuickTransfer",
  async () => {
    const response = await mockApi.get("/quick-transfer/contacts");
    return response.data;
  }
);

export const fetchBalanceHistory = createAsyncThunk(
  "dashboard/fetchBalanceHistory",
  async () => {
    const response = await mockApi.get("/balance-history");
    return response.data;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    cards: [],
    transactions: [],
    expenseStats: null,
    weeklyActivity: null,
    quickTransfer: [],
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
  },
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
        state.error = action.error.message;
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
        state.error = action.error.message;
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
        state.error = action.error.message;
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
        state.error = action.error.message;
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
        state.error = action.error.message;
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
        state.error = action.error.message;
      });
  },
});

export const { actions } = dashboardSlice; // if you need to export actions
export default dashboardSlice.reducer; // export the reducer
