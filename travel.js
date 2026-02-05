import express from 'express';
import { getTravelPlan } from './aiService.js';

const router = express.Router();

router.post('/plan', async (req, res) => {
  try {
    const { destination, days, budget } = req.body;

    const prompt = `
    Create a ${days}-day travel itinerary for ${destination}.
    Budget: ${budget}
    Include places, food, and local tips.
    `;

    const plan = await getTravelPlan(prompt);

    res.json({ plan });
  } catch (error) {
  console.error("TRAVEL ROUTE ERROR:", error.response?.data || error.message);
  res.status(500).json({ error: 'AI request failed' });
}

});

export default router;
