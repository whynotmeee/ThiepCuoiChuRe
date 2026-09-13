THƯ MỤC PUBLIC — NƠI ĐẶT FILE TĨNH
====================================

1) NHẠC NỀN
   - Chép file nhạc vào đây, ví dụ: public/music.mp3
   - Trong data/config.js, mục music.src đã trỏ sẵn tới "/music.mp3"
   - Nếu tên file khác (vd: song.mp3) thì sửa lại src: "/song.mp3"

2) ẢNH BÌA
   - Đặt ảnh vào đây rồi khai báo config.coverImage = "/cover.jpg"

3) ẢNH CÔ DÂU / CHÚ RỂ
   - config.groom.photo = "/groom.jpg"
   - config.bride.photo = "/bride.jpg"

4) ALBUM ẢNH
   - Tạo thư mục public/gallery, bỏ ảnh vào (1.jpg, 2.jpg, ...)
   - Khai báo trong config.gallery = ["/gallery/1.jpg", "/gallery/2.jpg", ...]

Lưu ý: đường dẫn luôn bắt đầu bằng "/" và KHÔNG ghi chữ "public".
