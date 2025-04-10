
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ButtonCustomProps extends React.ComponentProps<typeof Button> {
  glassmorphism?: boolean;
}

const ButtonCustom = forwardRef<HTMLButtonElement, ButtonCustomProps>(
  ({ className, glassmorphism = false, children, ...props }, ref) => {
    return (
      <Button 
        className={cn(
          "rounded-full transition-all",
          glassmorphism && "glass-button", 
          className
        )} 
        ref={ref} 
        {...props}
      >
        {children}
      </Button>
    );
  }
);
ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };
