var video111 = document.getElementById('video111');

console.log('appindex.js')
// Ẩn hiện thẻ  #content-main1 #content-main2 #content-main3 
$(document).ready(()=>{    
    $('.color-li').click(function(event){  
        $('#watch-content').hide();
        $('#two-main').show();
        $('.main-hide').hide(); 
        $('#'+event.target.getAttribute("tickk")).show();
        $('.color-li').css({backgroundColor:'#0000000a',color:'black'})
        $(this).css({backgroundColor:'black',color:'white'});
        // dừng tất cả video 
        $('#watch-content-video').children().children().children().trigger('pause');
    })
})

// LỰA CHỌN VIDEO 
let videonumber=0;
$(document).ready(()=>{  
    $('.main-img').click(function(event){  
        console.log('a');
        // event.preventDefault();  
        if(event.target.getAttribute("class") == "btn-video"){ // nếu là btn thì phải ẩn hiện chứ không được chuyển đến video 
            // Ẩn hiện cài đặt ảnh đại diện cho video  
            if(videonumber%2==0){
                console.log(videonumber);
                // $('.btn-video').parent().prev().show();
                $('.btn-video').children().children().show(); 
                videonumber++;
            }
            else{
                console.log(videonumber);
                // $('.btn-video').parent().prev().hide();
                $('.btn-video').children().children().hide(); 
                videonumber++ 
            }
        }  
        else{
            $(this).parent().parent().parent().hide();
            $('#watch-content').show();
            $('.video-content').hide();
            $('.main-hide').hide();       // bị lỗi gì thì xóa dòng này đi 
            $('#'+$(this).attr("toggle")).show();
            // phát video dưới thẻ li được click vào 
            $('#'+$(this).attr("toggle")).children().children().trigger('play');
        }
    })
})




// TỐI ƯU TẠO THẺ HTML BẰNG JS 




var ulLicontent1 = document.querySelector('#li-content1 ul');
var ulLicontent1name = ['(君の名は / Kimi no Na wa) Nandemonaiya - Kamishiraishi Mone (Maxone × 夏璃夜 Remix) ♪'
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
                        ]


var ulLicontent1name2 = ['StarlingEDM','The Codeholic','Orinn EDM Plus','Orinn EDM Plus','BD Media Music','Hoàng Thùy Linh','Đen Vâu Official'
                        ,'Minh Huy Official','Phạm Huy Hoàng','Dũng Lại Lập Trình','Orinn EDM Plus','Remix Plus','BD Media Music'
                        ,'Min Xinh','VTV 24','Rin Remix','Rin Remix','BGM maker','Lập trình viên TV','Orinn EDM Plus','Orinn EDM Plus'
                        ,'Min Xinh'];

var ulLicontent1name3 = ['7,9 Tr','7,9 Tr','7,9 Tr','7,9 Tr','7,9 Tr','17 Tr','49 Tr','4 Tr','200 N','1,1 Tr','2 Tr','5 Tr','3 Tr'
                        ,'500 N','48 N','6 Tr','4 Tr','2 Tr','50 N','300 N','1 Tr','5 Tr'];

var ulLicontent1name4 = ['3 năm','1 năm','2 ngày','5 ngày','1 ngày','1 tháng','2 tuần','4 ngày'
                        ,'1 ngày','11 tháng','1 ngày','1 ngày','2 ngày','2 ngày','1 ngày','10 ngày'
                        ,'7 ngày','3 ngày','11 tháng','5 ngày','1 ngày','1 ngày'];

var fixtime = ['03:28','05:31','03:46','02:31','03:53','04:19','06:41','04:02','05:44','06:22','03:46','03:30','01:22','03:52','01:50','02:42'
                ,'03:49','03:35','03:00','04:00','04:32','03:54'];
// console.log(ulLicontent1name[0].length);
for(var vn=0;vn<ulLicontent1name.length;vn++){
    ulLicontent1.innerHTML=ulLicontent1.innerHTML +
        '<li><a toggle="main1-img' +vn+ '" class="main-img" href="#watch-content">'
            + '<p class="video-img"><img src="../img/img1-a' +vn+ '.jpg"></p>'
            + '<div>'
                + '<img src="../img/img1-b' +vn+ '.jpg">'
                + '<div>'
                    + '<p class="video-p">'
                        + '<span style="width: 200px;">'+ulLicontent1name[vn].substring(0, 48)+'...</span>'
                        + '<button class="btn-video">'
                            + '<i class="fas fa-ellipsis-v"></i>'
                            + '<ol class="fix-span">' +fixtime[vn]+ '</ol>'
                            + '<div>'
                                + '<ul class="video-ul">'
                                    + '<li class="video-li"><img src="../img/video-play-list.png">Thêm vào danh sách chờ</li>'
                                    + '<li class="video-li"><img src="../img/video-clock.png">Lưu vào dánh sách Xem sau</li>'
                                    + '<li class="video-li"><img src="../img/video-add-list.png">Lưu vào danh sách </li>'
                                    + '<li class="video-li"><img src="../img/video-not.png">Không quan tâm</li>'
                                    + '<li class="video-li"><img src="../img/video-forbidden.png">Không đề xuất kênh này</li>'
                                    + '<li class="video-li"><img src="../img/video-flag.png">Báo cáo vi phạm</li>'
                                + '</ul>'
                            + '</div>'
                        + '</button>'
                    + '</p>'
                    + '<p class="video-p2">' +ulLicontent1name2[vn]+ '<i class="fas fa-check-circle"></i></p>'
                    + '<p class="video-p3">' +ulLicontent1name3[vn]+ ' lượt xem<i class="fas fa-circle"></i>' +ulLicontent1name4[vn]+' trước</p>'
                + '</div>'
            + '</div>'
        + '</a></li>'
}


// nháp ul2 
var ulLicontent2 = document.querySelector('#li-content2 ul');
for(var vn2=ulLicontent1name.length-1;vn2>-1;vn2--){
    ulLicontent2.innerHTML=ulLicontent2.innerHTML +
        '<li><a toggle="main2-img' +vn2+ '" class="main-img" href="#watch-content">'
            + '<p class="video-img"><img src="../img/img1-a' +vn2+ '.jpg"></p>'
            + '<div>'
                + '<img src="../img/img1-b' +vn2+ '.jpg">'
                + '<div>'
                    + '<p class="video-p">'
                        + '<span style="width: 200px;">'+ulLicontent1name[vn2].substring(0, 48)+'...</span>'
                        + '<button class="btn-video">'
                            + '<i class="fas fa-ellipsis-v"></i>'
                            + '<ol class="fix-span">' +fixtime[vn2]+ '</ol>'
                            + '<div>'
                                + '<ul class="video-ul">'
                                    + '<li class="video-li"><img src="../img/video-play-list.png">Thêm vào danh sách chờ</li>'
                                    + '<li class="video-li"><img src="../img/video-clock.png">Lưu vào dánh sách Xem sau</li>'
                                    + '<li class="video-li"><img src="../img/video-add-list.png">Lưu vào danh sách </li>'
                                    + '<li class="video-li"><img src="../img/video-not.png">Không quan tâm</li>'
                                    + '<li class="video-li"><img src="../img/video-forbidden.png">Không đề xuất kênh này</li>'
                                    + '<li class="video-li"><img src="../img/video-flag.png">Báo cáo vi phạm</li>'
                                + '</ul>'
                            + '</div>'
                        + '</button>'
                    + '</p>'
                    + '<p class="video-p2">' +ulLicontent1name2[vn2]+ '<i class="fas fa-check-circle"></i></p>'
                    + '<p class="video-p3">' +ulLicontent1name3[vn2]+ ' lượt xem<i class="fas fa-circle"></i>' +ulLicontent1name4[vn2]+' trước</p>'
                + '</div>'
            + '</div>'
        + '</a></li>'
}


// nháp ul3 
var ulLicontent3 = document.querySelector('#li-content3 ul');
for(var vn3=4;vn3<ulLicontent1name.length;vn3++){
    ulLicontent3.innerHTML=ulLicontent3.innerHTML +
        '<li><a toggle="main2-img' +vn3+ '" class="main-img" href="#watch-content">'
            + '<p class="video-img"><img src="../img/img1-a' +vn3+ '.jpg"></p>'
            + '<div>'
                + '<img src="../img/img1-b' +vn3+ '.jpg">'
                + '<div>'
                    + '<p class="video-p">'
                        + '<span style="width: 200px;">'+ulLicontent1name[vn3].substring(0, 48)+'...</span>'
                        + '<button class="btn-video">'
                            + '<i class="fas fa-ellipsis-v"></i>'
                            + '<ol class="fix-span">' +fixtime[vn3]+ '</ol>'
                            + '<div>'
                                + '<ul class="video-ul">'
                                    + '<li class="video-li"><img src="../img/video-play-list.png">Thêm vào danh sách chờ</li>'
                                    + '<li class="video-li"><img src="../img/video-clock.png">Lưu vào dánh sách Xem sau</li>'
                                    + '<li class="video-li"><img src="../img/video-add-list.png">Lưu vào danh sách </li>'
                                    + '<li class="video-li"><img src="../img/video-not.png">Không quan tâm</li>'
                                    + '<li class="video-li"><img src="../img/video-forbidden.png">Không đề xuất kênh này</li>'
                                    + '<li class="video-li"><img src="../img/video-flag.png">Báo cáo vi phạm</li>'
                                + '</ul>'
                            + '</div>'
                        + '</button>'
                    + '</p>'
                    + '<p class="video-p2">' +ulLicontent1name2[vn3]+ '<i class="fas fa-check-circle"></i></p>'
                    + '<p class="video-p3">' +ulLicontent1name3[vn3]+ ' lượt xem<i class="fas fa-circle"></i>' +ulLicontent1name4[vn3]+' trước</p>'
                + '</div>'
            + '</div>'
        + '</a></li>'
}
for(var vn3=0;vn3<4;vn3++){
    ulLicontent3.innerHTML=ulLicontent3.innerHTML +
        '<li><a toggle="main2-img' +vn3+ '" class="main-img" href="#watch-content">'
            + '<p class="video-img"><img src="../img/img1-a' +vn3+ '.jpg"></p>'
            + '<div>'
                + '<img src="../img/img1-b' +vn3+ '.jpg">'
                + '<div>'
                    + '<p class="video-p">'
                        + '<span style="width: 200px;">'+ulLicontent1name[vn3].substring(0, 48)+'...</span>'
                        + '<button class="btn-video">'
                            + '<i class="fas fa-ellipsis-v"></i>'
                            + '<ol class="fix-span">' +fixtime[vn3]+ '</ol>'
                            + '<div>'
                                + '<ul class="video-ul">'
                                    + '<li class="video-li"><img src="../img/video-play-list.png">Thêm vào danh sách chờ</li>'
                                    + '<li class="video-li"><img src="../img/video-clock.png">Lưu vào dánh sách Xem sau</li>'
                                    + '<li class="video-li"><img src="../img/video-add-list.png">Lưu vào danh sách </li>'
                                    + '<li class="video-li"><img src="../img/video-not.png">Không quan tâm</li>'
                                    + '<li class="video-li"><img src="../img/video-forbidden.png">Không đề xuất kênh này</li>'
                                    + '<li class="video-li"><img src="../img/video-flag.png">Báo cáo vi phạm</li>'
                                + '</ul>'
                            + '</div>'
                        + '</button>'
                    + '</p>'
                    + '<p class="video-p2">' +ulLicontent1name2[vn3]+ '<i class="fas fa-check-circle"></i></p>'
                    + '<p class="video-p3">' +ulLicontent1name3[vn3]+ ' lượt xem<i class="fas fa-circle"></i>' +ulLicontent1name4[vn3]+' trước</p>'
                + '</div>'
            + '</div>'
        + '</a></li>'
}

