// Add your code here
let main = document.querySelector("main");
let div = document.createElement('div');
div.style.width = "50vw";
div.style.margin = "auto";
div.style.marginTop = "80px";
let profile = document.createElement('img');
profile.src = "../hw1/img1.jpg";
profile.style.width = "200px";
profile.style.height = "200px";
profile.style.borderRadius = "50%";
profile.style.margin = "0 auto";
profile.style.display = "flex";
profile.style.justifyContent = "center";
let para = document.createElement('p');
para.innerHTML = `<span style = "font-weight: bold"> Hi!! My name is Siri Koduru. I am a grad student from the CS department</span>. I have worked as an ios application developer after my undergrad and I am now persuing Masters as an international student. I love cooking, painting and watching movies. In my free time I do watch movies play with my pets.`;

main.append(div);
div.append(profile);
div.append(para);
