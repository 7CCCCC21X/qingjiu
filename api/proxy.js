export default async function handler(req, res) {
  const response = await fetch('https://v8mz1llzwi.execute-api.us-east-1.amazonaws.com/leaderboard/sake');
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
