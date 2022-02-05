
var subdivcontentul = document.getElementById('sub-div-content');

var namesubdivcontentul1 = [
    'Nhạc Trẻ Remix 2022 Hay Nhất Hiện Nay, NONSTOP 2021 Bass Cực Mạnh,Việt Mix Dj Nonstop 2022 Vinahouse'
    ,'Onei & Jun Tập 6 - Mẫu Giáo, Tới Trường - The Adorable Twins'
    ,'Thưởng thức Tết theo cách riêng | VTV24'
    ,'Tết handmade của người trẻ | VTV24'
    ,'Các thương hiệu phương Tây bắt kịp xu hướng năm con Hổ | VTV24'
    ,'Tiêu Điểm mùng 3 Tết: Dấu ấn nông sản Việt | VTV24'
    ,'KEANU làm những gì để thành JOHN WICK ở tuổi 57?'
    ,'CẢNH SÁT CHÌM NỔI NHẤT TRƯỜNG ĐẠI HỌC | Recap Xàm #165 : 21 Jump Street'
    ,'Top 20 Bài Hát Hot Nhất Trên TikTok 2021 💘 Nhạc Remix Hot Trend Được Sử Dụng Nhiều Nhất TikTok 2021'
    ,'Ninja Hattori New Tập 4 - Làm Công Ăn Lương Thật Vất Vả - Ninja Hattori'
    ,'[BKĐN] Cựu sinh viên học tập phương xa chúc Tết Bách khoa Đà Nẵng 2022'
    ,'Tin tức 24h 3/2 | Kho đạn Bộ Quốc phòng tại Gia Lai bất ngờ phát nổ | FBNC'
    ,'Chrome Extension - Json Viewer xem nội dung chuỗi json đẹp, gọn gàng'
    ,'Nguồn gốc của Lịch Julian | Nhện tri thức | SPIDERUM'
    ,'Lời chúc mừng đầu năm mới của ĐT Việt Nam | VTV24'
    ,'Nhạc Trẻ Remix 2022 Hay Nhất Hiện Nay, NONSTOP 2021 Bass Cực Mạnh,Việt Mix Dj Nonstop 2022 Vinahouse'
    ,'Nói về các hoạt động trong ngày Tết | Tiếng Anh cho bé | BingGo Leaders'
    ,'LK Nhạc Xuân 2022 Remix - Nhạc Tết 2022 Remix Hay Nhất Việt Nam, Chúc mừng năm mới - KHÔNG QUẢNG CÁO'
    ,'FAPtv Cơm Nguội: Tập 265 - Mang Tiền Về Cho Ba (Phim hài Tết 2022)'
    ,'Lost - Meikai (明快) ft. jiakaira (Yellwflwer Remix) ♪'
    ,'EDM TikTok Hay 2022 ♫ bxh Nhạc Trẻ Remix Hay  Hiện Nay - Top 15 Bản EDM TikTok Mới Nhất 2022'
    ,'RỒI NÂNG CÁI LY REMIX - Nhạc Xuân 2022 Remix | Nhạc Tết Orinn Remix Hay Nhất ĐÓN TẾT CHÀO NĂM MỚI'
    ,'Y CHANG XUÂN SANG - Rồi nâng cái ly remix | LK nhạc tết Nhâm Dần 2022 - NHẠC XUÂN HAY CỰC'
    ,'Nhạc Xuân 2022 Remix - LK Nhạc Tết 2022 Remix Hay Nhất Hiện Nay, Chúc mừng năm mới - KHÔNG QUẢNG CÁO'
    ,'EDM TikTok Hay 2022 ♫ bxh Nhạc Trẻ Remix Hay  Hiện Nay - Top 15 Bản EDM TikTok Mới Nhất 2022'
    ,'EDM TikTok Hay 2021 ♫ bxh Nhạc Trẻ Remix Hay  Hiện Nay - Top 15 Bản EDM TikTok Hot Nhất 2021'
    ,'RỒI NÂNG CÁI LY REMIX - Nhạc Xuân 2022 Remix | Nhạc Tết Orinn Remix Hay Nhất ĐÓN TẾT CHÀO NĂM MỚI'
    ,'We made $234,080 in 30 seconds with NFTs! Thank you.'
    ,'(君の名は / Kimi no Na wa) Nandemonaiya - Kamishiraishi Mone (Maxone × 夏璃夜 Remix) ♪'
    ,'Learn HTML5 and CSS3 From Scratch - Full Course'
    ,'(君の名は / Kimi no Na wa) Nandemonaiya - Kamishiraishi Mone (Maxone × 夏璃夜 Remix) ♪'
    ,'I Built Full Stack Application with Laravel, Vue 3 and Tailwindcss'
    ,'Nhạc Xuân 2022 Remix|Nhạc Tết Orinn Remix Hay Nhất ĐÓN TẾT CHÀO NĂM MỚI'
    ,'♪ Tết Đong Đầy,Chuyện Cũ Bỏ Qua|| Nhạc Tết 2022 [] Liên Khúc nhạc Tết Hay Nhất 2022♪ ',
    'Nhạc Xuân 2022 Bass Cực Căng Remix hay nhất KHÔNG QUẢNG CÁO Chuyện cũ bỏ qua'
    ,'Hoàng Thuỳ Linh & ĐEN-Gieo Quẻ (Casting Coins) | Official Music Video'
    ,'Đen-Mang Tiền Về Cho Mẹ ft. Nguyên Thảo (M/V)'
    ,'7 ANH EM-Minh Huy,Pjnboys Phức Hợp hood(OFFICIAL MV )'
    ,'Top 5 Ngôn Ngữ Lập Trình đáng-học trong năm 2022',
    'Hướng Dẫn Keylogger Đơn-Giản-bằng Python | Lập Trình Gián Điệp Python',
    'RỒI NÂNG CÁI LY --- REMIX Nhạc Xuân 2022 Remix | Nhạc Tết Orinn Remix Hay Nhất ĐÓN TẾT CHÀO NĂM MỚI'
    ,'Chuyện Cũ Bỏ Qua Remix - Nhạc Xuân 2022 Hay Nhất Hiện Nay, LK Nhạc Tết 2022 Remix Gây Nghiện'
    ,'LK NHẠC TẾT hay nhất ---- Không Quảng Cáo Chuyện - cũ bỏ qua',
    'EDM TikTok Hay 2022 ♫ BXH Nhạc Trẻ Remix Hay Nhất Hiện Nay - Top 15 Bản EDM TikTok Mới Nhất 2022'
    ,'Ai là giọng ca vàng trong làng Táo? | Táo Quân Tiền Truyện #1'
    ,'Nhạc Tết 2022 Remix - Chào Xuân Phát Tài'
    ,'Top 20 Bài Hát Hot Nhất Trên TikTok 2021 💘 Nhạc Remix Hot Trend Được Sử Dụng Nhiều Nhất TikTok 2021'
    ,'Nhạc Chill TikTok 2022 ♫ Top 15 Bản Nhạc EDM Tik Tok Hay Nhất - BXH Nhạc Trẻ Remix Nghe Nhiều Nhất'
    ,'Lập trình single page blog ---- app - laravel, vuejs, deploy to server'
    ,'NHẠC TRẺ REMIX 2022 HAY NHẤT HIỆN NAY - EDM Tik Tok ORINN REMIX, Lk Nhạc Trẻ 2022 Gây Nghiện Cực Hot'
    ,'XUÂN ĐÃ VỀ (St: Minh Kỳ) - ChangMie x Orinn Remix | Nhạc Xuân Remix 2022 Nhẹ Nhàng Hay Nhất Hiện Nay'
    ,'EDM TikTok Hay 2022 ♫ BXH Nhạc Trẻ Remix Hay Nhất Hiện Nay - Top 15 Bản EDM TikTok Mới Nhất 2022'

];

