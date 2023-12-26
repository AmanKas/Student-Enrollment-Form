const jpdbBaseURL = "http://api.login2explore.com:5577";
const jpdbIRL = "/api/irl";
const jpdbIML = "/api/iml";
const stdDBName = "STD-DB";
const stdRelationName = "STD-Data";
const connToken = "90931923|-31949300023471701|90960821";

$("#stdroll").focus();

function validateData(){
    var stdroll, stdname, stdclass, stdbtdate, stdaddress, stdeldate;
    stdroll = $('#stdroll').val();
    stdname = $('#stdname').val();
    stdclass = $('#stdclass').val();
    stdbtdate = $('#stdbtdate').val();
    stdaddress = $('#stdaddress').val();
    stdeldate = $('#stdeldate').val();
    if(stdroll === "")
    {
        alert("Please enter student roll number");
        $('#stdroll').focus();
        return "";
    }
    if(stdname === "")
    {
        alert("Please enter student name");
        $('#stdname').focus();
        return "";
    }
    if(stdclass === "")
    {
        alert("Please enter student class");
        $('#stdclass').focus();
        return "";
    }
    if(stdbtdate === "")
    {
        alert("Please enter student birth date");
        $('#stdbtdate').focus();
        return "";
    }
    if(stdaddress === "")
    {
        alert("Please enter student address");
        $('#stdaddress').focus();
        return "";
    }
    if(stdeldate === "")
    {
        alert("Please enter student enrollment date");
        $('#stdeldate').focus();
        return "";
    }
    var jsonStrObj = {
        roll:stdroll,
        name:stdname,
        class:stdclass,
        btdate:stdbtdate,
        address:stdaddress,
        eldate:stdeldate
    };
    // alert(JSON.stringify(jsonStrObj));
    return JSON.stringify(jsonStrObj);

}

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem('recno',lvData.rec_no);
}

function getStdIdAsJsonObj(){
    var stdroll = $('#stdroll').val();
    var jsonStrObj = {
        roll:stdroll
    };
    return JSON.stringify(jsonStrObj);
}

function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $('#stdname').val(record.name);
    $('#stdclass').val(record.class);
    $('#stdbtdate').val(record.btdate);
    $('#stdaddress').val(record.address);
    $('#stdeldate').val(record.eldate);

}

function getStd(){
    var stdIdJsonObj = getStdIdAsJsonObj();
    var getRequest =  createGET_BY_KEYRequest(connToken,stdDBName,stdRelationName,stdIdJsonObj);
    jQuery.ajaxSetup({async:false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest,jpdbBaseURL,jpdbIRL);
    jQuery.ajaxSetup({async:true});
    if(resJsonObj.status === 400)
    {
        $("#save").prop("disabled", false);
        $("#change").prop("disabled", true);
        $("#reset").prop("disabled", false);
        $("#stdname").focus();
    }
    else if(resJsonObj.status === 200)
    {
        $("#stdroll").prop("disabled", true);
        fillData(resJsonObj);
        $("#save").prop("disabled", true);
        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#stdname").focus();
    }
    else{
        alert("Something went wrong");
    }
}

function saveData(){
    var jsonStrObj = validateData();
    if(jsonStrObj ===""){
        return "";
    }
    var putRequest = createPUTRequest(connToken,jsonStrObj,stdDBName,stdRelationName);
    jQuery.ajaxSetup({async:false});
    var resJsonObj =  executeCommandAtGivenBaseUrl(putRequest,jpdbBaseURL,jpdbIML);
    resetForm();
    $('#stdroll').focus();
}

function changeData(){
    $("#change").prop("disabled", true);
    jsonChg = validateData();
    if(jsonChg ===""){
        return "";
    }
    var updateRequest = createUPDATERecordRequest(connToken,jsonChg,stdDBName,stdRelationName,localStorage.getItem("recno"));
    jQuery.ajaxSetup({async:false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest,jpdbBaseURL,jpdbIML);
    jQuery.ajaxSetup({async:true});
    console.log(resJsonObj); 
    resetForm();
    $('#stdroll').focus();
}

function resetForm() {
    $('#stdroll').val("");
    $('#stdname').val("");
    $('#stdclass').val("");
    $('#stdbtdate').val("");
    $('#stdaddress').val("");
    $('#stdeldate').val("");
    $('#stdroll').prop("disabled", false);
    $('#save').prop("disabled", true);
    $('#change').prop("disabled", true);
    $('#reset').prop("disabled", true);
    $('#stdroll').focus();
}