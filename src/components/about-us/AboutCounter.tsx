import Count from "@/common/count";

const counter_data = [
  { end: 26, suffix: "+", label: "Successful Launches" },
  { end: 2, suffix: "M", label: "Lines of Code Written" },
  { end: 80, suffix: "+", label: "Photo Shoots" },
  { end: 300, suffix: "+", label: "Media Assets Created" },
];


export default function AboutCounter() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="bxb-counter-column">
            {counter_data.map((item, i) => (
              <div key={i} className="bxb-counter-item bxb-counter-item2">
                <h2 className="bxb-counter-data bxb-counter-data2" aria-label="2K+">
                  <Count number={item.end} text={item.suffix} />
                </h2>
                <p>{item.label}</p>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  )
}
