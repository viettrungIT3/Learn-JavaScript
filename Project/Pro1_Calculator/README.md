# Link demo: https://viettrungit3.github.io/Learn-JavaScript/Project/Pro1_Calculator/

# Giới thiệu chung
Hôm nay mình sẽ hướng dẫn các bạn xây dựng ứng dụng calculator với html, css và js.

Các chức năng chính:

* Các phép tính cơ bản cộng, trừ, nhân, chia.
* Dark & light mode
* Xem lại lịch sử các phép tính.

# Bắt đầu Code thôi
## 1. Chức Năng Tính Toán Cơ Bản
### 1.1 Code HTML

Trong phần html này ta sẽ tạo một `.container-grid` để bao bọc toàn bộ calculator tiếp theo là một `.result` dùng để hiển thị kết quả tính toán và cuối cùng là các số và phép tính cần có để tính toán.

Bạn tạo cho mình các event `onclick` dùng để thực hiện các chức năng tính toán.
```html
    <div class="container">
        <div class="container-grid">
            <div id="result"></div>
            <div class="calculate">
                <div class="number">
                    <button class="btn" value="7">7</button>
                    <button class="btn" value="8">8</button>
                    <button class="btn" value="9">9</button>
                    <button class="btn" value="4">4</button>
                    <button class="btn" value="5">5</button>
                    <button class="btn" value="6">6</button>
                    <button class="btn" value="1">1</button>
                    <button class="btn" value="2">2</button>
                    <button class="btn" value="3">3</button>
                    <button class="btn" value="0">0</button>
                    <button class="btn" value=".">.</button>
                </div>

                <div class="operation">
                    <button class="btn" onclick="undo()">DEL</button>
                    <button class="btn" onclick="clean()">AC</button>
                    <button class="btn" value="*">x</button>
                    <button class="btn" value="/">/</button>
                    <button class="btn" value="+">+</button>
                    <button class="btn" value="-">-</button>
                    <button class="btn" onclick="equal()">=</button>
                </div>
            </div>
        </div>
    </div>
```

### 1.2 Code Javascript
Trước tiên các bạn import file js vào trong file index.html trước cái đã:
```html
    <script src="js/script.js"></script>
```
Trong phần này sẽ gồm các chức năng chi tiết như sau:
* Hiển thị chữ số và kết quả phép toán
* DEL (xóa các số cuối cùng) và AC (xóa toàn bộ)
* Thực hiện các phép tính

Ý tưởng:
* Các bạn khai báo hai biến để định nghĩa các phép tính và kết quả, tiếp theo các bạn chỉ cần lặp qua các phép tính rồi add event click cho nó là được. Khi click thì sẽ hiển thị ra trên phần kết quả.
* Để mà thực hiện được các phép tính thì ta sẽ sử dụng hàm eval các bạn có thể tham khảo thêm về eval tại đây.
* Tiếp đến là AC (xóa toàn bộ) khi click vào biểu thức đấy thì sẽ xuất hiện một empty string, còn khi click vào biểu thức DEL (xóa các số cuối cùng) bằng cách sử dụng hàm substring() các bạn tham khảo tấm hình ở dưới để hiểu rõ hơn nha.

Code nè: 
```js
    const numbers = document.getElementsByClassName('btn');
    const result = document.getElementById('result');

    for (const number of numbers) {
        number.addEventListener('click', function () {
            result.innerHTML += this.value;
        });
    }

    function equal() {
        result.innerHTML = eval(result.innerHTML);
    }

    function clean() {
        result.innerHTML = "";
    }

    function undo() {
        let res = result.innerHTML;
        result.innerHTML = res.substring(0, res.length - 1); // Xoá số cuối cùng 
    }
```

### 1.3 Code CSS
Như các bạn đã thấy ở trên khi chúng ta chưa css cho nó thì nhìn khá là củ chuối đúng không nào, vậy bây giờ chúng ta bắt đầu css thôi nào.

Đầu tiên các bạn cần import cho mình file css vào trước đã nha:
```html
    <link rel="stylesheet" href="css/style.css" />
```

Bây giờ cái mà quan trọng nhất ở đây là việc chia layout như nào cho hợp lý. Thì mình sẽ sử dụng CSS Grid để chia layout.

