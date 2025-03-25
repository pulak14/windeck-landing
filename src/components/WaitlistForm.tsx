
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface WaitlistFormProps {
  className?: string;
  compact?: boolean;
}

const WaitlistForm = ({ className, compact = false }: WaitlistFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentProcess, setCurrentProcess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("You've been added to our waitlist! We'll be in touch soon.");
      setName("");
      setEmail("");
      setCurrentProcess("");
    }, 1000);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100",
        !compact && "max-w-xl mx-auto",
        className
      )}
    >
      <h3 className={cn("font-semibold mb-6", compact ? "text-lg" : "text-xl")}>
        Join the Waitlist
      </h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label htmlFor="currentProcess" className="block text-sm font-medium text-gray-700 mb-1">
            How do you currently create proposals?
          </label>
          <textarea
            id="currentProcess"
            value={currentProcess}
            onChange={(e) => setCurrentProcess(e.target.value)}
            placeholder="Tell us about your current process..."
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </button>
      </div>
    </form>
  );
};

export default WaitlistForm;
