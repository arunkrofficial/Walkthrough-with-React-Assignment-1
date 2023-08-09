// 4. Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items.


// Solution*****************************************************************************************************************


function List(props) {
    const listItems = props.items.map((item) =>
      <li key={item}>{item}</li>
    );
    
    return <ul>{listItems}</ul>;
  }
  
  // Usage
  <List items={['apple', 'banana', 'orange']} />