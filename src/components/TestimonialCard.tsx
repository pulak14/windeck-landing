
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  className?: string;
  delay?: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  className,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4 space-x-4">
        <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-gray-100">
          <img 
            src={avatar} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
