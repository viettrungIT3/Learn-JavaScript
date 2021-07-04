

###### h6 Tom lược
Chúng ta có 3 hàm dành riêng cho trình duyệt để tương tác với khách truy cập: ***alert*** hiển thị một tin nhắn. ***prompt***  hiển thị một thông báo yêu cầu người dùng nhập văn bản. Nó trả về văn bản hoặc, nếu nút Cancel hoặc Esc được bấm sẽ trả null.  ***confirm*** hiển thị một thông báo và chờ người dùng nhấn vào OK hoặc Hủy. Nó trả về true nếu nhấn OK và falsecho Hủy / Esc.

Tất cả các hàm này là phương thức: chúng tạm dừng thực thi tập lệnh và không cho phép khách truy cập tương tác với phần còn lại của trang cho đến khi cửa sổ bị loại bỏ.

Có hai hạn chế được chia sẻ bởi tất cả các phương pháp trên:

1. Vị trí chính xác của cửa sổ phương thức được xác định bởi trình duyệt. Thông thường, nó ở trung tâm.
2. Giao diện chính xác của cửa sổ cũng phụ thuộc vào trình duyệt. Chúng ta không thể sửa đổi nó.
Đó là cái giá cho sự đơn giản. Có nhiều cách khác để hiển thị các cửa sổ đẹp hơn và tương tác phong phú hơn với khách truy cập.