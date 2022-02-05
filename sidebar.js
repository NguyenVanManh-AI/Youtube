// sidebar 
var btnmenu1 = document.getElementById('btn-menu1');
var sidebar = document.getElementById('sidebar');
var bg = document.getElementById('bg');
btnmenu1.onmousedown = () => {
    btnmenu1.style=' background-color:rgb(204 204 204 / 42%)';
};
btnmenu1.onclick = () => {
    sidebar.style='left:0px';
    bg.style.display='block';
    btnmenu1.style='border:none;background-color:none';
}
var btnmenu2 = document.getElementById('btn-menu2');
btnmenu2.onmousedown = () => {
    btnmenu2.style=' background-color:rgb(204 204 204 / 42%)';
};
btnmenu2.onclick = () => {
    sidebar.style='left:-240px';
    bg.style.display='none';
    btnmenu2.style='border:none;background-color:none';
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


$(document).ready(()=>{    
    $('.div-sub2-li').click(function(event){  
        event.preventDefault();    
        $('.div-sub2-img').hide();   
        $(this).children().children().show();
        $('#li-main2').innerHTML='';
        // $('#li-main2').innerText ='Giao diện:'+ $(this).innerText;
    })
})



// div-sub3 
// Chọn ngôn ngữ 
// TỐI ƯU BẰNG TẠO THẺ BẰNG JS , KHÔNG TẠO BẰNG HTML 

var laguagebyjs = document.querySelector('#div-sub3-div ul');
var namelaguagebyjs = ['Afrikaans','Azərbaycan','Bahasa Indonesia','Bahasa Malaysia','Bosanski','Català','Čeština','Dansk','Deutsch',
                        'Eesti','English (India)','English (UK)','English (US)','Español (España)','Español (Latinoamérica)','Español (US)',
                        'Euskara','Filipino','Français','Français (Canada)','Galego','Hrvatski','IsiZulu','Íslenska','Italiano','Kiswahili',
                        'Latviešu valoda','Lietuvių','Magyar','Nederlands','Norsk','O‘zbek','Polski','Português','Português (Brasil)','Română',
                        'Shqip','Slovenčina','Slovenščina','Srpski','Suomi','Svenska','Tiếng Việt','Türkçe','Беларуская','Български','Кыргызча',
                        'Қазақ Тілі','Македонски','Монгол','Русский','Српски','Українська','Ελληνικά','Հայերեն','עברית','اردو','العربية',
                        'فارسی','नेपाली','मराठी','हिन्दी','অসমীয়া','বাংলা','ਪੰਜਾਬੀ','ગુજરાતી','ଓଡ଼ିଆ','தமிழ்','తెలుగు','ಕನ್ನಡ','മലയാളം',
                        'සිංහල','ภาษาไทย','ລາວ','ဗမာ','ქართული','አማርኛ','ខ្មែរ','中文 (简体)','中文 (繁體)','中文 (香港)','日本語','한국어]'];

for(var lg=0;lg<namelaguagebyjs.length;lg++){
    if (namelaguagebyjs[lg]=='Tiếng Việt') {
        laguagebyjs.innerHTML=laguagebyjs.innerHTML+
        '<li class="div-sub3-li"><a href=""><img src="../img/accept.png" class="div-sub3-img" style="display:block;"><span>'
        +namelaguagebyjs[lg]+'</span></a></li>';
    }
    else{
        laguagebyjs.innerHTML=laguagebyjs.innerHTML+
        '<li class="div-sub3-li"><a href=""><img src="../img/accept.png" class="div-sub3-img" style="display:none;"><span>'
        +namelaguagebyjs[lg]+'</span></a></li>';
    }
}
// TÙY CHỌN NGÔNG NGỮ (Ẩn Các Thẻ img khi click vào)
$(document).ready(()=>{    
    $('.div-sub3-li').click(function(event){  
        event.preventDefault();    
        $('.div-sub3-img').hide();   
        $(this).children().children().show();
    })
})

// div-sub4 
// Chọn địa điểm 
// TỐI ƯU BẰNG TẠO THẺ BẰNG JS , KHÔNG TẠO BẰNG HTML 

var addressbyjs = document.querySelector('#div-sub4-div ul');
var nameaddressbyjs = ['Ả-Rập Xê-út','Ai Cập','Algeria','Áo','Argentina','Azerbaijan','Ấn Độ','Ba Lan','Bahrain','Bangladesh','Bắc Macedonia',
                        'Belarus','Bỉ','Bolivia','Bosnia và Herzegovina','Bồ Đào Nha','Brazil','Bungary','Các Tiểu Vương quốc Ả Rập Thống nhất',
                        'Canada','Chile','Colombia','Costa Rica','Cộng hoà Dominica','Croatia','Đài Loan','Đan Mạch','Đảo Síp','Đức','Ecuador',
                        'El Salvador','Estonia','Georgia','Ghana','Guatemala','Hà Lan','Hàn Quốc','Hoa Kỳ','Honduras','Hồng Kông','Hungary',
                        'Hy Lạp','Iceland','Indonesia','Iraq','Ireland','Israel','Jamaica','Jordan','Kazakhstan','Kenya','Kuwait','Latvia','Lebanon',
                        'Libya','Liechtenstein','Lithuania','Luxembourg','Ma-rốc','Malaysia','Malta','Mexico','Montenegro','Na Uy','Nam Phi','Nepal',
                        'New Zealand','Nga','Nhật Bản','Nicaragua','Nigeria','Oman','Pakistan','Panama','Papua New Guinea','Paraguay','Peru','Pháp',
                        'Phần Lan','Philipin','Puerto Rico','Qatar','Rumani','Séc','Senegal','Serbia','Singapore','Slovakia','Slovenia','Sri Lanka',
                        'Tanzania','Tây Ban Nha','Thái Lan','Thổ Nhĩ Kỳ','Thuỵ Điển','Thuỵ Sĩ','Tunisia','Úc','Uganda','Ukraina','Uruguay','Venezuela',
                        'Việt Nam','Vương quốc Anh','Ý','Yemen','Zimbabwe'];

for(var adr=0;adr<nameaddressbyjs.length;adr++){
    if (nameaddressbyjs[adr]=='Việt Nam') {
        addressbyjs.innerHTML=addressbyjs.innerHTML+
        '<li class="div-sub4-li"><a href=""><img src="../img/accept.png" class="div-sub4-img" style="display:block;"><span>'
        +nameaddressbyjs[adr]+'</span></a></li>';
    }
    else{
        addressbyjs.innerHTML=addressbyjs.innerHTML+
        '<li class="div-sub4-li"><a href=""><img src="../img/accept.png" class="div-sub4-img" style="display:none;"><span>'
        +nameaddressbyjs[adr]+'</span></a></li>';
    }
}
// TÙY CHỌN ĐỊA ĐIỂM (Ẩn Các Thẻ img khi click vào)
$(document).ready(()=>{    
    $('.div-sub4-li').click(function(event){  
        event.preventDefault();    
        $('.div-sub4-img').hide();   
        $(this).children().children().show();
    })
})



/*ẨN HIỆN MICRO*/
var bg4 = document.getElementById('bg4');
var btnmicro = document.getElementById('voice');
var divmicro = document.getElementById('divmicro');
var btnclosemicro = document.querySelector('#divmicro button');
btnmicro.onclick = () => {
    divmicro.classList.remove('hidden');
    bg4.classList.remove('hidden');
    btnmicro.style.backgroundColor='#ff0000c4';
    btnmicro.style.border='none';
}
btnclosemicro.onclick = () => {
    divmicro.classList.add('hidden');
    bg4.classList.add('hidden');
    btnmicro.style.backgroundColor='#f9f9f9';
}
btnmicro.onmousedown = () => {
    btnmicro.style.color = 'red';
    btnmicro.style.border = '1px solid red';
}
/*ẨN HIỆN add-video*/
var bg5 = document.getElementById('bg5');
var btnaddvideo = document.getElementById('add-video');
var divvideo = document.getElementById('div-add-video');
btnaddvideo.onclick = () => {
    if(divvideo.classList.contains('hidden')==true){
        divvideo.classList.remove('hidden');
        bg5.classList.remove('hidden');
        btnaddvideo.style.backgroundColor='#ff0000c4';
    }
    else{
        divvideo.classList.add('hidden');
        bg5.classList.add('hidden');
        btnaddvideo.style.backgroundColor='white';
    }
}


/*ẨN HIỆN menu-app*/
var bg6 = document.getElementById('bg6');
var btnmenuapp = document.getElementById('menu-app');
var divapp = document.getElementById('div-menu-app');
btnmenuapp.onclick = () => {
    if(divapp.classList.contains('hidden')==true){
        divapp.classList.remove('hidden');
        bg6.classList.remove('hidden');
        btnmenuapp.style.backgroundColor='#ff0000c4';
    }
    else{
        divapp.classList.add('hidden');
        bg6.classList.add('hidden');
        btnmenuapp.style.backgroundColor='white';
    }
}



/*ẨN HIỆN bell*/
var bg7 = document.getElementById('bg7');
var btnbell = document.getElementById('bell');
var divbell = document.getElementById('div-bell');
btnbell.onclick = () => {
    if(divbell.classList.contains('hidden')==true){
        divbell.classList.remove('hidden');
        bg7.classList.remove('hidden');
        btnbell.style.backgroundColor='#ff0000c4';
    }
    else{
        divbell.classList.add('hidden');
        bg7.classList.add('hidden');
        btnbell.style.backgroundColor='white';
    }
}
// Ẩn hiện cài đặt thông báo của bell 

$(document).ready(()=>{    
    let bellnumber=0;
    $(".btn-bell").click(function(event){  
        event.preventDefault(); 
        if(bellnumber%2==0){
            console.log(bellnumber);
            $(this).prev().show();
            $(this).children().children().show(); 
            bellnumber++;
        }
        else{
            console.log(bellnumber);
            $(this).prev().hide();
            $(this).children().children().hide(); 
            bellnumber++ 
        }
    })
    $(".bg8").click(function(event){  
        event.preventDefault(); 
        if(bellnumber%2==0){
            console.log(bellnumber);
            $(".bg8").show();
            $(this).next().children().children().show(); 
            bellnumber++;
        }
        else{
            console.log(bellnumber);
            $(".bg8").hide();
            $(this).next().children().children().hide(); 
            bellnumber++ 
        }
    })
})








// <!-- Bàn phím ảo -->
// để đoạn script này bên nào cũng được , không ảnh hưởng gì nha 
    var buttons = document.querySelectorAll('#keyboard button:not(#btn-delete');
    var valueinput = document.getElementById('input');
    var btndeletevalue = document.getElementById('btn-delete');
    buttons.forEach(button => {
        button.onmousedown = () => {
            button.style.color = 'red';
            button.style.border = '1px solid red';
        }
        button.onclick = (event) => {
            event.preventDefault();
            button.style.color='#444444';
            button.style.border='1px solid #e8e8e8';
            if(event.target.getAttribute("id")=='space'){
                valueinput.value=valueinput.value+' ';
            }
            else {
                valueinput.value=valueinput.value+button.innerText;
            }
        }
    })

    btndeletevalue.onmousedown = () => {
            event.preventDefault();
            btndeletevalue.style.color = 'red';
            btndeletevalue.style.border = '1px solid red';
        }
    btndeletevalue.onclick = (event) => {
        event.preventDefault();
        valueinput.value = valueinput.value.substring(0,valueinput.value.length -1);
        btndeletevalue.style.color='#444444';
        btndeletevalue.style.border='1px solid #e8e8e8';
        
    }
/*
+ Đầu tiên là tạo biến nhiều button không lấy biến xóa theo cú pháp như trên (dùng not giống hoàn toàn với style bên css)
+ Phím xóa phải tách riêng ra mà không được dùng else if , vì nếu dùng else ìf và đặt chung một biến chứa nhiều button như thế thì else ìf
sẽ không hoạt động 
+ Tách biến xóa ra . Mỗi khi click vào nó thì cho chuỗi giảm đi một kí tự bằng cách cắt subtring (0, độ dài hiện thời của chuỗi - 1)
    (cắt từ kí tự 0 , với độ dài là bằng độ dài của chuỗi trừ đi một kí tự)
    (ở đoạn này có thể dùng nhiều cách , cách nào cũng được miễn là mất đi kí tự cuối là được)
    (Ở nút cách mình bỏ chung thì được , vì nút cách là mình tăng thêm một dấu cách , còn đây nút xóa là mình xóa đi)

+ Style hay : Nếu đặt các sự kiện mouseup, mouseover, mouseout, mousemove các kiểu thì xong sự kiện nó mắt cái style lại luôn . 
    Ví dụ cho color red là nó red mãi . Di chuyển chuột qua chỗ khác cũng bị rứa . 
    Vậy nên ta đặt sự kiện khi đè chuột xuống (onmousedown) thì color và border hiện lên , khi click vào thì như cũ . 
    Khi thực hiện nhanh nhìn rất là OK . 
    Đây cũng chính là cái style mà mình có tìm kiếm 
    Công thức thì như trên : đặt onmousedown (đè chuột xuống) thì như thế nào đó , sau đó nếu click vào thì như cũ . 
*/














 
















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