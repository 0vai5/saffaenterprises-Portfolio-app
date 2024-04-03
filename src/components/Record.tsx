import { records } from "@/constants";
import CountUp from "react-countup";

const Record = () => {
  return (
    <section className="max-container">
      <h1 className="head-text text-center mb-6">
        Our Track <span className="text-[#1065DC]">Record</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {records.map((record) => (
            <div className="max-w-full md:max-w-[30%]">
            <div>
              <h1 className="text-center text-6xl font-bold">
                <CountUp className="text-center" end={record.count} duration={5}/>+
              </h1>
              <h3 className="text-[#1065DC] text-center font-semibold">
                {record.title}
              </h3>
            </div>
            <div>
              <p className="text-center">
                {record.description}
              </p>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Record;
