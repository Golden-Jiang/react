import Sample01 from "./Components/Sample01"
import Sample02 from "./Components/Sample02"
import Sample03 from "./Components/Sample03"
import Sample04 from "./Components/Sample04"
import Sample05 from "./Components/Sample05"
import Sample06 from "./Components/Sample06"
import Sample06Class from "./Components/Sample06Class"

const student = {
  title: 'Mary',
  age: 17,
}
export default function App() {
  return (
    <div className="w3-panel w3-text-white w3-center">
      <Sample01 />
      <Sample02 />
      <Sample03 />
      <Sample04 />
      <Sample05 />
      <Sample06 {...student}/>"
      <Sample06Class {...student}/>
    </div>
  );
}

