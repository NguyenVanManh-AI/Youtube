

var exploreinnervideo = document.getElementById('explore-inner-video');

var nameexploreinnervideo1 = [
        'Hài Tết Trấn Thành HẺM CỤT - Tập 3 | GIA ĐÌNH, GIA ĐÌNH | Ngọc Giàu, Việt Anh, BB Trần, Hải Triều'
        ,'Việt Nam vs Trung Quốc FULL MATCH (Bản đẹp) | Văn Đức ghi siêu phẩm | Vòng loại World Cup 2022'
        ,'Sóng 22 – Chương trình giải trí Đêm Giao Thừa 2022 hội tụ hơn 100 nghệ sĩ hàng đầu Việt Nam Tết 2022'
        ,'Highlights Việt Nam vs Trung Quốc | Văn Đức ghi siêu phẩm chấn động Châu Á - VN đại thắng Trung Quốc'
        ,'Hài Tết Trấn Thành HẺM CỤT -Tập 2 | NGƯỜI VĂN MINH | Lê Giang, Dương Lâm, Quốc Khánh, Lộ Lộ, AQuay'
        ,'Những câu nói hay nhất Táo quân 2022 - Gặp nhau cuối năm | VTV24'
        ,'Táo Quân Chuyện Chưa Kể 2022 (Gặp Nhau Cuối Năm) Quốc Khánh, Tự Long, Vân Dung, Quang Thắng,...'
        ,'CÁI TẾT CỦA ÔNG NĂM'
        ,'Hài Tết Trấn Thành HẺM CỤT -Tập 1| TIẾNG LÀNH ĐỒN XA | Lê Giang, Dương Lâm, Quốc Khánh, Lộ Lộ, AQuay'
        ,'RAP VIỆT Mùa 2 2021 - Tập 16| Ai sẽ là quán quân? RAP VIỆT Mùa 2 2021 - Tập 16| Ai sẽ là quán quân?'
        ,'Phim Hài Tết CẬU ÚT CẬU CON CÚC || NSƯT Kim Phương, Huỳnh Lập, Duy Khánh, Puka, Chị Ca Nô, Long Chun'
        ,'Thủ tướng Phạm Minh Chính xuống sân chúc mừng chiến thắng và lì xì ĐT Việt Nam | VTV24'
        ,'HÙNG LONG PHONG BÁ – TẬP 1 (FULL) | BROTHERS FOR LIFE | GALAXY ORIGINAL SERIES 2022'
        ,'HIGHLIGHT VIỆT NAM - TRUNG QUỐC | TẤN TÀI, TIẾN LINH LÀM “THỊT KHO TÀU", VĂN ĐỨC GHI SIÊU PHẨM'
        ,'FAPtv Cơm Nguội: Tập 262: Siêu Thám Tử (Phim hài Tết 2022)'
        ,'MÙA XUÂN ƠI (St: Nguyễn Ngọc Thiện) - Trung Đức x Orinn Remix | Nhạc Xuân Remix 2022 Mới Nhất'
        ,'Nhạc Xuân EDM TikTok - Gieo Quẻ Remix, Rồi Nâng Cái Ly - Nhạc Xuân Remix TikTok Hay Nhất 2022'
    ];
var nameexploreinnervideo2 = ['03:30','54:29','44:29','10:05','42:07','17:53','37:49','05:15','44:22','51:55','30:33','02:30','31:36','08:57'
                                ,'54:44','03:36','50:38'
];

var nameexploreinnervideo3 = ['TRẤN THÀNH TOWN','Tuyền Văn Hóa','Vie DRAMAS','MÃN NHÃN TV','TRẤN THÀNH TOWN','VTV24','Liên Quân Mobile eSports - Garena'
                                ,'THỎ BẢY MÀU','TRẤN THÀNH TOWN','Vie Channel - HTV2','Huỳnh Lập Official','VTV24','Action C','BLV Anh Quân'
                                ,'FAP TV','Orinn Remix','Orinn Music Trending'
];

