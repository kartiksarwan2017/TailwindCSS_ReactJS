import './App.css';

function App() {
  return (
    <div className="App">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-8">
        <div className="shrink-0">
          <img className="h-12 w-12" src="./logo192.png" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