// nháp ul4
var ulLicontent4 = document.querySelector('#li-content4 ul');
for(var vn4=12;vn4<ulLicontent1name.length;vn4++){
    ulLicontent4.innerHTML=ulLicontent4.innerHTML +
        '<li><a toggle="main2-img' +vn4+ '" class="main-img" href="#watch-content">'
            + '<p class="video-img"><img src="../img/img1-a' +vn4+ '.jpg"></p>'
            + '<div>'
                + '<img src="../img/img1-b' +vn4+ '.jpg">'
                + '<div>'
                    + '<p class="video-p">'
                        + '<span style="width: 200px;">'+ulLicontent1name[vn4].substring(0, 48)+'...</span>'
                        + '<button class="btn-video">'
                            + '<i class="fas fa-ellipsis-v"></i>'
                            + '<ol class="fix-span">' +fixtime[vn4]+ '</ol>'
                            + '<div>'
                                + '<ul class="video-ul">'
                                    + '<li class="video-li"><img src="../img/video-play-list.png">Thêm vào danh sách chờ</li>'
                                    + '<li class="video-li"><img src="../img/video-clock.png">Lưu vào dánh sách Xem sau</li>'
                                    + '<li class="video-li"><img src="../img/video-add-list.png">Lưu vào danh sách </li>'
                                    + '<li class="video-li"><img src="../img/video-not.png">Không quan tâm</li>'
                                    + '<li class="video-li"><img src="../img/video-forbidden.png">Không đề xuất kênh này</li>'
                                    + '<li class="video-li"><img src="../img/video-flag.png">Báo cáo vi phạm</li>'
                                + '</ul>'
                            + '</div>'
                        + '</button>'
                    + '</p>'
                    + '<p class="video-p2">' +ulLicontent1name2[vn4]+ '<i class="fas fa-check-circle"></i></p>'
                    + '<p class="video-p3">' +ulLicontent1name3[vn4]+ ' lượt xem<i class="fas fa-circle"></i>' +ulLicontent1name4[vn4]+' trước</p>'
                + '</div>'
            + '</div>'
        + '</a></li>'
}
for(var vn4=0;vn4<12;vn4++){
    ulLicontent4.innerHTML=ulLicontent4.innerHTML +
        '<li><a toggle="main2-img' +vn4+ '" class="main-img" href="#watch-content">'
            + '<p class="video-img"><img src="../img/img1-a' +vn4+ '.jpg"></p>'
            + '<div>'
                + '<img src="../img/img1-b' +vn4+ '.jpg">'
                + '<div>'
                    + '<p class="video-p">'
                        + '<span style="width: 200px;">'+ulLicontent1name[vn4].substring(0, 48)+'...</span>'
                        + '<button class="btn-video">'
                            + '<i class="fas fa-ellipsis-v"></i>'
                            + '<ol class="fix-span">' +fixtime[vn4]+ '</ol>'
                            + '<div>'
                                + '<ul class="video-ul">'
                                    + '<li class="video-li"><img src="../img/video-play-list.png">Thêm vào danh sách chờ</li>'
                                    + '<li class="video-li"><img src="../img/video-clock.png">Lưu vào dánh sách Xem sau</li>'
                                    + '<li class="video-li"><img src="../img/video-add-list.png">Lưu vào danh sách </li>'
                                    + '<li class="video-li"><img src="../img/video-not.png">Không quan tâm</li>'
                                    + '<li class="video-li"><img src="../img/video-forbidden.png">Không đề xuất kênh này</li>'
                                    + '<li class="video-li"><img src="../img/video-flag.png">Báo cáo vi phạm</li>'
                                + '</ul>'
                            + '</div>'
                        + '</button>'
                    + '</p>'
                    + '<p class="video-p2">' +ulLicontent1name2[vn4]+ '<i class="fas fa-check-circle"></i></p>'
                    + '<p class="video-p3">' +ulLicontent1name3[vn4]+ ' lượt xem<i class="fas fa-circle"></i>' +ulLicontent1name4[vn4]+' trước</p>'
                + '</div>'
            + '</div>'
        + '</a></li>'
}

var ulLicontent5 = document.querySelector('#li-content5 ul');
var ulLicontent6 = document.querySelector('#li-content6 ul');
var ulLicontent7 = document.querySelector('#li-content7 ul');
var ulLicontent8 = document.querySelector('#li-content8 ul');
var ulLicontent9 = document.querySelector('#li-content9 ul');
ulLicontent5.innerHTML = ulLicontent2.innerHTML ; 
ulLicontent6.innerHTML = ulLicontent4.innerHTML ; 
ulLicontent7.innerHTML = ulLicontent3.innerHTML ; 
ulLicontent8.innerHTML = ulLicontent1.innerHTML ; 
ulLicontent9.innerHTML = ulLicontent5.innerHTML ; 



// BIG TỐI ƯU  BẰNG JS 
var ulLicontent1name32 = ['7.912.098','7.911.299','7.989.166','7.908.338','7.943.226','17.100.209','49.909.202','4.100.001','200.202'
                        ,'1.100.110','2.123.589','5.098.767','3.009.934','500.002','48.034','6.089.256','4.004.304','2.100.005'
                        ,'50.003','300.932','1.000.999','5.456.999'];

var comentdetails  = [ // CHÚ Ý PHẢI ĐIỀN CHO ĐỦ MẢNG NẾU KHÔNG SẼ LỖI . 
        [
            'Nandemonaiya - Kamishiraishi Mone [Vietsub] [Engsub] [Kanji] [Romaji]',
            'Nandemonaiya - Maxone Remix [Vietsub] [Engsub] [Kanji] [Romaji]',
            'Nandemonaiya (Movie Version) by RADWIMPS from the soundtrack of the 2016 Makoto Shinkai film',
            'Kimi No Na Wa (Your Name).',
            'Top Nhạc Tik Tok Tháng 5',
            'Nandemonaiya - Kamishiraishi Mone [Vietsub] [Engsub] [Kanji] [Romaji]',
            'Nandemonaiya - Maxone Remix [Vietsub] [Engsub] [Kanji] [Romaji]',
        ],
        [
            'Get the HOSTINGER premium shared hosting, which includes free domain, email and SSL. Use the coupon code "THECODEHOLIC" or click the link bellow',
            'https://hostinger.com/THECODEHOLIC',
            'I have built Full Stack Application with Laravel, Vue 3 and Tailwind.css.',
            'While building this application you will learn how to create REST API in Laravel with authentication, to setup Vue 3 project',
            'with Vue state management integrate with Tailwind.css and Build Full Stack Survey Application.',
            '⭐⭐Project Source code⭐⭐',
            'https://cutt.ly/tINEpEv🤝Support me by subscribing🤝'
        ],
        [
            'RỒI NÂNG CÁI LY REMIX - Nhạc Xuân 2022 Remix | Nhạc Tết Orinn Remix Hay Nhất ĐÓN TẾT CHÀO NĂM MỚI',
            '#nhacxuan2022haynhat #nhacxuan #nhactet #nhacxuan2022 #nhactetremix #nhacxuanremix #nhactet2022 #tet2022 #xuan2022',
            '► Website: https://daoentertainment.com/ - http://orinn.net/​',
            '► Nghe Playlist Nhạc Tại: https://dme.fan/Remix/spotify',
            '► Đăng Kí Theo Dõi Youtube Orinn tại: https://remix.orinn.net​',
            '📝 TRACKLIST:',
            '► LH Vấn Đề Bản Quyền: contact@orinn.net'
        ],
        [
            'RỒI NÂNG CÁI LY REMIX - Nhạc Xuân 2022 Remix | Nhạc Tết Orinn Remix Hay Nhất ĐÓN TẾT CHÀO NĂM MỚI',
            '#nhacxuan2022haynhat #nhacxuan #nhactet #nhacxuan2022 #nhactetremix #nhacxuanremix #nhactet2022 #tet2022 #xuan2022',
            '► Website: https://daoentertainment.com/ - http://orinn.net/​',
            '► Nghe Playlist Nhạc Tại: https://dme.fan/Remix/spotify',
            '© Bản quyền ca khúc thuộc về Orinn / DAO Music',
            '© Copyright by Orinn / DAO Music ☞ Do not Reup',
            '✉ Hợp tác, quảng cáo, khiếu nại các vấn đề về bản quyền liên hệ chúng tôi qua mail: contact@orinn.net'
        ],
        [
            'LK Nhạc Xuân 2021 Remix - Nhạc Tết 2022 Remix Hay Nhất Việt Nam, Chúc mừng năm mới - KHÔNG QUẢNG CÁO',
            'Photo: Ngọc Long',
            'Link fb: https://www.facebook.com/minhngoc.pho...',
            'Link MV GỐC  MV Chuyện Cũ Bỏ Qua Bích Phương :https://youtu.be/Qpl-TAhIwPg',
            'Đề nghị các tổ chức, cá nhân không reup dưới mọi hình thức.LH Bản Quyền : bdmediamusic@gmail.com',
            'tag bd media : nhac xuan,nhạc xuân,nhac tet,nhạc tết,nhac xuan remix,nhạc xuân remix,nhạc xuân 2020,nhac xuan 2020,',
            'htrol,htrol remix,edm gây nghiện,nhạc edm,nhạc edm 2019,nhạc edm remix,nhạc trẻ edm,nhạc remix,nhac remix,bd remix,nhạc trẻ 2019,nhạc'
        ],
        [
            'CẢM ƠN TẤT CẢ, CÙNG MỘT LỜI CHÚC ĐẦU NĂM BÌNH AN VÀ TƯƠI SÁNG. ',
            'Streaming audio "Gieo Quẻ" on: ',
            '🔮 https://sonymusicvietnam.lnk.to/GieoQue Spotify: https://sonymusicvietnam.lnk.to/GieoQ...',
            'Apple Music: https://sonymusicvietnam.lnk.to/GieoQ... iTune: https://sonymusicvietnam.lnk.to/GieoQ...',
            'NCT: https://sonymusicvietnam.lnk.to/GieoQ... ZingMp3: https://sonymusicvietnam.lnk.to/GieoQ...',
            'Và đừng quên hãy đăng ký/theo dõi kênh YouTube chính thức của Hoàng Thùy Linh qua link sau: http://bit.ly/2z3Knls',
            '► For more Information : http://hoangthuylinh.vn ► Fanpage: https://www.facebook.com/hoangthuylin...'
        ],
        [
            'Mang Tiền Về Cho Mẹ', 
            'Nghe/tải tại: https://Denvau.lnk.to/MTVCM',
            'Thể hiện: Đen, Nguyên Thảo Sáng tác: denvau',
            'Đạo diễn: Hoàng Thành Đồng',
            'Music production: 808Lab - A.N Productions',
            'Arranging, Mixing & Mastering : Aazuki ',
            'Guitarist & Recording : Đông Phong'
        ],
        [
            '7 ANH EM - Minh Huy , Pjnboys và Phức Hợp hood ( OFFICIAL MV )',
            '#7anhem #minhhuy #pjnboys #phuchophood',
            'Composer : Minh Huy , Pjnboys và Phức Hợp Hood  Prod : TamKe , Pjnboys ',
            'Director : Minh Huy Piano : Davis Camera : Thai Sony Poster : Thai Sony Choreography : Ca Photo : Quân Phạm BTS : Đình Khiêm , Tùng Trường Thanh ',
            'Sponser : Sevenzia Support  MV : Bi Nguyễn , Hải Yến , Đạt Cơm , Văn Tư ',
            'Special Thanks : Rap Việt Underground , Rap Zone , TempoG , Troll Rap Việt , Điền Quân Network , Jombie G5R , Dick , Bạn Có Tài Mà ,  Davis , Sevenzia',
            'Nhảy cùng trending "7 anh em" : https://www.tiktok.com/music/7-Anh-Em...'
        ],
        [
            'Hôm nay là đầu năm 2022, nên mình sẽ chia sẻ 5 ngôn ngữ lập trình đáng học nhất trong năm nay (theo ý kiến cá nhân của mình) nha :3.',
            'Các bạn có thể học thêm để nâng cao kiến thức, làm dự án tăng khả năng tìm việc của mình nha :3. Mình sẽ chia sẻ những ưu/nhược điểm',
            'Nhớ subscribe cho mình nhe: https://bit.ly/codedaotube',
            'Timestamp 0:00 - Giới thiệu vlog 0:35 - 1. Rust 1:24 - 2. Go/Golang 2:21 - 3. Python 3:20 - 4. C# (C Sharp) 4:19 - 5. JavaScript và TypeScript',
            'Channel Tôi Đi Code Dạo là nơi mình chia sẻ những kiến thức, kinh nghiệm về ngành lập trình mà mình đạt được trong quá trình làm việc. ',
            'Những kiến thức này sẽ biến các bạn từ một coder trở thành developer - lập trình viên thứ thiệt.',
            'Nhớ ghé thăm và subscribe channel để xem clip mới vào 8H TỐI T3 hàng tuần nha!'
        ],
        [
            'Hướng dẫn lập trình  keylogger nghe lén máy tính bằng python tự học cho người mới bắt đầu. Giáo dục, cảnh báo an toàn thông tin cho người sử dụng máy tính.',
            'Xin chào các bạn mình là Dũng Lại Lập Trình, hiện tại mình đang sống và làm việc tại Úc, mình từng là một học sinh chuyên toán tại THPT Hà Nội - Amsterdam, ',
            'sau lớp 12 mình bắt đầu du học ngành khoa học dữ liệu tại đại học Swinburne, Australia. Sau 3 năm đại học, ',
            'mình nhận học bổng Tiến Sĩ và tiếp tục công việc nghiên cứu tại viện nghiên cứu trí tuệ nhân tạo và ứng dụng A2I2 ở Úc, ',
            'đồng thời làm việc tại 3 trường đại học là Deakin, Monash, và Swinburne. ',
            'Metap - Thẻ cá nhân thông minh đầu tiên tại Việt Nam: https://metap.vn',
            'Thông tin các lớp học: http://dunglailaptrinh.com        '
        ],
        [
            'RỒI NÂNG CÁI LY REMIX - Nhạc Xuân 2022 Remix | Nhạc Tết Orinn Remix Hay Nhất ĐÓN TẾT CHÀO NĂM MỚI',
            '#nhacxuan2022haynhat #nhacxuan #nhactet #nhacxuan2022 #nhactetremix #nhacxuanremix #nhactet2022 #tet2022 #xuan2022',
            '► Website: https://daoentertainment.com/ - http://orinn.net/​',
            '► Nghe Playlist Nhạc Tại: https://dme.fan/Remix/spotify',
            '► Đăng Kí Theo Dõi Youtube Orinn tại: https://remix.orinn.net​',
            '► Theo dõi fanpage Facebook: https://facebook.orinn.net​',
            '📝 TRACKLIST:'
        ],
        [
            'Chuyện Cũ Bỏ Qua Remix - Nhạc Xuân 2022 Hay Nhất Hiện Nay, LK Nhạc Tết 2022 Remix Gây Nghiện',
            '►QL : Thu Hương  ►FB:   ►Liên Hệ Chụp Ảnh  ►Photo : Ngọc Long ►FB : https://www.facebook.com/minhngoc.pho...',
            'Track list: 01. Chuyện Cũ Bỏ Qua 02. Nụ Cười Xuân 03. Thì Thầm Mùa Xuân 04. Ước Nguyện Đầu Xuân 05. Như Hoa Mùa Xuân 06. Chiều Xuân ',
            '07. Lắng Nghe Mùa Xuân Về 08. Xuân Quê Tôi 09. Những Ngày Xuân Rực Rỡ 10. Tết Miền Tây 11. Tiếng Pháo Giao Thừa ',
            '12. Vui Tết Miệt Vườn 13. Hoa Cỏ Mùa Xuân 14. Đoàn Xuân Ca 15. Xuân Quê Tôi 16. Đón Tết Quê Hương ',
            '17. Mùa Xuân Trên Thành Phố 18. Tình Duyên Đầu Năm 19. Nụ Hôn Mùa Xuân ',
            '►Đừng quên  Đăng ký (Subscribe) kênh để nhận nhiều nhạc hay hàng ngày nhé cả nhà !',
            '● Tác giả ảnh (Author Pic): (We use wallpapers from Google "Free to use". If you are the artist and someone uploaded it there,'
        ],
        [
            'Đề nghị các tổ chức, cá nhân không reup dưới mọi hình thức.',
            'LH Bản Quyền : bdmediamusic@gmail.com',
            'tag bd media : nhac xuan,nhạc xuân,nhac tet,nhạc tết,nhac xuan remix,nhạc xuân remix,nhạc xuân 2020,',
            'nhac xuan 2020,nhac tet remix,nhac xuan 2020 remix,nhạc xuân 2020 remix,truc tiep nhac xuan 2020,',
            'trực tiếp nhạc xuân 2020,trực tiếp nhạc xuân,nhac xuan remix bass cang soi dong,nhac xuan soi dong,',
            'canh tý 2020,nhac tet ky hoi,nhac tet 2020,nhac tet 2020 remix,nhạc trẻ remix,nhac tre remix,EDM Tik Tok,',
            '©BDMedia'
        ],
        [
            '[►Đừng quên  Đăng ký (Subscribe) kênh để nhận nhiều nhạc hay hàng ngày nhé cả nhà !',
            '● Tác giả ảnh (Author Pic): (We use wallpapers from Google "Free to use". ',
            'If you are the artist and someone uploaded it there, please message us and we will give credits or remove the video at your will!) ( ktmedia.music@gmail.com )',
            '✔ Đây là ca khúc được độc quyền bởi Công Ty BDMedia & KT Media. Đề nghị các tổ chức, cá nhân không reup dưới mọi hình thức',
            '- Email: ktmedia.music@gmail.com',
            '#NhạcSànvn #Nhacsanvn',
            'Tag: nhac xuan,nhạc xuân,nhac tet,nhạc tết,nhac xuan remix,nhạc xuân remix,nhạc xuân 2021,nhac xuan 2021,'
        ],
        [
            'Xem Táo quân tính đến nay đã gần 20 nồi bánh chưng bạn có biết rằng, giọng hát của các táo đã được "hóa phép" trước khi vào chầu.',
            '#TaoQuanTienTruyen #TaoQuan2022',
            '----------',
            'Đồng hành cùng VTV Digital tại: Ứng dụng VTVgo Android: https://bit.ly/305aQLs iOS: https://apple.co/3g8yMTS hoặc xem trực tiếp trên https://vtvgo.vn/',
            'Báo điện tử: https://VTV.vn Fanpage: Tin tức, Xã hội: https://fb.com/tintucvtv24 Chuyên trang Tài Chính: https://fb.com/vtv24money ',
            'Báo điện tử VTV: https://fb.com/baodientuvtv Youtube: https://youtube.com/vtv24 Zalo: https://zalo.me/1571891271885013375',
            'Instagram: https://instagram.com/vtv24news/ Tiktok: tiktok.com/@vtv24news Twitter: https://twitter.com/vtvdigitalnews             '
        ],
        [
            'Nhạc Xuân 2022 Remix, Nhạc Tết EDM TIK TOK Htrol, Lk nhạc xuân Remix Hay Nhất CHÀO XUÂN NHÂM DẦN 2022 PhoTo : Ngọc Long',
            'FB :https://www.facebook.com/minhngoc.pho... ♫Đăng Kí Nhạc Mới : https://goo.gl/72p8xS ♫Facebook Fan Page : https://goo.gl/sGFtzl',
            '➨ Đừng quên Đăng ký (Subscribe) BD Media Music để xem ngay Music Video Hot, Phim Ca Nhạc và Liên Khúc nhạc trẻ remix hay nhất 2018 nhé cả nhà.',
            '✔ Đây là ca khúc được độc quyền bởi Công Ty BDMedia. Đề nghị các tổ chức, cá nhân không reup dưới mọi hình thức.',
            'LH Bản Quyền : bdmediamusic@gmail.com',
            'tiep nhac xuan 2020,trực tiếp nhạc xuân 2020,trực tiếp nhạc xuân,nhac xuan remix bass cang soi dong,nhac xuan soi dong,',
            'canh tý 2020,nhac tet ky hoi,nhac tet 2020,nhac tet 2020 remix,nhạc trẻ remix,nhac tre remix,EDM Tik Tok,'
        ],
        [
            'Top 20 Bài Hát Hot Nhất Trên TikTok 2021 💘 Nhạc Remix Hot Trend Được Sử Dụng Nhiều Nhất TikTok 2021',
            '#rinmusic #edmtiktok #nhactreremix #nhacchilltiktok #tiktok #TraoLuuTikTok #TikTok #TikTokVN  #nhactiktok ',
            '#hottiktokvn #tonghopbaihat #nhacremix #hottrend #tiktok2021',
            '➨ Đăng ký kênh: https://www.youtube.com/channel/UC5xi... ➨ Website: https://rinmedia.net ➨ Fanpage: https://fb.com/rinmediamusic',
            '➨ TikTok: https://www.tiktok.com/@rinmediamusic',
            '✉ Hợp tác, quảng cáo, khiếu nại các vấn đề về bản quyền liên hệ chúng tôi qua mail: contact@rinmedia.net',
            '© Bản quyền video thuộc về RIN Music © Copyright by RIN Music - Mee Music  ☞ Do not Reup'
        ],
        [
            'Top 20 Bài Hát Hot Nhất Trên TikTok 2022 💘 Nhạc Remix Hot Trend Được Sử Dụng Nhiều Nhất TikTok 2022',
            '#rinmusic #edmtiktok #nhactreremix #nhacchilltiktok #tiktok #TraoLuuTikTok #TikTok #TikTokVN  ',
            '➨ Đăng ký kênh: https://www.youtube.com/channel/UC5xi...',
            '➨ TikTok: https://www.tiktok.com/@rinmediamusic',
            '✉ Hợp tác, quảng cáo, khiếu nại các vấn đề về bản quyền liên hệ chúng tôi qua mail: contact@rinmedia.net',
            '© Bản quyền video thuộc về RIN Music',
            '© Copyright by RIN Music - Mee Music  ☞ Do not Reup'
        ],
        [
            'Lập trình single page blog app - laravel, vuejs, deploy to server',
            '►Đăng ký kênh Lập Trình Viên TV để nhận thêm các video mới.',
            '►Youtube: http://www.youtube.com/channel/UC5CIt...',
            '► Khóa học: https://laptrinhcuocsong.com/khoa-hoc...',
            '► Khóa học: https://laptrinhcuocsong.com/khoa-hoc...',
            '► Khóa học: https://laptrinhcuocsong.com/khoa-hoc...',
            '►Blog: http://laptrinhcuocsong.com'
        ],
        [
            'NHẠC TRẺ REMIX 2022 HAY NHẤT HIỆN NAY - EDM Tik Tok ORINN REMIX, Lk Nhạc Trẻ 2022 Gây Nghiện Cực Hot',
            '#nhacremix​ #nhactreremix​ #remix2022​ #nhactre ',
            '► Website: https://daoentertainment.com/ - http://orinn.net/​',
            '► Nghe Playlist Nhạc Tại: https://dme.fan/Remix/spotify',
            '✉ Hợp tác, quảng cáo, khiếu nại các vấn đề về bản quyền liên hệ chúng tôi qua mail: contact@orinn.net',
            '© Bản quyền Video thuộc về Orinn Remix',
            '© Copyright by Orinn Remix  ☞ Do not Reup'
        ],
        [
            'XUÂN ĐÃ VỀ (St: Minh Kỳ) - ChangMie x Orinn Remix | Nhạc Xuân Remix 2022 Nhẹ Nhàng Hay Nhất Hiện Nay',
            '#xuandave #minhky #orinnremix #remix #nhacxuanremix',
            '► Website: http://orinn.net/​',
            '► Nghe Playlist Nhạc Tại: https://dme.fan/Remix/spotify',
            '► Đăng Kí Theo Dõi Youtube Orinn tại: https://remix.orinn.net​',
            '► Theo dõi fanpage Facebook: https://facebook.orinn.net​',
            '► Theo dõi Tik Tok: https://www.tiktok.com/@orinnnremix'
        ],
        [
            'EDM TikTok Hay 2022 ♫ BXH Nhạc Trẻ Remix Hay Nhất Hiện Nay - Top 15 Bản EDM TikTok Mới Nhất 2022',
            '#edmtiktok #nhactreremix #minxinhedm',
            '📸 NGUỒN ẢNH: https://wallpaperscraft.com',
            '🔗 LINK GỐC:',
            '- XEM NHƯ EM CHẲNG MAY - CHU THUÝ QUỲNH FT TRUNG NGON : https://www.youtube.com/watch?v=R-1Hb...',
            '- LÀ AI TỪ BỎ, LÀ AI VÔ TÌNH | HƯƠNG LY FT JOMBIE (G5R) : https://www.youtube.com/watch?v=HyCNj...',
            '- LỖI DUYÊN TẠI Ý TRỜI | TVk x HUỲNH MỘNG NHƯ x TAMKE :'
        ]
    ];

