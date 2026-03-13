let rankScore = 0;
let goals = [];

// --- EXPANDED UNIVERSITY DATABASE WITH LINKS ---
const universities = {
  "University of Auckland": {
    "Engineering (Hons)": { rank: 260, req: ["Calculus", "Physics"], note: true, link: "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-engineering-honours-behons.html" },
    "Computer Science": { rank: 210, req: [], link: "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-science-bsc.html" },
    "Biomedical Science": { rank: 280, req: ["Chemistry", "Physics"], link: "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-science-bsc.html" },
    "Health Sciences": { rank: 250, req: ["Biology", "Chemistry"], link: "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-health-sciences-bhsc.html" },
    "Law (Part I)": { rank: 260, req: [], link: "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-laws-llb.html" },
    "Commerce / Business": { rank: 210, req: [], link: "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-commerce-bcom.html" },
    "Architecture": { rank: 230, req: [], link: "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-architectural-studies-bas.html" },
    "Arts (BA)": { rank: 150, req: [], link: "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-arts-ba.html" },
    "Science (BSc - General)": { rank: 165, req: [], link: "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-science-bsc.html" }
  },
  "University of Otago": {
    "Health Sciences First Year (HSFY)": { rank: 150, req: [], note: "HSFY is required for Medicine, Dentistry, Pharmacy.", link: "https://www.otago.ac.nz/study/hsfy" },
    "Law (First Year)": { rank: 150, req: [], link: "https://www.otago.ac.nz/law/study" },
    "Commerce": { rank: 150, req: [], link: "https://www.otago.ac.nz/business/study" },
    "Science (BSc)": { rank: 150, req: [], link: "https://www.otago.ac.nz/sciences/study" },
    "Arts (BA)": { rank: 150, req: [], link: "https://www.otago.ac.nz/arts/study" }
  },
  "University of Canterbury": {
    "Engineering (First Year)": { rank: 200, req: ["Calculus", "Physics"], note: true, link: "https://www.canterbury.ac.nz/study/qualifications-and-courses/bachelor-of-engineering-with-honours" },
    "Computer Science": { rank: 150, req: [], link: "https://www.canterbury.ac.nz/study/qualifications-and-courses/bachelor-of-science/computer-science" },
    "Data Science": { rank: 150, req: ["Mathematics"], link: "https://www.canterbury.ac.nz/study/qualifications-and-courses/bachelor-of-data-science" },
    "Law": { rank: 150, req: [], link: "https://www.canterbury.ac.nz/study/qualifications-and-courses/bachelor-of-laws" },
    "Commerce": { rank: 150, req: [], link: "https://www.canterbury.ac.nz/study/qualifications-and-courses/bachelor-of-commerce" },
    "Science (BSc)": { rank: 150, req: [], link: "https://www.canterbury.ac.nz/study/qualifications-and-courses/bachelor-of-science" },
    "Fine Arts": { rank: 150, req: [], link: "https://www.canterbury.ac.nz/study/qualifications-and-courses/bachelor-of-fine-arts" }
  },
  "Victoria University of Wellington": {
    "Engineering (First Year)": { rank: 170, req: ["Calculus", "Physics"], note: true, link: "https://www.wgtn.ac.nz/explore/degrees/bachelor-of-engineering-with-honours" },
    "Architectural Studies": { rank: 170, req: [], link: "https://www.wgtn.ac.nz/explore/degrees/bachelor-of-architectural-studies" },
    "Law (First Year)": { rank: 150, req: [], link: "https://www.wgtn.ac.nz/explore/degrees/bachelor-of-laws" },
    "Commerce": { rank: 150, req: [], link: "https://www.wgtn.ac.nz/explore/degrees/bachelor-of-commerce" },
    "Computer Science": { rank: 150, req: [], link: "https://www.wgtn.ac.nz/explore/degrees/bachelor-of-science" },
    "Arts (BA)": { rank: 150, req: [], link: "https://www.wgtn.ac.nz/explore/degrees/bachelor-of-arts" },
    "Science (BSc)": { rank: 150, req: [], link: "https://www.wgtn.ac.nz/explore/degrees/bachelor-of-science" }
  },
  "AUT (Auckland University of Technology)": {
    "Engineering (Hons)": { rank: 250, req: ["Calculus", "Physics"], link: "https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/courses/bachelor-of-engineering-honours" },
    "Computer & Information Sciences": { rank: 150, req: [], link: "https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/courses/bachelor-of-computer-and-information-sciences" },
    "Business": { rank: 150, req: [], link: "https://www.aut.ac.nz/study/study-options/business/courses/bachelor-of-business" },
    "Design": { rank: 150, req: [], link: "https://www.aut.ac.nz/study/study-options/art-and-design/courses/bachelor-of-design" },
    "Communication Studies": { rank: 150, req: [], link: "https://www.aut.ac.nz/study/study-options/communications/courses/bachelor-of-communication-studies" },
    "Health Science (Nursing)": { rank: 150, req: [], link: "https://www.aut.ac.nz/study/study-options/health-sciences/courses/bachelor-of-health-science-nursing" },
    "Law": { rank: 220, req: [], link: "https://www.aut.ac.nz/study/study-options/law/courses/bachelor-of-laws" }
  },
  "University of Waikato": {
    "Engineering (Hons)": { rank: 150, req: ["Calculus", "Physics"], link: "https://www.waikato.ac.nz/study/qualifications/bachelor-of-engineering-with-honours" },
    "Computer Science": { rank: 150, req: [], link: "https://www.waikato.ac.nz/study/qualifications/bachelor-of-science" },
    "Business": { rank: 150, req: [], link: "https://www.waikato.ac.nz/study/qualifications/bachelor-of-business" },
    "Law": { rank: 150, req: [], link: "https://www.waikato.ac.nz/study/qualifications/bachelor-of-laws" },
    "Nursing": { rank: 150, req: [], link: "https://www.waikato.ac.nz/study/qualifications/bachelor-of-nursing" },
    "Arts (BA)": { rank: 150, req: [], link: "https://www.waikato.ac.nz/study/qualifications/bachelor-of-arts" },
    "Science (BSc)": { rank: 150, req: [], link: "https://www.waikato.ac.nz/study/qualifications/bachelor-of-science" }
  },
  "Massey University": {
    "Engineering (Hons)": { rank: 150, req: ["Calculus", "Physics"], link: "https://www.massey.ac.nz/study/all-qualifications-and-degrees/bachelor-of-engineering-with-honours-BEHNR/" },
    "Veterinary Science (Pre-selection)": { rank: 150, req: ["Chemistry", "Physics", "Biology"], link: "https://www.massey.ac.nz/study/all-qualifications-and-degrees/bachelor-of-veterinary-science-BVTSC/" },
    "Aviation": { rank: 150, req: [], link: "https://www.massey.ac.nz/study/all-qualifications-and-degrees/bachelor-of-aviation-BAVTN/" },
    "Business": { rank: 150, req: [], link: "https://www.massey.ac.nz/study/all-qualifications-and-degrees/bachelor-of-business-BBSNS/" },
    "Design": { rank: 150, req: [], link: "https://www.massey.ac.nz/study/all-qualifications-and-degrees/bachelor-of-design-with-honours-BDSHR/" },
    "Science (BSc)": { rank: 150, req: [], link: "https://www.massey.ac.nz/study/all-qualifications-and-degrees/bachelor-of-science-BSCNC/" }
  },
  "Lincoln University": {
    "Agricultural Science": { rank: 150, req: [], link: "https://www.lincoln.ac.nz/study/study-programmes/programme-search/bachelor-of-agricultural-science/" },
    "Environmental Management": { rank: 150, req: [], link: "https://www.lincoln.ac.nz/study/study-programmes/programme-search/bachelor-of-environmental-management/" },
    "Landscape Architecture": { rank: 150, req: [], link: "https://www.lincoln.ac.nz/study/study-programmes/programme-search/bachelor-of-landscape-architecture/" },
    "Commerce (Agriculture)": { rank: 150, req: [], link: "https://www.lincoln.ac.nz/study/study-programmes/programme-search/bachelor-of-commerce-agriculture/" },
    "Science (BSc)": { rank: 150, req: [], link: "https://www.lincoln.ac.nz/study/study-programmes/programme-search/bachelor-of-science/" }
  }
};

