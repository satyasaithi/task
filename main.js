// function loadjson(file,callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState === 4 && xhr.status == "200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }

// loadjson("data.json",function(text){
// 	var data = JSON.parse(text); 
// 	console.log(data);
// 	basic(data.details);
// 	careerinfo(data.careerobjective);
// 	education(data.educationalqualification);
// 	skills(data.technicalskills);
// })

function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());

			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("main.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	careerinfo(data.careerobjective);

})

var child1 = document.querySelector(".child1");
function basic(det) {


 var image = document.createElement("img");
 image.src="./project/profile.png";
 child1.appendChild(image);	

var name = document.createElement("h4");
name.textContent=det.name;
child1.appendChild(name);
 
 var email = document.createElement("h3");
 email.textContent = det.email;
 child1.appendChild(email);



 var number = document.createElement("h4");
 number.textContent=det.number;
 child1.appendChild(number);


 var static = document.createElement("a");
 static.href = "./Tasks/NAVBAR/",
 static.textContent = det.static;
 child1.appendChild(static);

}

var child2=document.querySelector(".child2");
function careerinfo(info1){

var image = document.createElement("img");
 image.src="./project/profile.png";
 child2.appendChild(image);	

var name = document.createElement("h4");
name.textContent=info1.name;
child2.appendChild(name);
 
 var email = document.createElement("h3");
 email.textContent = info1.email;
 child2.appendChild(email);


 var number = document.createElement("h4");
 number.textContent=info1.number;
 child2.appendChild(number);


 var dynamic = document.createElement("a");
 dynamic.href = "./project",
 dynamic.textContent =info1.dynamic;
 child2.appendChild(dynamic);
	// var heading =document.createElement("h2");
	// heading.textContent="careerobjective";
	// child2.appendChild(heading);

 //    child2.appendChild(document.createElement("hr"));

 //    var p=document.createElement("p");
 //    p.textContent=info1.info;
 //    child2.appendChild(p);

}
