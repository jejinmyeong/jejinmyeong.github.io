import React from "react";

type PeriodPropsTypes = {
  startdate: string;
  enddate: string;
};

const Period = ({ startdate, enddate }: PeriodPropsTypes) => {
  return (
    <div className="flex gap-1 items-center text-xs text-gray-400">
      {startdate} - {enddate}
    </div>
  );
};

export default Period;
