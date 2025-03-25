
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  subtitleClassName,
  centered = false,
}: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="heading-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            "subheading max-w-3xl opacity-0 animate-fade-in", 
            centered && "mx-auto",
            subtitleClassName
          )}
          style={{ animationDelay: "200ms" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
