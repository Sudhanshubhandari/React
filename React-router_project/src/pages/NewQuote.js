import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom'

const NewQuote=()=>{
  const history=useHistory();


    const  addQuoteHandler=quoteData=>{
      console.log(quoteData)
      //history helps to redirect to the page
      history.push('/quotes')
    }
    return <QuoteForm onAddQuote={addQuoteHandler}/>
}
export default NewQuote