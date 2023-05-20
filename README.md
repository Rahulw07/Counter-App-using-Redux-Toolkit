          #How It Works
The counter app uses Redux Toolkit's createSlice function to define a Redux slice, 

which includes the initial state, reducers, and actions for managing the counter value.

The Counter component is connected to the Redux store using the useSelector and useDispatch hooks from React Redux. 

It displays the counter value and provides buttons to increment, decrement the counter.

When a button is clicked, the corresponding action is dispatched, 

triggering the corresponding reducer to update the counter value in the Redux store.
