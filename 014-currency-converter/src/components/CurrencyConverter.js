import React, { useState, useEffect } from "react";

import ConvertOutput from "./ConvertOutput";

import getAllCurrencies from "../api/getAllCurrencies";
import convertCurrencies from "../api/convertCurrencies";
import "./CurrencyConverter.css";


function CurrencyConverter() {

    const [ allCurrencies, setAllCurrencies ] = useState([]);

    useEffect(() => {
        getAllCurrencies()
        .then((response) => {
            setAllCurrencies(response);
        })
        .catch((error) => {
            console.log(error);
        })

    }, []);


    const [ formData, setFormData ] = useState({
        amount: "",
        fromCurrency: "",
        toCurrency: "",
        result: "",
        output: false
    });


    function handleChange(event) {
        const { name, value } = event.target;


        if(name === "amount") {
            if(isNaN(value)) {
                alert("Digite apenas números, por favor");
                return;
            }
        }

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                output: false,
                [name]: value
            }
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if(!formData.amount || !formData.fromCurrency || !formData.toCurrency) {
            alert("Preencha todos os campos, por favor");
            return;
        }

        const result = await convertCurrencies(formData.amount, formData.fromCurrency, formData.toCurrency);

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                result: result,
                output: true
            }
        });
    }

    const allCurrenciesElements = allCurrencies.map((currency) => {

        return (
            <option 
            key={currency.id} 
            value={currency.id}>
            {currency.id} - {currency.currencyName}
            </option>
        );
    })

    return (
        <form onSubmit={handleSubmit} className="currencies-container">

            <div className="amount-input-container">
                <label htmlFor="amount-input">Quantidade</label>
                <input 
                type="text"
                id="amount-input"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                />
            </div>

            <div className="from-currency-container">
                <label htmlFor="from-currency">De</label>
                <select
                name="fromCurrency"
                id="from-currency"
                value={formData.fromCurrency}
                onChange={handleChange}>
                    <option value="">-- Escolha --</option>
                    {allCurrenciesElements}
                </select>
            </div>

            <div className="to-currency-container">
                <label htmlFor="to-currency">To</label>
                <select
                name="toCurrency"
                id="to-currency"
                value={formData.toCurrency}
                onChange={handleChange}>
                    <option value="">-- Escolha --</option>
                    {allCurrenciesElements}
                </select>
            </div>

            {formData.output && <ConvertOutput formData={formData} /> }
            <button className="convert-btn">Converter</button>
        </form>
        
    );
}


export default CurrencyConverter;