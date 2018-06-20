exports.getTimeStr = ()=>{
    let date=new Date(),
    Y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate(),
    H = date.getHours(), i = date.getMinutes(), s = date.getSeconds();   
return Y + '-' + (m<10?'0'+m:m) + '-' + (d<10?'0'+d:d) + ' ' + (H<10?'0'+H:H) + ':' + (i<10?'0'+i:i) + ':' + (s<10?'0'+s:s);
/* var t = Y + '-' + m + '-' + d; 年月日 */
}