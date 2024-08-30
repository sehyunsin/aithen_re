$(document).ready(function(){
    //header hover시 작동
    $('#header').hover(
        function() {
            // 마우스가 #header에 들어왔을 때
            $(this).addClass('type02');
            $('.gnb_bg, .gsnb').addClass('active');
        }, 
        function() {
            // 마우스가 #header에서 벗어났을 때
            $(this).removeClass('type02'); 
            $('.gnb_bg, .gsnb').removeClass('active');
        }
    );
    ///////////header hover시 작동
});

//footer 개인정보처리방침 팝업
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openPopupBtn').addEventListener('click', function() {
        window.open('view/law/privacy.html', 'popup', 'width=900,height=600');
    });
});
//footer 개인정보처리방침 팝업

//footer 개인정보처리방침 팝업
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openPopupBtn_2').addEventListener('click', function() {
        window.open('view/law/email.html', 'popup', 'width=600,height=300');
    });
});
//footer 개인정보처리방침 팝업