
function userTypeChange(){

    var userType = document.getElementById("user-type");
    var display_email_type=userType.options[userType.selectedIndex].text;
    if (display_email_type === "Non OK$ Top-Up Customer") {
        $("#individual").removeClass("display").addClass("display-none")
        $("#non").removeClass("display-none").addClass("display")
        $("#select-non").removeClass("display-none").addClass("display")
        var ele = document.getElementsByName("radio-button");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        $("#showScheduleRadio").addClass("radioRowDisabled")
        $("#showScheduleRadio2").addClass("radioRowDisabled")
        $("#showCustomRadio").addClass("radioRowDisabled")
        $("#showCustomRadio2").addClass("radioRowDisabled")

        $("#showScheduleRadio1").addClass("radioRowDisabled")
        $("#showScheduleRadio22").addClass("radioRowDisabled")
        $("#showCustomRadio1").addClass("radioRowDisabled")
        $("#showCustomRadio22").addClass("radioRowDisabled")
        $("#sendNowBtn").addClass("radioRowDisabled")
        $("#saveBtn").addClass("radioRowDisabled")
        console.log("OKay")
    }
    if (display_email_type === "Individual Customer Mobile Number") {
        $("#non").removeClass("display").addClass("display-none")
        $("#select-non").removeClass("display").addClass("display-none")
        $("#individual").removeClass("display-none").addClass("display")
        var ele = document.getElementsByName("radio-button");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        $("#showScheduleRadio").addClass("radioRowDisabled")
        $("#showScheduleRadio2").addClass("radioRowDisabled")
        $("#showCustomRadio").addClass("radioRowDisabled")
        $("#showCustomRadio2").addClass("radioRowDisabled")

        $("#showScheduleRadio1").addClass("radioRowDisabled")
        $("#showScheduleRadio22").addClass("radioRowDisabled")
        $("#showCustomRadio1").addClass("radioRowDisabled")
        $("#showCustomRadio22").addClass("radioRowDisabled")
        $("#sendNowBtn1").addClass("radioRowDisabled")
        $("#saveBtn1").addClass("radioRowDisabled")
        console.log("OK")
    }

}


function smsTypeChange(){
    var smsType = document.getElementById("user-type-one");
    var display_sms_type=smsType.options[smsType.selectedIndex].text;
    if (display_sms_type === "Bulk") {
        $("#individual").removeClass("display").addClass("display-none")
        $("#non").removeClass("display-none").addClass("display")
        $("#select-non").removeClass("display-none").addClass("display")
        var ele = document.getElementsByName("radio-button");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        $("#showScheduleRadio").addClass("radioRowDisabled")
        $("#showScheduleRadio2").addClass("radioRowDisabled")
        $("#showCustomRadio").addClass("radioRowDisabled")
        $("#showCustomRadio2").addClass("radioRowDisabled")

        $("#showScheduleRadio1").addClass("radioRowDisabled")
        $("#showScheduleRadio22").addClass("radioRowDisabled")
        $("#showCustomRadio1").addClass("radioRowDisabled")
        $("#showCustomRadio22").addClass("radioRowDisabled")
        $("#sendNowBtn").addClass("radioRowDisabled")
        $("#saveBtn").addClass("radioRowDisabled")
        console.log("OKay")
    }
    if (display_sms_type === "Individual") {
        $("#non").removeClass("display").addClass("display-none")
        $("#select-non").removeClass("display").addClass("display-none")
        $("#individual").removeClass("display-none").addClass("display")
        var ele = document.getElementsByName("radio-button");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        $("#showScheduleRadio").addClass("radioRowDisabled")
        $("#showScheduleRadio2").addClass("radioRowDisabled")
        $("#showCustomRadio").addClass("radioRowDisabled")
        $("#showCustomRadio2").addClass("radioRowDisabled")

        $("#showScheduleRadio1").addClass("radioRowDisabled")
        $("#showScheduleRadio22").addClass("radioRowDisabled")
        $("#showCustomRadio1").addClass("radioRowDisabled")
        $("#showCustomRadio22").addClass("radioRowDisabled")
        $("#sendNowBtn1").addClass("radioRowDisabled")
        $("#saveBtn1").addClass("radioRowDisabled")
        console.log("OK")
    }

}
