import New from './New.jsx';

function App() {
  // we can normally write JS here 
  const username = "Harsh Piplodiya";

  return (
    // in 'jsx' file it only lets you return One component i.e. if we're returning only one function,
    // then it's no issue but if we want to return add-on html with the function (component) we're returning,
    // then we need to wrap all those html tags and the function tags inside a 'div' tag or even an empty tag,
    // as the need for this is so common in 'jsx' it allows for this type to thing instead of the div tag,
    // and this empty div tags are known as "Fragments"
    // this is a fragment
    <> 
      {/* this {username} is k/a "Evaluated Expression" i.e the final outcome can be passed directly into the html */}
      <h1>Hello world | {username}</h1>
      <New />
    </>
  )
}

export default App
