export default function reducer(state={
  tweets: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "SPOT_CLICKED": {
      console.log("string reducer spot clicked")
      return {...state}
    }
  }

  return state
}