Với `.container-grid` mình chia làm 2 hàng với kích thước tương ứng. Trong đó `.calculate` mình sẽ chia ra làm 2 cột với mỗi cột lần lượt là 3 cột / 4 hàng và 2 cột / 4 hàng

![This is a alt text.](https://res.cloudinary.com/dxxbnrmtx/image/upload/v1604166553/1_rnfckv.png "This is a sample image.")

Code nè: 
```css
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: roboto;
        background-image: linear-gradient(to bottom right, #5cc8ff 0%, #d63c6b 100%);
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    /* Dark & Light  Mode*/
    html[data-theme='light'] {
        --bg: #e9eef4;
        --color-text: #0e0e0e;
        --color-boder: #bcbfc2;
        --btn-active: #bcbfc2;
    }

    html[data-theme='dark'] {
        --bg: #2d2e2f;
        --color-text: #fff;
        --color-boder: #6c7073;
        --btn-active: #424548;
    }

    /* container  */
    .container {
        margin: 5rem auto;
        max-width: 300px;
        width: 100%;
    }

    /* Main */
    .container-grid {
        padding: 0 0 5rem 0;
        display: grid;
        grid-template-rows: 1fr 5fr;
    }

    #result {
        padding: .5rem 1rem 0rem;
        text-align: right;
        height: 50px;
        font-size: 1.8rem;
        color: var(--color-text);
        background: var(--bg);
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .calculate {
        border-top: 1px solid var(--color-boder);
        display: grid;
        grid-template-columns: 2fr 1.5fr;
    }

    .number {
        background: var(--bg);
        border-right: 1px solid var(--color-boder);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }

    .operation {
        background: var(--bg);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }

    .btn {
        border: none;
        width: 100%;
        font-size: 1.5rem;
        color: var(--color-text);
        background: var(--bg);
        outline: none;
        cursor: pointer;
    }

    .operation .btn {
        color: #1a73e0;
    }

    .btn:active {
        border-radius: 50%;
        background: var(--btn-active);
        cursor: pointer;
    }

    /* Customer scrollbar  */
    #result::-webkit-scrollbar {
        height: 3px;
        width: 3px;
        background-color: #fff;
    }

    #result::-webkit-scrollbar-thumb:horizontal {
        background-color: #0e0e0e;
        border-radius: 10px;
    }

    #result::-webkit-scrollbar-track {
        border-radius: 0;
        background-color: #fff;
    }
```

### 1.4 Thành quả nè: 

![This is a alt text.](https://media.giphy.com/media/gYrppZ5dDrldUOG1pX/giphy.gif "This is a sample image.")

## Chức Năng Dark & Light Mode
### 2.1 Code HTML
Trong code html này các bạn thêm cho mình một `data-attribute` với tên `data-theme` và value là `light` vào bên trong thẻ mở `<html>`.
```html
    <html lang="en" data-theme="light">
```
Tiếp theo phía dưới `.container-grid` bạn thêm cho mình một class là `.heading`. Bên trong heading sẽ là nơi chứa các icon như mình đã lên ý tưởng từ trước(chú ý icon bạn phải tự import font-awesome nha!).

Code nè: 
```html
    <div class="container">
        <div class="heading">
            <span>
                <i class="fas fa-calculator"></i>
                <i class="fas fa-calculator"></i>
                <i class="fas fa-calculator"></i>
            </span>
            <span>
                <i class="fas fa-moon" id="theme-toggle"></i>
            </span>
        </div>

        <div class="container-grid">
        ...
```

### 2.2 Code CSS

```css
    /* Dark & Light  Mode*/
    html[data-theme='light'] {
        --bg: #e9eef4;
        --color-text: #0e0e0e;
        --color-boder: #bcbfc2;
        --btn-active: #bcbfc2;
    }

    html[data-theme='dark'] {
        --bg: #2d2e2f;
        --color-text: #fff;
        --color-boder: #6c7073;
        --btn-active: #424548;
    }

    /* container  */
    .container {
        margin: 5rem auto;
        max-width: 300px;
        width: 100%;
    }

    /* Heading  */
    .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .8rem .4rem;
    }

    .heading span {
        color: var(--color-text);
        font-size: 1.3rem;
    }

    .fas {
        cursor: pointer;
    } 

    label input[type="checkbox"] {
        -webkit-appearance: none;
    }
```

### 2.3 Code Javascript


```js
    // Dark & Light Mode 
    let toggle = document.getElementById('theme-toggle');
    toggle.onclick = function () {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let targetTheme = "light";

        if (currentTheme === "light") {
            targetTheme = "dark"
        }

        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    }
```

### 2.4 Thành quả:
![This is a alt text.](https://media.giphy.com/media/tD0CVX8xBcPGxzmv1P/giphy.gif "This is a sample image.")

## 3. Chức Năng Xem Lại Lịch Sử Tính Toán
### 3.1 Code HTML
Trong class `.heading` các bạn thêm cho mình một đoạn code nhỏ để chứa icon history và kết quả lưu history.
```html
        <div class="heading">
            <span>
                <i class="fas fa-history">
                    <div id="history"></div>
                </i>
            </span>
            ...
```

### 3.2 Code Javascript
Mình sẽ sử dụng object và array để làm công đoạn lưu trữ lịch sử tính toán nay, thì chắc các bạn cũng đã hình dung ra được là mình sẽ làm như nào rồi nhờ.
Mình sẽ nói sơ qua một chút nha, trước hết mình sẽ tạo một array empty để lưu các biểu thức và kết quả tính toán. Sau đó ta chỉ get và render ra view là được rồi, các bạn xem ảnh ở dưới mình có giải thích chi tiết hơn í.
```js
    //History
    const logHistory = document.getElementById('history');  // get element với id được chỉ định
    let history = [];   // khai báo array empty
    let expressionData = "" // Khai báo hàm để lưu biểu thức
    let resultData = "";    // Khai báo hàm để lưu kết quả tính toán

    function equal() {
        let res = result.innerHTML;
        let output = eval(res);    
        expressionData = res;   // Gán biểu thức tính toán vào hàm đã được khai báo
        resultData = output;    // Gán kết quả tính toán vào hàm đã được khai báo

        // push object gppmf có key là expression, result lần lướt với những value được gán ở trên
        history.push({ expression: expressionData, result: resultData });

        // Gọi hàm showHistory
        showHistory();
        result.innerHTML = output;
    }

    function showHistory() {
        let log = "";   // khai báo hàm log
        for (let key in history) {
            log += history[key].expression + " = " + history[key].result + "<br>" + "<br>";
        }
        logHistory.innerHTML = log;     // Hiển thị ra view với element được gọi
    }
```

### 3.3 Code CSS
Như các bạn đã thấy ở trên khi ta lưu lịch sử thì bị vỡ layout ngay vậy bây giờ chúng ta làm như nào nhờ?

Oke mình đã có bây giờ ta chỉ cần ẩn lịch sử đó đi và chỉ khi nào click vào icon history thì mới hiển thị.

```css
    /* History */
    #history {
        display: none;
        position: absolute;
        z-index: 999;
        background: #5d4196;
        color: #fff;
        font-size: 1rem;
        font-weight: 400;
        padding: .5rem;
        margin-top: .5rem;
    }

    /* hiển thi history */
    .indexHistory {
        display: block !important;
    }

    /* vẫn là hiển thị history nhưng là hover */
    .fa-history:hover #history{
        display: block !important;
    }
```

### 3.4 Xử dụng js để hiển thị indexHistory
Dưới đây là code js để khi click vào icon thì sẽ add class để hiển thị lịch sử
```js
    // kích để hiển thị History
    let indexHistory = document.getElementsByClassName("fa-history");
    indexHistory[0].addEventListener('click', function () {
        logHistory.classList.toggle("indexHistory");
    })
```

### 3.5 Thành quả: 
![This is a alt text.](https://media.giphy.com/media/i0W3kKMqf0ppktdFrg/giphy.gif "This is a sample image.")

# Lời kết
Vậy là xong bài Xây Dựng Ứng Dụng Calculator Với Javascript. Mình mong muốn bài này sẽ giúp các bạn hiểu, nắm rõ hơn và có cảm giác thú vị hơn khi học js.

Mình cũng là một người không biết gì, nhưng nhờ trang [Thanh Long Dev](https://www.thanhlongdev.com/xay-dung-calculator-with-javascript/) mà mình có thể code được ứng dụng Calculator này.
Nguồn code: https://github.com/long1211/Calculator-with-JS

Cảm ơn [Thanh Long Dev]() và cảm ơn các bạn đã lướt xem.