var namesubdivcontentul2 = ['BD Media Music','POPS Kids','VTV24','VTV24','VTV24','VTV24','Phê Phim','The Reviewer','RIN Music'
    ,'POPS Kids','Trường ĐH Bách khoa','FBNC Vietnam','ZendVN Lập Trình ','Spiderum','VTV24','BD Media Music'
    ,'BingGo Leaders','BD Media Music','FAP TV','StarlingEDM','Min Xinh','Orinn EDM Plus','Phố Chill Music','Orinn Remix'
    ,'Min Xinh','Min Xinh','Orinn EDM Plus','Joma Tech','StarlingEDM','freeCodeCamp.org'
    ,'StarlingEDM','The Codeholic','Orinn EDM Plus','Orinn EDM Plus','BD Media Music','Hoàng Thùy Linh','Đen Vâu Official'
    ,'Minh Huy Official','Phạm Huy Hoàng','Dũng Lại Lập Trình','Orinn EDM Plus','Remix Plus','BD Media Music'
    ,'Min Xinh','VTV 24','Rin Remix','Rin Remix','BGM maker','Lập trình viên TV','Orinn EDM Plus','Orinn EDM Plus'
    ,'Min Xinh'
];
console.log(namesubdivcontentul1.length,namesubdivcontentul2.length);

