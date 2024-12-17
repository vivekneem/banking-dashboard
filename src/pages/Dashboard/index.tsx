import React from "react";
import Card from "../../components/ui/Card";
import CreditCard from "../../components/Dashboard/CreditCard";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import WeeklyActivity from "../../components/Dashboard/WeeklyActivity";
import ExpenseStatistics from "../../components/Dashboard/ExpenseStatistics";
import QuickTransfer from "../../components/Dashboard/QuickTransfer";
import BalanceHistory from "../../components/Dashboard/BalanceHistory";

const Dashboard: React.FC = () => {
  const cards = [
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
  ];

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-8">
          <div className="w-[730px] h-[282px] mb-[30px]">
            <Card title="My Cards" showSeeAll>
              <div className="grid grid-cols-2 gap-4">
                {cards.map((card) => (
                  <CreditCard key={card.id} {...card} />
                ))}
              </div>
            </Card>
          </div>

          <div className="w-[730px] h-[367px]">
            <WeeklyActivity />
          </div>
        </div>

        <div className="col-span-4">
          <div className="w-[350px] h-[282px] mb-[30px]">
            <RecentTransactions />
          </div>

          <div className="w-[350px] h-[367px]">
            <ExpenseStatistics />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-[30px] mt-[30px]">
        <div className="col-span-5">
          <div className="w-[445px] h-[323px]">
            <QuickTransfer />
          </div>
        </div>

        <div className="col-span-7">
          <div className="w-[635px] h-[323px]">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