var nameperson = ['Văn Mạnh','JomaTech','DUT','IT','Code X','Song Toàn','Ngọc Mai','Xuân Nguyễn','Văn Mẫn','Nam Tiến',
                    'Akai Shuichi','Gin','Hoàng Phúc','Công Thanh','Conan','Iron man','Captain America','Thor','Odin','Việt Nam',
                    'Nodejs','Laravel','Vuejs','Docker','Composer','Javascript','Jquery','Html','Css','Bootstrap'];
var contentcoment = ['Hay waw','very good','tuyệt vời','hay đấy','quá hay','không tệ','tốt lắm','rất tuyệt','good good',
                        'Hay vậy','Đẹp quá','Nhạc hay quá','lời hay quá','mới đấy','tôi thích kênh này','tôi thích nó','tôi thích điều này',
                        'tôi rất thích nó','thật sáng tạo','quá sáng tạo','quá nhiều thứ hay trong một video','video này hay thật',
                        'video hay quá','video nét thật','nội dung hay','đỉnh cao','quá đỉnh cao','đỉnh của chóp','good luck','bánh cuốn'];
// TỐI ƯU BẰNG JS
var watchcontentvideo = document.getElementById('watch-content-video');
for(var wv=0;wv<ulLicontent1name.length;wv++){
    let a1 = Math.floor(Math.random() * nameperson.length);
    let a2 = Math.floor(Math.random() * nameperson.length);
    let a3 = Math.floor(Math.random() * nameperson.length);
    let a4 = Math.floor(Math.random() * nameperson.length);
    let a5 = Math.floor(Math.random() * nameperson.length);
    let a6 = Math.floor(Math.random() * nameperson.length);
    let a7 = Math.floor(Math.random() * nameperson.length);
    let a8 = Math.floor(Math.random() * nameperson.length);
    let a9 = Math.floor(Math.random() * nameperson.length);
    let a10 = Math.floor(Math.random() * nameperson.length);
    watchcontentvideo.innerHTML=watchcontentvideo.innerHTML
    +'<li class="video-content" id="main1-img'+wv+'">'
    +'    <div class="video-content1">'
    +'        <video controls="" >'
    +'          <source src="../video/video1-'+wv+'.mp4" type="video/mp4">'
    +'        </video>'
    +'    </div>'
    +'    <div class="video-content2">'
    +'        <p>'+ulLicontent1name[wv]+'</p>'
    +'        <div class="video-content2-1">'
    +'            <span class="number-view">'+ulLicontent1name32[wv]+' lượt xem</span>'
    +'            <span class="video-like"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 999)+' N THÍCH</span>'
    +'            <span class="video-dislike"><img  src="../img/video-dislike.png">KHÔNG THÍCH</span>'
    +'            <span class="video-share"><img src="../img/video-share.png">CHIA SẺ</span>'
    +'                <div class="bg11"></div>'
    +'                <div class="video-share-div">'
    +'                    <div class="video-share-div-1">'
    +'                        <span>Chia sẻ</span>'
    +'                        <span class="close-share-video">&times;</span>'
    +'                    </div>'
    +'                    <div class="video-share-div-2">'
    +'                        <div class="btn-share-video">'
    +'                            <button class="back-share-video"><i class="fal fa-chevron-left"></i></button>'
    +'                        </div>'
    +'                        <div class="slider-video">'
    +'                            <div class="slider-share-video">'
    +'                                <ol class="slider-share-video-ol">'
    +'                                    <a href=""><i style="background-color:#F4F4F4;color:#0000008c;" class="far fa-code"></i><span>Nhúng</span></a> '
    +'                                    <a href="https://www.facebook.com/"><i style="background-color:#3B5998;color:white;" class="fab fa-facebook-f"></i><span>Facebook</span></a> '
    +'                                    <a href="https://www.whatsapp.com/"><i style="background-color:#25D366;color:white;" class="fab fa-whatsapp"></i><span>WhatsApp</span></a> '
    +'                                    <a href="https://twitter.com/"><i style="background-color:#1DA1F2;color:white;" class="fab fa-twitter"></i><span>Twitter</span></a> '
    +'                                    <a href="https://www.google.com/intl/vi/gmail/about/"><i style="background-color:#888888;color:white;" class="fas fa-envelope"></i><span>Email</span></a> '
    +'                                    <a href="https://accounts.kakao.com/"><i style="background-color:#FFE812;color:white;" class="far fa-comment"></i><span>카카오스토리</span></a> '
    +'                                </ol>'
    +'                                <ol class="slider-share-video-ol">'
    +'                                    <a href="https://www.reddit.com/"><i style="background-color:#FF4500;color:white;" class="fab fa-reddit-alien"></i><span>Reddit</span></a>'
    +'                                    <a href="https://vk.com/"><i style="background-color:#4680C2;color:white;" class="fab fa-vk"></i><span>ВКонта кте</span></a>'
    +'                                    <a href="https://ok.ru/"><i style="background-color:#F7931F;color:white;" class="fab fa-odnoklassniki"></i><span>Однокл ассники</span></a>'
    +'                                    <a href="https://www.pinterest.com/"><i style="background-color:#BD081C;color:white;" class="fab fa-pinterest"></i><span>Pinterest</span></a>'
    +'                                    <a href="https://www.blogger.com/"><i style="background-color:#F57D00;color:white;" class="fab fa-blogger-b"></i><span>Blogger</span></a>'
    +'                                    <a href="https://www.tumblr.com/"><i style="background-color:#35465C;color:white;" class="fab fa-tumblr"></i><span>Tumblr</span></a>'
    +'                                </ol>'
    +'                                <ol class="slider-share-video-ol">'
    +'                                    <a href="https://www.blogger.com/"><i style="background-color:#F57D00;color:white;" class="fab fa-blogger-b"></i><span>Blogger</span></a>'
    +'                                    <a href="https://www.tumblr.com/"><i style="background-color:#35465C;color:white;" class="fab fa-tumblr"></i><span>Tumblr</span></a>'
    +'                                    <a href="https://www.linkedin.com/"><i style="background-color:#0077B5;color:white;" class="fab fa-linkedin-in"></i><span>LinkedIn</span></a>'
    +'                                    <a href="https://www.skyrock.com/"><i style="background-color:#212121;color:white;" class="far fa-star"></i><span>Skyrock</span></a>'
    +'                                    <a href="https://mix.com/"><i style="background-color:#FF8226;color:white;" class="fab fa-mix"></i><span>Mix</span></a>'
    +'                                    <a href="https://www.goo.ne.jp/"><i style="background-color:#CE2E2D;color:white;" class="fab fa-goodreads-g"></i><span>goo</span></a>'
    +'                                </ol>'
    +'                            </div>'
    +'                        </div>'
    +'                        <div class="btn-share-video">'
    +'                            <button class="next-share-video"><i class="fal fa-chevron-right"></i></button>'
    +'                        </div>'
    +'                    </div>'
    +'                    <div class="video-share-div-3">'
    +'                        <form>'
    +'                            <input type="" name="" value="https://youtu.be/miFXF4P-eoM">'
    +'                            <button class="video-share-copy">SAO CHÉP</button>'
    +'                        </form>'
    +'                    </div>'
    +'                    <div class="video-share-div-4">'
    +'                        <input type="checkbox" name="" class="video-share-check">'
    +'                        <p>Bắt đầu tại <span>0:02</span></p>'
    +'                    </div>'
    +'                </div>   '
    +'            <span class="video-save"><img src="../img/video-save.png">LƯU</span>'
    +'                <div class="bg12"></div>'
    +'                <div class="video-save-div">'
    +'                    <div class="video-save-div-1">'
    +'                        <p>Lưu vào...</p>'
    +'                        <span class="close-save-video">&times;</span>'
    +'                    </div>'
    +'                    <div class="video-save-div-2">'
    +'                        <ul>'
    +'                            <li><input type="checkbox" name=""><span>Hay</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Xem Rồi</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Toán</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Music</span><i class="far fa-lock-alt"></i></li>'
    +'                           <li><input type="checkbox" name=""><span>Code</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Php MySql</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Laravel</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Javascript</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Vuejs</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Anime Traler</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Phim</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Xem sau</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Thích</span><i class="far fa-lock-alt"></i></li>'
    +'                        </ul>'
    +'                    </div>'
    +'                    <div class="video-save-div-3"><i class="fal fa-plus"></i><span>Tạo danh sách phát mới</span></div>'
    +'                </div>'
    +'            <div class="bg12a"></div>'
    +'            <button class="video-btn"><img src="../img/video-dot.png">'
    +'                <div>'
    +'                    <ul class="video-btn-div">'
    +'                        <li><i class="far fa-flag-alt"></i><span>Báo vi phạm</span></li>'
    +'                        <li><i class="far fa-keyboard"></i><span>Mở bản chép lời</span></li>'
    +'                    </ul>'
    +'                </div>'
    +'            </button>'
    +'                    '
    +'        </div>'
    +'    </div>'
    +'    <div class="video-content3">'
    +'        <div class="video-content3-1">'
    +'            <img src="../img/img1-b'+wv+'.jpg">'
    +'            <p>'
    +'                <span>'+ulLicontent1name2[wv]+' <i class="fas fa-check-circle"></i></span>'
    +'                <span>'+Math.floor(Math.random() * 900)+' N người đăng kí</span>'
    +'            </p>'
    +'            <div>'
    +'                <button class="subscribe">ĐĂNG KÝ</button>'
    +'                <button class="subscribed">ĐÃ ĐĂNG KÝ</button>'
    +'                    <div class="bg14"></div>'
    +'                    <div class="subscribed-div">'
    +'                        <ul>'
    +'                            <li>Hủy đăng ký '+ulLicontent1name2[wv]+' ?</li>'
    +'                            <li>'
    +'                                <span class="close-subscribed-div">HỦY</span>'
    +'                                <span class="cancel-subscribe">HỦY ĐĂNG KÝ</span>'
    +'                            </li>'
    +'                        </ul>'
    +'                    </div>'
    +'                    <div class="bg15"></div>'
    +'                <span class="subscribed-bell" tick4k="0"><i class="far fa-bell"></i>'
    +'                    <div>'
    +'                        <ul class="subscribed-bell-div">'
    +'                            <li><i class="fas fa-bell"></i>Tất cả</li>'
    +'                            <li><i class="far fa-bell"></i>Dành riêng cho bạn</li>'
    +'                            <li><i class="far fa-bell-slash"></i>Không nhận thông báo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </span>'
    +'            </div>'
    +'        </div>'
    +'        <div class="video-content3-2">'
    +'            <p>'+comentdetails[wv][0]+'<br>'
    +'                '+comentdetails[wv][1]+'<br>'
    +'                '+comentdetails[wv][2]+'<br>'
    +'            </p>'
    +'        </div>'
    +'        <div class="video-content3-3">'
    +'            <p>'
    +'                '+comentdetails[wv][3]+'<br>'
    +'            </p>'
    +'            <p>'+comentdetails[wv][4]+'<br>'
    +'                '+comentdetails[wv][5]+'<br>'
    +'                '+comentdetails[wv][6]+'<br>'
    +'            </p>'
    +'            <p></p>'
    +'            <p></p>'
    +'            <p></p>'
    +'            <p></p>'
    +'            <p></p>'
    +'        </div>'
    +'        <div class="video-content3-4">'
    +'            <button class="close-video-content3-4" tickkk="0">HIỆN THÊM</button>'
    +'        </div>'
    +'    </div>'
    +'    <div class="video-content4">'
    +'        <div class="video-content4-1">'
    +'            <span>5 bình luận</span>'
    +'                <div class="bg16"></div>'
    +'            <button tick5k = "0" class="sort-comments"><i class="far fa-stream"></i><span>SẮP XẾP THEO</span>'
    +'                <div>'
    +'                    <ul class="sort-comments-div">'
    +'                        <li>Bình luận hàng đầu</li>'
    +'                        <li>Mới nhất xếp trước</li>'
    +'                    </ul>'
    +'                </div>'
    +'            </button>'
    +'        </div>'
    +'        <div class="video-content4-2">'
    +'            <ol><img src="../img/profile.jpg"></ol>'
    +'            <form>'
    +'                <ol><input class="input-coment" type="" name="" placeholder="Bình luận công khai..."></ol>'
    +'                <p><button class="close-input-coment">HỦY</button><button type="submit">BÌNH LUẬN</button></p>'
    +'            </form>'
    +'        </div>'
    +'    </div>'
    +'    <div class="video-content5">'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a1+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a1]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a2+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a2]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a3+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a3]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a4+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a4]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a5+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a5]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a6+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a6]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a7+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a7]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a8+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a8]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a9+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a9]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a10+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a10]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'    </div>'
    +'</li>'
}





