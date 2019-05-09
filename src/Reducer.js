
import { createReducer } from './common/util/reducerUtil';
const initialState ={
    pricing:{
      subtotal:102.96,
      savings:3.85,
      tac:8.92,
      total:108.03,
      zip:85050
    },
    itemsDetails:{
      item_name:"Essential b OFM-ESS-3085 Racing style Leather Gaming chair, Red",
      quantity:1,
      ImageURL:"https://www.staples-3p.com/s7/is/image/Staples/m005055719_sc7?$splssku$"
    }
  }
  

export default createReducer(initialState, {});
