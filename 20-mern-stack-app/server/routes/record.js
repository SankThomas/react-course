import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// List all records
router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

// Get a single record by its id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Record not found").status(400);
  else res.send(result).status(200);
});

// Create new record
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      postion: req.body.position,
      level: req.body.level,
    };

    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);

    res.send(result).status(204);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to add record");
  }
});

// Update a record by its id
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to update record");
  }
});

// Delete a record by its id
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to delete record");
  }
});

export default router;