// --- DOM Elements ---
const excellenceEl = document.getElementById("excellence");
const meritEl = document.getElementById("merit");
const achievedEl = document.getElementById("achieved");
const rankScoreEl = document.getElementById("rankScore");
const ueReading = document.getElementById("ueReading");
const ueWriting = document.getElementById("ueWriting");
const ueNumeracy = document.getElementById("ueNumeracy");
const ueLitCard = document.getElementById("ueLitCard");
const ueNumCard = document.getElementById("ueNumCard");
const universitySelect = document.getElementById("universitySelect");
const degreeSelect = document.getElementById("degreeSelect");
const addGoalBtn = document.getElementById("addGoalBtn");
const goalList = document.getElementById("goalList");
const warningList = document.getElementById("warningList");
const subCalc = document.getElementById("subCalc");
const subPhysics = document.getElementById("subPhysics");
const subChem = document.getElementById("subChem");
const subBio = document.getElementById("subBio");
const subStats = document.getElementById("subStats");
const resetBtn = document.getElementById("resetBtn");

// --- INIT ---
window.onload = () => {
  populateUniversities();
  
  // Load saved data BEFORE attaching event listeners and calculating
  loadData();

  [excellenceEl, meritEl, achievedEl, ueReading, ueWriting, ueNumeracy,
   subCalc, subPhysics, subChem, subBio, subStats].forEach(el => {
    el.addEventListener("input", calculate);
    el.addEventListener("change", calculate);
  });
  
  addGoalBtn.addEventListener("click", addGoal);
  resetBtn.addEventListener("click", handleReset);
  calculate();
};

