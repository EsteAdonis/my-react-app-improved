import PropTypes from 'prop-types';

// const fruits = [
//   {id: 1, name: "apple", calories: 95},
//   {id: 2, name: "orange", calories: 95},
//   {id: 3, name: "banana", calories: 95},
//   {id: 4, name: "coconut", calories: 95},
//   {id: 5, name: "pineapple", calories: 95},        
// ];

// fruits.sort( (a,b) => a.name.localeCompare(b.name)); // Alphabeticaal
// fruits.sort( (a,b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
// fruits.sort( (a,b) => a.calories - b.calories); // numeric
// fruits.sort( (a,b) => b.calories - a.calories); // numeric

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

function List(props) {

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)  

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">
        {listItems}
      </ol>
    </>
  )
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List.defaultProps = {
  category: "Category",
  items:  []
}
export default List