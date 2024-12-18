import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./slices/dashboardSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
