import React from "react";

function Table({ columnas }) {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {columnas.map((columna, index) => (
            <th
              key={index}
              className="px-4 py-2 border border-gray-300 text-left text-gray-700 font-semibold"
            >
              {columna}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          {columnas.map((columna, index) => (
            <td
              key={index}
              className="px-4 py-2 border border-gray-300 text-gray-700"
            >
              {columna}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
