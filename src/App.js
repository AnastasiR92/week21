import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["3D Modeling", 11],
  ["Cooking", 2],
  ["Planting", 2],
  ["Walking", 2],
  ["Foreign languages", 7],
];

export const options = {
  title: "My Hobbies",
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
