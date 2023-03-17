import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';




import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  // A match object contains information about how a <Route path> matched the URL. 
  //can check by console.log(match)
  const match = useRouteMatch();
  console.log(match)
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;


//Basic
// const QuoteDetail=()=>{
//     const params=useParams();

//     return <Fragment>
//     <h1>New Quotedetail page</h1>
//     <p>{params.quoteId}</p>
//    <Route path={`/quotes/${params.quoteId}/comments`}>
//     <Comments/>
//    </Route>

//     </Fragment>
// }
// export default QuoteDetail