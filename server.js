const express = require("express");
const cors = require("cors"); // Add CORS middleware
const axios = require("axios"); // Use axios for HTTP requests

const app = express();
const port = process.env.PORT || 3000; // Configure port

const targetUrl =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Enable CORS for specific origins (adjust for security in production)
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your React app's origin
  }),
);

app.get("/api/*", async (req, res) => {
  // Handle requests to "/api/*"
  const fullUrl = targetUrl + req.url.slice(4); // Construct the full URL

  try {
    const response = await axios.get(fullUrl);
    console.log("Swiggy API response:", response.data); // Log the Swiggy API response (for debugging)
    res.json(response.data); // Forward the JSON response
  } catch (error) {
    console.error("Error fetching data:", error);
    if (error.response && error.response.status === 403) {
      res.status(403).send("Access denied by Swiggy API (403 Forbidden)"); // Handle 403 specifically
    } else {
      res.status(500).send("Error fetching data from Swiggy API"); // Handle other errors
    }
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
