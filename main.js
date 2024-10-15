const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let events = [
  {
    id: 1,
    title: "Tech Conference",
    date: "2024-11-01",
    location: "Hyderabad",
    description: "A conference about tech.",
  },
  {
    id: 2,
    title: "Music Festival",
    date: "2024-12-10",
    location: "Mumbai",
    description: "An exciting music festival.",
  },
];

// Get all events
app.get("/events", (req, res) => {
  res.json(events);
});

// Add a new event
app.post("/events", (req, res) => {
  const newEvent = { id: events.length + 1, ...req.body };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// Delete an event
app.delete("/events/:id", (req, res) => {
  events = events.filter((event) => event.id !== parseInt(req.params.id));
  res.status(200).json({ message: "Event deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
