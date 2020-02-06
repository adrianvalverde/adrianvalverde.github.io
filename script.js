var source1 = [ ]
var d1 = document.getElementById("dropdown").value;

var keypress = document.getElementById("userInput");
userInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("goButton").click();
    }
});
document.getElementById("dropdown").onclick = function() {cleanslate()}

function cleanslate() {
  document.getElementById("results").innerHTML = "";
  document.getElementById("results2").innerHTML = "";
  document.getElementById("rframe").style.visibility = "hidden";
}


function changemod(){
  var ct = document.getElementById("ct").checked;
  var mri = document.getElementById("mri").checked ;
  var ct1 = document.getElementById("dropdown").value = "2";
  var ct2 = document.getElementById("dropdown").value = "3";
  var ct3 = document.getElementById("dropdown").value = "4";
  var ct4 = document.getElementById("dropdown").value = "5";
  if (ct == true){
    document.getElementById("header").innerHTML = "[searching CT database]"
  }else{
  if (mri == true){
    document.getElementById("header").innerHTML = "[<font color = red>under construsction</font color>]"
    
}  
}
}



document.getElementById("ivcontrast").onclick = function() {ivcon()}
function ivcon() {
    document.getElementById("conInfo").innerHTML = "<br><br><br>IV Contrast or Intravenous <i>(injected in the veins)</i> is a fluid used to highlight the veins and arteries inside the patient. It also illuminates the tissue of organs, so it is regularly used for most exams.";
}

document.getElementById("oralcontrast").onclick = function() {pocon()}
function pocon() {
    document.getElementById("conInfo").innerHTML = "<br><br><br>Oral contrast <i>(taken by mouth) </i> is a fluid used to hightlight the digestive tract inside a patient. It follows the path of digestion from mouth to colon, so it is used in any abdominal or pelvic studies. Oral Contrast is not used to enhance any other organ.";
   
}

function lowerit(obj) {
  obj.value=obj.value.toLowerCase();
}

function precheck(obj){
  var d1 = document.getElementById("dropdown").value;
  if (d1 == "1"){
    document.getElementById("tooltip").style.visibility = "visible";
    document.getElementById("tooltiptext").style.visibility = "visible";
    return false;
  if(d1 =! "1"){
     document.getElementById("tooltip").style.visibility = "hidden";
     document.getElementById("tooltiptext").style.visibility = "hidden";
    }
}else{
     document.getElementById("tooltip").style.visibility = "hidden";
     document.getElementById("tooltiptext").style.visibility = "hidden";
    return true;   
  }
 }


