import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { goals } from "@/constants";

const Goals = () => {
  return (
    <section className="max-container">
      <h1 className="subhead-text text-center mb-5">
        Our Vision <span className="text-[#1065DC]">STATEMENT</span>
      </h1>
      <div className="flex items-center justify-between gap-4 md:flex-row flex-col flex-2">
        {goals.map((goal) => (
            <Card className={goal.cardClass}>
            <CardHeader>
              <CardTitle className={goal.titleClass}><FontAwesomeIcon icon={goal.icon} className="font-semibold text-5xl"/></CardTitle>
              <CardDescription className={goal.cardDescClass}>{goal.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center"> {goal.description}</p>
            </CardContent>
          </Card>
        ))}
        

         
      </div>
    </section>
  );
};

export default Goals;
