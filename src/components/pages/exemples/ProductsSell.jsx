import React, { useState, useEffect } from 'react';
import "./css/ProductsSell.css";

const ProductsSell = () => {
  const [data, setData] = useState({
    isSearching: false,
    emptyReturn: false,
    data: [],
  });

  const [query, changeQuery] = useState("");
  const [search, toggleSearch] = useState(false);

  const [priceValue, changePriceValue] = useState(0);
  const [descountValue, changeDescountValue] = useState(0);
  const [amountValue, changeAmountValue] = useState(0);

  const [priceFilter, changePriceFilter] = useState(false);
  const [descountFilter, changeDescountFilter] = useState(false);
  const [amountFilter, changeAmountFilter] = useState(false);

  const [cart, updateCart] = useState([]);

  const [inVisible, changeVisibility] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      query.length > 0 && (
        fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
          .then(res => res.json())
          .then(json => filterData(json.results))
          .then(filterdJson => updateCurrentlyAmount(filterdJson))
          .then(updatedItems => setData({
            isSearching: false,
            emptyReturn: !updatedItems.length,
            data: updatedItems,
          }))
      );
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const updateCurrentlyAmount = (data) => {
    data.forEach((item, i) => {
      const cartItem = cart.find(([cartItem, _amount]) => (cartItem.id === item.id));
      if (cartItem) {
        data[i].available_quantity -= cartItem[1];
        data[i].cartAmount = cartItem[1];
      }
    });

    return data;
  }

  const filterData = (data) => {
    data = data.filter((item) => {
      return (
        (!priceFilter || (item.price <= priceValue)) &&
        (
          !descountFilter ||
          (Math.round((1 - item.price / item.original_price) * 100) >= descountValue)
        ) &&
        (!amountFilter || (item.available_quantity >= amountValue))
      )
    });

    return data;
  }

  const toSearch = () => {
    setData({
      isSearching: !!query.length,
      emptyReturn: false,
      data: [],
    })

    toggleSearch(!search);
  }

  const addItem = (newItem, x) => {
    const hasFound = cart.find(([item, amount], i) => {
      if (item.id === newItem.id) {
        if (amount + 1 <= item.available_quantity) {
          cart.splice(i, 1, [item, amount + 1]);

          const tempData = { ...data };
          tempData.data[x].available_quantity -= 1;
          tempData.data[x].cartAmount = amount + 1;
          setData(tempData);
        }
      }

      return item.id === newItem.id;
    });

    if (!hasFound) {
      updateCart([
        ...cart,
        [newItem, 1],
      ]);

      const tempData = { ...data };
      tempData.data[x].available_quantity -= 1;
      tempData.data[x].cartAmount = 1;
      setData(tempData);
    }
  }

  const removeItem = (toRemove, x) => {
    cart.find(([item, amount], i) => {
      if (item.id === toRemove.id) {
        if (amount > 1) cart.splice(i, 1, [item, amount - 1]);
        else cart.splice(i, 1);

        const tempData = { ...data };
        tempData.data[x].available_quantity += 1;
        tempData.data[x].cartAmount -= 1;
        setData(tempData);
      }

      return item.id === toRemove.id;
    });
  }

  return (
    <div className='products-sell'>
      <form className='top-bar'>
        <div className="dropdown">
          <span>
            <div className='img-text'>🛒</div>
          </span>
          <div className="dropdown-content slide-in-from-left">
            {cart.map(([item, amount], i) => {
              return (
                <div key={i} className='cart-item'>
                  <div className="img-container">
                    <img
                      className='item-img' alt={`${item.title}-img`}
                      src={item.thumbnail}
                    />
                  </div>
                  <div className='text'>
                    <p className='item-title'>{item.title}</p>
                    <p className='item-price'>Preço unitario: R$ {item.price?.toFixed(2)}</p>
                    <div className='buttons'>
                      <button type='button' onClick={() => removeItem(item, i)}>-</button>
                      <p className='amount'>Quantia: {amount}</p>
                      <button type='button' onClick={() => addItem(item, i)}>+</button>
                    </div>
                    <p className='total'>Total: R${(amount * item.price).toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
            <button className='buy'>Comprar</button>
          </div>
        </div>
        <div className='search-wraper'>
          <input
            type="text" placeholder="Insira o nome do produto"
            value={query} className='search'
            onChange={({ target }) => changeQuery(target.value)}
          />
          <button onClick={() => toSearch()} className='search-btn img-text' type='button'>
            🔍
          </button>
        </div>
        <button onClick={() => changeVisibility(!inVisible)} type='button'>
          <div className='img-text'>☰</div>
        </button>
      </form>
      <main className='main-section'>
        <ul className='cards'>
          {
            data.isSearching ? (
              <span className='searching-msg'>
                <div></div>
              </span>
            ) : (
              (data.emptyReturn) ? (
                <span className='notFound-msg'>
                  <p>Produto não encontrado</p>
                  <p>Tente melhorar os seus filtros, ou a palavra chave</p>
                </span>
              ) : (
                data.data.length ? (
                  data.data.map((item, i) => {
                    return (
                      <div key={i} className={`card-${i} item`}>
                        <div className='pre-title'>
                          <img
                            className='item-img' alt={`${item.title}-img`}
                            src={item.thumbnail}
                          />
                          {
                            Math.round((1 - item.price / item.original_price) * 100) >= 10 ? (
                              <div>
                                <div className='discount'>
                                  <p className='percentage'>
                                    {Math.round((1 - item.price / item.original_price) * 100)}
                                  </p>
                                  %OFF
                                </div>
                              </div>
                            ) : <div style={{ color: "transparent" }}>a</div>
                          }
                          <div className='price-wraper'>
                            <p className={
                              `item-original-price ${!item.original_price && "empty-value"}`
                            }>
                              R$ {item.original_price?.toFixed(2) }
                            </p>
                          </div>
                          <div className='price-wraper'>
                            <p className='item-price'>R$ {item.price?.toFixed(2)}</p>
                          </div>
  
                          <p className='item-title'>{item.title}</p>
                        </div>
                        <div className='pos-title'>
                          <div className='buttons'>
                            <button className='add' onClick={() => addItem(item, i)}>
                              Adicionar
                            </button>
                            <button className='remove' onClick={() => removeItem(item, i)}>
                              Remover
                            </button>
                          </div>
                          <div className='item-quantity'>
                            { `Restão ${item.available_quantity} unidades` }
                            <br/>
                            { `no carrinho  ${item.cartAmount || "0"}.` }
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className='inicial-msg'>
                    <p>
                      Esta "loja virtual" foi feita utilizando a API do mercado livre,
                    </p>
                    <p>
                      com intuito meramente ilustrativo.
                    </p>
                  </div>
                )
              )
            )
          }
        </ul>
        <div className={`filterSection ${inVisible ? "inVisible" : ""} slide-in-from-right`}>
          <h3>Filtros</h3>
          <label>
            <div>
              <h4>Preço Maximo</h4>
              <input
                onChange={() => changePriceFilter(!priceFilter)}
                type='checkbox' className="radio"
              />
            </div>
            <input
              onChange={({ target }) =>
                changePriceValue(target.value > 0 ? target.value : 0)
              }
              value={(priceValue || "")}
              className='filter-value' placeholder='Insira o preço maximo'
              type='number'
            />
          </label>
          <label>
            <div>
              <h4>Desconto Minimo</h4>
              <input
                onChange={() => changeDescountFilter(!descountFilter)}
                type='checkbox' className="radio"
              />
            </div>
            <input
              onChange={
                ({ target }) =>
                  changeDescountValue(
                    target.value > 0 ? target.value <= 90 ? target.value : 90 : 0
                  )
              }
              value={(descountValue || "")}
              className='filter-value' placeholder='Insira o desconto minimo'
              type='number'
            />
          </label>
          <label>
            <div>
              <h4>Quantia Minima Disponivel</h4>
              <input
                onChange={() => changeAmountFilter(!amountFilter)}
                type='checkbox' className="radio"
              />
            </div>
            <input
              onChange={({ target }) =>
                changeAmountValue(target.value > 0 ? target.value : 0)
              }
              value={amountValue || ""}
              className='filter-value' placeholder='Insira quantia minima'
              type='number'
            />
          </label>
        </div>
      </main>
    </div>
  );
};

export default ProductsSell;