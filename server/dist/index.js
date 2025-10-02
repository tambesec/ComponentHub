import { createServer } from 'http';
import app from './app.js';
const port = Number(process.env.PORT || 3000);
const server = createServer(app);
server.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map