for(var wv2=ulLicontent1name.length-1;wv2>-1;wv2--){
    let a1 = Math.floor(Math.random() * nameperson.length);
    let a2 = Math.floor(Math.random() * nameperson.length);
    let a3 = Math.floor(Math.random() * nameperson.length);
    let a4 = Math.floor(Math.random() * nameperson.length);
    let a5 = Math.floor(Math.random() * nameperson.length);
    let a6 = Math.floor(Math.random() * nameperson.length);
    let a7 = Math.floor(Math.random() * nameperson.length);
    let a8 = Math.floor(Math.random() * nameperson.length);
    let a9 = Math.floor(Math.random() * nameperson.length);
    let a10 = Math.floor(Math.random() * nameperson.length);
    watchcontentvideo.innerHTML=watchcontentvideo.innerHTML
    +'<li class="video-content" id="main2-img'+wv2+'">'
    +'    <div class="video-content1">'
    +'        <video controls="" >'
    +'          <source src="../video/video1-'+wv2+'.mp4" type="video/mp4">'
    +'        </video>'
    +'    </div>'
    +'    <div class="video-content2">'
    +'        <p>'+ulLicontent1name[wv2]+'</p>'
    +'        <div class="video-content2-1">'
    +'            <span class="number-view">'+ulLicontent1name32[wv2]+' lượt xem</span>'
    +'            <span class="video-like"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 999)+' N THÍCH</span>'
    +'            <span class="video-dislike"><img  src="../img/video-dislike.png">KHÔNG THÍCH</span>'
    +'            <span class="video-share"><img src="../img/video-share.png">CHIA SẺ</span>'
    +'                <div class="bg11"></div>'
    +'                <div class="video-share-div">'
    +'                    <div class="video-share-div-1">'
    +'                        <span>Chia sẻ</span>'
    +'                        <span class="close-share-video">&times;</span>'
    +'                    </div>'
    +'                    <div class="video-share-div-2">'
    +'                        <div class="btn-share-video">'
    +'                            <button class="back-share-video"><i class="fal fa-chevron-left"></i></button>'
    +'                        </div>'
    +'                        <div class="slider-video">'
    +'                            <div class="slider-share-video">'
    +'                                <ol class="slider-share-video-ol">'
    +'                                    <a href=""><i style="background-color:#F4F4F4;color:#0000008c;" class="far fa-code"></i><span>Nhúng</span></a> '
    +'                                    <a href="https://www.facebook.com/"><i style="background-color:#3B5998;color:white;" class="fab fa-facebook-f"></i><span>Facebook</span></a> '
    +'                                    <a href="https://www.whatsapp.com/"><i style="background-color:#25D366;color:white;" class="fab fa-whatsapp"></i><span>WhatsApp</span></a> '
    +'                                    <a href="https://twitter.com/"><i style="background-color:#1DA1F2;color:white;" class="fab fa-twitter"></i><span>Twitter</span></a> '
    +'                                    <a href="https://www.google.com/intl/vi/gmail/about/"><i style="background-color:#888888;color:white;" class="fas fa-envelope"></i><span>Email</span></a> '
    +'                                    <a href="https://accounts.kakao.com/"><i style="background-color:#FFE812;color:white;" class="far fa-comment"></i><span>카카오스토리</span></a> '
    +'                                </ol>'
    +'                                <ol class="slider-share-video-ol">'
    +'                                    <a href="https://www.reddit.com/"><i style="background-color:#FF4500;color:white;" class="fab fa-reddit-alien"></i><span>Reddit</span></a>'
    +'                                    <a href="https://vk.com/"><i style="background-color:#4680C2;color:white;" class="fab fa-vk"></i><span>ВКонта кте</span></a>'
    +'                                    <a href="https://ok.ru/"><i style="background-color:#F7931F;color:white;" class="fab fa-odnoklassniki"></i><span>Однокл ассники</span></a>'
    +'                                    <a href="https://www.pinterest.com/"><i style="background-color:#BD081C;color:white;" class="fab fa-pinterest"></i><span>Pinterest</span></a>'
    +'                                    <a href="https://www.blogger.com/"><i style="background-color:#F57D00;color:white;" class="fab fa-blogger-b"></i><span>Blogger</span></a>'
    +'                                    <a href="https://www.tumblr.com/"><i style="background-color:#35465C;color:white;" class="fab fa-tumblr"></i><span>Tumblr</span></a>'
    +'                                </ol>'
    +'                                <ol class="slider-share-video-ol">'
    +'                                    <a href="https://www.blogger.com/"><i style="background-color:#F57D00;color:white;" class="fab fa-blogger-b"></i><span>Blogger</span></a>'
    +'                                    <a href="https://www.tumblr.com/"><i style="background-color:#35465C;color:white;" class="fab fa-tumblr"></i><span>Tumblr</span></a>'
    +'                                    <a href="https://www.linkedin.com/"><i style="background-color:#0077B5;color:white;" class="fab fa-linkedin-in"></i><span>LinkedIn</span></a>'
    +'                                    <a href="https://www.skyrock.com/"><i style="background-color:#212121;color:white;" class="far fa-star"></i><span>Skyrock</span></a>'
    +'                                    <a href="https://mix.com/"><i style="background-color:#FF8226;color:white;" class="fab fa-mix"></i><span>Mix</span></a>'
    +'                                    <a href="https://www.goo.ne.jp/"><i style="background-color:#CE2E2D;color:white;" class="fab fa-goodreads-g"></i><span>goo</span></a>'
    +'                                </ol>'
    +'                            </div>'
    +'                        </div>'
    +'                        <div class="btn-share-video">'
    +'                            <button class="next-share-video"><i class="fal fa-chevron-right"></i></button>'
    +'                        </div>'
    +'                    </div>'
    +'                    <div class="video-share-div-3">'
    +'                        <form>'
    +'                            <input type="" name="" value="https://youtu.be/miFXF4P-eoM">'
    +'                            <button class="video-share-copy">SAO CHÉP</button>'
    +'                        </form>'
    +'                    </div>'
    +'                    <div class="video-share-div-4">'
    +'                        <input type="checkbox" name="" class="video-share-check">'
    +'                        <p>Bắt đầu tại <span>0:02</span></p>'
    +'                    </div>'
    +'                </div>   '
    +'            <span class="video-save"><img src="../img/video-save.png">LƯU</span>'
    +'                <div class="bg12"></div>'
    +'                <div class="video-save-div">'
    +'                    <div class="video-save-div-1">'
    +'                        <p>Lưu vào...</p>'
    +'                        <span class="close-save-video">&times;</span>'
    +'                    </div>'
    +'                    <div class="video-save-div-2">'
    +'                        <ul>'
    +'                            <li><input type="checkbox" name=""><span>Hay</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Xem Rồi</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Toán</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Music</span><i class="far fa-lock-alt"></i></li>'
    +'                           <li><input type="checkbox" name=""><span>Code</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Php MySql</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Laravel</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Javascript</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Vuejs</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Anime Traler</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Phim</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Xem sau</span><i class="far fa-lock-alt"></i></li>'
    +'                            <li><input type="checkbox" name=""><span>Thích</span><i class="far fa-lock-alt"></i></li>'
    +'                        </ul>'
    +'                    </div>'
    +'                    <div class="video-save-div-3"><i class="fal fa-plus"></i><span>Tạo danh sách phát mới</span></div>'
    +'                </div>'
    +'            <div class="bg12a"></div>'
    +'            <button class="video-btn"><img src="../img/video-dot.png">'
    +'                <div>'
    +'                    <ul class="video-btn-div">'
    +'                        <li><i class="far fa-flag-alt"></i><span>Báo vi phạm</span></li>'
    +'                        <li><i class="far fa-keyboard"></i><span>Mở bản chép lời</span></li>'
    +'                    </ul>'
    +'                </div>'
    +'            </button>'
    +'                    '
    +'        </div>'
    +'    </div>'
    +'    <div class="video-content3">'
    +'        <div class="video-content3-1">'
    +'            <img src="../img/img1-b'+wv2+'.jpg">'
    +'            <p>'
    +'                <span>'+ulLicontent1name2[wv2]+' <i class="fas fa-check-circle"></i></span>'
    +'                <span>'+Math.floor(Math.random() * 900)+' N người đăng kí</span>'
    +'            </p>'
    +'            <div>'
    +'                <button class="subscribe">ĐĂNG KÝ</button>'
    +'                <button class="subscribed">ĐÃ ĐĂNG KÝ</button>'
    +'                    <div class="bg14"></div>'
    +'                    <div class="subscribed-div">'
    +'                        <ul>'
    +'                            <li>Hủy đăng ký '+ulLicontent1name2[wv2]+' ?</li>'
    +'                            <li>'
    +'                                <span class="close-subscribed-div">HỦY</span>'
    +'                                <span class="cancel-subscribe">HỦY ĐĂNG KÝ</span>'
    +'                            </li>'
    +'                        </ul>'
    +'                    </div>'
    +'                    <div class="bg15"></div>'
    +'                <span class="subscribed-bell" tick4k="0"><i class="far fa-bell"></i>'
    +'                    <div>'
    +'                        <ul class="subscribed-bell-div">'
    +'                            <li><i class="fas fa-bell"></i>Tất cả</li>'
    +'                            <li><i class="far fa-bell"></i>Dành riêng cho bạn</li>'
    +'                            <li><i class="far fa-bell-slash"></i>Không nhận thông báo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </span>'
    +'            </div>'
    +'        </div>'
    +'        <div class="video-content3-2">'
    +'            <p>'+comentdetails[wv2][0]+'<br>'
    +'                '+comentdetails[wv2][1]+'<br>'
    +'                '+comentdetails[wv2][2]+'<br>'
    +'            </p>'
    +'        </div>'
    +'        <div class="video-content3-3">'
    +'            <p>'
    +'                '+comentdetails[wv2][3]+'<br>'
    +'            </p>'
    +'            <p>'+comentdetails[wv2][4]+'<br>'
    +'                '+comentdetails[wv2][5]+'<br>'
    +'                '+comentdetails[wv2][6]+'<br>'
    +'            </p>'
    +'            <p></p>'
    +'            <p></p>'
    +'            <p></p>'
    +'            <p></p>'
    +'            <p></p>'
    +'        </div>'
    +'        <div class="video-content3-4">'
    +'            <button class="close-video-content3-4" tickkk="0">HIỆN THÊM</button>'
    +'        </div>'
    +'    </div>'
    +'    <div class="video-content4">'
    +'        <div class="video-content4-1">'
    +'            <span>5 bình luận</span>'
    +'                <div class="bg16"></div>'
    +'            <button tick5k = "0" class="sort-comments"><i class="far fa-stream"></i><span>SẮP XẾP THEO</span>'
    +'                <div>'
    +'                    <ul class="sort-comments-div">'
    +'                        <li>Bình luận hàng đầu</li>'
    +'                        <li>Mới nhất xếp trước</li>'
    +'                    </ul>'
    +'                </div>'
    +'            </button>'
    +'        </div>'
    +'        <div class="video-content4-2">'
    +'            <ol><img src="../img/profile.jpg"></ol>'
    +'            <form>'
    +'                <ol><input class="input-coment" type="" name="" placeholder="Bình luận công khai..."></ol>'
    +'                <p><button class="close-input-coment">HỦY</button><button type="submit">BÌNH LUẬN</button></p>'
    +'            </form>'
    +'        </div>'
    +'    </div>'
    +'    <div class="video-content5">'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a1+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a1]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a2+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a2]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a3+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a3]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a4+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a4]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a5+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a5]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a6+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a6]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a7+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a7]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a8+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a8]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a9+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a9]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'        <ol class="video-content5-comented">'
    +'            <div class="video-content5-1">'
    +'                <ol><img src="../cimg/c-img-'+a10+'.jpg"></ol>'
    +'                <p>'
    +'                    <span>'+nameperson[a10]+'</span><span>'+Math.floor(Math.random() * 24)+' giờ trước</span>'
    +'                    <span>'+contentcoment[Math.floor(Math.random() * contentcoment.length)]+'</span>'
    +'                </p>'
    +'                <div class="bg17"></div>'
    +'                <button tick6k="0" class="report-coment"><i class="fas fa-ellipsis-v"></i>'
    +'                    <div>'
    +'                        <ul class="report-coment-div">'
    +'                            <li><i class="far fa-flag-alt"></i> Báo cáo</li>'
    +'                        </ul>'
    +'                    </div>'
    +'                </button>'
    +'            </div>'
    +'            <div class="video-content5-2">'
    +'                <span class="video-like-coment"><img  src="../img/video-like.png">'+Math.floor(Math.random() * 99)+' N</span>'
    +'                <span class="video-dislike-coment"><img  src="../img/video-dislike.png"></span>'
    +'                <span>PHẢN HỒI</span>'
    +'            </div>'
    +'        </ol>'
    +'    </div>'
    +'</li>'
}





























