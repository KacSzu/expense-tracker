import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function Chart({ label, data, nameKey }) {
  return (
    <div>
      <h2 className="text-base font-semibold text-emerald-700 md:text-xl lg:text-2xl">
        {label}
      </h2>
      <div className=" h-[300px]  w-[360px] text-xs md:text-sm    ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              nameKey={nameKey}
              dataKey="value"
              innerRadius={65}
              outerRadius={90}
              cx="50%"
              cy="50%"
              paddingAngle={3}
              label
            >
              {data.map((expense) => (
                <Cell
                  fill={expense.color}
                  stroke={expense.color}
                  key={expense.category}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="middle"
              align="right"
              width="22%"
              layout="vertical"
              iconSize={10}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
