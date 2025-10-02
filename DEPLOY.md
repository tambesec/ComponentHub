# Hướng Dẫn Deploy NetTechPro lên Vercel

## 📋 Chuẩn bị trước khi deploy

### 1. Đảm bảo code đã được fix
✅ Đã fix browserslist warning
✅ Đã fix CSS compatibility
✅ Đã fix crossOrigin error
✅ Đã cài rimraf để clean build

### 2. Test build local (tùy chọn)

**Lưu ý**: Nếu gặp lỗi EPERM khi build local, bỏ qua bước này. Vercel sẽ build thành công trên server.

```bash
cd client
npm run clean
npm run build
```

Nếu build thành công local, test:
```bash
npm start
```

## 🚀 Bước 1: Push code lên GitHub

```bash
# Từ thư mục gốc dự án
cd F:\web\WebBanThietBiMang

# Add tất cả files
git add .

# Commit với message
git commit -m "feat: Vietnamese language + NetTechPro branding + production fixes"

# Push lên branch tam_frontend
git push origin tam_frontend

# Hoặc merge vào main và push
git checkout main
git merge tam_frontend
git push origin main
```

## 🌐 Bước 2: Deploy trên Vercel

### Cách 1: Deploy qua Vercel Dashboard (Khuyến nghị)

1. **Truy cập Vercel**
   - Đi đến https://vercel.com
   - Đăng nhập bằng GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Chọn repository: `tambesec/WebsiteBanThietBiMang`
   - Click "Import"

3. **Configure Project**
   ```
   Framework Preset: Next.js
   Root Directory: client
   Build Command: npm run build
   Output Directory: .next (mặc định)
   Install Command: npm install
   Development Command: npm run dev
   ```

4. **Environment Variables** (nếu cần)
   
   Thêm biến môi trường (tùy chọn):
   ```
   NEXT_PUBLIC_API_URL=https://api.nettechpro.vn
   ```

5. **Deploy**
   - Click "Deploy"
   - Chờ 2-3 phút để build
   - Website sẽ có URL: `https://your-project.vercel.app`

### Cách 2: Deploy qua Vercel CLI

```bash
# Cài Vercel CLI
npm i -g vercel

# Đăng nhập
vercel login

# Deploy từ thư mục client
cd client
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? nettechpro-client
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## 🔧 Bước 3: Cấu hình Custom Domain (sau khi deploy)

1. Vào Project Settings → Domains
2. Add domain: `nettechpro.vn` hoặc `www.nettechpro.vn`
3. Cấu hình DNS records tại nhà cung cấp domain:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📊 Kiểm tra sau khi deploy

- [ ] Website load thành công
- [ ] Tiếng Việt hiển thị đúng
- [ ] Font Inter load đúng
- [ ] Menu điều hướng hoạt động
- [ ] Giỏ hàng hoạt động
- [ ] Responsive trên mobile
- [ ] SEO metadata hiển thị đúng

## 🐛 Troubleshooting

### Build Failed trên Vercel

**Lỗi**: `EPERM: operation not permitted`

**Giải pháp**: Lỗi này chỉ xảy ra khi build local trên Windows. Vercel build trên Linux sẽ không gặp lỗi này. Cứ tiếp tục deploy.

---

### Build Warning: Browserslist

**Warning**: `browsers data (caniuse-lite) is 8 months old`

**Giải pháp**: Đã fix bằng cách chạy:
```bash
npx update-browserslist-db@latest
```

---

### CSS Warnings

**Warning**: `Unknown at rule @apply`

**Giải pháp**: Đây là warning của CSS validator, không ảnh hưởng đến build. Tailwind CSS sẽ compile đúng.

---

### Next.js i18n Config Error

**Error**: `i18n configuration in next.config.js is unsupported in App Router`

**Giải pháp**: Đã fix bằng cách xóa i18n config khỏi `next.config.js`. App Router sử dụng cách khác để handle i18n.

## 🎉 Hoàn tất!

Sau khi deploy thành công, website của bạn sẽ có:

✅ URL Vercel: `https://nettechpro-client.vercel.app`
✅ Custom domain (nếu đã cấu hình): `https://nettechpro.vn`
✅ Auto deploy mỗi khi push code
✅ Preview URL cho mỗi PR
✅ SSL certificate tự động
✅ CDN global
✅ Analytics dashboard

## 📞 Support

Nếu cần hỗ trợ:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/tambesec/WebsiteBanThietBiMang/issues