// Nếu ta để như thế này thì : khi click like vào một cái thì tất cả video khác cũng có dislike . 
// Vì thế ta phải để this (chính là cái hiện tại) .
// Click vào cái nào thì cái đó like thôi . Còn các cái khác không ảnh hưởng .  

// $('.video-like').click( () => {
//     $('.video-like').children().attr("src","../img/video-liked.png"); 
//     $('.video-dislike').children().attr("src","../img/video-dislike.png"); 
// }) 
// $('.video-dislike').click( () => {
//     $('.video-like').children().attr("src","../img/video-like.png");  
//     $('.video-dislike').children().attr("src","../img/video-disliked.png");  
// }) 


// Like và Dislike 

// like thì bỏ dislike đi 
$( ".video-like" ).each(function() {
    $(this).on("mousedown",function(){
        $(this).children().css({backgroundColor:'rgb(204 204 204 / 42%)'});
    });
    $(this).on("click", function(){ // click vào like thì
        if($(this).children().attr("src")=="../img/video-like.png"){
            $(this).children().attr("src","../img/video-liked.png"); // đổi sang ảnh đã like 
            $(this).next().children().attr("src","../img/video-dislike.png"); // thẻ span kế tiếp nó cho vào thẻ con đổi sang không dislike 
            $(this).children().css({border:'none',backgroundColor:'transparent'});
        } 
        else {
            $(this).children().attr("src","../img/video-like.png"); // đổi sang ảnh đã like 
            $(this).next().children().attr("src","../img/video-dislike.png"); // thẻ span kế tiếp nó cho vào thẻ con đổi sang không dislike
            $(this).children().css({border:'none',backgroundColor:'transparent'});
        }
    });
});

// dislike thì bỏ like đi 
$( ".video-dislike" ).each(function() {
    $(this).on("mousedown",function(){
        $(this).children().css({backgroundColor:'rgb(204 204 204 / 42%)'});
    });
    $(this).on("click", function(){  // khi click vào dislike thì 
        if($(this).children().attr("src")=="../img/video-dislike.png"){
            $(this).children().attr("src","../img/video-disliked.png"); // đổi sang đã dislike 
            $(this).prev().children().attr("src","../img/video-like.png");  // tới thẻ trước nó cho vào thẻ con đổi sang không thích nữa .
            $(this).children().css({border:'none',backgroundColor:'transparent'});
        }
        else {
            $(this).children().attr("src","../img/video-dislike.png"); // đổi sang đã dislike 
            $(this).prev().children().attr("src","../img/video-like.png");  // tới thẻ trước nó cho vào thẻ con đổi sang không thích nữa . 
            $(this).children().css({border:'none',backgroundColor:'transparent'});
        }
    });
});




// CHIA SẺ VIDEO 
// Bật tắt chia sẻ video 

//slider
var numbersharevideo = 0 ;

// copy link 
var numbervideocheck = 0 ;
var numbervideocopy = 0 ;


$(document).ready(function() {
    $('.video-share').each(function(){
        $(this).on("mousedown",function(){
            $(this).children().css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            numbersharevideo=0;
            numbervideocheck=0;
            numbervideocopy=0;
            $(this).next().css({display:'block'});
            $(this).next().next().css({display:'block'});
            $(this).children().css({border:'none',backgroundColor:'transparent'});
        }); 
    })
    $('.close-share-video').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            $(this).parent().parent().prev().css({display:'none'});
            $(this).parent().parent().css({display:'none'});
            $(this).css({border:'none',backgroundColor:'transparent'})
            numbersharevideo=0;
            numbervideocheck=0;
            numbervideocopy=0;
        })
    })
    $('.bg11').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().css({display:'none'});
            numbersharevideo=0;
            numbervideocheck=0;
            numbervideocopy=0;
        })
    })
});



// slider chia sẻ video 

// nên để numbersharevideo lên phía trên để tránh ảnh hưởng đến các video khác . 
// tránh tình trạng video này đang ở slide 2 mà qua video khác cũng ơ slide 2 . 
// sau mỗi lần click vào nút share là cho numbersharevideo = 0 lại tự đầu 
var fvideo = function(){
    if(numbersharevideo==2){
        setTimeout(function(){$('.next-share-video').css({display:'none'})},2000);
    }
    else{
        $('.next-share-video').css({display:'block'});
    }
    if(numbersharevideo==0){
        setTimeout(function(){$('.back-share-video').css({display:'none'})},2000);
    }
    else{
        $('.back-share-video').css({display:'block'});
    }
}
fvideo();
$(document).ready(function() {
    $('.back-share-video').each(function(){
        $(this).on('click',function(){
            numbersharevideo--;
            $(this).parent().next().children().css({'margin-left':-numbersharevideo*385});
            fvideo();
            console.log(numbersharevideo);
        })
    })
    $('.next-share-video').each(function(){
        $(this).on('click',function(){
            numbersharevideo++;
            $(this).parent().prev().children().css({'margin-left':-numbersharevideo*385});
            fvideo();
            console.log(numbersharevideo);
        })
    })
});

