import React, { useState, useEffect } from 'react';

const ProductsSell = () => {
  const [data, setData] = useState([]);
  const [searchText, changeSearchText] = useState("");
  const [query, changeQuery] = useState("");
  const [isFirstSearch, changeFirst] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      query.length > 0 && (
        fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
            .then(res=>res.json())
            .then(json=>setData(json.results))
      );
    };

    fetchData();
  }, [query]);

  const toSearch = () => {
    changeFirst(false);
    setData([]);
    changeQuery(searchText);
  }

  return (
    <div>
      <div>
        <input
          type="text" placeholder="Insira o nome do produto"
          value={searchText}
          onChange={({ target }) => changeSearchText(target.value)}
        />
        <button onClick={ () => toSearch() }>
          🔍
        </button>
      </div>
      <ul className='cards'>
        {
          data.length ? (
            data.map((item) => {
              return (
                <li key={ item.id } className={ `card-${item.id}` }>
                  <img
                    className='item-img' alt={ `${item.title}-img` }
                    src={ item.thumbnail }
                    height={ 75 } width={ 75 }
                  />
                  <p className='item-price'>{ item.original_price }</p>
                  <p className='item-priceWithDiscount'>{ item.price }</p>
                  <p className='item-title'>{ item.title  }</p>
                </li>
              );
            })
          ) : (
            !isFirstSearch && <div>Carregando...</div>
          )
        }
      </ul>
    </div>
  );
};

export default ProductsSell;

/*
{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
*/
