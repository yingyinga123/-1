window.onload=function(){
	var one=document.getElementById("one");
	var img=document.getElementsByClassName("image")[0];
	var clearone=document.getElementsByClassName("navone")[0];
	//alert(clearone)
one.onmouseover=function(){
	clearone.style.display="block";
	img.style.display="none";
	//获取鼠标位置 x<
}
one.onmouseout=function(){
	clearone.style.display="none";
	img.style.display="block";
}
}
