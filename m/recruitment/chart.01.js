//-------------------------------------
var m=$vm.module_list['__MODULE__'];
m.google=0;
m.query={};
m.sort={_id:-1}
m.projection={}
//-------------------------------------
m.set_req=function(){
};
var request_count=0;
var recruitment_rec=[];
var participant_rec=[];
//-----------------------------------------------
m.request_data=function(){
    var mt1=new Date().getTime();
    var f_cmd="find";
    $vm.request({cmd:"find",table:m.Table,query:m.query,sort:m.sort},function(res){
        if(res.status=='np' || res.result==undefined){
            res.result=[];
        }
        if(res.status=='np'){
            if(res.sys.tb=='on') $vm.alert("No permission. Private database table, ask the table's owner for permissions.");
            else $vm.alert("No permission.");
        }
        request_count++;
        recruitment_rec=res.result;
    })
    $vm.request({cmd:"find",table:m.Table2,query:m.query,sort:{_id:1}},function(res){
        if(res.status=='np' || res.result==undefined){
            res.result=[];
        }
        if(res.status=='np'){
            if(res.sys.tb=='on') $vm.alert("No permission. Private database table, ask the table's owner for permissions.");
            else $vm.alert("No permission.");
        }
        request_count++;
        participant_rec=res.result;
    })
    check();
};
//-----------------------
function check(){
    if (request_count<2){
        setTimeout(function(){
            //console.log(req_count)
            check();
        },500);
    }
    else{
        if(m.data_process!==undefined){ m.data_process(); }
    }
}
//--------------------------------------------------------

//-------------------------------------
$('#query__ID').on('click',function(){    m.set_req(); m.request_data(); })
$('#D__ID').on('load',function(){  if(m.preload==true) return; if(m.load!=undefined) m.load(); m.set_req(); m.request_data(); })
$('#D__ID').on('show',function(){  if($vm.refresh==1){$vm.refresh=0; m.set_req(); m.request_data();} })
//-------------------------------------
m.start=function(){
    if(m.google==0){
        m.google=1;
        m.set_req(); m.request_data();
    }
}
//-------------------------------------
m.I=0;
m.loop__ID=setInterval(function (){
    if($vm['loader-js']!=undefined){
        clearInterval(m.loop__ID); m.start();
    }
    m.I++; if(m.I>50){
        clearInterval(m.loop__ID); alert("Google loader.js is not installed.");
    }
},100);
//-------------------------------------
