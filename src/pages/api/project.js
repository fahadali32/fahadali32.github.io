import handler from "./handler";
import data from "./data.json";

handler.get((req, res) => {
  res.json(data);
});

export default handler.handler();
