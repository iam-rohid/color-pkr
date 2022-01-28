import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
