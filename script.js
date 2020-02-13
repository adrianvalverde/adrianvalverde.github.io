//please dont steal my shit.


var d1 = document.getElementById("dropdown")
var res1 = document.getElementById("results");
var res2 = document.getElementById("results2");
var reswin = document.getElementById("rframe");

var dryhead = '<br>CPT 70450 CT Brain WO';
var headwwo = '<br>CPT 70470 CT Brain W/WO';
var headw = '<br>CPT 70460 CT Head W';
var ctahead = '<br>CPT 70496 CTA Head W/WO';
var stnwo = '<br>CPT 70490 Soft Tissue Neck WO';
var stnw = '<br>CPT 70490 Soft Tissue Neck W';
var stnwwo = '<br>CPT 70490 Soft Tissue Neck WWO';
var ctaneck = '<br>CPT 70498 CTA Neck WWO';
var chestwo = '<br>CPT 71250 Chest WO';
var chestw = '<br>CPT 71260 Chest W';
var ctachest = '<br>CPT 71275 CTA Chest W/WO';
var apwo = '<br>CPT 74176 CT Abdomen Pelvis WO';
var abdwo = '<br>CPT 72192 CT Abdomen WO';
var pelwo = '<br>CPT 72192 CT Pelvis WO';
var abdw = '<br>CPT 74160 CT Abdomen W';
var abdwwo = '<br>CPT 74183 CT Abdomen WWO';
var abdpelwwo = '<br>CPT 74178 CT Abdomen/Pelvis WWO';
var abdpelw = '<br>CPT 74177 CT Abdomen/Pelvis';
var ctaabdpel = '<br>CPT 74174 CTA Abdomen/Pelvis';

var mrheadwo = '<br>CPT 70551 MRI Head WO';
var mrheadw = '<br>CPT 70552 MRI Head W';
var mrheadwwo = '<br>CPT 70553 MRI Head WWO';
var mrahead = '<br> CPT 70544 MRA Head WO';
var mriacwwo = '<br>CPT 70553 MR BRAIN & IAC WWO';
var mrpitwwo = '<br>CPT 70553 MR Brain & Pituitary WWO';
var mrorbits = '<br>CPT 70543 MRI Orbits WWO';

var err = '<br>BAD LANGUAGE DETECTED';


var dry = '<font color = blue>No IV No Oral Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>';
var ivonly = '<font color = blue>IV Contrast ONLY<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>';
noivpo = '<font color = blue>No Oral or IV Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>';
var nofind = "<i><font color = red>I'm sorry I couldnt find an answer for that, try:</i> <br><br></font color>1.Checking the spelling and search again.<br>2. Try a similiar word (ex:<strike> hurts</strike> pain )<br>3. Did you select the appropriate body part?<br><font color = blue>Have you found a bug? A mistake?<br> Send me an email and tell me about it<br>@ ctcontrast@gmx.com<br>I'll fix it right away :) </font color>"
var poiv = '<font color = blue>IV Contrast and Oral Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.';
var errmsg = '<font color = red>...maybe try taking a break?</font color>'
var adrenal = '<font color = blue>NOTE:<br>Adrenals are normally non-contrast<br>Use the code above if the doctor wants the scan to include IV Contrast.<br>(IV Only)<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>'

var nogad = '<font color = blue>No Contrast<br><br><font color = red>Use this only as a quick guide, the referring provider may order contrast differently.</font color>';
var mrmsg = "<i><font color = red>the MRI database is still being constructed, check back later for more updates.</font color>"

var ct_array = {
    2 : 'HEAD',
    3 : 'NECK',
    4 : 'CHEST',
    5 : 'ABDOMEN PELVIS'
};

var mr_array = { 
    6 : 'MR HEAD',
    7 : 'unavailable',
    8 : 'unavailable',
    9 : 'unavailable'
};


var keypress = document.getElementById("userInput");
userInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("goButton").click();
    }
});
document.getElementById("dropdown").onclick = function() {cleanslate()}


function cleanslate() {
  res1.innerHTML = "";
  res2.innerHTML = "";
  reswin.style.visibility = "hidden";
}

function changemodmr(){
  var ct = document.getElementById("ct").checked;
  var mri = document.getElementById("mri").checked;
  var select = document.getElementById("dropdown");
  if (mri == true){
  select.options.length = 1;
  for(index in mr_array){
  select.options[select.options.length] = new Option(mr_array[index], index); 
}
  document.getElementById("header").innerHTML = "[<font color = red>Limited availability; under construction</font color>]";
}
}

