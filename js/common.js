timer = {
	hour: 0,
	min: 0,
	sec: 0,
	sint: null,
	//显示时间样式
	formatTime: function(t) {
		if(t < 10) {
			return "0" + t;
		} else {
			return t.toString();
		}
	},
	startTimer: function(el) {
		var hour = timer.hour;
		var min = timer.min;
		var sec = timer.sec;
		timer.sint = setInterval(function() {
			sec = sec + 1;
			if(sec >= 60) {
				sec = 0;
				min = min + 1;
			}
			if(min >= 60) {
				min = 0;
				hour = hour + 1;
			}
			el.innerText = timer.formatTime(hour) + ":" + timer.formatTime(min) + ":" + timer.formatTime(sec);
		}, 1000);
	},
	stopTimer: function() {
		if(timer.sint) {
			clearInterval(timer.sint);
		}
	}
}

function pageTo(url, id) {
	mui.openWindow({
		url: url,
		id: id,
		styles: {
			statusbar:{
				background:'#20b2aa'
			}
		},
		show: {
			autoShow: true,
			duration:100,
		},
		waiting: {
			title: '正在加载...',
		}
	})

}