// --- LOCAL STORAGE FUNCTIONS ---
function saveData() {
  const appData = {
    excellence: excellenceEl.value,
    merit: meritEl.value,
    achieved: achievedEl.value,
    ueReading: ueReading.checked,
    ueWriting: ueWriting.checked,
    ueNumeracy: ueNumeracy.checked,
    subCalc: subCalc.checked,
    subPhysics: subPhysics.checked,
    subChem: subChem.checked,
    subBio: subBio.checked,
    subStats: subStats.checked,
    savedGoals: goals
  };
  localStorage.setItem('nceaRankScoreData', JSON.stringify(appData));
}

function loadData() {
  const savedData = localStorage.getItem('nceaRankScoreData');
  if (savedData) {
    const appData = JSON.parse(savedData);
    
    // Restore inputs
    excellenceEl.value = appData.excellence || 0;
    meritEl.value = appData.merit || 0;
    achievedEl.value = appData.achieved || 0;
    
    // Restore checkboxes
    ueReading.checked = appData.ueReading || false;
    ueWriting.checked = appData.ueWriting || false;
    ueNumeracy.checked = appData.ueNumeracy || false;
    subCalc.checked = appData.subCalc || false;
    subPhysics.checked = appData.subPhysics || false;
    subChem.checked = appData.subChem || false;
    subBio.checked = appData.subBio || false;
    subStats.checked = appData.subStats || false;

    // Restore goals
    goals = appData.savedGoals || [];
  }
}

function handleReset() {
  if(confirm("Are you sure you want to clear all your credits and goals? This cannot be undone.")) {
    localStorage.removeItem('nceaRankScoreData');
    location.reload(); 
  }
}

// --- CORE FUNCTIONS ---
function populateUniversities(){
  universitySelect.innerHTML = "";
  Object.keys(universities).forEach(uni=>{
    let option = document.createElement("option");
    option.value = uni; option.text = uni;
    universitySelect.appendChild(option);
  });
  universitySelect.addEventListener("change", updateDegrees);
  updateDegrees();
}

function updateDegrees(){
  const uni = universitySelect.value;
  degreeSelect.innerHTML = "";
  Object.keys(universities[uni]).forEach(deg=>{
    let option = document.createElement("option");
    option.value = deg; option.text = deg;
    degreeSelect.appendChild(option);
  });
}

function calculate(){
  let E = parseInt(excellenceEl.value)||0;
  let M = parseInt(meritEl.value)||0;
  let A = parseInt(achievedEl.value)||0;
  let remaining = 80;
  let useE = Math.min(E, remaining); remaining -= useE;
  let useM = Math.min(M, remaining); remaining -= useM;
  let useA = Math.min(A, remaining);
  
  rankScore = (useE*4)+(useM*3)+(useA*2);
  rankScore = Math.min(rankScore, 320);
  rankScoreEl.innerText = rankScore;
  
  updateUE();
  updateGoals();
  updateWarnings();
  
  // Save data every time a calculation happens
  saveData();
}

function updateUE(){
  if (ueReading.checked && ueWriting.checked) {
    ueLitCard.className = "statCard bg-green";
  } else {
    ueLitCard.className = "statCard bg-red";
  }

  if (ueNumeracy.checked) {
    ueNumCard.className = "statCard bg-green";
  } else {
    ueNumCard.className = "statCard bg-red";
  }
}

