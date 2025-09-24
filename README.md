# ComponentHub
Dự án web bán linh kiện điện tử. Frontend React (Vite), Backend Node.js (Express), API theo OpenAPI/Swagger.

Chạy dev:

- Server:
  - Env: `server/.env` (mặc định PORT=3000, WEB_ORIGIN=http://localhost:5173)
  - Scripts: `cd server && npm run dev` (Swagger tại http://localhost:3000/docs)
- Client:
  - Env: `client/.env` (mặc định VITE_API_BASE_URL=http://localhost:3000)
  - Scripts: `cd client && npm run dev` (http://localhost:5173)

Cấu trúc:

- `server/` Express + Swagger UI, đọc `server/openapi.yaml`
- `client/` Vite React TS, gọi API `/api/health`, `/api/products`

Build/Run production:

- Server: `cd server && npm run build && npm run start`
- Client: `cd client && npm run build && npm run preview`
