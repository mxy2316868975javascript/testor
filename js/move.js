// function getStyle(obj,name)
// 	{
// 		if(obj.currentStyle)
// 		{
// 			return obj.currentStyle[name];
// 		}
// 		else
// 		{
// 			return getComputedStyle(obj,false)[name];
// 		}
// 	}
	
// 	function Move(obj,json,fnEnd)
// 	{
// 		// obj.timer = null;
// 		// var oDiv1 = document.getElementById('div1');
// 		// var oDiv2 = document.getElementById('div2');
// 		clearInterval(obj.timer);
// 		obj.timer = setInterval(function(){
// 			var cur = 0;
// 			if(attr == 'opacity')
// 			{
// 				cur = Math.round(parseFloat(getStyle(obj,attr))*100);
// 			}
// 			else
// 			{
// 				cur = parseInt(getStyle(obj,attr));
// 			}
// 			var speed = (iTarget - cur)/7;
// 			if(speed>0)
// 			{
// 				speed = Math.ceil(speed);
// 			}
// 			else
// 			{
// 				speed = Math.floor(speed);
// 			}
// 			if(cur == iTarget)
// 			{
// 				clearInterval(obj.timer);
// 				if(fnEnd)fnEnd();
// 			}
// 			else
// 			{
// 				if(attr == 'opacity')
// 				{
// 					obj.style.filter = 'alpha(opacity:'+(cur + speed)+')';
// 					obj.style.opacity = (cur + speed)/100;
// 					// document.title = obj.style.opacity;
// 					// document.getElementsByTagName('input')[0].value = obj.style.opacity;

// 				}
// 				else
// 				{
// 					obj.style[attr] = cur+ speed + 'px';
// 					// document.title = obj.style[attr];
// 				}
// 			}
// 		},30)
// 	}
function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

function startMove(obj, attr, iTarget)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var cur=0;
		
		if(attr=='opacity')
		{
			cur=Math.round(parseFloat(getStyle(obj, attr))*100);
		}
		else
		{
			cur=parseInt(getStyle(obj, attr));
		}
		
		var speed=(iTarget-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(cur==iTarget)
		{
			clearInterval(obj.timer);
		}
		else
		{
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
				
				document.getElementById('txt1').value=obj.style.opacity;
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
	}, 30);
}