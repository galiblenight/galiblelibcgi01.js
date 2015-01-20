function jumpto(){
	var query = document.getElementById("txtb1").value;
	var srcq = document.getElementById("txtb2").value;
	var old = \"""" + directory + """\"
	if(query == "-"){
		window.location.href = "dirls.py?directory=\\\""+old+"\\\"&srcq=\\\""+srcq+"\\\"";
	}else{
		window.location.href = "dirls.py?directory=\\\""+query+"\\\"&srcq=\\\""+srcq+"\\\"";
	}
}

function showtools(part){
	var enp = $(part);
	var data = document.getElementById(part+"=show");
	if(data.value == "show"){
		data.value = "hide";
		enp.show();
	}else{
		data.value = "show";
		enp.hide();
	}
}

function check(part){
	$(part).toggle();
}

function dirrename(part){
	while(true){
		datas = part.split("/")
		var folname = datas[datas.length - 1];
		var dirname = "";
		for(var i = 0; i < datas.length - 1; i++){
			dirname += datas[i];
		}
		var newname = prompt("Rename this folder to", folname);
		if(newname == null){
			break;
		}
		if($(dirname+newname).length == 0){
			xmlhttp = new XMLHttpRequest();
			xmlhttp.open("GET", "command.py?type=\\\"rename\\\"&dir=\\\""+part[0]+"\\\"&newname=\\\""+newname+"\\\"");
			xmlhttp.send();
			break;
		}else{
			alert("sorry guys but this name is exists in directory");
		}
	}
}

function dirnewfile(part){

}

function filedelete(part){

}

function filerename(part){

}
