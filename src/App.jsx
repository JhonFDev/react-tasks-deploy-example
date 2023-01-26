import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-700 h-screen">
      Hola mundo
      <div className="container mx-auto outline-cyan-600 p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
