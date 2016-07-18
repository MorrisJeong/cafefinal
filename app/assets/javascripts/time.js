
function printTime() {
              var clock = document.getElementById("clock");            // 출력할 장소 선택
              var now = new Date();                                                  // 현재시간
              var nowTime = now.getFullYear() + "년 " + (now.getMonth()+1) + "월 " + now.getDate() + "일 " + now.getHours() + "시 " + now.getMinutes() + "분 " + now.getSeconds() + "초 ";
              clock.innerHTML = nowTime;           // 현재시간을 출력
              
              setTimeout("printTime()",1000);         // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000
}
function countTime() {
              var cnt=0;
              var count = document.getElementById("count");            // 출력할 장소 선택
              var now1 = new Date();                                                  // 현재시간

              for(var i =0 ; i<positions.length;i++){
                  if(now1.getHours()>positions[i].openH && now1.getHours()<positions[i].closeH) cnt++;
                  if(now1.getHours()==positions[i].openH){
                      if(now.getMinutes()>positions[i].openM) cnt++;
                  }
                  if(now1.getHours()==positions[i].closeH){
                      if(now1.getMinutes()<positions[i].closeM) cnt++;
                  }
              }
              count.innerHTML = cnt;           // 현재시간을 출력
              setTimeout("countTime()",60000);         // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000
}
window.onload = function() {                         // 페이지가 로딩되면 실행
              printTime();
              countTime();
}
