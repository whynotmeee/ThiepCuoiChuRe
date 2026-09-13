// =====================================================================
//  THÔNG TIN THIỆP CƯỚI — CHỈNH SỬA MỌI THỨ TẠI ĐÂY
//  Bố cục mô phỏng theo phong cách "Thiệp cưới 44" (cinelove).
//  Sau khi sửa xong, lưu file lại là trang web tự cập nhật.
// =====================================================================

export const config = {
  // --- Tên cô dâu chú rể ---
  groom: {
    name: "Triệu Văn Dũng",
    fullName: "Triệu Văn Dũng",
    role: "Chú rể",
    father: "Ông Triệu Văn Thiềng",
    mother: "Bà Đỗ Thị Kế",
    photo: "",
  },
  bride: {
    name: "Lã Thuý Hằng",
    fullName: "Lã Thuý Hằng",
    role: "Cô dâu",
    father: "Ông Lã Minh Hải",
    mother: "Bà Nguyễn Thị Hiền",
    photo: "",
  },

  // Thứ tự hiển thị tên: "bride" (cô dâu trước) hoặc "groom"
  nameOrder: "groom",

  // --- Ngày & giờ cưới (định dạng: YYYY-MM-DDTHH:mm:ss) dùng cho đếm ngược & lịch ---
  weddingDate: "2026-09-19T16:30:00",

  // --- Dòng chữ ngày hiển thị ở bìa (giống mẫu) ---
  dateLine1: "Thứ bảy, 19/09/2026",
  dateLine2: "Âm lịch 09/08 | 16:30",

  // --- Ảnh nền trang bìa (đặt trong /public). Để trống dùng gradient ---
  coverImage: "/cover.jpg",

  // --- Địa chỉ website sau khi deploy (dùng để tạo link ảnh xem trước khi chia sẻ) ---
  // Ví dụ: "https://thiep-cuoi.vercel.app" (KHÔNG có dấu / ở cuối)
  siteUrl: "https://thiep-cuoi-nam.vercel.app",

  // --- Ảnh xem trước khi chia sẻ lên Facebook/Zalo (đặt trong /public) ---
  // Khuyến nghị ảnh 1200x630px. Để trống sẽ không hiện ảnh preview.
  ogImage: "/og-image.jpg",

  // --- Chữ lớn điện ảnh đầu thiệp (mỗi phần tử 1 dòng) ---
  heroWords: ["YOU ARE", "THE LOVE OF", "MY LIFE"],

  // --- Thông tin thiệp mời (phần trang trọng) ---
  invitation: {
    heading: "TRÂN TRỌNG KÍNH MỜI",
    sub: "ĐẾN DỰ BUỔI TIỆC CHUNG VUI\nCÙNG GIA ĐÌNH CHÚNG TÔI VÀO LÚC",
    timeBig: "16 GIỜ 30 | THỨ BẢY | 19.09.2026",
    lunar: "(Nhằm ngày 09 tháng 08 năm Bính Ngọ)",
    placeHeading: "HÔN LỄ ĐƯỢC CỬ HÀNH TẠI",
    placeBig: "TƯ GIA NHÀ TRAI",
    placeAddress: "Xóm Trung Thành, Thôn Trung Hoà, Xã Hợp Thịnh, T. Bắc Ninh",
    mapUrl: "https://www.google.com/maps/place/21°19'16.9%22N+105°55'17.9%22E/@21.3138038,105.9141518,14.52z/data=!4m4!3m3!8m2!3d21.321368!4d105.92165?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
    // Bản đồ nhúng: để trống sẽ tự tạo từ placeAddress.
    // Nếu muốn chính xác hơn, vào Google Maps > Chia sẻ > Nhúng bản đồ,
    // copy phần link trong src="..." của iframe rồi dán vào đây.
    mapEmbed: "",
  },

  // --- Lời ngỏ ---
  intro:
    "Gửi đến bạn tấm thiệp cưới đầy yêu thương.\nNhững ai nhận được lời mời này đều là những người đặc biệt với bọn mình.\nMong bạn và gia đình sẽ đến chung vui,\nCùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa.\nCảm ơn vì luôn bên cạnh và yêu thương.\nBọn mình rất mong được gặp bạn trong ngày vui này! ❤️",
  introEn:
    "To Our Family And Friends,\nThank You For Celebrating Our Special Day,\nSupporting Us And Sharing Our Love.",

  // --- Ảnh cô dâu chú rể đặt dưới phần tên (trong "Lời ngỏ") ---
  coupleImage: "/couple.jpg",

  // --- Các câu thơ / trích dẫn điện ảnh xen giữa các phần ---
  quotes: [
    {
      vi: "Trái tim em,\nTựa cánh chim nhỏ giữa đồng hoang,\nĐã tìm thấy bầu trời của riêng mình\nTrong đôi mắt anh.",
      en: "My heart, the bird of the wilderness has found its sky in your eyes.",
      words: ["Welcome", "To", "Wedding"],
    },
    {
      vi: "Có lẽ thế gian này có vô vàn điều tươi đẹp,\nNhưng trong lòng em, đẹp nhất vẫn chỉ có anh.",
      en: "I love three things in this world.\nSun, moon and you.\nSun for morning, moon for night, and you forever.",
      words: ["MY LOVE", "FOREVER"],
    },
    {
      vi: "Đi một vòng lớn rồi vẫn gặp anh,\nTừ đó, thế gian bỗng hóa dịu dàng.",
      en: "",
      words: ["love", "Fall in", "Wedding"],
    },
    {
      vi: "Hạnh phúc lớn nhất chính là được nắm tay anh,\nCùng nhau đi hết cuộc đời lãng mạn này.",
      en: "",
      words: [],
    },
  ],

  // --- Album ảnh (đặt ảnh trong /public/gallery và liệt kê ở đây) ---
  // Ví dụ: "/gallery/1.jpg". Để trống sẽ dùng ảnh placeholder.
  gallery: [
    "/gallery/MRL02000.jpg",
    "/gallery/MRL02193.jpg",
    "/gallery/MRL02208.jpg",
    "/gallery/MRL02400.jpg",
    "/gallery/MRL02638.jpg",
    "/gallery/Unknown.jpg",
    "/gallery/Unknown-2.jpg",
    "/gallery/Unknown-3.jpg",
  ],

  // --- Thông tin mừng cưới / hộp quà cưới ---
  gifts: [
    {
      owner: "Chú rể - Triệu Văn Dũng",
      bank: "MB Bank",
      qr: "/qr-groom.jpg", // Đặt ảnh QR của chú rể vào public/qr-groom.jpg
    },
  ],

  // Bảng mã BIN một số ngân hàng phổ biến (dùng cho bankBin ở trên):
  // Vietcombank 970436 | Techcombank 970407 | BIDV 970418 | VietinBank 970415
  // Agribank 970405 | MB Bank 970422 | ACB 970416 | VPBank 970432
  // Sacombank 970403 | TPBank 970423 | VIB 970441 | SHB 970443
  // MSB 970426 | OCB 970448 | SeABank 970440 | HDBank 970437

  // --- Nhạc nền (đặt file trong /public, ví dụ "/music.mp3") ---
  music: {
    src: "/i-do.mp3",
    title: "I Do",
  },

  // --- Lời chúc chạy (giống thanh lời chúc của mẫu) ---
  blessings: [
    { name: "Quang", text: "🎊 Chúc hai bạn luôn vui vẻ, thấu hiểu và nâng đỡ nhau!" },
    { name: "Thanh", text: "🕊️ Tân hôn hạnh phúc, trăm năm bên nhau!" },
    { name: "Đức", text: "🥂 Một hành trình hạnh phúc đang chờ đón hai bạn!" },
    { name: "Hiền", text: "💐 Chúc hai bạn trăm năm hòa hợp, hạnh phúc!" },
  ],

  // --- Câu cuối + hashtag ---
  closingQuote:
    "\"Hết lần này đến lần khác, đem chuyện tình riêng khoe với thế gian,\nChỉ vì mỗi lần nhìn em, anh lại thấy đó là điều đáng tự hào nhất.\"",
  thankYou:
    "Cảm ơn bạn đã dành thời gian ghé thăm thiệp cưới của bọn mình. Rất mong được gặp bạn trong ngày vui này!",
  hashtag: "#DungHang2026",

  // --- Xác nhận tham dự (RSVP) gửi vào Google Form ---
  // Dữ liệu khách gửi sẽ đổ vào Google Sheets của form bên dưới.
  rsvp: {
    // ID form (phần giữa /d/e/ và /viewform trong link)
    formId:
      "1FAIpQLSf8ZFGa1_S9dwbvTr86v8OsNMJpWWFhVcQ7aGd-AGa6e6eJeg",
    // Mã field tương ứng từng câu hỏi trong Google Form
    fields: {
      name: "entry.1717183105", // Họ và tên
      attend: "entry.155697607", // Bạn sẽ tham dự chứ?
      guests: "entry.1334527127", // Số người tham dự
      wish: "entry.619460324", // Lời chúc
    },
    // Giá trị lựa chọn PHẢI khớp CHÍNH XÁC với đáp án trong Google Form
    attendYes: "Có, tôi sẽ đến",
    attendNo: "Rất tiếc, tôi không thể đến",
  },
};

export default config;
