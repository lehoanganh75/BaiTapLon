$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product_nam = donghonam.find(product => product.id == productId);
    const product_nu = donghonu.find(product => product.id == productId);

    if (product_nam) {
        let title = `${product_nam.name}`;
        $('#title').html(title);
        let img = `<img src="${product_nam.details}">`;
        $('#pic').html(img);
        let productDetailsHTML = `<p class="itemName">${product_nam.name}</p>`;
        $('#product-title').html(productDetailsHTML);
        let priceHTML = `Giá hiện tại: <span>${product_nam.price}</span>`;
        $('#price').html(priceHTML);
    } else if (product_nu) {
        let title = `${product_nu.name}`;
        $('#title').html(title);
        let img = `<img src="${product_nu.details}">`;
        $('#pic').html(img);
        let productDetailsHTML = `<p class="itemName">${product_nu.name}</p>`;
        $('#product-title').html(productDetailsHTML);
        let priceHTML = `Giá hiện tại: <span>${product_nu.price}</span>`;
        $('#price').html(priceHTML);
    } else {
        console.log('Không tìm thấy sản phẩm với ID đã cho.');
    }

});
$("#btnThemVaoGioHang").click(function(e) {
    e.preventDefault();
    let imgURL = $("#pic img").attr("src");
    let tensp = $("#product-title").text(); 
    let soluong = $("#quantity").val();
    
    let dongiaString = $('#price span').text().trim().replace(/\D/g, ''); 
    let dongia = parseInt(dongiaString);
    
    let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
    
    gioHang.push({ imgURL, tensp, soluong, dongia });
    
    localStorage.setItem("gioHang", JSON.stringify(gioHang));
    
    alert("Thêm vào giỏ hàng thành công");
});

$(document).ready(function () {
    let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
    
    gioHang.forEach(function(sanPham, index) {
        let thanhtien = sanPham.soluong * sanPham.dongia;
        let newRow = "<tr>" + 
                         "<td>" + (index + 1) + "</td>" + 
                         "<td><img src='" + sanPham.imgURL + "' style='max-width:150px;height:auto;'></td>" + 
                         "<td>" + sanPham.tensp + "</td>" + 
                         "<td>" + sanPham.soluong + "</td>" + 
                         "<td>" + sanPham.dongia.toLocaleString() + "</td>" + 
                         "<td>" + thanhtien.toLocaleString() + "</td>" + 
                         "<td>Đang xử lý <button class='btn btn-danger btn-delete'>Xóa</button></td>" + 
                     "</tr>";
        $("#datarow").append(newRow); 
    });
});


$(document).on("click", ".btn-delete", function() {
    $(this).closest("tr").remove();
});


$("#btnthanhtoan").click(function() {
    localStorage.clear();
    $("#datarow").empty();
});

