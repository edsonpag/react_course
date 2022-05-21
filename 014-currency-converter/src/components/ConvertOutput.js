import React from "react";

function ConvertOutput({ formData }) {

    const { amount, fromCurrency, toCurrency, result } = formData;

    return (
        <div className="output">
            <p>{`${amount} ${fromCurrency} = ${result} ${toCurrency}`}</p>
        </div>
    );
}

export default ConvertOutput;