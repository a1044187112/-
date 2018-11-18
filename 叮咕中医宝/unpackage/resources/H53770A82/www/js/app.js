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