// share-video 
// .video-share-div-4
// var numbervideocheck = 0 ;
// var numbervideocopy = 0 ;
// Cũng giống như slider , để tránh ảnh hưởng đến video khác thì khai báo biến , và mỗi lần thoát share video thì cho nó bằng 0 hết .
$(document).ready(function() {
    $('.video-share-copy').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({color:'red'});
        });
        $(this).on('click',function(event){
            event.preventDefault();
            if(numbervideocopy%2==0){
                $(this).prev().css('outline','2px solid black');
                $(this).css({color:'#065FD4'});
                numbervideocopy++;
            }
            else {
                $(this).prev().css('outline','none');
                $(this).css({color:'#065FD4'});
                numbervideocopy++;
            }
        })
    })
    $('.video-share-check').each(function(){
        $(this).on('click',function(){
            if(numbervideocheck%2==0){
                $(this).parent().prev().children().children().attr("value","https://youtu.be/miFXF4P-eoM?t=2");
                $(this).next().children().css('text-decoration','underline');
                numbervideocheck++;
            }
            else {
                $(this).parent().prev().children().children().attr("value","https://youtu.be/miFXF4P-eoM");
                $(this).next().children().css('text-decoration','none');
                numbervideocheck++;
            }
        })
    })
});




// LƯU VIDEO 


$(document).ready(function() {
    $('.video-save').each(function(){
        $(this).on("mousedown",function(){
            $(this).children().css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            $(this).next().css({display:'block'});
            $(this).next().next().css({display:'block'});
            $(this).children().css({border:'none',backgroundColor:'transparent'});
        }); 
    })
    $('.close-save-video').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            $(this).parent().parent().prev().css({display:'none'});
            $(this).parent().parent().css({display:'none'});
            $(this).css({border:'none',backgroundColor:'transparent'})
        })
    })
    $('.bg12').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().css({display:'none'});
        })
    })
});



// BA CHẤM 

var numberbtnvideo = 0;
$(document).ready(function() {
    $('.video-btn').each(function(){
        $(this).on("mousedown",function(){
            $(this).children().css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            if(numberbtnvideo%2==0){
                $(this).prev().css({display:'block'});
                $(this).children().children().css({display:'block'});
                $(this).children().css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'relative'});
                numberbtnvideo++;
            }
            else {
                $(this).prev().css({display:'none'});
                $(this).children().children().css({display:'none'});
                $(this).children().css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'inherit'});
                numberbtnvideo++;
            }
        }); 
    })
    $('.bg12a').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().children().children().css({display:'none'});
            $(this).next().css({position: 'inherit'});
            numberbtnvideo++;
        })
    })
});

// Đăng ký và hủy đăng ký 
// Đăng ký . Khi click vào nút đăng kí thì ẩn nó đi và hiện nút đã đăng kí , chuông 
$(document).ready(function() {
    $('.subscribe').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().css({display:'block'});
            $(this).next().next().next().next().next().css({display:'block'});
        })
    })
});

// hủy đăng ký 
$(document).ready(function() {
    $('.subscribed').each(function(){ // bấm vào hủy đăng kí 
        $(this).on('click',function(){
            $(this).next().css({display:'block'}); // hiện bg14
            $(this).next().next().css({display:'block'}); // hiện div hủy đăng kí 
        })
    })
    $('.bg14').each(function(){ // bấm vào bg14 
        $(this).on('click',function(){
            $(this).css({display:'none'}); // thì bg14 ẩn 
            $(this).next().css({display:'none'}); // div hủy đăng kí ẩn 
        })
    })
    $('.close-subscribed-div').each(function(){
        $(this).on('click',function(){  // bấm vào nút hủy để thoát 
            $(this).parent().parent().parent().css({display:'none'}); // ẩn div hủy đăng kí 
            $(this).parent().parent().parent().prev().css({display:'none'}); // ẩn bg14 
        })
    })
    $('.cancel-subscribe').each(function(){ 
        $(this).on('click',function(){ // khi bấm vào nút hủy đăng kí 
            $(this).parent().parent().parent().css({display:'none'}); // ẩn div hủy đăng kí 
            $(this).parent().parent().parent().prev().css({display:'none'}); // ẩn bg14
            $(this).parent().parent().parent().prev().prev().css({display:'none'}); // ẩn nút đã đăng kí 
            $(this).parent().parent().parent().next().next().css({display:'none'}); // ẩn chuông 
            $(this).parent().parent().parent().prev().prev().prev().css({display:'block'}); // hiện nút đăng kí 
        })
    })
});




// bật thông báo 
$(document).ready(function() {
    $('.subscribed-bell').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            if($(this).attr("tick4k")=="0"){
                $(this).prev().css({display:'block'});
                $(this).children().children().css({display:'block'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'relative'});
                $(this).attr("tick4k","1");
            }
            else {
                $(this).prev().css({display:'none'});
                $(this).children().children().css({display:'none'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'inherit'});
                $(this).attr("tick4k","0");
            }
        }); 
    })
    $('.bg15').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().children().children().css({display:'none'});
            $(this).next().css({position: 'inherit'});
            $(this).next().attr("tick4k","0");
        })
    })
});





// ẨN HIỆN .video-content3-3
$(document).ready(function() {
    $('.close-video-content3-4').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            if($(this).attr("tickkk")=="0"){
                $(this).parent().prev().css({display:'block'});
                $(this).text("ẨN BỚT");
                $(this).attr("tickkk","1");
                $(this).css({border:'none',backgroundColor:'transparent'});
            }
            else {
                $(this).parent().prev().css({display:'none'});
                $(this).text("HIỆN THÊM");
                $(this).attr("tickkk","0");
                $(this).css({border:'none',backgroundColor:'transparent'});
            }
        })
    })
});



// ẨN HIỆN SẮP XẾP BÌNH LUẬN 
$(document).ready(function() {
    $('.sort-comments').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            if($(this).attr("tick5k")=="0"){
                $(this).prev().css({display:'block'});
                $(this).children().children().css({display:'block'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'relative'});
                $(this).attr("tick5k","1");
            }
            else {
                $(this).prev().css({display:'none'});
                $(this).children().children().css({display:'none'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'inherit'});
                $(this).attr("tick5k","0");
            }
        }); 
    })
    $('.bg16').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().children().children().css({display:'none'});
            $(this).next().css({position: 'inherit'});
            $(this).next().attr("tick5k","0");
        })
    })
});


// BÌNH LUẬN 
$(document).ready(function() {
    $('.input-coment').each(function(){
        $(this).on('click',function(){
            $(this).parent().css({borderBottom:'2px solid black'});
            $(this).parent().next().css({display:'block'});
        })
    })
    $('.close-input-coment').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(event){
            event.preventDefault(); // default lại để khi click vào button thì sau khi nó thực hiện xong công việc thì 
            // con trỏ chuột không nhảy vị trí . 
            $(this).parent().css({display:'none'});
            $(this).parent().prev().css({borderBottom:'1.5px solid #e8e8e8'});
            $(this).css({border:'none',backgroundColor:'transparent'});
        })
    })
});


// BÁO CÁO BÌNH LUẬN 
$(document).ready(function() {
    $('.report-coment').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            if($(this).attr("tick6k")=="0"){
                $(this).prev().css({display:'block'});
                $(this).children().children().css({display:'block'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'relative'});
                $(this).attr("tick6k","1");
            }
            else {
                $(this).prev().css({display:'none'});
                $(this).children().children().css({display:'none'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'inherit'});
                $(this).attr("tick6k","0");
            }
        }); 
    })
    $('.bg17').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().children().children().css({display:'none'});
            $(this).next().css({position: 'inherit'});
            $(this).next().attr("tick6k","0");
        })
    })
});






// Like và Dislike Video Coment 
// like thì bỏ dislike đi 
$( ".video-like-coment" ).each(function() {
    $(this).on("click", function(){ // click vào like thì
        if($(this).children().attr("src")=="../img/video-like.png"){
            $(this).children().attr("src","../img/video-liked.png"); // đổi sang ảnh đã like 
            $(this).next().children().attr("src","../img/video-dislike.png"); // thẻ span kế tiếp nó cho vào thẻ con đổi sang không dislike 
        } 
        else {
            $(this).children().attr("src","../img/video-like.png"); // đổi sang ảnh đã like 
            $(this).next().children().attr("src","../img/video-dislike.png"); // thẻ span kế tiếp nó cho vào thẻ con đổi sang không dislike
        }
    });
});
// dislike thì bỏ like đi 
$( ".video-dislike-coment" ).each(function() {
    $(this).on("click", function(){  // khi click vào dislike thì 
        if($(this).children().attr("src")=="../img/video-dislike.png"){
            $(this).children().attr("src","../img/video-disliked.png"); // đổi sang đã dislike 
            $(this).prev().children().attr("src","../img/video-like.png");  // tới thẻ trước nó cho vào thẻ con đổi sang không thích nữa .
        }
        else {
            $(this).children().attr("src","../img/video-dislike.png"); // đổi sang đã dislike 
            $(this).prev().children().attr("src","../img/video-like.png");  // tới thẻ trước nó cho vào thẻ con đổi sang không thích nữa . 
        }
    });
});







// watch-content-right (3 chấm)
$(document).ready(function() {
    $('.content-right-btn ').each(function(){
        $(this).on("mousedown",function(){
            $(this).css({backgroundColor:'rgb(204 204 204 / 42%)'});
        });
        $(this).on('click',function(){
            if($(this).attr("tick8k")=="0"){
                $(this).prev().css({display:'block'});
                $(this).children().children().css({display:'block'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'relative'});
                $(this).attr("tick8k","1");
            }
            else {
                $(this).prev().css({display:'none'});
                $(this).children().children().css({display:'none'});
                $(this).css({border:'none',backgroundColor:'transparent'});
                $(this).css({position: 'inherit'});
                $(this).attr("tick8k","0");
            }
        }); 
    })
    $('.bg18').each(function(){
        $(this).on('click',function(){
            $(this).css({display:'none'});
            $(this).next().children().children().css({display:'none'});
            $(this).next().css({position: 'inherit'});
            $(this).next().attr("tick8k","0");
        })
    })
});


var watchcontentrightul = document.querySelector('#watch-content-right ul');

for(var dl=0;dl<ulLicontent1name.length;dl++){
    let randl = Math.floor(Math.random() * ulLicontent1name.length);
    watchcontentrightul.innerHTML = watchcontentrightul.innerHTML
    +'<li class="watch-content-right-li">'
    +'    <p class="content-right-img"><img src="../img/img1-a'+randl+'.jpg">'
    +'        <span class="content-right-span content-right-span1"><i class="far fa-clock"></i></span>'
    +'        <span class="content-right-span content-right-span2"><i class="fas fa-list"></i></span>'
    +'        <span class="content-right-span content-right-span3">'+fixtime[randl]+'</span>'
    +'        <span class="content-right-span4">Xem sau</span>'
    +'        <span class="content-right-span5">Thêm vào danh sách chờ</span>'
    +'    </p>'
    +'    <div class="content-right-div">'
    +'        <ol class="content-right-ol1">'
    +'            <span>'+ulLicontent1name[randl].substring(0,50)+'...</span>'
    +'            <div class="bg18"></div>'
    +'            <button tick8k="0" class="content-right-btn"><i class="fas fa-ellipsis-v"></i>'
    +'                <div>'
    +'                    <ul class="video-ul-right">'
    +'                        <li class="video-li-right"><img src="../img/video-play-list.png">Thêm vào danh sách chờ</li>'
    +'                        <li class="video-li-right"><img src="../img/video-clock.png">Lưu vào dánh sách Xem sau</li>'
    +'                        <li class="video-li-right"><img src="../img/video-add-list.png">Lưu vào danh sách </li>'
    +'                        <li class="video-li-right"><img src="../img/video-not.png">Không quan tâm</li>'
    +'                        <li class="video-li-right"><img src="../img/video-forbidden.png">Không đề xuất kênh này</li>'
    +'                        <li class="video-li-right"><img src="../img/video-flag.png">Báo cáo vi phạm</li>'
    +'                    </ul>'
    +'                </div>'
    +'            </button>'
    +'        </ol>'
    +'        <ol class="content-right-ol2">'+ulLicontent1name2[randl]+' <i class="fas fa-check-circle"></i></ol>'
    +'        <ol class="content-right-ol3">'+Math.floor(Math.random() * 999)+' N lượt xem<i class="fas fa-circle"></i>'+Math.floor(Math.random() * 24)+' giờ trước<span>Mới</span></ol>'
    +'    </div>'
    +'</li>'
}





















