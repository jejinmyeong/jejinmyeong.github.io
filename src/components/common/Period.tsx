import React from "react";
import { PeriodTypes } from "./types";

const Period = ({ period }: { period: PeriodTypes }) => {
  const { startdate, enddate } = period;
  return (
    <div className="flex gap-1 items-center text-xs text-gray-400">
      {startdate} - {enddate}
    </div>
  );
};

export default Period;
