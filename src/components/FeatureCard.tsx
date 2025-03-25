
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "feature-card opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
