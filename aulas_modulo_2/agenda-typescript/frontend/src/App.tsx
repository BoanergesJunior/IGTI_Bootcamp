import { getEventEndpoint } from "./backend";

function App() {
 
  getEventEndpoint().then(events => {
    for (const event of events) {
      console.log(event)
    }
  })
 
  return (
    <div>
     
    </div>
  );
}

export default App;
