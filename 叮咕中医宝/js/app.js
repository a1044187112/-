var APP = function() {
	return {
		remind: function(text) {
			var div = document.createElement('div');
			div.classList.add('remind_popus');
			div.innerText = text;
			document.getElementsByTagName('body')[0].appendChild(div);
			setTimeout(function() {
				document.getElementsByClassName('remind_popus')[0].remove(0);
			}, 1500);
		},
	};
}();


var Load = function(){
	return{
		loadDataShow : function(n){ // 0表示加载 1表示加载完成
			var div = document.createElement('div');
			div.classList.add('load_popus');
			var img = document.createElement('img');
			img.src = './img/load.png';
			// var span = document.createElement('span');
			// span.innerText = "正在加载...";
			div.appendChild(img);
			// div.appendChild(span);
			document.getElementsByTagName('body')[0].appendChild(div);
			var count = 0;
			var inter = setInterval(function(){
				count +=2;
				img.style.webkitTransform = 'rotate('+count+'deg)';
				img.style.mozTransform = 'rotate('+count+'deg)';
				img.style.msTransform = 'rotate('+count+'deg)';
				img.style.oTransform = 'rotate('+count+'deg)';
				img.style.transform = 'rotate('+count+'deg)';
			},10);
			if(n==1){
				var parent=document.getElementsByTagName("body")[0];
				var list = document.getElementsByClassName('load_popus');
				var length = list.length;
				for(var i = length; i > 0 ; i-- ){
					parent.removeChild(list[i-1]);
				}
			}
		},	
	}
}();

var LoadTimeout = function() {
	return {
		remind: function(text) {
			var div = document.createElement('div');
			div.classList.add('remind_popus');
			div.innerText = text;
			document.getElementsByTagName('body')[0].appendChild(div);
			setTimeout(function() {
				document.getElementsByClassName('remind_popus')[0].remove(0);
			}, 2500);
		},
	};
}();