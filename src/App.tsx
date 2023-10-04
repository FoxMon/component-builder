import { Builder } from "./core/builder/builder";

function App() {
  const builder: Builder = new Builder();

  const parentUid: string = builder.addChildNode("Box", "root", null);
  builder.addChildNode("Input", parentUid, "Box");

  console.log(builder);

  return <div>Hello</div>;
}

export default App;
