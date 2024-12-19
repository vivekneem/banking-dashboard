import React, { useEffect, Suspense, lazy, useCallback } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  fetchCards,
  fetchTransactions,
  fetchExpenseStats,
  fetchWeeklyActivity,
  fetchQuickTransfer,
  fetchBalanceHistory,
} from "../../store/slices/dashboardSlice";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import Card from "../../components/ui/Card";
import ErrorMessage from "../../components/ui/ErrorMessage";

const CreditCard = lazy(() => import("../../components/Dashboard/CreditCard"));
const RecentTransactions = lazy(
  () => import("../../components/Dashboard/RecentTransactions")
);
const WeeklyActivity = lazy(
  () => import("../../components/Dashboard/WeeklyActivity")
);
const ExpenseStatistics = lazy(
  () => import("../../components/Dashboard/ExpenseStatistics")
);
const QuickTransfer = lazy(
  () => import("../../components/Dashboard/QuickTransfer")
);
const BalanceHistory = lazy(
  () => import("../../components/Dashboard/BalanceHistory")
);

const SectionLoader: React.FC = () => (
  <div className="w-full h-full min-h-[200px] flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const dashboardData = useAppSelector((state) => state.dashboard);

  const fetchDashboardData = useCallback(async () => {
    try {
      await Promise.all([
        dispatch(fetchCards()),
        dispatch(fetchTransactions()),
        dispatch(fetchExpenseStats()),
        dispatch(fetchWeeklyActivity()),
        dispatch(fetchQuickTransfer()),
        dispatch(fetchBalanceHistory()),
      ]);
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchDashboardData();
  }, [dispatch, fetchDashboardData]);

  if (
    dashboardData.loading.cards ||
    dashboardData.loading.transactions ||
    dashboardData.loading.expenseStats ||
    dashboardData.loading.weeklyActivity ||
    dashboardData.loading.quickTransfer ||
    dashboardData.loading.balanceHistory
  ) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (dashboardData.error) {
    return (
      <div className="w-full">
        <ErrorMessage message={dashboardData.error || "An error occurred"} />
        <button
          onClick={() => dispatch(fetchDashboardData)}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  if (
    !dashboardData.cards?.length ||
    !dashboardData.transactions ||
    !dashboardData.expenseStats ||
    !dashboardData.weeklyActivity ||
    !dashboardData.quickTransfer ||
    !dashboardData.balanceHistory
  ) {
    return (
      <div className="text-center py-8 text-gray-500">No data available</div>
    );
  }

  return (
    <div className="lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-[30px]">
        <div className="w-full lg:col-span-8">
          <div className="w-full lg:w-730 h-auto lg:h-282 mb-4 lg:mb-[30px]">
            <Card title="My Cards" showSeeAll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Suspense fallback={<SectionLoader />}>
                  {dashboardData.cards.map((card) => (
                    <CreditCard key={card.id} {...card} />
                  ))}
                </Suspense>
              </div>
            </Card>
          </div>

          <div className="w-full lg:w-730 h-mobile-chart lg:h-367 lg:mt-16">
            <Suspense fallback={<SectionLoader />}>
              <WeeklyActivity
                weeklyActivity={dashboardData.weeklyActivity[0]}
              />
            </Suspense>
          </div>
        </div>

        <div className="w-full lg:col-span-4">
          <div className="w-full lg:w-360 h-auto lg:h-282 mb-4 lg:mb-[30px]">
            <Suspense fallback={<SectionLoader />}>
              <RecentTransactions transactions={dashboardData.transactions} />
            </Suspense>
          </div>

          <div className="w-full lg:w-350 h-mobile-chart lg:h-367 lg:mt-16">
            <Suspense fallback={<SectionLoader />}>
              <ExpenseStatistics expenseStats={dashboardData.expenseStats} />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-[30px] mt-4 lg:mt-[30px]">
        <div className="w-full lg:col-span-5">
          <div className="w-full lg:w-445 h-auto lg:h-323">
            <Suspense fallback={<SectionLoader />}>
              <QuickTransfer contacts={dashboardData.quickTransfer} />
            </Suspense>
          </div>
        </div>

        <div className="w-full lg:col-span-7">
          <div className="w-full lg:w-635 h-mobile-chart lg:h-323">
            <Suspense fallback={<SectionLoader />}>
              <BalanceHistory balanceHistory={dashboardData.balanceHistory} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
