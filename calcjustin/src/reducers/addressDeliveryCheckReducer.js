const addressDeliveryCheckReducer = (state = false, action) => {
   if (action.type === "SET_ADDRESS_DELIVERY") {
      return state = !state
   };
   return state;
};

export default addressDeliveryCheckReducer;