function rand(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

for(var zp=0;zp<namesubdivcontentul1.length;zp++){
    var azp = Math.floor(Math.random() * namesubdivcontentul1.length);
    subdivcontentul.innerHTML = subdivcontentul.innerHTML 
    +'<li class="sub-div-content-li">'
    +'    <p class="sub-div-content-li-p">'
    +'        <img src="../simg/sub'+azp+'.jpg">'
    +'        <span class="sub-div-content-li-span1"><i class="far fa-clock"></i></span>'
    +'        <span class="sub-div-content-li-span2"><i class="fas fa-list"></i></span>'
    +'        <span class="sub-div-content-li-span3">'+rand(10,59)+':'+rand(10,59)+'</span>'
    +'    </p>'
    +'    <div>'
    +'        <ol class="sub-div-content-li-ol1">'
    +'            <p>'+namesubdivcontentul1[azp].substring(0,46)+'...</p>'
    +'            <div class="bg20"></div>'
    +'            <button tick10k ="0" class="btn-sub-div">'
    +'                <i class="fas fa-ellipsis-v"></i>'
    +'                <div>'
    +'                    <ul class="ul-sub-div">'
    +'                        <li><i class="fas fa-list"></i> Thêm vào danh sách chờ</li>'
    +'                        <li><i class="far fa-clock"></i> Thêm vào danh sách xem sau</li>'
    +'                        <li><i class="far fa-plus-square"></i> Lưu vào danh sách phát</li>'
    +'                        <span></span>'
    +'                        <li><i class="fas fa-ban"></i> Ẩn</li>'
    +'                    </ul>'
    +'                </div>'
    +'            </button>'
    +'        </ol>'
    +'        <ol class="sub-div-content-li-ol2">'+namesubdivcontentul2[azp]+' <i class="fas fa-check-circle"></i></ol>'
    +'        <ol class="sub-div-content-li-ol3">'+Math.floor(Math.random() * 1000)+' N lượt xem <i class="fas fa-circle"></i> '+Math.floor(Math.random() * 24)+' giờ trước</ol>'
    +'    </div>'
    +'</li>'
}




//  (3 chấm)
$(document).ready(function() {
    $('.btn-sub-div').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            if($(this).attr("tick10k")=="0"){
                $(this).prev().css({display:'block'});
                $(this).children().children().css({display:'block'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'relative'});
                $(this).attr("tick10k","1");
            }
            else {
                $(this).prev().css({display:'none'});
                $(this).children().children().css({display:'none'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'inherit'});
                $(this).attr("tick10k","0");
            }
        }); 
    })
    $('.bg20').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().children().children().css({display:'none'});
            $(this).next().css({position: 'inherit'});
            $(this).next().attr("tick10k","0");
        })
    })
});


