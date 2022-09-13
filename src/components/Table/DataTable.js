import React from "react";

const DataTable = ({
  data, header
}) => {
  return (
    <div
      className={`rounded-md p-5 w-full text-white flex justify-center text-center`}
    >
      <table
        className={`table-auto`}
      >
        <thead className="md:border-b-2">
          <tr>
            {header.map((column, index) => {
              return (
                <th className="font-bold text-lg pb-2 px-3" key={index}>
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.rates && Object.keys(data.rates).map((currency, index) => {
            return (
              <tr className="even:bg-brand-black-primary gap-5" key={index}>
                  <td className="font-bold border-r border-b">{currency}</td>
                  <td className="font-thin text-md py-3 px-5">
                      {parseFloat(`${data.rates[currency] * 1.05}`)}
                  </td>
                  <td className="font-thin text-md py-3 px-5">
                    {parseFloat(data.rates[currency])}
                  </td>
                  <td className="font-thin text-md py-3 px-5">
                      {parseFloat(`${data.rates[currency] * 0.95}`)}
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
