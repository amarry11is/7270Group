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

        res.json({ surveys: result, total: total, page: page, perPage: perPage });
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

/* Display a single survey */
router.get('/:id', async function (req, res) {
    const db = await connectToDB();
    try {
        let result = await db.collection("surveys").findOne({ _id: new ObjectId(req.params.id) });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Survey not found" });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        await db.client.close();
    }
});

// Update a single survey
router.put('/:id/update', async function (req, res) {
    const db = await connectToDB();
    try {

        let result = await db.collection("surveys").updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });

        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "Survey updated" });
        } else {
            res.status(404).json({ message: "Survey not found" });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        await db.client.close();
    }
});

// Delete a single survey
router.delete('/:id', async function (req, res) {
    const db = await connectToDB();
    try {
        let result = await db.collection("surveys").deleteOne({ _id: new ObjectId(req.params.id) });

        if (result.deletedCount > 0) {
            res.status(200).json({ message: "Survey deleted" });
        } else {
            res.status(404).json({ message: "Survey not found" });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        await db.client.close();
    }
});

// Get the total number of Surveys per superhero
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
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

        if (!req.body.email || !req.body.password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }

        if (!emailRegex.test(req.body.email)) {
            res.status(400).json({ message: 'Invalid email format' });
            return;
        }

        var user = await db.collection("users").findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json({ message: 'User not found' });
            return;
        }

        delete user.password;
        delete user.ip_address;

        const token = generateToken(user);
        res.status(200).json({ token });

    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await db.client.close();
    }
});

router.post('/register', async function (req, res, next) {
    const db = await connectToDB();
    try {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

        if (!req.body.email || !req.body.password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }

        if (!emailRegex.test(req.body.email)) {
            res.status(400).json({ message: 'Invalid email format' });
            return;
        }

        // Check if user already exists
        var existingUser = await db.collection("users").findOne({ email: req.body.email });
        if (existingUser) {
            res.status(409).json({ message: 'User already exists' });
            return;
        }

        const newUser = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender

        };

        const result = await db.collection("users").insertOne(newUser);
        if (!result.acknowledged) {
            throw new Error('User registration failed');
        }

        res.status(201).json({ message: 'User registered successfully' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await db.client.close();
    }
});



var passport = require('passport');

// Specify Survey being managed by a user
router.patch('/:id/manage', passport.authenticate('bearer', { session: false }), async function (req, res) {
    const db = await connectToDB();
    try {
        let result = await db.collection("surveys").updateOne({ _id: new ObjectId(req.params.id) },
            {
                $set: { manager: new ObjectId(req.user._id) }
            });

        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "Survey updated" });
        } else {
            res.status(404).json({ message: "Survey not found" });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    finally {
        await db.client.close();
    }
});


