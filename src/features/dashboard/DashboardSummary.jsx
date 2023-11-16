import SummaryItem from "./SummaryItem";

function DashboardSummary({ expenses, numDays }) {
  const totalSpent = expenses.reduce((acc, cur) => acc + cur.price, 0);
  const totalBills = expenses.length;
  return (
    <div className=" mb-6 mt-3 grid  grid-cols-2 gap-8">
      <SummaryItem
        totalSpent={totalSpent}
        label={`Spent over last ${numDays} days `}
      />
      <SummaryItem
        label={`Bills over last ${numDays} days `}
        totalBills={totalBills}
      />
    </div>
  );
}

export default DashboardSummary;
