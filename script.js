const content = document.getElementById("content");
const contactBox = document.getElementById("contactBox");

function toggleContact(){
  contactBox.classList.toggle("open");
}

function fadeChange(html){
  content.classList.add("hide");
  setTimeout(()=>{
    content.innerHTML = html;
    content.classList.remove("hide");
  },200);
}

function loadSection(section){

if(section==="overview"){
fadeChange(`Ich habe meinen Schulabschluss nach der 10. Klasse gemacht und habe seit jungen Jahren großes Interesse an der IT. Bereits in der 6. und 7. Klasse habe ich an ersten IT-Kursen teilgenommen und dadurch grundlegende Einblicke in die Welt der Informationstechnologie erhalten. Besonders gefällt mir an der IT das Arbeiten mit Problemen und das Finden von Lösungen. Ich bin motiviert, mir neues Wissen anzueignen und dieses praktisch anzuwenden. Mein Ziel ist es, meine Kenntnisse Schritt für Schritt zu erweitern und mich in diesem Bereich weiterzuentwickeln. Ich arbeite zuverlässig, lerne schnell und habe Freude daran, mich mit technischen Themen zu beschäftigen.`);
}

if(section==="experience"){
fadeChange(`<h2>Erfahrungen</h2>
<p>Während meiner Schulzeit habe ich erste praktische Erfahrungen im IT-Bereich gesammelt... motivieren mich, meine Kenntnisse kontinuierlich auszubauen.</p>`);
}

if(section==="interests"){
fadeChange(`Mein Interesse an der Informationstechnologie entwickelte sich schon früh... meine Interessen in der IT weiter zu vertiefen.`);
}

if(section==="skills"){
fadeChange(`<h2>Grundkenntnisse in IT</h2><p>PC & Windows, Hardware, Netzwerke, HTML, CSS, JavaScript u.v.m.</p>`);
}
}

loadSection("overview");
