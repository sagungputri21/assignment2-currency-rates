import React from "react";

const TextInfo = () => {
    return (
        <div className="mt-12 text-center">
          <h3 className="text-white">Rates are based from 1 USD</h3>
          <h3 className="text-sm text-white">This application usess API from {" "}
            <a className="hover:text-blue-800" href="https://currencyfreaks.com/">
              https://currencyfreaks.com/
            </a>
          </h3>
        </div>
    )
}

export default TextInfo;