const express = require('express');
const { ObjectId } = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const plants = await req.plantCollection.find().toArray();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch plants' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await req.plantCollection.insertOne(req.body);
    res.status(201).json({ message: 'Plant added successfully', id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add plant' });
  }
});

router.get('/user/:email', async (req, res) => {
  try {
    const plants = await req.plantCollection.find({ userEmail: req.params.email }).toArray();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user plants' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const plant = await req.plantCollection.findOne({ _id: new ObjectId(req.params.id) });
    res.json(plant);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch plant' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await req.plantCollection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.json({ message: 'Plant updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update plant' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await req.plantCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ message: 'Plant deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete plant' });
  }
});

module.exports = router;
