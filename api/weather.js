// Vercel serverless function: keeps the OpenWeather key on the server, never in the browser bundle.
module.exports = async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).json({ message: "Missing city" });

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`;
  const r = await fetch(url);
  res.status(r.status).json(await r.json());
};
