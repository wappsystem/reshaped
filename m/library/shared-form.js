//-------------------------------------
var participant_name=function(record){ 
    console.log(JSON.stringify(record))
        if(record.Data.Randomisation_Number!=undefined && record.Data.Randomisation_Number!='') {console.log("A"); return record.Data.Randomisation_Number; }
        else if(record.Data.Screening_Number!=undefined && record.Data.Screening_Number!='') {console.log("B"); return record.Data.Screening_Number; }
        else if(record.Data.Pre_Screening_Number!=undefined && record.Data.Pre_Screening_Number!='') {console.log("B"); return record.Data.Pre_Screening_Number; }
        else return record.UID;}
//-------------------------------------
var query;
//auto select particpant
var autocomplete_req_p//={cmd:"find",table:$vm.module_list['participant-data'].Table,query:site_query,options:{},skip:0,limit:10}
var autocomplete_callback_p//=function(items){ $("#F__ID input[name=Participant_uid]").val(items["UID"]);}
var autocomplete_list_p /*=function(records){
    var items=[];
    for(var i=0;i<records.length;i++){
        var obj={};
        if(records[i].Data.Subject_ID!= undefined ) obj.label=records[i].Data.Subject_ID;
        else obj.label=records[i].UID;
        obj['UID']=records[i].UID;
        items.push(obj);
    }
    return items;
}*/
var wait1=function(){
    $vm.autocomplete($('#Participant__ID'),autocomplete_req_p,autocomplete_list_p,autocomplete_callback_p);
}
var I=0; var loop_1=setInterval(function (){
    if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_1); wait1(); }
    I++; if(I>50){ clearInterval(loop_1); alert("jquery-ui.min.js is not installed."); }
},100);
//-------------------------------------
//auto fill participant
var site_query;
var query;
var dob='';
var load=m.load;
m.load=function(){
    //console.log($vm.module_list["participant-data"])
    load();
    if($vm.online_questionnaire==1) {
        $('#pdf__ID').hide();
        $('#participant_div__ID').hide();
        $('#status_div__ID').hide();
    }
    else{
        var query_user={"Data.user_name":$vm.user_name}
        jQuery.ajaxSetup({async:false});
        $vm.request({cmd:"find",table:$vm.module_list["participant-data"].Table2,query:query_user,limit:1},function(res){
            if(res.status=='np' || res.result==undefined){
                res.result=[];
            }
            if(res.status=='np'){
                if(res.sys.tb=='on') $vm.alert("No permission. Private database table, ask the table's owner for permissions.");
                else $vm.alert("No permission.");
            }
            if(res.result[0].Data.site!=undefined){
                site_list=res.result[0].Data.site.split(',');
                query='[';
                for (var i=0;i<site_list.length;i++){
                    if(i>0) query+=',';
                    query+='{"Data.Site":"'+site_list[i]+'"}';
                }
                query+=']';
            }
        })
        jQuery.ajaxSetup({async:true});
        site_query={$or:JSON.parse(query)}
        autocomplete_req_p={cmd:"find",table:$vm.module_list['participant-data'].Table,query:site_query,options:{},skip:0,limit:10}
        autocomplete_callback_p=function(items){ $("#F__ID input[name=Participant_uid]").val(items["UID"]);}
        autocomplete_list_p=function(records){
            var items=[];
            for(var i=0;i<records.length;i++){
                var obj={};
                if(records[i].Data.Pre_Screening_Number!= undefined ) {obj.label=records[i].Data.Pre_Screening_Number;}
                else obj.label=records[i].UID;
                obj['UID']=records[i].UID;
                items.push(obj);
            }
            return items;
        }
    }
    $('#title__ID').text($vm.module_list[$vm.vm['__ID'].name].task_name);
//--------------------------
    if(m.input!=undefined && m.input.participant_record!=undefined){
        //new from child panel
        $("#F__ID input[name=Participant]").val(participant_name(m.input.participant_record));
        $("#F__ID input[name=Participant_uid]").val(m.input.participant_record.UID);
        $('#modify_reason_div__ID').css('display','none');
        $('#modify_reason__ID').removeAttr('required');
    }
    else if(m.input!=undefined && m.input.record!=undefined){
        console.log('Modify')
        $('#modify_reason_div__ID').css('display','block')
        $('#modify_reason__ID').attr('required', '');
        $('#modify_reason__ID').val("");
        $('#modify_reason_other__ID').val("");
        //modify
    }
    else{
        $('#modify_reason_div__ID').css('display','none');
        $('#modify_reason__ID').removeAttr('required');
        //new with no parent
    }
    //--------------------------
    var wait2=function(){
        $('#F__ID input[name=Participant]').prop('readonly',false);
        $('#F__ID input[name=Participant]').autocomplete( "enable" );
        if($("#F__ID input[name=Participant_uid]").val()!=''){
            $('#F__ID input[name=Participant]').prop('readonly',true);
            $('#F__ID input[name=Participant]').autocomplete( "disable" );
        }
    }
    //--------------------------
    var I2=0, loop_2=setInterval(function (){
        if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_2); wait2(); }
        I2++; if(I2>50){ clearInterval(loop_2); alert("jquery-ui.min.js is not installed.");}
    },100);
    //-------------------------------------
    if(m.load_2!=undefined) m.load_2();
}
//-------------------------------------
m.before_submit=function(data){
    if ($("#F__ID input[name=Participant]").val()=='' || $("#F__ID input[name=Participant_uid]").val()==''){
        $vm.alert("Please select a participant. Make sure Participant ID has a number.") 
        return false;    
    }
    if($("#F__ID input[name=_status]:checked").val()=='' || $("#F__ID input[name=_status]:checked").val()==undefined)
        data.sysStatus=status_of_data(data);
    else data.sysStatus=$("#F__ID input[name=_status]:checked").val()
}
//-------------------------------------
var status_of_data=function(data){
    var N1=0,N2=0;
    for(key in data){
        if(key!="" && key!="Participant" && key!="Participant_uid" && key!="sysStatus" && key!="_status"){
            console.log(key+',')//+' - '+ data[key]);
            N2++;
            if(data[key]=='') N1++;
        }
    }
    var status="#FFCC00";
    if(N1==N2)  status='#FF0000';
    else if(N1==0  || $vm.online_questionnaire==1)  	status='#00FF00';
    return status;
}
//-------------------------------------
