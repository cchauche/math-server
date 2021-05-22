const server = require('./server');
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Math server listening on http://localhost:${PORT}`);
});
