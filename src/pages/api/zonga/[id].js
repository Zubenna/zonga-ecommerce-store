import { MongoClient, ObjectId } from "mongodb";

async function handlerTwo(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://Zubenna:Nwanna@2021@zubycluster.p6j8x.mongodb.net/zongaDb?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  );
  const db = client.db();
  const zongaCollection = db.collection("zonga");
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const product = await zongaCollection.findById(ObjectId(id));
        if (!product) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const product = await zongaCollection.updateOne(
          { _id: ObjectId(id) },
          { $set: req.body }
        );
        if (!product) {
          return res.status(400).json({ success: false });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      res.status(200).json({ message: 'product updated', data: {} });
      break;
    case "DELETE":
      try {
        const deletedProduct = await zongaCollection.deleteOne({
          _id: ObjectId(id),
        });
        if (!deletedProduct) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default handlerTwo;
