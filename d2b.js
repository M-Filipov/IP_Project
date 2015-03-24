

$("#SaveBtn").click(function() {
    myData = { 
        "title": "Build3", 
        "hero": "Zeus",
        "herolvl": 5,  
        "itemids": [1, 2, 3, 4, 5, 6] 
    }

    $.ajax({
        type: "POST",
        url: "http://private-01f76-dota2onlinebuilder.apiary-mock.com/builds",  
        data: myData,    
        success: function(msg){ 
        }
    });

    $.getJSON("all", function(json) {
        console.log(json);
    });
})

$("#LoadBtn").click(function() {
    $.ajax({
        type: "GET",    
        url: "http://private-01f76-dota2onlinebuilder.apiary-mock.com/builds/1", 
        success: function(msg){
        }
    });
})

$("DelBtn").click(function() {
    $.ajax({
        type: 'DELETE',
        url: 'http://private-01f76-dota2onlinebuilder.apiary-mock.com/builds/1',
        success: function(msg) {

        }
    });
})

  $('.spinner .btn:first-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
  });
  $('.spinner .btn:last-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
  });