/* 

// sidebar 
var btnmenu1 = document.getElementById('btn-menu1');
var sidebar = document.getElementById('sidebar');
var bg = document.getElementById('bg');
btnmenu1.onclick = () => {
    sidebar.style='left:0px';
    bg.style.display='block';

}
var btnmenu2 = document.getElementById('btn-menu2');
btnmenu2.onclick = () => {
    sidebar.style='left:-240px';
    bg.style.display='none';
}
// chuyển xuống ở dưới , vì chỉ có một window.onclick thôi , cái khác cũng cần nên sau khi khai các biến báo thì mới gọi hàm được
// phải chuyển xuống ở dưới để các sau khi khai báo có thể gọi , còn nếu để ở trên này mà chưa khai báo sẽ lỗi , vì đọc file là đọc từ trên
// xuống  
// window.onclick = function(event) {
//     if (event.target == bg) { // target : định vị trí 
//         sidebar.style='left:-240px';
//         bg.style.display='none';
//     }
//     if(event.target == bg2){
//         historyul.classList.add('hidden');
//         bg2.style.display='none';
//     } 
// }

// tối ưu #sidebar-hidden bằng js , không tạo bằng html 
var lists = document.querySelector('#sidebar-hidden ul');
var listname = ['Marvel','TRAILER ANIME','Đen vâu','Thanh Gươm Diệt..','Lập trình viên TV',
                'Tôi đi code dạo','BLACKPINK','Phim chiếu rạp 2022','Nguyễn Văn Mạnh',
                'FullStack Dev','Vuejs Laravel'];
var listlist = ['playlist-play','signal-play','playlist-play','signal-play','playlist-play',
                'playlist-play','playlist-play','signal-play','playlist-play','playlist-play','playlist-play'];
for(var j=0;j<listname.length;j++){
    lists.innerHTML=lists.innerHTML+'<li><a href="../list/'+listname[j]+'.html"><img src="../img/'
                        +listlist[j]+'.png">'+listname[j]+'</a></li>';
}
// show-more 

var sidebarhidden = document.getElementById('sidebar-hidden');
var showmore = document.getElementById('show-more');

showmore.onclick = () => {
    if(sidebarhidden.classList.contains('hidden')==true){
        sidebarhidden.classList.remove('hidden');
        showmore.innerHTML='<img src="../img/hidden.png"> Ẩn bớt';
    }
    else {
        sidebarhidden.classList.add('hidden');
        showmore.innerHTML='<img src="../img/show-more.png"> Thêm';
    }
}

// tạo list kênh đăng kí trong ul của #sidebar-hidden2 bằng js không tạo bằng html nữa 

var channels = document.querySelector('#sidebar-hidden2 ul');
var listchannels = ['an-coong','clever-programer','coding-snow','easy-tutorials','edm','evondev',
                    'lcd-cntt','nguoi-noi-tieng','nguoi-thanh-cong','nguyen-viet-nam-son','nodemy','shark-hung','soi-sang',
                    'dung-lai-lap-trinh'
                   ];
var namelistchannels = ['An Coong Piano','Clever Programmer','Coding Snow','Easy Tutorials','StarlingEDM',
                        'evondev','LCĐ khoa CNTT','Người Nổi Tiếng','Người Thành Công','Việt Nam Sơn..','Nodemy',
                        'Shark Hưng','Soi Sáng','Dũng Lại Lập Trình'];
var linklistchannels = ['c/AnCoongPiano','c/CleverProgrammer','c/CodingSnow','c/EasyTutorialsVideo','c/StarlingEDMx',
                        'c/evondevfrontend','channel/UCfCzZa4juLsgtXS5-4bnXOg','c/TieuSuNguoiNoiTieng102',
                        'channel/UCfGn2JDKc4faJw29XiC95PQ','c/Vi%E1%BB%87tNamS%C6%A1nNguy%E1%BB%85n',
                        'c/Nodemy','c/sharkhungverify','c/SoiS%C3%A1ngBrightSideVietnamese',
                        'c/D%C5%A9ngL%E1%BA%A1iL%E1%BA%ADpTr%C3%ACnh'];

                        // console.log(listchannels.length);
for(var i = 0;i<listchannels.length;i++){
    channels.innerHTML=channels.innerHTML + '<li><a href="https://www.youtube.com/'+linklistchannels[i]+'"><img src="../img/' + listchannels[i] 
                        + '.jpg">'+namelistchannels[i]+'</a></li>';
}


// ẩn hiện kênh đăng kí 
var span = document.getElementById('span');
span.innerText = 'Hiển thị thêm '+ document.querySelectorAll('#sidebar-hidden2 li').length + ' mục'; 
// tự động đếm số kênh sẽ hiện thêm cho mình 
var addchannels = document.getElementById('addchannels')

var sidebarhidden2 = document.getElementById('sidebar-hidden2');
var showmore2 = document.getElementById('show-more2');

showmore2.onclick = () => {
    if(sidebarhidden2.classList.contains('hidden')==true){
        sidebarhidden2.classList.remove('hidden');
        addchannels.classList.remove('hidden');
        showmore2.innerHTML='<img src="../img/hidden.png"> Ẩn bớt';
    }
    else {
        sidebarhidden2.classList.add('hidden');
        addchannels.classList.add('hidden');
        showmore2.innerHTML = '<img src="../img/show-more.png"><span id="span">' +'Hiển thị thêm '
        + document.querySelectorAll('#sidebar-hidden2 li').length + ' mục' + '</span>';
    }
}

// Dịch vụ khác của youtube 


// Thanh tìm kiếm 

// CHÚ Ý : KHI ĐẶT BIẾN KHÔNG ĐƯỢC ĐẶT TRÙNG VỚI CÁC TỪ KHÓA ĐẶT BIỆT NHƯ : History , history ,... sẽ bị lỗi ngay
// Lên mạng tìm các từ khóa của js không thể đặt biến để mà xem .  
var search = document.querySelector('header form input');
var formdiv = document.getElementById('formdiv');
console.log(formdiv);
// console.log(formdiv.innerHTML);
var historyul = document.getElementById('historyul')

// tối ưu lịch sử bằng js không tạo bằng html nữa 
var namehistoryul = ['why microsoft Word is the best IDE for programming','lập trình php laravel','fullstack php laravel','lập trình viên tv',
                    'docker deploy và run application với container','git github nâng cao branch git command',
                    'spider man noway home','anime trailer 2022','frontend'];
for(var z=0;z<namehistoryul.length;z++){
    historyul.innerHTML=historyul.innerHTML+'<li><a href="">'+namehistoryul[z]+'<span class="tick">Xóa</span></a></li>';
}


// ẩn hiện lịch sử 
// console.log(historyul.innerHTML);
var bg2 = document.getElementById('bg2');
search.onclick = () =>{
    formdiv.style='border: 1px solid #4141a559;box-shadow: rgb(46 47 53 / 98%) 1px 1px;';
    historyul.classList.remove('hidden');
    bg2.style.display='block';
}

// XÓA LỊCH SỬ 
// CÁCH MỘT , KHÁ LÀ ĐƠN GIẢN , DÙNG JQUERY 
// vì dùng cách một nên trong span thay tick="tick"+z+ thành class="tick" , (không dùng thuộc tính đánh dấu)
$(document).ready(()=>{    
    $('.tick').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
    })
})




// Ẩn hiển Profile , tài khoản 
var bg3 = document.getElementById('bg3');
var profile = document.getElementById('profile');
var divprofile = document.getElementById('divprofile');
var imgprofile = document.querySelector('#profile img');
profile.onclick = () =>{
    divprofile.style.display='block';
    bg3.style.display='block';
    imgprofile.style='margin-top: 4px;height: 30px;border-radius: 15px;border:2px solid #0c90ea;';
    $('.div-sub').hide(); // code thêm 
}

window.onclick = function(event) {
    if (event.target == bg) { // target : định vị trí 
        sidebar.style='left:-240px';
        bg.style.display='none';
    }
    if(event.target == bg2){
        historyul.classList.add('hidden');
        bg2.style.display='none';
        formdiv.style='border: 1px solid #0000002b;';
    } 
    if(event.target == bg3){
        divprofile.style.display='none';
        bg3.style.display='none';
        imgprofile.style='margin-top: 4px;height: 30px;border-radius: 15px;border:2px solid transparent';
        $('#divprofile3').show();
        $('.div-sub').hide();
        // $('#div-sub1').hide();
        // $('#div-sub2').hide();
        // $('#div-sub3').hide();
        // $('#div-sub4').hide();
        // $('#div-sub5').hide();
    }
    if(event.target == bg4){
        divmicro.classList.add('hidden');
        bg4.classList.add('hidden');
        btnmicro.style.backgroundColor='#f9f9f9';
    }
    if(event.target == bg5){
        divvideo.classList.add('hidden');
        bg5.classList.add('hidden');
        btnaddvideo.style.backgroundColor='white';
    }
    if(event.target == bg6){
        divapp.classList.add('hidden');
        bg6.classList.add('hidden');
        btnmenuapp.style.backgroundColor='white';
    }

    if(event.target == bg7){
        divbell.classList.add('hidden');
        bg7.classList.add('hidden');
        btnbell.style.backgroundColor='white';
    }


}

$(document).ready(()=>{    
    $('#li-main1').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();   
        $('#div-sub1').show();
    })
})

$(document).ready(()=>{    
    $('#li-main2').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();  
        $('#div-sub2').show();
    })
})

$(document).ready(()=>{    
    $('#li-main3').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();   
        $('#div-sub3').show();
    })
})
$(document).ready(()=>{    
    $('#li-main4').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();   
        $('#div-sub4').show();
    })
})
$(document).ready(()=>{    
    $('#li-main5').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();   
        $('#div-sub5').show();
    })
})

$(document).ready(()=>{    
    $('.a-sub').click(function(event){  
        event.preventDefault();    
        $('.div-sub').hide();
        $('#divprofile3').show();   
    })
})


/*div-sub2*/
// TÙY CHỌN GIAO DIỆN (Ẩn Các Thẻ img khi click vào)


// $(document).ready(()=>{    
//     $('.div-sub2-li').click(function(event){  
//         event.preventDefault();    
//         $('.div-sub2-img').hide();   
//         $(this).children().children().show();
//         $('#li-main2').innerHTML='';
//         // $('#li-main2').innerText ='Giao diện:'+ $(this).innerText;
//     })
// })



// div-sub3 
// Chọn ngôn ngữ 
// TỐI ƯU BẰNG TẠO THẺ BẰNG JS , KHÔNG TẠO BẰNG HTML 

// var laguagebyjs = document.querySelector('#div-sub3-div ul');
// var namelaguagebyjs = ['Afrikaans','Azərbaycan','Bahasa Indonesia','Bahasa Malaysia','Bosanski','Català','Čeština','Dansk','Deutsch',
//                         'Eesti','English (India)','English (UK)','English (US)','Español (España)','Español (Latinoamérica)','Español (US)',
//                         'Euskara','Filipino','Français','Français (Canada)','Galego','Hrvatski','IsiZulu','Íslenska','Italiano','Kiswahili',
//                         'Latviešu valoda','Lietuvių','Magyar','Nederlands','Norsk','O‘zbek','Polski','Português','Português (Brasil)','Română',
//                         'Shqip','Slovenčina','Slovenščina','Srpski','Suomi','Svenska','Tiếng Việt','Türkçe','Беларуская','Български','Кыргызча',
//                         'Қазақ Тілі','Македонски','Монгол','Русский','Српски','Українська','Ελληνικά','Հայերեն','עברית','اردو','العربية',
//                         'فارسی','नेपाली','मराठी','हिन्दी','অসমীয়া','বাংলা','ਪੰਜਾਬੀ','ગુજરાતી','ଓଡ଼ିଆ','தமிழ்','తెలుగు','ಕನ್ನಡ','മലയാളം',
//                         'සිංහල','ภาษาไทย','ລາວ','ဗမာ','ქართული','አማርኛ','ខ្មែរ','中文 (简体)','中文 (繁體)','中文 (香港)','日本語','한국어]'];

// for(var lg=0;lg<namelaguagebyjs.length;lg++){
//     if (namelaguagebyjs[lg]=='Tiếng Việt') {
//         laguagebyjs.innerHTML=laguagebyjs.innerHTML+
//         '<li class="div-sub3-li"><a href=""><img src="../img/accept.png" class="div-sub3-img" style="display:block;"><span>'
//         +namelaguagebyjs[lg]+'</span></a></li>';
//     }
//     else{
//         laguagebyjs.innerHTML=laguagebyjs.innerHTML+
//         '<li class="div-sub3-li"><a href=""><img src="../img/accept.png" class="div-sub3-img" style="display:none;"><span>'
//         +namelaguagebyjs[lg]+'</span></a></li>';
//     }
// }
// // TÙY CHỌN NGÔNG NGỮ (Ẩn Các Thẻ img khi click vào)
// $(document).ready(()=>{    
//     $('.div-sub3-li').click(function(event){  
//         event.preventDefault();    
//         $('.div-sub3-img').hide();   
//         $(this).children().children().show();
//     })
// })

// // div-sub4 
// // Chọn địa điểm 
// // TỐI ƯU BẰNG TẠO THẺ BẰNG JS , KHÔNG TẠO BẰNG HTML 

