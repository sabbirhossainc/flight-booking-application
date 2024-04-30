import rootReducer from "../rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(
    `Upcoming State: ${JSON.stringify(
      upcomingState.bookingReducer.data.length
    )}`
  );

  // pass action
  if (upcomingState.bookingReducer.data.length < 4) {
    return next(action);
  }
  else {
    alert("You cann't book more than three flight!!!");  
  }
};

export default myLogger;
