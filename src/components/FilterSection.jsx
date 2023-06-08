import { useContext } from "react";
import styled from "styled-components"
import { FilterContext } from "../context/FilterContext";
import { FaCheck } from "react-icons/fa";
import { Button } from "../styles/Button";
const FilterSection = () => {
  const { filters: { text, category, colors, price, max_price, min_price }, all_products, updateFiltersValue, clearFilters } = useContext(FilterContext)

  const getUniqueData = (data, property) => {
    let newData = data.map((curElem) => {
      return curElem[property]
    })

    if (property === "colors") {
      newData = newData.flat()
    }

    newData = ["All", ...new Set(newData)]
    return newData
  }

  const categoryData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")
  const colorsData = getUniqueData(all_products, "colors")

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFiltersValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFiltersValue}>
                {curElem}
              </button>
            );
          })}
        </div>

        <div className="filter-company">
          <h3>Company</h3>

          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company--select"
              onClick={updateFiltersValue}>
              {companyData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="company">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div className="filter-colors colors">
          <h3>Colors</h3>

          <div className="filter-color-style">
            {colorsData.map((curColor, index) => {
              if (curColor === "All") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={curColor}
                    name="colors"
                    className="color-all--style"
                    onClick={updateFiltersValue}>
                    All
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="colors"
                  style={{ backgroundColor: curColor }}
                  className={colors === curColor ? "btnStyle active" : "btnStyle"}
                  onClick={updateFiltersValue}>
                  {colors === curColor ? <FaCheck className="checkStyle" /> : null}
                </button>
              );
            })}
          </div>

          <div className="filter_price">
            <h3>Price</h3>
            <p>
              {Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 2,
              }).format(price / 100)}
            </p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFiltersValue}
            />
          </div>

          <div className="filter-clear">
            <Button className="btn" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: #fff;
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: red;
        }
      }

      .active {
        border-bottom: 1px solid red;
        color: red;
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: rgba(29 ,29, 29, .8);
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    margin-left: 10px;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: red;
    color: #fff;
  }

  @media (max-width: 768px){
    .filter-category{
      margin-left: 150px;
    }
    .filter-search{
      margin-left: 150px;
      max-width: 30%;
    }
  }
  
`;
export default FilterSection