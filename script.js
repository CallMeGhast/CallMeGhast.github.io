const content = document.getElementById("content");
const contactBox = document.getElementById("contactBox");

function toggleContact(){
  contactBox.classList.toggle("open");
}

function loadSection(section){
  if(section==="overview"){
    content.innerHTML=`Ich habe meinen Schulabschluss nach der 10. Klasse gemacht und habe seit jungen Jahren großes Interesse an der IT...`;
  }

  if(section==="skills"){
    content.innerHTML=`
<h2>Grundkenntnisse in Informationstechnologie</h2>
<p>PC- & Windows-Kenntnisse<br>Umgang mit Hardware<br>Grundverständnis von Netzwerken<br>Sicherer Umgang mit Internet & E-Mail<br>Microsoft Office / Google Docs<br>Grundkenntnisse im Umgang mit Software & Updates<br>Schnelle Auffassungsgabe bei neuen Programmen<br>Grundwissen im Aufbau von Programmiersprachen<br>Erste Erfahrungen mit CSS, HTML, JavaScript</p>

<h2>Sprachen</h2>
<p>Deutsch – sehr gut<br>Englisch – fließend<br>Arabisch – fließend</p>

<h2>Kommunikations-Skills</h2>
<p>Freundlicher Umgang mit Kunden / Kollegen<br>Technische Probleme einfach erklären<br>Hilfsbereitschaft</p>

<h2>Persönliche Stärken</h2>
<p>Problemlösungsorientiert<br>Zuverlässig & Pünktlich<br>Lernbereit<br>Selbstständig<br>Teamfähig<br>Geduldig<br>Sorgfältig<br>Verantwortungsbewusst</p>
`;
  }

  if(section==="interests"){
    content.innerHTML=`Mein Interesse an der Informationstechnologie entwickelte sich schon früh...`;
  }

  if(section==="experience"){
    content.innerHTML=`Not added yet.`;
  }
}

loadSection("overview");
