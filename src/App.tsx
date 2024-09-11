import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
function App() {
  // const [alertVisibile, setAlertVisibile] = useState(false);
  const items = ["Kabul", "Kandakhar", "Mazar"];
  return (
    <div>
      <Like onClick={() => console.log("Click")} />
      {/* <ListGroup
        items={items}
        heading="List"
        onSelectItem={() => console.log("")}
      /> */}
      {/* {alertVisibile && (
        <Alert onClose={() => setAlertVisibile(false)}>
          Hi dear how are you
        </Alert>
      )}
      <Button onClick={() => setAlertVisibile(true)}>My Button</Button> */}
    </div>
  );
}

export default App;
