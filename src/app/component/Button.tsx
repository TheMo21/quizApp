import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: any;
}
export default function Button({ children, onClick }: Props) {
  return (
    <>
      <button
        className="p-2 rounded-md bg-yellow-300 text-bold"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
