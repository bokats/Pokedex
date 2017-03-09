import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log("item props", props);
  }

  render() {
    let { name, happiness, price } = this.props.item_detail;

    return (<ul>
        <li>{name}</li>
        <li>{happiness}</li>
        <li>{price}</li>
      </ul>);
  }
}

export default ItemDetail;
