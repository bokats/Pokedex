import { connect } from 'react-redux';
import ItemDetail from './item_detail';

 const mapStateToProps = (state, ownProps) => {
   let id = ownProps.params.itemId;
   let foundItem = state.pokemon_detail.items.find( item => {
     return item.id == id;
   } );
   return { item_detail: foundItem };
 };

 export default connect(mapStateToProps)(ItemDetail);