var nameexploreinnervideo4 = [
    'Hài Tết Trấn Thành HẺM CỤT -Tập 3| GIA ĐÌNH, GIA ĐÌNH| Ngọc Giàu, Việt Anh, Lê Giang, Dương Lâm, Quốc Khánh, Lộ Lộ, AQuay, BB Trần, Hải Triều, Ngọc Phước'
    ,'Việt Nam vs Trung Quốc FULL MATCH (Bản đẹp) | Văn Đức ghi siêu phẩm | Vòng loại World Cup 2022 #Vietnam #TrungQuoc #FullMatch'
    ,'Đón xem Sóng 22 được phát sóng đồng thời  trên 3 kênh truyền hình Vie Channel – HTV2, Vie GiảiTrí, Vie Dramas và siêu ứng dụng VieON vào đêm Giao thừa Tết Nhâm Dần 2022.'
    ,'Highlights Việt Nam vs Trung Quốc | Văn Đức ghi siêu phẩm chấn động Châu Á - VN đại thắng Trung Quốc'
    ,'Hài Tết Trấn Thành HẺM CỤT -Tập 2 | NGƯỜI VĂN MINH | Lê Giang, Dương Lâm, Quốc Khánh, Lộ Lộ, AQuay #TranThanh #HemCut #phimhaitet #phimhaitet2022 #LeGiang #BaoLam #QuocKhanh #HEMCUT' 
    ,'Tổng hợp những câu  nói hay nhất Táo quân 2022. 👉 XEM CÁC TẬP TÁO QUÂN ĐÃ PHÁT SÓNG TẠI: https://vtvgo.vn/vod_channel/130 Đặc biệt có bản full (UNCUT) TÁO QUÂN dài 2 tiếng trên VTVGo bạn đừng bỏ lỡ nhé.'
    ,'Táo Quân Chuyện Chưa Kể 2022 (Gặp Nhau Cuối Năm) Quốc Khánh, Tự Long, Vân Dung, Quang Thắng, Chí Trung, Độ Mixi, Cris Phan, Hậu Hoàng, Duy Khánh'
    ,'CÁI TẾT CỦA ÔNG NĂM #thobaymau #tho7mau #ongnam Đây là kênh chính thức của Thỏ Bảy Màu. Vui lòng không reup video của Thỏ dưới mọi hình thức.'
    ,'Hài Tết Trấn Thành HẺM CỤT -Tập 1| TIẾNG LÀNH ĐỒN XA | Lê Giang, Dương Lâm, Quốc Khánh, Lộ Lộ, AQuay #TranThanh #HEMCUT #phimhaitet #phimhaitet2022' 
    ,'Xem Rap Việt trọn bộ và bình chọn cho Quán quân Rap Việt duy nhất trên ứng dụng điện thoại VieON để có cơ hội trúng nhiều giải thưởng hấp dẫn:'
    ,'Câu chuyện kể về Dì Hai - là một người mẹ chờ con gái của mình về ăn Tết. Dì Hai sống cùng với đứa em trai của mình, '
    ,'Sau khi tiếng còi kết thúc trận đấu giữa ĐT Việt Nam và ĐT Trung Quốc vang lên, Thủ tướng Phạm Minh Chính đã trực tiếp '
    ,'HÙNG LONG PHONG BÁ xoay quanh hành trình của 4 chàng trai quê gồm Hùng (Tùng Min), Long (Steven Nguyễn), Phong (Võ Đình Hiếu), '
    ,'HIGHLIGHT VIỆT NAM - TRUNG QUỐC | TẤN TÀI, TIẾN LINH LÀM “THỊT KHO TÀU", VĂN ĐỨC GHI SIÊU PHẨM'
    ,'FAPtv Cơm Nguội: Tập 262: Siêu Thám Tử (Phim hài Tết 2022) Rise of Kingdoms - Game chiến lược dựa trên lịch sử với 12 nền văn minh, tải ngay tại:'
    ,'MÙA XUÂN ƠI (St: Nguyễn Ngọc Thiện) - Trung Đức x Orinn Remix | Nhạc Xuân Remix 2022 Mới Nhất'
    ,'♪ Nhạc Xuân EDM TikTok - Gieo Quẻ Remix  ‣ Nhạc Xuân Remix TikTok Hay Nhất 2022 ► Đăng Kí Theo Dõi Youtube Orinn tại: http://ent.orinn.net/ ► '
];

for(var p=0;p<nameexploreinnervideo1.length;p++){
    exploreinnervideo.innerHTML = exploreinnervideo.innerHTML
        +'<li class="explore-inner-video-li">'
        +'    <p class="explore-inner-video-li-p">'
        +'        <img src="../eimg/trend'+p+'.jpg">'
        +'        <span class="explore-inner-video-li-span1"><i class="far fa-clock"></i></span>'
        +'        <span class="explore-inner-video-li-span2"><i class="fas fa-list"></i></span>'
        +'        <span class="explore-inner-video-li-span3">'+nameexploreinnervideo2[p]+'</span>'
        +'    </p>'
        +'    <div class="explore-inner-video-li-div">'
        +'        <ol class="explore-inner-video-li-ol1">'
        +'            <p>'+nameexploreinnervideo1[p].substring(0,100)+'</p>'
        +'            <div class="bg19"></div>'
        +'            <button tick9k="0" class="close-div-explore">'
        +'                <i class="fas fa-ellipsis-v"></i>'
        +'                <div>'
        +'                    <ul class="div-explore">'
        +'                        <li><i class="fas fa-list"></i> Thêm vào danh sách chờ</li>'
        +'                        <li><i class="far fa-clock"></i> Thêm vào danh sách xem sau</li>'
        +'                        <li><i class="far fa-plus-square"></i> Lưu vào danh sách phát</li>'
        +'                    </ul>'
        +'                </div>'
        +'            </button>'
        +'        </ol>'
        +'        <ol class="explore-inner-video-li-ol2">'
        +'            '+nameexploreinnervideo3[p]+' <i class="fas fa-check-circle"></i> '+Math.floor(Math.random() * 100)+' Tr lượt xem <i class="fas fa-circle"></i> '+Math.floor(Math.random() * 30)+' ngày trước</ol>'
        +'        <ol class="explore-inner-video-li-ol3">'
        +'            '+nameexploreinnervideo4[p].substring(0,152)+'...'
        +'        </ol>'
        +'    </div>'
        +'</li>'
}

//  (3 chấm)
$(document).ready(function() {
    $('.close-div-explore').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            if($(this).attr("tick9k")=="0"){
                $(this).prev().css({display:'block'});
                $(this).children().children().css({display:'block'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'relative'});
                $(this).attr("tick9k","1");
            }
            else {
                $(this).prev().css({display:'none'});
                $(this).children().children().css({display:'none'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'inherit'});
                $(this).attr("tick9k","0");
            }
        }); 
    })
    $('.bg19').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().children().children().css({display:'none'});
            $(this).next().css({position: 'inherit'});
            $(this).next().attr("tick9k","0");
        })
    })
});