function changemodct(){
  var ct = document.getElementById("ct").checked;
  var mri = document.getElementById("mri").checked ;
  var select = document.getElementById("dropdown");
  if (ct == true){
  document.getElementById("header").innerHTML = "[<font color = blue>searching cat-scan database</font color>]";
  select.options.length = 1;
  for(index in ct_array){
  select.options[select.options.length] = new Option(ct_array[index], index); 
}
}
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
                   "parotid gland ","parotid",
                   "parotidectomy","δ",                                //30
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
             "↬","↬",                      //dry abdomen
             "pheochromocytoma","↬",
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
             "adrenal gland","adrenal",
             "adrenal mass","adrenals",
             "mass on adrenal","adrenal node",
             "☒","☒","☒","☒",
             "☒","☒","☒","☒","☒","☒","☒","☒","☒","☒",
             "☒","☒","☒","☒","☒","☒","☒","☒","☒","☒",
             "☒","☒","☒","☒","☒","☒","☒","☒","☒","☒",
             "☒","☒","☒","☒","☒","☒","☒","☒","☒","☒",
             "☒","☒","☒","☒","☒","☒","☒","☒","☒","☒",
             "☒","☒","☒","☒","☒","☒","☒","☒","☒","☒",
             "☒","☒","☒","☒","☒","☒","☒","☒","☒","☒",
             "☒","☒","☒","☒","☒","☒","☒","☒","☒","☒",
             "☒","☒","☒","☒","☒","☒","☒","☒","☒","☒",
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
  }else{
  if (d1 == "6"){
  source1 = ["Ä","headaches","headache",
             "pain","Ä",
             "migraine","migraines",
             "Ä","stroke",
             "tia","mini stroke",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",
             "Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä","Ä",  //mr head wo 100
             "cancer","r/o mets",                     //mr head wwo
             "mets","metastatic",
             "restaging","metastatic disease",
             "♠","seizure",
             "♠","ms",                                
             "multiple sclerosis","♠",
             "♠","♠",
             "♠","♠",
             "♠","♠",
             "♠","♠",
             "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",
             "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",
             "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",
             "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",
             "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",
             "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",
             "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",
             "♠","♠","♠","♠","♠","♠","♠","♠","♠","♠",     
             "dizzy","dizzyness",                       //iac (50)
             "hearing loss","unbalanced",
             "neuroma","acoustic",
             "acoustic neuroma","cerebellopontine",
             "cerebellopontine angle","angle",   
             "hearing loss","ear pain",
             "tinnitus","iac",
             "inner ear","δ",
             "δ","δ",
             "δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",   //50end iac
             "hormone","hormone condition",             //10start pit
             "amenoria","galactorrhea",
             "estrogen","testoserone",
             "hormonal issue","hormonal problems",
             "pituitary","pituitary adenoma",                           
             "adenoma","prolactinoma",
             "high prolactin levels","prolactin levels",
             "prolactin","high prolactin",
             "δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",
             "δ","δ","δ","δ","δ","δ","δ","δ","δ","δ",  //(50)PIT
             "optic","optic nerve",
             "↕","↕","↕","↕","↕","↕","↕","↕",  //MROrbits 
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "↕","↕","↕","↕","↕","↕","↕","↕","↕","↕",
             "aneurysm","cow",                              //10Begin MRA head
             "circle of willis","internal carotid",         
             "communicating","communicating artery",        
             "choroid","choroid artery",                    
             "cerebellar","cerebellar artery",
             "©","©","©","©","©","©","©","©","©","©",
             "©","©","©","©","©","©","©","©","©","©",
             "©","©","©","©","©","©","©","©","©","©",
             "©","©","©","©","©","©","©","©","©","©",
             
            ]        
}
}
}
}
}
}
  
