import "./ConverterDisplay.scss";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import icon from "../../assets/icon.svg";

interface ToppersData {
  price: number;
  id: string;
}

const ConverterDisplay = ({ currency }: any) => {
  const [currencyArray, setCurrencyArray] = useState<ToppersData[]>([]);
  const [updateQuery, setUpdateQuery] = useState(false);

  useEffect(() => {
    setUpdateQuery(true);
  }, [currency]);


  const deleteItem = (index: any) => {
    if (index > -1) {
      setCurrencyArray(currencyArray => currencyArray.splice(index, 1))
      setUpdateQuery(false);
    }
  };


  const EXCHANGE_RATES = gql`
    query price {
      markets(filter:{ baseSymbol: {_eq:"${currency}" } quoteSymbol: {_eq:"EUR"}}) {
        marketSymbol
        ticker {
          lastPrice
        }
      }
    }
    `;

  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    data.markets.map((market: any, i: any) => {
      if (i === 0) {
        var price = market.ticker.lastPrice;
        price = Number(price).toFixed(2);
        var marketSymbol = market.marketSymbol.split(":")[1];
        marketSymbol = marketSymbol.split("/")[0];

        var priceObject = { price: price, id: marketSymbol };

        const existingCurrency = currencyArray.find(
          (element) => element.id === marketSymbol
        );
        if (!existingCurrency && updateQuery) {
          currencyArray.push(priceObject);
          setCurrencyArray(currencyArray => currencyArray);
          setUpdateQuery(false);
        }
      }
    });
  }

  return (
    <>
      {currencyArray.length > 0
        ? currencyArray.map((currency: any, index: any) => {
            return (
              <div key={currency.id} className="convertion-column">
                <div className="left-table">
                  <img src={icon} alt="" />
                  <div className="currency-div">
                    <p>{currency.id}</p>
                    <p className="currency-price">
                      {currency.price} <i className="fas fa-euro-sign"></i>
                    </p>
                  </div>
                </div>
                <span className="close-btn" onClick={() => deleteItem(index)}>
                  x
                </span>
              </div>
            );
          })
        : null}
    </>
  );
};

export default ConverterDisplay;
