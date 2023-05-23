import React from "react";

type Props = {
  startdate?: string,
  enddate?: string,
}

const Period = ({ startdate, enddate }: Props) => {
  const date = startdate && enddate ? startdate + " - " + enddate : startdate ? startdate : enddate;

  return (
    <div className="flex items-center gap-1 text-xs text-gray-400">
      {date}
    </div>
  );
};

export default Period;
