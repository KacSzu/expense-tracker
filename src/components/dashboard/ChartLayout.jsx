import Chart from "./Chart";

const startData = [
  {
    category: "Medical",
    value: 0,
    color: "#3a443f",
  },
  {
    category: "Transport",
    value: 0,
    color: " #ff0033",
  },
  {
    category: "Self-care",
    value: 0,
    color: "#ffd700",
  },
  {
    category: "Food",
    value: 0,
    color: "#5f4e2e",
  },
  {
    category: "Housing",
    value: 0,
    color: "#ff7f50",
  },
];

function prepareData(startData, expenses) {
  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.category === field ? { ...obj, value: obj.value + 1 } : obj,
    );
  }

  const data = expenses
    .reduce((arr, cur) => {
      const category = cur.category;
      if (category === "Medical") return incArrayValue(arr, "Medical");
      if (category === "Food") return incArrayValue(arr, "Food");
      if (category === "Housing") return incArrayValue(arr, "Housing");
      if (category === "Transport") return incArrayValue(arr, "Transport");
      if (category === "Self-care") return incArrayValue(arr, "Self-care");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);
  return data;
}
function calculateTotalSpendings(data) {
  const totalSpendings = {};

  data.forEach((expense) => {
    const { category, price } = expense;

    totalSpendings[category] = (totalSpendings[category] || 0) + price;
  });

  return totalSpendings;
}

function ChartLayout({ expenses }) {
  const totalSpendings = calculateTotalSpendings(expenses);
  const spendingData = startData.map((expense) => ({
    ...expense,
    value: totalSpendings[expense.category] || 0,
  }));
  const categoryData = prepareData(startData, expenses);
  return (
    <div className="text-center md:flex md:gap-8">
      <Chart
        data={spendingData}
        label={"Expenses from each category"}
        nameKey="category"
      />
      <Chart
        data={categoryData}
        label={"Shopping habits across categories"}
        nameKey="category"
      />
    </div>
  );
}

export default ChartLayout;