function search(){
  var input = document.getElementById("userInput").value;
  var action = source1.indexOf(input.trim());
  while (d1.value == "2"){ //big brain time
  if (action > -1&&action <= 100){
  res1.innerHTML = dryhead;
  res2.innerHTML = dry;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
  }else{   //WO Brain
  if (action > 100&&action <= 200){
  res1.innerHTML = headwwo;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
  }else{  //WWO Brain
  if (action > 200&&action <= 300){
  res1.innerHTML = headw;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break; 
      }else{  //W Brain
  if (action > 300&&action <=400){
  res1.innerHTML = ctahead;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
     }else{   //CTA Brain
  if (action > 400&&action <=500){
  res1.innerHTML = err;
  res2.innerHTML = errmsg;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
      }else{   //Error
  reswin.style.visibility = "hidden";
  res2.innerHTML = nofind; break;  //NA 
      }
     }
    }
   }        
  }
 } 
  while (d1.value == "3"){  //neck
  if (action > -1&&action <= 100){
  res1.innerHTML = stnwo;
  res2.innerHTML = dry;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > 100&&action <= 200){
  res1.innerHTML = stnwwo;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > 200&&action <= 300){
  res1.innerHTML = stnw;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > 300&&action <= 400){
  res1.innerHTML = ctaneck;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  if (action > 400&&action <= 500){
  res1.innerHTML = err;
  res2.innerHTML = errmsg;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  reswin.style.visibility = "hidden";
  res2.innerHTML = nofind; break;  //NA 
       }   
      } 
     }    
    }
   }
  }
  while (d1.value =="4"){  //chest
  if(action > -1&&action <= 100){
  res1.innerHTML = chestwo;
  res2.innerHTML = dry;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  if(action > 100&&action <= 200){
  res1.innerHTML = chestw;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  if(action > 200&&action <= 300){
  res1.innerHTML = ctachest;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  if(action > 300&&action <= 400){
  res1.innerHTML = err;
  res2.innerHTML = errmsg;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  reswin.style.visibility = "hidden";
  res2.innerHTML = nofind; break;  //NA 
      }
     }
    }
   }
  }
  while (d1.value == "5"){  //abdomen pelvis
  if(action > -1&&action <=100){
  res1.innerHTML = apwo;
  res2.innerHTML = noivpo;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
   }else{
  if(action > 100&&action <=200){
  res1.innerHTML = pelwo;
  res2.innerHTML = noivpo;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
  }else{
  if(action > 200&&action <=300){
  res1.innerHTML = abdwo;
  res2.innerHTML = noivpo;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
   }else{
  if(action > 300&&action <=400){
  res1.innerHTML = abdw
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
     }else{
  if(action > 400&&action <=500){
  res1.innerHTML = abdpelwwo;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  if(action > 500&&action <=600){
  res1.innerHTML = abdpelw;
  res2.innerHTML = poiv;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
   }else{
  if(action > 600&&action <=700){
  res1.innerHTML = ctaabdpel;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
   }else{
  if(action > 700&&action <=800){
  res1.innerHTML = abdwwo;
  res2.innerHTML = adrenal;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  if(action > 800&&action <=900){
  res1.innerHTML = err;
  res2.innerHTML = errmsg;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
    }else{
  reswin.style.visibility = "hidden";
  res2.innerHTML = nofind; break;  //NA 
         }
        }
       }
      }
     }
    }
   }
  }
 }
}while (d1.value == "6"){  //MR Head
  if(action > -1&&action <=100){
  res1.innerHTML = mrheadwo;
  res2.innerHTML = nogad;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
  }else{
  if(action > 100&&action <=200){
  res1.innerHTML = mrheadwwo;
  res2.innerHTML = ivonly;
  reswin.style.visibility = "visible";
  reswin.style.backgroundColor = "#c5edcc"; break;
  }else{
  if(action > 200&&action <=250){
  res1.innerHTML = mriacwwo;
  res2.innerHTML = ivonly
  reswin.style.visibility = 'visible';
  reswin.style.backgroundColor = '#c5edcc'; break;
  }else{
  if(action > 250&&action <=300){
  res1.innerHTML = mrpitwwo;
  res2.innerHTML = ivonly
  reswin.style.visibility = 'visible';
  reswin.style.backgroundColor = '#c5edcc'; break;  
  reswin.style.visibility = "hidden";
  res2.innerHTML = mrmsg; break;  //NA 
  }else{
  if(action > 300&&action <=350){
  res1.innerHTML = mrorbits;
  res2.innerHTML = ivonly
  reswin.style.visibility = 'visible';
  reswin.style.backgroundColor = '#c5edcc'; break;  
  reswin.style.visibility = "hidden";
  res2.innerHTML = mrmsg; break;  //NA   
  }else{
  if(action > 400&&action <=450){
  res1.innerHTML = mrahead;
  res2.innerHTML = ivonly
  reswin.style.visibility = 'visible';
  reswin.style.backgroundColor = '#c5edcc'; break;
  }else{  
  reswin.style.visibility = "hidden";
  res2.innerHTML = mrmsg; break;  //NA 
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

