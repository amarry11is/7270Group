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

router.put('/:id/update', async function (req, res) {
    const db = await connectToDB();
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: "Invalid ID format" });
        return;
    }

    // Remove _id from req.body if present
    delete req.body._id;

    try {
        if (Object.keys(req.body).length === 0) {
            res.status(400).json({ message: "Request body is empty or improperly formatted" });
            return;
        }

        let result = await db.collection("users").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );

        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "User updated" });
        } else {
            if (result.matchedCount === 0) {
                res.status(404).json({ message: "User not found" });
            } else {
                res.status(200).json({ message: "No changes made to the User" });
            }
        }
    } catch (err) {
        console.error("Update Error:", err);
        res.status(400).json({ message: err.message });
    } finally {
        await db.client.close();
    }
});

/* Display a single survey */
router.get('/:id', async function (req, res) {
    const db = await connectToDB();
    try {
        let result = await db.collection("users").findOne({ _id: new ObjectId(req.params.id) });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "user not found" });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
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