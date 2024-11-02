import { useState } from 'react';
import InvestmentTable from './Table.jsx';
import './App.css';
import Header from './Header.jsx';
import InputField from './InputField.jsx';

function InvestmentCalculator() {
    const [tableData, setTableData] = useState([]);
    const [INITIAL_INVESTMENT, setINITIAL_INVESTMENT] = useState(0);
    const [ANNUAL_INVESTMENT, setANNUAL_INVESTMENT] = useState(0);
    const [EXPECTED_RETURN, setEXPECTED_RETURN] = useState(0);
    const [DURATION, setDURATION] = useState(0);
    const [hasInput, setHasInput] = useState(false); 

    function inputHandler(event) {
        const inputvalue = Number(event.target.value);
       

        if (event.target.id === '1') {
            setINITIAL_INVESTMENT(inputvalue);
            
        } else if (event.target.id === '2') {
            setANNUAL_INVESTMENT(inputvalue);
           
        } else if (event.target.id === '3') {
            setEXPECTED_RETURN(inputvalue / 100);
            
        } else {
            setHasInput(true); 
            setDURATION(inputvalue);
            if (INITIAL_INVESTMENT && ANNUAL_INVESTMENT && EXPECTED_RETURN && DURATION !== '') {
                setTableData(Array(inputvalue).fill(''));
            }
        }
    }

    function format(num) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(num);
    }

    function Investment_value(years) {
        const FVP = INITIAL_INVESTMENT * Math.pow(1 + EXPECTED_RETURN, years);
        const FVA = ANNUAL_INVESTMENT * (Math.pow(1 + EXPECTED_RETURN, years) - 1) / EXPECTED_RETURN;
        return FVP + FVA;
    }

    function Interest(year) {
        if (year === 1) {
            return format(Investment_value(year) - INITIAL_INVESTMENT - ANNUAL_INVESTMENT);
        }
        const interest = Investment_value(year) - Investment_value(year - 1) - ANNUAL_INVESTMENT;
        return format(interest);
    }

    function Total_interest(year) {
        const totalInvestment = Investment_value(year);
        const totalContributions = INITIAL_INVESTMENT + ANNUAL_INVESTMENT * year;
        const totalInterest = totalInvestment - totalContributions;
        return format(totalInterest);
    }

    function Invested_capital(year) {
        return format(INITIAL_INVESTMENT + ANNUAL_INVESTMENT * year);
    }

    return (
        <>
            <Header />
            <InputField inputHandler={inputHandler} />
            {DURATION <= 0 && hasInput ? (
                <p className='text-white flex justify-center items-center'>Please Enter Duration Greater Than 0</p>
            ) : (
                <InvestmentTable
                    tableData={tableData}
                    Investment_value={(year) => format(Investment_value(year))}
                    Interest={Interest}
                    Total_interest={Total_interest}
                    Invested_capital={Invested_capital}
                />
            )}
        </>
    );
}

export default InvestmentCalculator;
