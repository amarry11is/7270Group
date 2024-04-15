var express = require('express');
var router = express.Router();
const { generateToken, isRay } = require('../utils/auth');

/* GET users listing. */
router.get('/', isRay, function (req, res, next) {
  res.send('respond with a resource');
});

const { connectToDB, ObjectId } = require('../utils/db');

router.get('/with/surveys', async function (req, res) {
  const db = await connectToDB();
  try {
    let result = await db.collection("users").aggregate([
      {
        $lookup: {
          from: "surveys",
          localField: "_id",
          foreignField: "manager",
          as: "surveys"
        }
      },
      // remove the ip_address field
      { $project: { ip_address: 0 } }
    ]).toArray();
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  finally {
    await db.client.close();
  }
});

router.delete('/:userId', async (req, res) => {
  const db = await connectToDB();
  try {
    const userId = req.params.userId;
    
    const result = await db.collection("users").deleteOne({_id: new ObjectId(userId)});
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User successfully deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  } finally {
    await db.client.close();
  }
});

module.exports = router;