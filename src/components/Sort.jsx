import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
const Sort = () => {
  const { filter_products: products, grid_view, setGridView, setListView, sorting_item, updateSort } = useContext(FilterContext)
  return (
    // <Wrapper>
    //   <div className="sorting-list--grid">
    //     <button
    //       className={grid_view ? "active sort-btn" : "sort-btn"}
    //       onClick={setGridView}>
    //       <BsFillGridFill className="icon" />
    //     </button>

    //     <button
    //       className={!grid_view ? "active sort-btn" : " sort-btn"}
    //       onClick={setListView}>
    //       <BsList className="icon" />
    //     </button>
    //   </div>

    //   <div className="product-data">
    //     <p>{`${filter_products[0].length} Products Available`}</p>
    //   </div>

    //   <div className="sort-selection">
    //     <form action="#">
    //       <label htmlFor="sort"></label>
    //       <select
    //         name="sort"
    //         id="sort"
    //         className="sort-selection--style"
    //         onClick={sorting}>
    //         <option value="lowest">Price(lowest)</option>
    //         <option value="#" disabled></option>
    //         <option value="highest">Price(highest)</option>
    //         <option value="#" disabled></option>
    //         <option value="a-z">Price(a-z)</option>
    //         <option value="#" disabled></option>
    //         <option value="z-a">Price(z-a)</option>
    //       </select>
    //     </form>
    //   </div>
    // </Wrapper>
    <Wrapper>
      <div className='btn-container'>
        <button
          onClick={setGridView}
          className={`${grid_view ? 'active' : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`${!grid_view ? 'active' : null}`}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          value={sorting_item}
          onChange={updateSort}
          className='sort-input'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
export default Sort