function disappear(id){
			document.getElementById(id).style.display="none";
		}
		function appear(id){
			document.getElementById(id).style.display="flex";
		}

		function rep(){
			var shape=Math.floor(Math.random()*2);
			var colours=["red","pink","yellow","blue","greem","orange","brown","violet","black"];
			var color=Math.floor(Math.random()*9);
			var height=Math.floor(Math.random()*300)+50;
			var width=height;
			var top=Math.floor(Math.random()*(420-height));
			var left=Math.floor(Math.random()*(1350-height));
			document.getElementById('box').style.borderRadius=(50*shape)+"%"
			document.getElementById('box').style.backgroundColor=colours[color];
			
			document.getElementById('box').style.height=height+"px";
			document.getElementById('box').style.width=width+"px";
			document.getElementById('box').style.top=top+"px";
			document.getElementById('box').style.left=left+"px";
			appear("box");	
			t1=new Date().getTime();		
			document.getElementById('box').onclick=function(){
				t2=new Date().getTime();
				disappear("box");
				document.getElementById('time').innerHTML="Your time: "+(t2-t1)/1000+"s";
				window.setTimeout(rep,(Math.floor(Math.random()*5)+1)*200);
			}

			
		}


		function ready(){
			t1=new Date().getTime();
			document.getElementById('box').onclick=function(){
				t2=new Date().getTime();
				disappear("box");
				document.getElementById('time').innerHTML="Your time: "+(t2-t1)/1000+"s";
				window.setTimeout(rep,(Math.floor(Math.random()*5)+1)*200);

			}
		}