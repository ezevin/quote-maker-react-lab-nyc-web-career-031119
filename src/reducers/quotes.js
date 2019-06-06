import uuid from 'uuid';

const id = uuid();
console.log(id)

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      const upVote = state.map(quote => {
        if(quote.id === action.quoteId){
          quote.votes += 1
          return quote
        }else {return quote}
      })
      return [...upVote]
    case "DOWNVOTE_QUOTE":
    const downVote = state.map(quote => {
      if(quote.id === action.quoteId){
        quote.votes > 0 ? quote.votes -= 1 :null
        return quote
      }else {return quote}
    })
    return [...downVote]
    default:
    return state
  }


}
