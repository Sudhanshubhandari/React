import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES=[
    {id:'q1',author:'Max',text:'Learning React is Fun'},
    {id:'q2',author:'Maximi',text:'Learning React is great'}
]

const AllQuotes=()=>{
    return <QuoteList quotes={DUMMY_QUOTES}/>
}
export default AllQuotes