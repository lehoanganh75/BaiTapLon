$(document).ready(function () {

    let productCount = 0;

    donghonu.forEach(function (product) {
        productCount++;

        if (productCount % 4 === 1) {
            $("#listProduct_nu").append('<div class="row"></div>');
        }
        let themnu = `
            <div class="product-small col has-hover" id="${product.id}">
                <div class="col-inner">
                    <div class="badge-container absolute left top z-1">
                    </div>
                    <div class="product-small box">
                        <div class="box-image">
                            <div class="image-zoom_in">
                                <img class="default-image" width="300" height="300" src="${product.details}" alt="Default Image">
                            </div>
                        </div>
                        <div class="box-text box-text-products text-center grid-style-2">
                            <div class="title-wrapper">
                            <p class="name">
                                <a href="chitietsanpham.html" class="product-link" data-product-id="${product.id}">${product.name}</a>
                            </p>
                            </div>
                            <div class="price-wrapper">
                                <span class="price"><span><bdi>${product.price}&nbsp;<span>đ</span></bdi></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $("#listProduct_nu .row:last-child").append(themnu);
    });

    donghonam.forEach(function (product) {
        productCount++;

        if (productCount % 4 === 1) {
            $("#listProduct_nam").append('<div class="row"></div>');
        }
        let themnam = `
            <div class="product-small col has-hover" id="${product.id}">
                <div class="col-inner">
                    <div class="badge-container absolute left top z-1">
                    </div>
                    <div class="product-small box">
                        <div class="box-image">
                            <div class="image-zoom_in">
                                <img class="default-image" width="300" height="300" src="${product.details}" alt="Default Image">
                            </div>
                        </div>
                        <div class="box-text box-text-products text-center grid-style-2">
                            <div class="title-wrapper">
                            <p class="name">
                                <a href="chitietsanpham.html" class="product-link" data-product-id="${product.id}">${product.name}</a>
                            </p>
                            </div>
                            <div class="price-wrapper">
                                <span class="price"><span><bdi>${product.price}&nbsp;<span>đ</span></bdi></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $("#listProduct_nam .row:last-child").append(themnam);
    });

    $('.product-link').click(function(e) {
        e.preventDefault();
        let productId = $(this).data('product-id');
        window.location.href = 'chitietsanpham.html?id=' + productId;
    });


});

const donghonam = [
    {
        "id": 1,
        "name": "Casio MTP-V001L-1BUDF – Nam – Quartz (Pin) – Mặt Số 38mm, Kính Cứng, Chống Nước 3ATM",
        "price": "716.000 ₫",
        "details": "../img/products/dongho1.png",
    },
    {
        "id": 2,
        "name": "Citizen Tsuyosa NJ0154-80H – Nam – Kính Sapphire – Automatic (Tự Động) – Mặt Số 40mm, Trữ Cót 40 Giờ, Chống Nước 5ATM",
        "price": "13.685.000 ₫",
        "details": "../img/products/dongho3.png",
    },
    {
        "id": 3,
        "name": "Orient SK RA-AA0B02R19B – Nam – Automatic (Tự Động) – Mặt Số 41.7mm, Trữ Cót 40 Giờ, Hacking Second",
        "price": "8.000.000 ₫",
        "details": "../img/products/dongho5.png",
    },
    {
        "id": 4,
        "name": "Tissot Le Locle Powermatic 80 T006.407.22.033.00 – Nam – Automatic – Trữ Cót 80 Giờ, Guilloché, Mạ Vàng Hồng PVD",
        "price": "22.750.000 ₫",
        "details": "../img/products/dongho7.png",
    },
    {
        "id": 5,
        "name": "Casio World Time AE-1200WHD-1AVDF – Nam – Quartz (Pin) – Mặt Số 45 mm, Bộ Bấm Giờ, Chống Nước 10 ATM",
        "price": "1.506.000 ₫",
        "details": "../img/products/dongho9.png",
    },
    {
        "id": 6,
        "name": "Doxa Noble D172TWH – Nữ – Kính sapphire – Quartz (Pin) – Lấp lánh cùng 8 viên kim cương – Hoạ tiết guilloche – Dây đeo mạ vàng demi",
        "price": "21.990.000 ₫",
        "details": "../img/products/dongho11.png",
    },
    {
        "id": 7,
        "name": "Casio MTP-V006L-7BUDF – Nam – Quartz (Pin) – Mặt Số 38mm, Kính Cứng, Chống Nước 3ATM",
        "price": "930.000 ₫",
        "details": "../img/products/dongho13.png",
    },
    {
        "id": 8,
        "name": "Tissot PRX Powermatic 80 T137.207.11.351.00 – Nam – Kính Sapphire – Automatic (Cơ tự động) – Mặt số 35 mm – Trữ cót 80 giờ – Họa tiết Guilloche",
        "price": "21.000.000 ₫",
        "details": "../img/products/dongho15.png",
    }
]

const donghonu = [
    {
        "id": 9,
        "name": "Daniel Wellington Quadro DW00100431 – Nữ – Quartz (Pin) – Mặt số 20mm, kính cứng, chống nước 3ATM",
        "price": "4.940.000 ₫",
        "details": "../img/products/dongho17.png",
    },
    {
        "id": 10,
        "name": "Saga Stella 53555-SVMWSV-2 – Nữ – Kính Cứng – Quartz (Pin) – Mặt Số 22.5mm, Đính Đá Swarovski, Máy Thụy Sỹ",
        "price": "5.244.000 ₫",
        "details": "../img/products/dongho19.png",
    },
    {
        "id": 11,
        "name": "Saga 53766-SVSVSV-2 – Nữ – Kính Cứng – Quartz (Pin) – Mặt Số 39mm, Đính Đá Swarovski, Chống Nước 3ATM",
        "price": "7.520.000 ₫",
        "details": "../img/products/dongho21.png",
    },
    {
        "id": 12,
        "name": "Saga Long Xing Da Da 53111-SVGERD-2LH – Nữ – Phiên Bản Giới Hạn 999 Chiếc Toàn Cầu – Đính 73 Viên Đá Quý – Khảm Xà Cừ Thiên Nhiên",
        "price": "7.990.000 ₫",
        "details": "../img/products/dongho23.png",
    },
    {
        "id": 13,
        "name": "Casio LTP-V007L-7E1UDF – Nữ – Quartz (pin) – Mặt số trắng – Thiết kế mặt vuông độc đáo – Dây đeo da dập nổi vân cá sấu",
        "price": "829.000 ₫",
        "details": "../img/products/dongho25.png",
    },
    {
        "id": 14,
        "name": "Daniel Wellington Petite Lavender DW00100634 – Nữ – Quartz (Pin) – Khảm Xà Cừ, Mạ Vàng Hồng PVD, Chống Nước 3ATM",
        "price": "4.760.000 ₫",
        "details": "../img/products/dongho27.png",
    },
    {
        "id": 15,
        "name": "Daniel Wellington MOP Classic Petite Special Edition (DW00100514) – Nữ – Quartz (Pin) – Mặt Số 32mm, Siêu Mỏng 6mm, Mặt Xà Cừ",
        "price": "4.940.000 ₫",
        "details": "../img/products/dongho29.png",
    },
    {
        "id": 16,
        "name": "Tissot PRX Powermatic 80 T137.207.11.351.00 – Nam – Kính Sapphire – Automatic (Cơ tự động) – Mặt số 35 mm – Trữ cót 80 giờ – Họa tiết Guilloche",
        "price": "21.000.000 ₫",
        "details": "../img/products/dongho31.png",
    }
]
