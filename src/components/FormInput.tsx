
import React, { forwardRef } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            {icon}
          </div>
        )}
        <Input
          className={cn(icon ? "pl-10" : "", className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export { FormInput };
