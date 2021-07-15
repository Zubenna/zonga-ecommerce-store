import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Zubenna:Nwanna@2021@zubycluster.p6j8x.mongodb.net/zongaDb?retryWrites=true&w=majority",
      { useUnifiedTopology: true }
    );
    const db = client.db();
    const zongaCollection = db.collection("zonga");
    const result = await zongaCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Product inserted" });
  }
}

export default handler;
