import { FC, PropsWithChildren } from "react";

type Props = {
  value: number;
};

export const CircleProgress: FC<PropsWithChildren<Props>> = ({ value, children }) => {
  const style = {
    "--value": value,
    "--size": "20rem",
    "--thickness": "2px",
  } as React.CSSProperties;

  return (
    <div className="radial-progress text-orange-500" style={style}>
      {children}
    </div>
  );
};