function changeinfo(){
  var d1 = document.getElementById("dropdown").value;
  if (d1 == "2"){
  source1 =  ["Ä", "headache", "headaches",                 //Non Contrast (Brain)
                   "migraines", "migraine",
                   "trauma", "fall",
                   "injury", "pain", 
                   "double vision", "memory changes",           //10
                   "memory change", "memory loss",
                   "uneven gait", "gait", 
                   "abnormal gait", "imbalance",
                   "dizzy","dizzyness", 
                   "loc", "loss of consciousness",             //20
                   "bleed", "tia", 
                   "stroke", "hemorrhage",
                   "subarachnoid hemorrhage", "hydro",
                   "hydrocephalus", "shunt",                
                   "r51","altercation",                           //30
                   "g43.909","g43",
                   "r29.810","Ä",
                   "Ä","Ä",
                   "Ä","Ä",
                   "Ä","Ä",                                     //40
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",     //50
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",     //60
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",     //70
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",     //80
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",     //90
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",     //100 
                   "tumor", "mass",                             //10 WWO Contrast (Brain)
                   "malignancy", "occult malignancy",
                   "cancer", "mets", 
                   "metastatic", "metastatic disease",
                   "♠","♠",                                       //10
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",       //20
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",       //30
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",       //40
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",       //50
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",       //60
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",       //70
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",       //80
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",       //90
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",       //100
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //10 - IV only (Brain)
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //20
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //30
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //40
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //50
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //60
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //70
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //80
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //90
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",       //100
                   "aneurysm","cow",                              //10Begin CTA Brain
                   "circle of willis","internal carotid",         
                   "communicating","communicating artery",        
                   "choroid","choroid artery",                    
                   "cerebellar","cerebellar artery",              //10 
                   "©","©","©","©","©","©","©","©","©","©",       //20
                   "©","©","©","©","©","©","©","©","©","©",       //30
                   "©","©","©","©","©","©","©","©","©","©",       //40
                   "©","©","©","©","©","©","©","©","©","©",       //50
                   "©","©","©","©","©","©","©","©","©","©",       //60
                   "©","©","©","©","©","©","©","©","©","©",       //70
                   "©","©","©","©","©","©","©","©","©","©",       //80
                   "©","©","©","©","©","©","©","©","©","©",       //90
                   "©","©","©","©","©","©","©","©","©","©",       //100
                   "poop","work sucks",                           //error code
                   "poo","i hate you",
                   "shit","fuck",
                   "ass","poopy",
                   "advanced radiology","adrian",                 //10
                   "adrian sucks","this is stupid",
                   "blagh","you suck",
                   "your mom","ligma",
                   "this sucks","this sux",
                   "work sucks","work sux",                       //20
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //30
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //40
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //50
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //60
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //70
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //80
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //90
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","test69",]      //100 End CT Head
  }else{
  if (d1 == "3"){
  source1 = ["Ä", "stone", "stones",                 //Non Contrast STN
                   "salivary gland stones", "salivary gland stone",
                   "Ä","Ä",
                   "Ä","Ä",
                   "Ä","Ä",                                 //10
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //20
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //30
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //40
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //50
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //60
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //70
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //80
                   "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //90
		               "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //100 
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //10 wwo
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //20 
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //30
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //40
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //50
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //60
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //70
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //80
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //90
                   "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠", //100
                   "lymph nodes", "enlarged lymph node",    //W Contrast STN
                   "lymph node", "lymphadenopathy",
                   "enlarged node", "palpable mass",
                   "mass", "tumor", 
                   "cancer", "vocal chords",                //10
                   "paralyzed vocal chords", "vocal chord",
                   "paralysis", "thyroid", 
                   "thyroid mass", "pain",
                   "sialadenitis","mets",
                   "bump", "lump",                          //20
 	                 "swelling","swell",
                   "swollen","generalized swelling",
                   "node","lymph",
                   "δ","δ",
                   "δ","δ",                                //30
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
                   "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
	                 "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
                   "aneurysm", "carotid",
                   "carotid artery", "carotid arteries",
                   "stenosis", "carotid artery stenosis",
                   "carotid endarterectomy", "endarterectomy",
                   "aneurysm","℗",                            //10 CTA NECK
                   "℗","℗","℗","℗","℗","℗","℗","℗","℗","℗",
                   "℗","℗","℗","℗","℗","℗","℗","℗","℗","℗", 
                   "℗","℗","℗","℗","℗","℗","℗","℗","℗","℗", 
                   "℗","℗","℗","℗","℗","℗","℗","℗","℗","℗", 
                   "℗","℗","℗","℗","℗","℗","℗","℗","℗","℗", 
                   "℗","℗","℗","℗","℗","℗","℗","℗","℗","℗", 
                   "℗","℗","℗","℗","℗","℗","℗","℗","℗","℗", 
                   "℗","℗","℗","℗","℗","℗","℗","℗","℗","℗", 
                   "℗","℗","℗","℗","℗","℗","℗","℗","℗","℗", 
                   "poop","work sucks",                           //error code
                   "poo","i hate you",
                   "shit","fuck",
                   "ass","poopy",
                   "advanced radiology","adrian",                 //10
                   "adrian sucks","this is stupid",
                   "blagh","you suck",
                   "your mom","ligma",
                   "this sucks","this sux",
                   "work sucks","work sux",                       //20
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //30
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //40
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //50
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //60
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //70
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //80
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //90
                   "¶","¶","¶","¶","¶","¶","¶","¶","¶","test69"]       //100 End CT STN
  }else{
  if (d1 == "4"){
  source1 = ["Ä","asbestosis", "bronchiectasis",
             "cough", "copd",
             "chronic obstrusctive pulmonary disease", "emphysema",
             "ill", "interstitial lung disease",
             "low dose", "low-dose",                    //10
             "screening", "nodule", 
             "pulmonary nodule", "nodules", 
             "pulmonary nodules", "ground glass",
             "ground-glass", "sarcoidosis", 
             "sarcoid", "chest pain",                   //20
             "pain", "smoker", 
             "shadow", "node",
             "rib fracture","rib",
             "broken rib","Ä",
             "Ä","Ä",                                   //30
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "cancer", "mets",
             "metastatic", "metastatic disease",
             "lung mets", "pain",
             "weight loss", "wt loss",
             "sob", "shortness of breath",
             "sarcoma", "lymph nodes", 
             "enlarged lymph node", "lymph node",
             "lymphadenopathy","δ",
             "δ","δ",
             "δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "aneurysm", "taa",
             "thoracic aortic aneurysm", "ascending aorta",
             "aortic dilation", "dilation",
             "dissection", "graft", 
             "stent","pe", 
             "pulmonary embolism", "embolism",
             "♫","♫",
             "♫","♫",
             "♫","♫",
             "♫","♫",
             "♫","♫","♫","♫","♫","♫","♫","♫","♫","♫",
             "♫","♫","♫","♫","♫","♫","♫","♫","♫","♫",
             "♫","♫","♫","♫","♫","♫","♫","♫","♫","♫",
             "♫","♫","♫","♫","♫","♫","♫","♫","♫","♫",
             "♫","♫","♫","♫","♫","♫","♫","♫","♫","♫",
             "♫","♫","♫","♫","♫","♫","♫","♫","♫","♫",
             "♫","♫","♫","♫","♫","♫","♫","♫","♫","♫",
             "♫","♫","♫","♫","♫","♫","♫","♫","♫","♫",
             "poop","work sucks",                           //error code
             "poo","i hate you",
             "shit","fuck",
             "ass","poopy",
             "advanced radiology","adrian",                 //10
             "adrian sucks","this is stupid",
             "blagh","you suck",
             "your mom","ligma",
             "this sucks","this sux",
             "work sucks","work sux",                       //20
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //30
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //40
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //50
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //60
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //70
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //80
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //90
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","test69"]       //100 end chest
   }else{
  if (d1 == "5"){
  source1 = ["Ä","kidney stones", "kidney stone",
             "renal stones", "renal stone",
             "stones", "ureteral stone",
             "ureteral stones","bladder stone",
             "bladder stones", "renal colic",           //10
             "kidney colic","stone",
             "renal calculi","Ä",                 
             "Ä","Ä",
             "Ä","Ä",
             "Ä","Ä",                                   //20
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä", //100 Non Contrast
             "seeding", "prostate implants",
             "post brachytherapy", "dr. ioffe",
             "prostate seed","prostate seed implants", 
             "seed implants","§",
             "§","§",
             "§","§","§","§","§","§","§","§","§","§",
             "§","§","§","§","§","§","§","§","§","§",
             "§","§","§","§","§","§","§","§","§","§",
             "§","§","§","§","§","§","§","§","§","§",
             "§","§","§","§","§","§","§","§","§","§",
             "§","§","§","§","§","§","§","§","§","§",
             "§","§","§","§","§","§","§","§","§","§",
             "§","§","§","§","§","§","§","§","§","§",
             "§","§","§","§","§","§","§","§","§","seeds",     //end dry pelvis
             "adrenal mass","adrenal",                      //dry abdomen
             "↬","↬",
             "↬","↬",
             "↬","↬",
             "↬","↬",
             "↬","↬","↬","↬","↬","↬","↬","↬","↬","↬",
             "↬","↬","↬","↬","↬","↬","↬","↬","↬","↬",
             "↬","↬","↬","↬","↬","↬","↬","↬","↬","↬",
             "↬","↬","↬","↬","↬","↬","↬","↬","↬","↬",
             "↬","↬","↬","↬","↬","↬","↬","↬","↬","↬",
             "↬","↬","↬","↬","↬","↬","↬","↬","↬","↬",
             "↬","↬","↬","↬","↬","↬","↬","↬","↬","↬",
             "↬","↬","↬","↬","↬","↬","↬","↬","↬","↬",
             "↬","↬","↬","↬","↬","↬","↬","↬","↬","↬",   //end dry abd 100
             "pancreatitis","pancreas",
             "pancreatic mass","pancreatic",
             "liver","liver mass",
             "liver cyst","mass on liver",
             "liver hemangioma","cirrhosis",
             "alk phos","lft",
             "liver function test","↬",
             "tri-phase","3 phase",
             "tri phase","dual phase",
             "liver functions test","hepatitis",
             "alkaline phosphatase","►",
             "dual-phase","►",
             "►","►",
             "►","►",
             "►","►",
             "►","►","►","►","►","►","►","►","►","►",
             "►","►","►","►","►","►","►","►","►","►",
             "►","►","►","►","►","►","►","►","►","►",
             "►","►","►","►","►","►","►","►","►","►",
             "►","►","►","►","►","►","►","►","►","►",
             "►","►","►","►","►","►","►","►","►","►",
             "►","►","►","►","►","►","►","►","►","►",         //end abd with 100
             "hematuria","microhematuria",                   //begin wwo abd pel
             "microscopic hematuria","gross hematuria",
             "blood in urine","uti",
             "uti symptoms","bladder",
             "bladder infection","ivp",        
             "ctivp","ct ivp",
             "cystitis","urogram",
             "↕","↕",
             "↕","↕",
             "↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",           //end abd pel wwo
             "pain", "abdominal pain",                          //begin CT Ap W PO/IV
             "ruq", "luq",
             "llq", "rlq",
             "epigastric", "epigastric pain",
             "lug pain", "ruq pain",
             "llq pain", "rlq pain",
             "diffuse", "diffused pain",
             "diffused", "fever",
             "nausea", "vomiting",
             "constipation", "diarrhea",
             "fever", "appendicitis",
             "appy","colon", 
             "colon cancer", "diverticulitis",
             "diverticulosis", "gerd",
             "gastritis", "bloating",
             "distention", "hernia",
             "ventral hernia", "inguinal", 
             "inguinal hernia", "mets",
             "gist","abdominal mass",
             "dermoid","obstruction",
             "sbo","wt loss",
             "weight loss","hiatal",
             "hiatal hernia","r/o mets",
             "metastasis","metastatic",
             "fistula","mass",
             "metastatic disease","lymph node",
             "lymphadenopathy","Ü",
             "cancer","node",
             "Ü","Ü",
             "Ü","Ü",
             "Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü",
             "Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü",
             "Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü",
             "Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü","Ü",         //end ct ap po/iv
             "aneurysm","aaa",
             "renal artery","artery",
             "sma","aortic aneurysm",
             "aortic","aortic dissection",
             "mesenteric ischemia","ischemia",
             "nutcracker","nut cracker",
             "nutcracker syndrome","nut cracker syndrome",
             "superior mesenteric","mesenteric",
             "❖","❖","❖","❖",
             "❖","❖","❖","❖","❖","❖","❖","❖","❖","❖",
             "❖","❖","❖","❖","❖","❖","❖","❖","❖","❖",
             "❖","❖","❖","❖","❖","❖","❖","❖","❖","❖",
             "❖","❖","❖","❖","❖","❖","❖","❖","❖","❖",
             "❖","❖","❖","❖","❖","❖","❖","❖","❖","❖",
             "❖","❖","❖","❖","❖","❖","❖","❖","❖","❖",
             "❖","❖","❖","❖","❖","❖","❖","❖","❖","❖",
             "❖","❖","❖","❖","❖","❖","❖","❖","❖","❖",
             "poop","work sucks",                           //error code
             "poo","i hate you",
             "shit","fuck",
             "ass","poopy",
             "advanced radiology","adrian",                 //10
             "adrian sucks","this is stupid",
             "blagh","you suck",
             "your mom","ligma",
             "this sucks","this sux",
             "work sucks","work sux",                       //20
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //30
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //40
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //50
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //60
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //70
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //80
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶",       //90
             "¶","¶","¶","¶","¶","¶","¶","¶","¶","¶"]
  }
  }
 }
}
}

function search(){
  var d1 = document.getElementById("dropdown").value;
  var input = document.getElementById("userInput").value;
  var action = source1.indexOf(input.trim());
  while (d1 == "2"){ //big brain time
  if (action > -1&&action <= 100){
  document.getElementById("results").innerHTML = "<br>CPT 70450 CT Brain WO";
  document.getElementById("results2").innerHTML = "<font color = blue>No IV No Oral Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
  }else{   //WO Brain
  if (action > 100&&action <= 200){
  document.getElementById("results").innerHTML = "<br>CPT 70470 CT Brain W/WO";
  document.getElementById("results2").innerHTML = "<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
  }else{  //WWO Brain
  if (action > 200&&action <= 300){
  document.getElementById("results").innerHTML = "<br>CPT 70460 CT Head W";
  document.getElementById("results2").innerHTML = "<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break; 
      }else{  //W Brain
  if (action > 300&&action <=400){
  document.getElementById("results").innerHTML = "<br>CPT 70496 CTA Head W/WO";
  document.getElementById("results2").innerHTML = "<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
     }else{   //CTA Brain
  if (action > 400&&action <=500){
  document.getElementById("results").innerHTML = "<br>BAD LANGUAGE DETECTED";
  document.getElementById("results2").innerHTML = "<font color = red>...maybe try taking a break?</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
      }else{   //Error
  document.getElementById("rframe").style.visibility = "hidden";
  document.getElementById("results2").innerHTML = "<i><font color = red>I'm sorry I couldnt find an answer for that, try:</i> <br><br></font color>1.Checking the spelling and search again.<br>2. Try a similiar word (ex:<strike> hurts</strike> pain )<br>3. Did you select the appropriate body part?<br><font color = blue>Have you found a bug? A mistake?<br> Send me an email and tell me about it<br>@ ctcontrast@gmx.com<br>I'll fix it right away :) </font color>"; break;  //NA 
      }
     }
    }
   }        
  }
 } 
  while (d1 == "3"){  //neck
  if (action > -1&&action <= 100){
  document.getElementById("results").innerHTML = "<br>CPT 70490 Soft Tissue Neck WO Contrast";
  document.getElementById("results2").innerHTML = "<font color = blue>No IV No Oral Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > -1&&action <= 100){
  document.getElementById("results").innerHTML = "<br>CPT 70490 Soft Tissue Neck WO Contrast";
  document.getElementById("results2").innerHTML = "<font color = blue>No IV No Oral Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > 100&&action <= 200){
  document.getElementById("results").innerHTML = "<br>CPT 70492 Soft Tissue Neck W/WO";
  document.getElementById("results2").innerHTML = "<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > 200&&action <= 300){
  document.getElementById("results").innerHTML = "<br>CPT 70491 Soft Tissue Neck W";
  document.getElementById("results2").innerHTML = "<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > 300&&action <= 400){
  document.getElementById("results").innerHTML = "<br>CPT 70498 CTA Neck W/WO";
  document.getElementById("results2").innerHTML = "<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > 400&&action <= 500){
  document.getElementById("results").innerHTML = "<br>BAD LANGUAGE DETECTED";
  document.getElementById("results2").innerHTML = "<font color = red>...maybe try taking a break?</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  document.getElementById("rframe").style.visibility = "hidden";
  document.getElementById("results2").innerHTML = "<i><font color = red>I'm sorry I couldnt find an answer for that, try:</i> <br><br></font color>1.Checking the spelling and search again.<br>2. Try a similiar word (ex:<strike> hurts</strike> pain )<br><font color = blue>Have you found a bug? A mistake?<br> Send me an email and tell me about it<br>@ ctcontrast@gmx.com<br>I'll fix it right away :) </font color>"; break;  //NA 
       }   
      } 
     }    
    }
   }
  }
 } 
  while (d1 =="4"){  //chest
  if(action > -1&&action <= 100){
  document.getElementById("results").innerHTML = "<br>CPT 71250 Chest WO";
  document.getElementById("results2").innerHTML = "<font color = blue>No IV or Oral Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  if(action > 100&&action <= 200){
  document.getElementById("results").innerHTML = "<br>CPT 71260 Chest W";
  document.getElementById("results2").innerHTML = "<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  if(action > 200&&action <= 300){
  document.getElementById("results").innerHTML = "<br>CPT 71275 CTA Chest W/WO";
  document.getElementById("results2").innerHTML = "<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > 300&&action <= 400){
  document.getElementById("results").innerHTML = "<br>BAD LANGUAGE DETECTED";
  document.getElementById("results2").innerHTML = "<font color = red>...maybe try taking a break?</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  document.getElementById("rframe").style.visibility = "hidden";
  document.getElementById("results2").innerHTML = "<i><font color = red>I'm sorry I couldnt find an answer for that, try:</i> <br><br></font color>1.Checking the spelling and search again.<br>2. Try a similiar word (ex:<strike> hurts</strike> pain )<br><font color = blue>Have you found a bug? A mistake?<br> Send me an email and tell me about it<br>@ ctcontrast@gmx.com<br>I'll fix it right away :) </font color>"; break;  //NA 
      }
     }
    }
   }
  }
  while (d1 == "5"){  //abdomen pelvis
  if(action > -1&&action <=100){
  document.getElementById("results").innerHTML = "<br>CPT 74176 CT Abdomen Pelvis WO";
  document.getElementById("results2").innerHTML = "<font color = blue>No Oral or IV Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
   }else{
  if(action > 100&&action <=200){
  document.getElementById("results").innerHTML = "<br>CPT 72192 CT Pelvis WO Contrast";
  document.getElementById("results2").innerHTML = "<font color = blue>No Oral or IV Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
  }else{
    if(action > 200&&action <=300){
  document.getElementById("results").innerHTML = "<br>CPT 72192 CT Abdomen WO Contrast";
  document.getElementById("results2").innerHTML = "<font color = blue>No Oral or IV Contrast<br><br><font color = red>Note: This exam does not include a pelvis, <br>if a pelvis is also requested please use<br>CPT 74146</font color><br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
          if(action > 300&&action <=400){
  document.getElementById("results").innerHTML = "<br>CPT 74160 CT Abdomen W Contrast";
  document.getElementById("results2").innerHTML ="<font color = blue>IV Contrast ONLY<br><br><font color = red>Note: This exam does not include a pelvis, <br>if a pelvis is also requested please use<br>CPT 74147</font color><br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
     }else{
          if(action > 400&&action <=500){
  document.getElementById("results").innerHTML = "<br>CPT 74178 CT Abdomen/Pelvis W/WO";
  document.getElementById("results2").innerHTML ="<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
          if(action > 500&&action <=600){
  document.getElementById("results").innerHTML = "<br>CPT 74177 CT Abdomen/Pelvis";
  document.getElementById("results2").innerHTML ="<font color = blue>IV Contrast and Oral Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
   }else{
          if(action > 600&&action <=700){
  document.getElementById("results").innerHTML = "<br>CPT 74174 CTA Abdomen/Pelvis";
  document.getElementById("results2").innerHTML ="<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
   }else{
  if (action > 700&&action <= 800){
  document.getElementById("results").innerHTML = "<br>BAD LANGUAGE DETECTED";
  document.getElementById("results2").innerHTML = "<font color = red>...maybe try taking a break?</font color>";
  document.getElementById("rframe").style.visibility = "visible";
  document.getElementById("rframe").style.backgroundColor = "#c5edcc"; break;
    }else{
  document.getElementById("rframe").style.visibility = "hidden";
  document.getElementById("results2").innerHTML = "<i><font color = red>I'm sorry I couldnt find an answer for that, try:</i> <br><br></font color>1.Checking the spelling and search again.<br>2. Try a similiar word (ex:<strike> hurts</strike> pain )<br><font color = blue>Have you found a bug? A mistake?<br> Send me an email and tell me about it<br>@ ctcontrast@gmx.com<br>I'll fix it right away :) </font color>"; break;  //NA 
         }
        }
       }
      }
     }
    }
   }
  }
 }
}

  
//Ä = Non-Contrast              (Total 100)
//♠ = With and Without Contrast (Total 100)
//δ = IV Contrast only          (Total 100)
//Ü = CT AP Oral IV             (Total 100)
//• = Arthrogram                (Total 100)
//© = CTA Head                  (Total 100)
//℗ = CTA Neck                  (Total 100)
//♫= CTA Chest                  (Total 100)
//❖ = CTA Abdomen/Pelvis       (Total 100)
//☼ = CT Abdomen WWO            (100 Total)
//► = CT Abdomen W              (100 Total)
//§ = CT Pelvis - MSK/Dry       (100 Total)
//↕ = CT Urogram                (100 Total)
//¶ = Error                     (Total 100)