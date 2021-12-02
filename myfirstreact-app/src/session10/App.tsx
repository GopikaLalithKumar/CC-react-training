import "./App.css";
import list from "./components/List";
import Search from "./components/Seacrh";
const List = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
function getTitle() {
  return "hello React";

}

function App() {
  return (
    <div className="container">
      <h1>{getTitle()}</h1>
      <label htmlFor="search">Search</label>
      <input id="search"/>
      <div className="container">
        <span>Title</span>
        <span>URL</span>
        <span>Author</span>

      </div>
      
    {List.map((item)=>(
      <div>
        <span>{item.title}</span>
        <span>{item.url}</span>
        <span>{item.author}</span>
      </div>
    ))}
    </div>
  );
}
export default App;