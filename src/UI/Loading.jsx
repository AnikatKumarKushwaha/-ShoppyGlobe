import { LiaSpinnerSolid } from "react-icons/lia";
export default function Loading() {
  return (
    <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center  text-slate-500">
        <LiaSpinnerSolid className=" animate-spin w-20 h-20" />
        Loading
      </div>
    </div>
  );
}
