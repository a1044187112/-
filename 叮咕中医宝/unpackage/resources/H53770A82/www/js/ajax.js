var AJAX = function() {	
	var ajaxPost =function(data,url,method,fn){
		// url = 'http://192.168.0.108:8888/zyb/public/admin.php/main/api' + url;
		url = 'https://www.52zyb.com/admin.php/main/api' + url;
		var api_secret = 'eIIWOdR32hbjsi6AUrRdVf45VAb3nwyM'
		var rand = Math.random().toString(36).substr(2)
		var sign = hex_md5(rand + api_secret)
		data.rand = rand
		data.sign = sign
		
		$.ajax({
			type:method,
			url:url,
			async:true,
			data:data,
			cache:false,
			header: {
				'Content-Type': 'application/json'
			},
			success : function(res){
				fn(res);
			},
			error : function(res){
				console.log(JSON.stringify(res));
				var data = res.responseJSON;
				if(data.code == 203){
					window.location.href = 'login.html';
				}
				fn(res);
			}
		});
	};
	
	return {
		post: function (data,url,method,fn) {
			ajaxPost(data,url,method,fn);
		},
	};
}();