// var addressbyjs = document.querySelector('#div-sub4-div ul');
// var nameaddressbyjs = ['Ả-Rập Xê-út','Ai Cập','Algeria','Áo','Argentina','Azerbaijan','Ấn Độ','Ba Lan','Bahrain','Bangladesh','Bắc Macedonia',
//                         'Belarus','Bỉ','Bolivia','Bosnia và Herzegovina','Bồ Đào Nha','Brazil','Bungary','Các Tiểu Vương quốc Ả Rập Thống nhất',
//                         'Canada','Chile','Colombia','Costa Rica','Cộng hoà Dominica','Croatia','Đài Loan','Đan Mạch','Đảo Síp','Đức','Ecuador',
//                         'El Salvador','Estonia','Georgia','Ghana','Guatemala','Hà Lan','Hàn Quốc','Hoa Kỳ','Honduras','Hồng Kông','Hungary',
//                         'Hy Lạp','Iceland','Indonesia','Iraq','Ireland','Israel','Jamaica','Jordan','Kazakhstan','Kenya','Kuwait','Latvia','Lebanon',
//                         'Libya','Liechtenstein','Lithuania','Luxembourg','Ma-rốc','Malaysia','Malta','Mexico','Montenegro','Na Uy','Nam Phi','Nepal',
//                         'New Zealand','Nga','Nhật Bản','Nicaragua','Nigeria','Oman','Pakistan','Panama','Papua New Guinea','Paraguay','Peru','Pháp',
//                         'Phần Lan','Philipin','Puerto Rico','Qatar','Rumani','Séc','Senegal','Serbia','Singapore','Slovakia','Slovenia','Sri Lanka',
//                         'Tanzania','Tây Ban Nha','Thái Lan','Thổ Nhĩ Kỳ','Thuỵ Điển','Thuỵ Sĩ','Tunisia','Úc','Uganda','Ukraina','Uruguay','Venezuela',
//                         'Việt Nam','Vương quốc Anh','Ý','Yemen','Zimbabwe'];

// for(var adr=0;adr<nameaddressbyjs.length;adr++){
//     if (nameaddressbyjs[adr]=='Việt Nam') {
//         addressbyjs.innerHTML=addressbyjs.innerHTML+
//         '<li class="div-sub4-li"><a href=""><img src="../img/accept.png" class="div-sub4-img" style="display:block;"><span>'
//         +nameaddressbyjs[adr]+'</span></a></li>';
//     }
//     else{
//         addressbyjs.innerHTML=addressbyjs.innerHTML+
//         '<li class="div-sub4-li"><a href=""><img src="../img/accept.png" class="div-sub4-img" style="display:none;"><span>'
//         +nameaddressbyjs[adr]+'</span></a></li>';
//     }
// }
// // TÙY CHỌN ĐỊA ĐIỂM (Ẩn Các Thẻ img khi click vào)
// $(document).ready(()=>{    
//     $('.div-sub4-li').click(function(event){  
//         event.preventDefault();    
//         $('.div-sub4-img').hide();   
//         $(this).children().children().show();
//     })
// })



/*ẨN HIỆN MICRO*/
// var bg4 = document.getElementById('bg4');
// var btnmicro = document.getElementById('voice');
// var divmicro = document.getElementById('divmicro');
// var btnclosemicro = document.querySelector('#divmicro button');
// btnmicro.onclick = () => {
//     divmicro.classList.remove('hidden');
//     bg4.classList.remove('hidden');
//     btnmicro.style.backgroundColor='#ff0000c4';
// }
// btnclosemicro.onclick = () => {
//     divmicro.classList.add('hidden');
//     bg4.classList.add('hidden');
//     btnmicro.style.backgroundColor='#f9f9f9';
// }

// /*ẨN HIỆN add-video*/
// var bg5 = document.getElementById('bg5');
// var btnaddvideo = document.getElementById('add-video');
// var divvideo = document.getElementById('div-add-video');
// btnaddvideo.onclick = () => {
//     if(divvideo.classList.contains('hidden')==true){
//         divvideo.classList.remove('hidden');
//         bg5.classList.remove('hidden');
//         btnaddvideo.style.backgroundColor='#ff0000c4';
//     }
//     else{
//         divvideo.classList.add('hidden');
//         bg5.classList.add('hidden');
//         btnaddvideo.style.backgroundColor='white';
//     }
// }


// /*ẨN HIỆN menu-app*/
// var bg6 = document.getElementById('bg6');
// var btnmenuapp = document.getElementById('menu-app');
// var divapp = document.getElementById('div-menu-app');
// btnmenuapp.onclick = () => {
//     if(divapp.classList.contains('hidden')==true){
//         divapp.classList.remove('hidden');
//         bg6.classList.remove('hidden');
//         btnmenuapp.style.backgroundColor='#ff0000c4';
//     }
//     else{
//         divapp.classList.add('hidden');
//         bg6.classList.add('hidden');
//         btnmenuapp.style.backgroundColor='white';
//     }
// }



/*ẨN HIỆN bell*/
// var bg7 = document.getElementById('bg7');
// var btnbell = document.getElementById('bell');
// var divbell = document.getElementById('div-bell');
// btnbell.onclick = () => {
//     if(divbell.classList.contains('hidden')==true){
//         divbell.classList.remove('hidden');
//         bg7.classList.remove('hidden');
//         btnbell.style.backgroundColor='#ff0000c4';
//     }
//     else{
//         divbell.classList.add('hidden');
//         bg7.classList.add('hidden');
//         btnbell.style.backgroundColor='white';
//     }
// }
// // Ẩn hiện cài đặt thông báo của bell 

// $(document).ready(()=>{    
//     let bellnumber=0;
//     $(".btn-bell").click(function(event){  
//         event.preventDefault(); 
//         if(bellnumber%2==0){
//             console.log(bellnumber);
//             $(this).prev().show();
//             $(this).children().children().show(); 
//             bellnumber++;
//         }
//         else{
//             console.log(bellnumber);
//             $(this).prev().hide();
//             $(this).children().children().hide(); 
//             bellnumber++ 
//         }
//     })
//     $(".bg8").click(function(event){  
//         event.preventDefault(); 
//         if(bellnumber%2==0){
//             console.log(bellnumber);
//             $(".bg8").show();
//             $(this).next().children().children().show(); 
//             bellnumber++;
//         }
//         else{
//             console.log(bellnumber);
//             $(".bg8").hide();
//             $(this).next().children().children().hide(); 
//             bellnumber++ 
//         }
//     })
// })



































// var x = 1
// var b=['a','b','c','d'];
// b.splice(x,1);
// console.log(b);

// XÓA LỊCH SỬ 
/*Một là khi click vào Xóa thì xóa li khỏi ul (cho li style.display là none) , 
Hai là xóa phần tử string trong mảng đã lưu , rồi chạy lại hàm tạo các li trong ul như lúc đầu , 
Lúc này đoạn string bị xóa sẽ không được tạo nữa Click vào nút xóa sẽ lấy thuộc tính đánh dấu của li đó Hoặc dùng .target
NHƯNG MÌNH THỬ CÁCH NÀY XONG CHỈ THẤY NÓ XÓA ĐƯỢC MỘT DÒNG VÀ KHÁ LÀ DÀI NÊN CHUỂN SANG CÁCH MỘT 
var historyulLi = document.querySelectorAll('#historyul li');
// console.log(historyulLi);
historyulLi.forEach(li=>{
    // console.log(li.innerHTML);
    console.log(namehistoryul.length);
    var span = document.querySelector('li span');
    span.onclick = (event) => {
        event.preventDefault(); // dừng sự kiện lại để thực hiện thứ mình muốn đã , chứ nếu không link sẽ thực hiện và chuyển tab 
        var tick = event.target.getAttribute("tick"); // lưu giá trị của thuộc tính đánh dấu 
        // console.log(tick.substring(4,1));
        // console.log(typeof(tick));
        var number = tick.substring(4); // chú ý ở đây là phải dùng substring nha chứ không được dùng splice()
        // vì splice là có ảnh hưởng đến chuỗi gốc => vi phạm => ảnh hưởng đến thuộc tính tick trong thẻ span 
        // vì thế mà không được , nên phải dùng substring thôi 
        // nếu substring(4,1) => 0 đến 9 là ok vì có một chữ số nhưng nếu tick10 trở lên thì sẽ cắt được một số : 1 còn số 0 thì bỏ 
        // vì vậy mà substring(4) => cắt từ 4 đến hết ex : tick27 => number = 27 luôn còn nếu substring(4,1) thì tick27 => number = 2 thôi 
        console.log(number);
        // var newhistoryulLi = namehistoryul.substring(number,1);
        // console.log(newhistoryulLi);
        console.log(namehistoryul.length); // 9
        var abc = namehistoryul.splice(number,1); // xóa phần tử mới bị click đó đi 
        console.log(abc[0]);

        console.log(namehistoryul.length); // 8 
        historyul.innerHTML='';
        for(var q=0;q<namehistoryul.length;q++){ // tạo lại sẽ không có phần tử đó nữa . 
            console.log(namehistoryul[q]);
            historyul.innerHTML=historyul.innerHTML+'<li><a href="">'+namehistoryul[q]+'<span tick="tick'+z+'">Xóa</span></a></li>';
        }
    }
})

// console.log('tick455'.substring(4)); // 455 
*/





















// ẨN HIỆN TRONG Ô TÀI KHOẢN 
/*
HTML của Div chính và thẻ Li CỦA Div Chính
<div id="divprofile3">
    <div id="top-divprofile">
        <img src="../img/profile.jpg" >
        <p> 
            <span>Nguyễn Văn Mạnh</span>
            <a href="" >Quản lí Tài khoản Google của bạn</a>
        </p>
    </div>
    <div style="height: 494px;overflow-x: hidden;overflow-y: scroll;" id="divmain">
        <div class="divprofile3-nth">
            <ul>
                <li><a href=""><img src="../img/account-user.png"> Kênh của bạn</a></li>
                <li><a href=""><img src="../img/money.png"> Giao dịch mua và gói thành viên</a></li>
                <li><a href=""><img src="../img/setting-video.png"> Creator Studio</a></li>
                <li id="li-main1"><a href=""><img src="../img/account-group.png"> Chuyển đổi tài khoản<img src="../img/next.png"></a></li>
                <li><a href=""><img src="../img/login.png">Đăng xuất</a></li>
            </ul>
        </div>
        <div class="divprofile3-nth">
            <ul>
                <li id="li-main2"><a href=""><img src="../img/moon.png">Giao diện: Giao diện thiết bị<img src="../img/next.png"></a></li>
                <li id="li-main3"><a href=""><img src="../img/language.png">Ngôn ngữ: Tiếng Việt<img src="../img/next.png"></a></li>
                <li id="li-main4"><a href=""><img src="../img/world.png">Địa điểm: Việt Nam<img src="../img/next.png"></a></li>
                <li><a href=""><img src="../img/setting.png">Cài đặt</a></li>
                <li><a href=""><img src="../img/shield-user.png">Dữ liệu của bạn trong YouTube</a></li>
                <li><a href=""><img src="../img/ask.png">Trang web dành cho thiết bị di động</a></li>
                <li><a href=""><img src="../img/feedback.png">Trợ giúp</a></li>
                <li><a href=""><img src="../img/keyboard2.png">Gửi phản hồi</a></li>
            </ul>
        </div>
        <div class="divprofile3-nth">
            <ul>
                <li id="li-main5"><a href=""><img src="" style="margin-right:0px">Chế độ hạn chế: Đã tắt<img src="../img/next.png"></a></li>
            </ul>
        </div>
    </div>
</div>

HTML của thẻ Li quay lui và Div phụ  
<div id="div-sub2">
    <div>
        <li><a href="" id="a-sub2" style="width:40px;height: 40px;"><img src="../img/back.png" style="height:24px"></a><span>Tài khoản</span></li>
    </div>
</div>
<div id="div-sub3">
    <div>
        <li><a href="" id="a-sub3" style="width:40px;height: 40px;"><img src="../img/back.png" style="height:24px"></a><span>Tài khoản</span></li>
    </div>
</div>
<div id="div-sub4">
    <div>
        <li><a href="" id="a-sub4" style="width:40px;height: 40px;"><img src="../img/back.png" style="height:24px"></a><span>Tài khoản</span></li>
    </div>
</div>
<div id="div-sub5">
    <div>
        <li><a href="" id="a-sub5" style="width:40px;height: 40px;"><img src="../img/back.png" style="height:24px"></a><span>Tài khoản</span></li>
    </div>
</div>

JS 
// ẨN HIỆN THẺ DIV CHÍNH VÀ DIV PHỤ TRONG Ổ TÀI KHOẢN 
$(document).ready(()=>{    
    $('#li-main1').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub1').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub1').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})

$(document).ready(()=>{    
    $('#li-main2').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub2').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub2').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})

$(document).ready(()=>{    
    $('#li-main3').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub3').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub3').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})

$(document).ready(()=>{    
    $('#li-main4').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub4').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub4').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})

$(document).ready(()=>{    
    $('#li-main5').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub5').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub5').click(function(event){  
        event.preventDefault();    
        $(this).parent().parent().parent().hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})
// click vào #bg3 thì cho thẻ div chính hiện còn lại các thẻ div phụ thì ẩn  

*/












// THAY .Parent() bằng id 
/*
$(document).ready(()=>{    
    $('#li-main1').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub1').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub1').click(function(event){  
        event.preventDefault();    
        $('#div-sub1').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})

$(document).ready(()=>{    
    $('#li-main2').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub2').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub2').click(function(event){  
        event.preventDefault();    
        $('#div-sub2').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})

$(document).ready(()=>{    
    $('#li-main3').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub3').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub3').click(function(event){  
        event.preventDefault();    
        $('#div-sub3').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})
$(document).ready(()=>{    
    $('#li-main4').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub4').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub4').click(function(event){  
        event.preventDefault();    
        $('#div-sub4').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})
$(document).ready(()=>{    
    $('#li-main5').click(function(event){  
        event.preventDefault();    
        $('#divprofile3').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#div-sub5').show();
    })
    
})
$(document).ready(()=>{    
    $('#a-sub5').click(function(event){  
        event.preventDefault();    
        $('#div-sub5').hide();  // từ thẻ span > thẻ a > thẻ li (truy ngược lên hai lần)
        $('#divprofile3').show();
    })
    
})

*/
