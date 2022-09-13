import React from "react";

const DataTable = ({
  data, header
}) => {
  return (
    <div
      className={`rounded-md p-5 w-full text-white`}
    >
      <table
        className={`table-auto`}
      >
        <thead className="md:border-b-2 border-brand-secondary">
          <tr>
            {header.map((column, index) => {
              return (
                <th className="font-bold text-lg pb-2" key={index}>
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((currency, index) => {
            return (
              <tr className="even:bg-brand-black-primary" key={index}>
                  <td>{currency}</td>
                  <td className="font-thin text-sm pb-3 pt-3.5">
                      {`${data[currency] * 1.05}`}
                  </td>
                  <td>
                    {data[currency]}
                  </td>
                  <td className="font-thin text-sm pb-3 pt-3.5">
                      {`${data[currency] * 0.95}`}
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