function getSubjects(){
  let s = [];
  if(subCalc.checked) s.push("Calculus");
  if(subPhysics.checked) s.push("Physics");
  if(subChem.checked) s.push("Chemistry");
  if(subBio.checked) s.push("Biology");
  if(subStats.checked) s.push("Mathematics"); // Mapped Stats/Calc broadly to math for some reqs
  return s;
}

function addGoal(){
  const uni = universitySelect.value;
  const deg = degreeSelect.value;
  const data = universities[uni][deg];
  const name = uni+" - "+deg;
  
  // Prevent duplicate goals
  if(goals.find(g=>g.name===name)) return;
  
  goals.push({name, rank:data.rank, req:data.req, note:data.note, link:data.link});
  updateGoals();
  updateWarnings();
  saveData(); // Save when goal is added
}

function removeGoal(i){
  goals.splice(i,1);
  updateGoals();
  updateWarnings();
  saveData(); // Save when goal is removed
}

function updateGoals(){
  goalList.innerHTML = "";
  const subjects = getSubjects();
  goals.forEach((g,i)=>{
    const missingSubjects = g.req.filter(r=>!subjects.includes(r));
    let statusText = "";
    let colorClass = "";

    if(missingSubjects.length>0){
      statusText = "❌ Missing: "+missingSubjects.join(", ");
      colorClass = "bg-red";
    } else if(rankScore < g.rank-20){
      statusText = "🔴 Far from required rank";
      colorClass = "bg-red";
    } else if(rankScore < g.rank){
      statusText = "⚠ Close to required rank";
      colorClass = "bg-orange";
    } else {
      statusText = "✔ Goal Achieved";
      colorClass = "bg-green";
    }
    
    // Handle edge case where goal rank is 0 or standard UE
    const displayRank = g.rank <= 150 ? "UE Standard (150+ recommended)" : g.rank;
    const percent = Math.min((rankScore/Math.max(g.rank, 150))*100, 100);
    
    const card = document.createElement("div");
    card.className = `goalCard ${colorClass}`;
    
    card.innerHTML = `
      <div class="goalHeader">
        <h3 style="margin:0;">${g.name}</h3>
      </div>
      <p style="margin:5px 0;"><strong>Required Rank Score:</strong> ${displayRank}</p>
      <p style="margin:5px 0;"><strong>Required Subjects:</strong> ${g.req.length>0 ? g.req.join(", ") : "None"}</p>
      <p style="margin:5px 0;"><strong>Your Status:</strong> ${statusText}</p>
      ${g.note ? `<p style='margin:5px 0; font-size:13px; opacity:0.8;'><i>${g.note}</i></p>` : ""}
      
      ${g.link ? `<a href="${g.link}" target="_blank" class="infoLink">Course Info ↗</a>` : ""}
      
      <div class="progressBar"><div class="progressFill" style="width:${percent}%"></div></div>
      <button class="removeBtn" onclick="removeGoal(${i})">Remove</button>
    `;
    goalList.appendChild(card);
  });
}

function updateWarnings(){
  warningList.innerHTML = "";
  const subjects = getSubjects();
  let warningCount = 0;

  goals.forEach(g=>{
    const missingSubjects = g.req.filter(r=>!subjects.includes(r));
    if(missingSubjects.length>0){
      const card = document.createElement("div");
      card.className="warningCard";
      card.innerHTML = `⚠ <b>${g.name}</b>: Missing subjects: ${missingSubjects.join(", ")}`;
      warningList.appendChild(card);
      warningCount++;
    }
  });
  
  if(!ueReading.checked || !ueWriting.checked){
    const card = document.createElement("div");
    card.className="warningCard medium";
    card.innerHTML="⚠ UE Literacy not achieved";
    warningList.appendChild(card);
    warningCount++;
  }
  
  if(!ueNumeracy.checked){
    const card = document.createElement("div");
    card.className="warningCard medium";
    card.innerHTML="⚠ UE Numeracy not achieved";
    warningList.appendChild(card);
    warningCount++;
  }
  
  if(subPhysics.checked && !subCalc.checked){
    const card = document.createElement("div");
    card.className="warningCard";
    card.innerHTML="Suggestion: Engineering and Advanced Physics usually require Calculus.";
    warningList.appendChild(card);
    warningCount++;
  }

  if (warningCount === 0) {
    warningList.innerHTML = `<p class="noWarningsPlaceholder">No warnings currently. Keep up the good work!</p>`;
  }
}