# Client (React) – ComponentHub

Frontend React (Vite + TypeScript) cho website bán linh kiện điện tử ComponentHub. Ứng dụng gọi API từ server Express và hiển thị danh sách sản phẩm mẫu.

## Yêu cầu
- Node.js 18+

## Cấu hình môi trường
- Tạo file `client/.env` (đã có sẵn):
  - `VITE_API_BASE_URL=http://localhost:3000`

## Chạy dự án
- Dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Scripts
- `dev`: chạy Vite dev server
- `build`: build TypeScript và bundle sản phẩm
- `preview`: chạy server preview sau khi build

## Cấu trúc thư mục
- `src/` mã nguồn React
  - `api.ts` các hàm gọi API (`/api/health`, `/api/products`)
  - `App.tsx` UI đơn giản hiển thị trạng thái API và danh sách sản phẩm
- `public/` tài nguyên tĩnh

## Kết nối API
- Server Express chạy tại `http://localhost:3000`
- Tài liệu Swagger: `http://localhost:3000/docs`

## Ghi chú
- Đây là giao diện mẫu, có thể mở rộng thêm tính năng như tìm kiếm, lọc, giỏ hàng, đăng nhập, v.v.
