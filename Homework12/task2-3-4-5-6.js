const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  // 2) Create a simple HTTP GET server that reads user data from data.json and returns it to the client.
  // Ensure that data.json is present before reading the data.

  if (req.url === "/") {
    await fs.access("data.json");

    const data = await fs.readFile("data.json", "utf-8");
    const users = JSON.parse(data);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  }

  // 3) Add a new route that returns a random number between 1 and 100 at /random.

  if (req.url === "/random") {
    const number = Math.floor(Math.random() * 101);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(JSON.stringify(number));
    res.end();
  }

  // 4) Add a new route that returns a simple HTML table at /html.

  if (req.url === "/html") {
    const html = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
         <h1>Hello World</h1>
        </body>
    </html>`;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  }

  // 5) Add a new route that returns the current time in ISO format at /current-time.

  if (req.url === "/current-time") {
    const date = new Date().toISOString();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(JSON.stringify(date));
    res.end();
  }

  // 6) Add a new route that returns an array of objects, such as users, animals, posts, etc., at /api.

  if (req.url === "/api") {
    const data = {
      users: [
        { id: 1, name: "Nika" },
        { id: 2, name: "Vaja" },
      ],
      animals: [
        { id: 1, species: "Dog" },
        { id: 2, species: "Cat" },
      ],
      posts: [
        { id: 1, text: "Hi" },
        {
          id: 2,
          text: "Goodbye"
        },
      ],
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server running on");
});
