var express = require('express');
var router = express.Router();
const { connectToDB, ObjectId } = require('../utils/db');

const { generateToken } = require('../utils/auth');

module.exports = router;

// routes
router.get('/', async function (req, res) {
    const db = await connectToDB();
    try {
        let query = {};
        if (req.query.email) {
            query.email = { $regex: req.query.email };
        }
        if (req.query.categories) {
            query.categories = { $regex: req.query.categories };
        }
        if (req.query.budget) {
            query.budget = parseInt(req.query.budget);
        }
        if (req.query.purpose) {
            query.purpose = parseInt(req.query.purpose);
        }

        let page = parseInt(req.query.page) || 1;
        let perPage = parseInt(req.query.perPage) || 10;
        let skip = (page - 1) * perPage;

        let result = await db.collection("surveys").find(query).skip(skip).limit(perPage).toArray();
        let total = await db.collection("surveys").countDocuments(query);

        res.json({ bookings: result, total: total, page: page, perPage: perPage });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    finally {
        await db.client.close();
    }
});

/* Handle the Form */
router.post('/', async function (req, res) {
    const db = await connectToDB();
    try {
        req.body.terms = req.body.terms ? true : false;

        let result = await db.collection("surveys").insertOne(req.body);
        res.status(201).json({ id: result.insertedId });
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        await db.client.close();
    }
});

// Get the total number of bookings per superhero
router.get('/stats', async function (req, res) {
    const db = await connectToDB();
    try {
        let pipelines = [];

        if (req.query.purpose) {
            pipelines.push({ $match: { purpose: req.query.purpose } });
        }

        pipelines = pipelines.concat([
            // non null categories
            { $match: { purpose: { $ne: null } } },
            { $group: { _id: "$purpose", total: { $sum: 1 } } }
        ]);

        let result = await db.collection("surveys").aggregate(pipelines).toArray();
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        await db.client.close();
    }
});

router.post('/login', async function (req, res, next) {
    const db = await connectToDB();
    try {
        // check if the user exists
        var user = await db.collection("users").findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json({ message: 'User not found' });
            return;
        }

        // res.json(user);

        delete user.password;
        delete user.ip_address;

        // generate a JWT token
        const token = generateToken(user);

        // return the token
        res.json({ token: token });

    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        await db.client.close();
    }
});


