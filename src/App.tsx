import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisibile, setAlertVisibility] = useState(false);

  let items = [
    "Brussels Griffon",
    "Redbone Hound",
    "Great Dane",
    "Labrador Retriever",
    "Great Pyrenees",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisibile && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <ListGroup
        items={items}
        heading="Breeds"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
