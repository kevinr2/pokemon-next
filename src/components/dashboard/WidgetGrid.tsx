'use client'

import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";


export const WidgetGrid = () => {
  const isCart= useAppSelector(state => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 justify-center items-center">
      <SimpleWidget
        title={`${isCart}`}
        subTitle="productos"
        label="contador"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter/"
      />
    </div>
  );
};
