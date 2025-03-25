
import { cn } from "@/lib/utils";

interface ComparisonItemProps {
  title: string;
  description: string;
  className?: string;
}

const ComparisonItem = ({ title, description, className }: ComparisonItemProps) => {
  return (
    <div className={cn("p-6 rounded-2xl", className)}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface ComparisonSectionProps {
  leftTitle: string;
  leftDescription: string;
  rightTitle: string;
  rightDescription: string;
  className?: string;
}

const ComparisonSection = ({
  leftTitle,
  leftDescription,
  rightTitle,
  rightDescription,
  className,
}: ComparisonSectionProps) => {
  return (
    <div className={cn("grid md:grid-cols-2 gap-8", className)}>
      <ComparisonItem 
        title={leftTitle}
        description={leftDescription}
        className="bg-gray-100 opacity-0 animate-slide-in"
        style={{ animationDelay: "100ms" }}
      />
      <ComparisonItem 
        title={rightTitle}
        description={rightDescription}
        className="bg-blue-50 opacity-0 animate-slide-in"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
};

export default ComparisonSection;
