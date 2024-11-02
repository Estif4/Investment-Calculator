import React from 'react';

function InvestmentTable({ tableData, Investment_value, Interest, Total_interest, Invested_capital }) {
  return (
    <div className='flex justify-center items-center'>
      <table className='mt-4'>
        <thead>
          <tr className='text-center'>
            <th className='text-white border-none p-2 text-xs'>Year</th>
            <th className='text-white border-none p-2 text-xs'>Investment Value</th>
            <th className='text-white border-none p-2 text-xs'>Interest (Year)</th>
            <th className='text-white border-none p-2 text-xs'>Total Interest</th>
            <th className='text-white border-none p-2 text-xs'>Invested Capital</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className='border-none text-white border-gray-800 p-2 text-xs'>{index + 1}</td>
              <td className='border-none text-white border-gray-800 p-2 text-xs'>{Investment_value(index + 1)}</td>
              <td className='border-none text-white border-gray-800 p-2 text-xs'>{Interest(index + 1)}</td>
              <td className='border-none text-white border-gray-800 p-2 text-xs'>{Total_interest(index+1)}</td>
              <td className='border-none text-white border-gray-800 p-2 text-xs'>{Invested_capital(index + 1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvestmentTable;
