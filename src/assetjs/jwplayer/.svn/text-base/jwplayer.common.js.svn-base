//定义全局变量，在jwplayer.common.js中使用
var theJwplayer;//播放器对象
var global_taskstate = 4;//录制任务状态,默认等于4，录制完毕
var global_playstate = undefined;//视频播放状态，播放完毕用complete表示

/**
 * Flash播放器日志输出出口，屏蔽输出时，将函数名修改为非'sysout'的任意名称
 * @param msg
 */
function sysout(msg) {
	if(msg != undefined && msg.indexOf("Logo") > -1){
		console.log(msg);
	}
}
/**
 * Flash播放器触发seek函数时调用该方法，解决播放器在播放完视频的瞬间，点击进度条时，播放事件正常更新，但没有视频画面或者直接黑屏的问题。
 * @param seekPosition 需要seek到的点
 */

function isVideoEnd(seekPosition) {
	var tempPosition = theJwplayer.getPosition();//获取当前播放位置
	var tempDuration = theJwplayer.getDuration();//获取视频总时长
	//只对录制完成的视频做下面的操作
	if(global_taskstate && global_taskstate <= 3) {
		return false;
	}
//	console.log("isVideoEnd-----------seekPosition ---------------- " + (seekPosition));
//	console.log("isVideoEnd-----------tempPosition ---------------- " + (tempPosition));
//	console.log("isVideoEnd-----------tempDuration ---------------- " + (tempDuration));
//	console.log("isVideoEnd-----------tempDuration - tempPosition = " + (tempDuration - tempPosition));
//	console.log("isVideoEnd-----------tempDuration - tempPosition < 0.8 = " + (tempDuration - tempPosition < 0.8));
//	console.log("isVideoEnd-----------tempDuration - tempPosition < 0.8 && seekPosition > 0  = " + (tempDuration - tempPosition < 0.8 && seekPosition > 0 ));
	if(tempDuration - tempPosition < 0.8 && seekPosition > 0 ) {
		return true;
	}else if(idleSeek == seekPosition){
		theJwplayer.seek(0);
	} 
	return false;
}
/**
 * Flash回调函数，用于seek时使用
 * @param seekPosition
 */
function videoReplay(seekPosition) {
	var tempDuration = theJwplayer.getDuration();
	window.setTimeout(function(){
		console.log("videoReplay-----------setTimeout------- seekPosition = " + (seekPosition));
		theJwplayer.seek(seekPosition);
	}, 200);
}

/**
 * 解决多次点击时间轴进行seek时，播放完毕重新播放时直接从seek点开始播放的问题,暂时没用到
 */
function checkVideoResourcePlayEnd() {
	//console.log("checkVideoResourcePlayEnd---------global_taskstate-------"+global_taskstate);
	//console.log("checkVideoResourcePlayEnd---------global_playstate-------"+global_playstate);
	//只对录制完成的视频做下面的操作
	if(global_taskstate && global_taskstate <= 3) {
		return false;
	}
	if(global_playstate && global_playstate === 'complete') {
		global_playstate = undefined;//重置为初始状态
		return true;
	}
	return false;
}

/**
 * 配合Flash解决快速点击时间轴尾部，导致视频无法正常播放的故障
 * @param seekPosition
 */
var idleSeek = 0;
function checkIdle(seekPosition) {
	console.log("checkIdle------idleSeek =====================================================start ");
	var tempDuration = theJwplayer.getDuration();
	//只操作录制完成的视频
	if(global_taskstate && global_taskstate <= 3) {
		return false;
	}
	if(tempDuration > 0 && seekPosition - tempDuration >= -0.8) {
		if(idleSeek == 0) {
			idleSeek = seekPosition;
		}
		console.log("checkIdle------idleSeek ===================================================== "+(idleSeek));
		return true;
	}
	return false;
}
/**
 * 检测视频是否已到结尾，只针对录制中的视频
 * @returns {Boolean}
 */
function checkVideoRealEnd(){
	//console.log("checkVideoRealEnd------=====================================================");
	if(global_taskstate != 3) {
		return -1;
	}
	var tempPosition = theJwplayer.getPosition();
	var tempDuration = theJwplayer.getDuration();
	var temp = tempDuration - tempPosition;
	//console.log("checkVideoRealEnd------(tempDuration - tempPosition)====================================================="+temp);
	if(tempPosition > 0 && temp > 2 ) {
		return tempPosition;
	}
	return -1;
}