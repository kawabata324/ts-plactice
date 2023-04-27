import { FC, PropsWithChildren } from "react";

type Props = {
  className?: string;
};
export const DefaultLayout: FC<PropsWithChildren<Props>> = ({ className, children }) => (
  <div className={`relative w-full min-h-screen ${className}`}>{children}</div>
);
