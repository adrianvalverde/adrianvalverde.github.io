var source1 = []
var databank = document.getElementById("dropdown").value;


function lowerit(obj) {
  obj.value=obj.value.toLowerCase();
}

function precheck(obj){
  var databank = document.getElementById("dropdown").value;
  if (databank == "1"){
    document.getElementById("tooltip").style.visibility = "visible";
     document.getElementById("tooltiptext").style.visibility = "visible";
    return false;
    if(databank =! "1"){
     document.getElementById("tooltip").style.visibility = "hidden";
     document.getElementById("tooltiptext").style.visibility = "hidden";
    }
}else{
  document.getElementById("tooltip").style.visibility = "hidden";
     document.getElementById("tooltiptext").style.visibility = "hidden";
    return true;   
 }
}
//"Ä" = non contrast place holders
// δ = contrast place holders
// ♠ = with and without placeholders
// ,"Ü" po iv place holder

function changeinfo(){
  var databank = document.getElementById("dropdown").value;
  if (databank == "2"){
    source1.splice(1, 500, "headache", "headaches", "migraines", "migraine", "trauma", "fall", "injury", "pain", "double vision", "memory changes", "memory change", "memory loss", "uneven gait", "gait", "abnormal gait", "imbalance", "dizzy","dizzyness", "altercation", "loc", "loss of consciousness", "bleed", "tia", "stroke", "hemorrhage", "subarachnoid hemorrhage", "hydro", "hydrocephalus", "shunt", "aneurysm", "mass", "circle of willis", "cow", "cancer", "mets", "metastatic", "metastatic disease");
    }else{
      if (databank == "3"){
    source1.splice(1, 500, "stone", "stones", "salivary gland stones", "salivary gland stone", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠","lymph nodes", "enlarged lymph node", "lymph node", "lymphadenopathy", "aneurysm", "carotid", "carotid artery", "carotid arteries", "stenosis", "carotid artery stenosis", "carotid endarterectomy", "endarterectomy", "aneurysm", "enlarged node", "palpable mass", "mass", "tumor", "cancer", "vocal chords", "paralyzed vocal chords", "vocal chord", "paralysis", "thyroid", "thyroid mass", "pain", "sialadenitis", "mets", "δ", "δ", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü",  "poop", "work sucks", "poo", "i hate you", "shit", "fuck", "ass", "poopy", "advanced radiology", "adrian"); 
  }else{
      if (databank == "4"){
    source1.splice(1, 500, "asbestosis", "bronchiectasis", "cough", "copd", "chronic obstrusctive pulmonary disease", "emphysema", "ill", "interstitial lung disease", "low dose", "low-dose", "screening", "nodule", "pulmonary nodule", "nodules", "pulmonary nodules", "ground glass", "ground-glass", "sarcoidosis", "sarcoid", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "♠", "aneurysm", "taa", "thoracic aortic aneurysm", "ascending aorta", "aortic dilation", "dilation", "dissection", "graft", "stent", "cancer", "mets", "metastatic", "metastatic disease", "lung mets", "cancer", "weight loss", "wt loss", "thoracic outlet", "thoracic outlet syndrome", "pe", "pulmonary embolism", "embolism", "sob", "shortness of breath", "sarcoma", "lymph nodes", "enlarged lymph node", "lymph node", "lymphadenopathy", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "Ü", "poop", "work sucks", "poo", "i hate you", "shit", "fuck", "ass", "poopy", "advanced radiology", "adrian"); 
  }else{
      if (databank == "5"){
    source1.splice(1, 500, "kidney stones", "kidney stone", "renal stones", "renal stone", "stones", "ureteral stone", "ureteral stones","bladder stone", "bladder stones", "renal colic", "kidney colic", "seeding", "prostate implants", "post brachytherapy", "dr. ioffe", "prostate seed", "prostate seed implants", "seed implants", "Ä", "Ä", "Ä", "Ä", "Ä", "Ä", "renal calculi", "Ä", "Ä", "Ä", "Ä","aneurysm", "cystitis", "hematuria", "microhematuria", "gross hematuria", "aortic dissection", "aaa", "aortic aneurysm", "mesenteric ischemia", "ischemia", "urogram", "ct ivp", "ivp", "bladder infection", "uti", "bladder cancer", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ", "δ","pain", "abdominal pain", "ruq", "luq", "llq", "rlq", "epigastric", "epigastric pain", "lug pain", "ruq pain", "llq pain", "rlq pain", "diffuse", "diffused pain", "diffused", "fever", "nausea", "vomiting", "constipation", "diarrhea", "fever", "appendicitis", "appy", "liver", "alkaline phosphatase", "colon", "colon cancer", "diverticulitis", "diverticulosis", "gerd", "gastritis", "bloating", "distention", "hernia", "ventral hernia", "inguinal", "inguinal hernia", "mets", "liver mass", "abdominal mass", "gist", "dermoid", "abdominal mass", "obstruction", "sbo", "pancreatitis", "pancreatic mass", "pancreas", "wt loss", "weight loss", "hiatal hernia", "hiatal", "alk phos", "metastatic", "metastasis", "metastatic disease", "fistula", "hemangioma", "sarcoma", "lymph nodes", "enlarged lymph node", "lymph node", "lymphadenopathy","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü", "poop", "work sucks", "poo", "i hate you", "shit", "fuck", "ass", "poopy", "advanced radiology", "adrian" ); 
  }else{
      if (databank == "6"){
    source1.splice(1, 500, "pain", "injury", "fall", "foosh", "fracture", "fx", "orif", "mva", "trauma", "altercation","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","♠","♠","♠","♠","♠","♠","♠","♠","♠","♠","♠","♠","♠","♠","♠","♠","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","δ","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","labral tear", "tear", "labral", "labrum", "rotator cuff", "rct", "rotator cuff tear", "poop", "work sucks", "poo", "i hate you", "shit", "fuck", "ass", "poopy", "advanced radiology", "adrian"); 
     }
    }
   }
  }
 }
}

//29 non contrast slots
// 16 with and without  no oral
// 29 iv only
//66 po iv contrast
//10 misc

function search(){
  var input = document.getElementById("userInput").value;
  var action = source1.indexOf(input.trim());
  
  if (action > -1&&action <= 28){
  document.getElementById("results").innerHTML = "<br>non contrast - no oral no iv<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";     
  }else{
  if (action > 28&&action <=44){
  document.getElementById("results").innerHTML = "<br>with and without <font color=red>iv contrast</font color>-<font color=blue> no oral contrast</font color><br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>"; 
  }else{
    if (action > 44&&action <=74){
      document.getElementById("results").innerHTML = "<br>iv contrast only<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>"
      }else{
    if (action > 74&&action <=140){
      document.getElementById("results").innerHTML = "<br>Oral and IV Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
    }else{
       if (action > 140&&action <=148){
      document.getElementById("results").innerHTML = "<br>This is likely an arthrogram, check script.<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
       }else{
     if (action > 148&&action <=160){
      document.getElementById("results").innerHTML = "<br>error 404, bad language is reported to manager, just kidding."
  }else{ 
  document.getElementById("results").innerHTML = "<br><i><font color = red>I'm sorry I couldnt find an answer for that, try:</i> <br><br></font color>1.Checking the spelling and search again.<br>2. Try a similiar word (ex:<strike> hurts</strike> pain )<br>3. Did you select the appropriate body part?<br>Otherwise, please call Adrian in CT. :)";
  }
  }
    }
   }
  }
 }
}

var keypress = document.getElementById("userInput");
userInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("goButton").click();
    }
});