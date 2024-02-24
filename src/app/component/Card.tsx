import { ReactNode } from "react";

interface Props {
  header: string;
  children: ReactNode;
  onClick: any;
}
export default function Card({ header, children, onClick }: Props) {
  return (
    <div className=" flex flex-col items-center" onClick={onClick}>
      <header className="p-1 font-sans font-bold">{header}</header>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
