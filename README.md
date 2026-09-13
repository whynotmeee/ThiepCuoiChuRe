# 💌 Thiệp cưới online (Nhà trai) — Triệu Dũng & Lã Hằng

Thiệp cưới online xây dựng bằng **Next.js 14** + **Tailwind CSS**, tối ưu cho điện thoại, deploy lên **Vercel** trong vài phút.

## ✨ Tính năng

- Trang bìa (Hero) với hiệu ứng cánh hoa rơi
- Lời ngỏ + thông tin hai bên gia đình
- Đồng hồ đếm ngược tới ngày cưới
- Dòng thời gian chuyện tình yêu
- Thông tin sự kiện cưới + nút xem bản đồ
- Album ảnh (lightbox phóng to)
- Thông tin mừng cưới (nút sao chép số tài khoản)
- Form xác nhận tham dự (RSVP)
- Nhạc nền bật/tắt
- Hiệu ứng hiện dần khi cuộn, responsive toàn bộ

## 📝 Chỉnh sửa nội dung

Mọi thông tin nằm trong **một file duy nhất**: [`data/config.js`](./data/config.js)

Mở file này để sửa: tên cô dâu chú rể, ngày giờ, địa điểm, câu chuyện, số tài khoản, nhạc nền... Lưu lại là xong.

### Thêm ảnh

1. Bỏ ảnh vào thư mục `public/gallery/` (ví dụ `1.jpg`, `2.jpg`...)
2. Liệt kê trong `data/config.js`:
   ```js
   gallery: ["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg"],
   ```

### Thêm nhạc nền

1. Bỏ file nhạc vào `public/` (ví dụ `music.mp3`)
2. Trong `data/config.js`:
   ```js
   music: { src: "/music.mp3", title: "Tên bài hát" },
   ```

## 💻 Chạy thử ở máy

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## 🚀 Deploy lên Vercel

### Cách 1: Qua giao diện web (dễ nhất)

1. Đẩy code lên GitHub (xem phần dưới).
2. Vào https://vercel.com → đăng nhập bằng GitHub.
3. Bấm **Add New → Project**, chọn repo `ThiepCuoi`.
4. Vercel tự nhận diện Next.js → bấm **Deploy**.
5. Sau ~1 phút bạn có link dạng `https://thiep-cuoi.vercel.app` để chia sẻ.

### Cách 2: Dùng Vercel CLI

```bash
npm i -g vercel
vercel          # deploy bản xem trước
vercel --prod   # deploy bản chính thức
```

## 📤 Đẩy code lên GitHub

```bash
git add .
git commit -m "Thiệp cưới Triệu Dũng & Lã Hằng"
# Tạo repo trống trên GitHub rồi:
git remote add origin https://github.com/<tài-khoản>/ThiepCuoi.git
git branch -M main
git push -u origin main
```

---

Made with ♥ — #DungHang2026
