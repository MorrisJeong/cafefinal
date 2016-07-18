
      var container = document.getElementById('map');
      var options = {
         center: new daum.maps.LatLng(37.247587, 127.078492),
         level: 3
      };
      
      var map = new daum.maps.Map(container, options);
      // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
        var positions = [
            {
                id : '0',
                name: '스타벅스', 
                price: '2000',
                openH: '9',
                openM: '00',
                closeH: '23',
                closeM: '00',
                opentime: '9:00',
                closetime: '23:00',
                latlng: new daum.maps.LatLng(37.247844, 127.076789)
            },
            {    
                id : '1',
                name: '엔젤리너스', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.246855, 127.076581)
            },
            {    
                id : '2',
                name: '캠퍼(우정원)', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.245963, 127.076892)
            },
            {    
                id : '3',
                name: '일층카페(우정원)', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.245777, 127.077010)
            },
            {    
                id : '4',
                name: '데땅(우정원)', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.246176, 127.076742)
            },
            {    
                id : '5',
                name: '할리스', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.247941, 127.076468)
            },
            {    
                id : '6',
                name: '플라타너스', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.247931, 127.078420)
            },
            {    
                id : '7',
                name: '카페베네', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.248442, 127.078951)
            }, 
            {    
                id : '8',
                name: '투레빗', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.247913, 127.076714)
            },
            {    
                id : '9',
                name: '일층카페(제2기숙사)', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.243726, 127.076923)
            },
            {    
                id : '10',
                name: '쿠피(도서관점)', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.241015, 127.079412)
            },
            {    
                id : '11',
                name: '모카팩토리', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.246510, 127.077805)
            },
            {    
                id : '12',
                name: '일투오', 
                price: '1000',
                openH: '8',
                openM: '00',
                closeH: '22',
                closeM: '00',
                opentime: '8:00',
                closetime: '22:00',
                latlng: new daum.maps.LatLng(37.246694, 127.077071)
            },
        ],selectedMarker = null;
        
        
        for (var i = 0; i < positions.length; i ++){
                // 마커를 생성합니다
                var marker = new daum.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커의 위치
                    //id: positions[i].id
                    //content: positions[i].content
                    });
                marker.cafename = positions[i].name
                marker.drink= positions[i].price
                marker.opentime= positions[i].opentime
                marker.closetime= positions[i].closetime
                
                var iwContent = positions[i].name, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
                    
                // 마커에 표시할 인포윈도우를 생성합니다 
                var infowindow = new daum.maps.InfoWindow({
                    content : iwContent,
                    removable : iwRemoveable
                });
                
                // 마커에 클릭이벤트를 등록합니다
                daum.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
                
                
        }
        
        
            function makeOverListener(map, marker, infowindow) {
                return function() {
                    infowindow.open(map, marker);
                
                    var cafename = marker.cafename
                    var drink = marker.drink
                    var opentime = marker.opentime
                    var closetime = marker.closetime
                    
                    $("#cafename").text(cafename)
                    $("#drink").text(drink)
                    $("#opentime").text(opentime)
                    $("#closetime").text(closetime)
                };
            }
        
        // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        function makeOutListener(infowindow) {
            return function() {
                infowindow.close();
            };
        }
     $(function() {
          $(".comment_submit").click(function(){
            
            post_id = this.value;
            post_content = $("#content_"+ post_id).val();
            
            $.ajax({
              method: "POST",
              url: "/home/comment_write",
              data: { content: post_content, 
                   id_of_post: post_id },
              
              success : function(){
                $( "#comment_" + post_id ).append( "<p>" + post_content + "</p>");
                $("#content_"+ post_id).val('');
                alert( "댓글이 작성되었습니다." );
              },
              
              error: function(){
                alert( "댓글이 작성되지 않았습니다.");
              }
            })
            
            
          });
              //alert( "댓글이 작성되었습니다." );
              //내용을 바로 써버리는 코드를 작성하시오
              //placeholder 내용 지우기!
              
        });
    