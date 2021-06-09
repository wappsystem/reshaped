(function(){
    var modules={
        "panel-main-reshaped":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child-reshaped":              {url:"$H/m/panel-child.html"},
        "panel-library-reshaped":    		{url:"$H/m/panel-library.html",router:1},
        "panel-export-screening-reshaped":   {url:"$H/m/export/panel-export-screened.html",router:1},
        "panel-export-enrolled-reshaped":    {url:"$H/m/export/panel-export-enrolled.html",router:1},
        "export-data":		                {url:"$H/m/export/export-data.html",Table:"export-reshaped",form_module:"export-form"},
        "export-form":		                {url:"$H/m/export/export-form.html",Table:"export-reshaped"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"participant-reshaped",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-reshaped",
                                                questionnaire_setup:"online-questionnaire-setup-reshaped",
                                                online_questionnaire:"online-questionnaire-app-reshaped",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                                                participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB",
                                            },
       "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"participant-reshaped"},

        "online-questionnaire-setup-reshaped": {url:"$H/m/oq-setup.html",Table:"participant-reshaped"},
        "online-questionnaire-app-reshaped":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"notes-reshaped",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"notes-reshaped"},

        "randomisation-table-data-reshaped":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-reshaped",form_module:"randomisation-table-form-reshaped"},
        "randomisation-table-form-reshaped":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-reshaped"},

        "file-notes-data-reshaped":		{url:"$H/m/library/file-notes-data.html",Table:"file-notes-reshaped",form_module:"file-notes-form-reshaped",task_name:"Unscheduled - File Notes"},
        "file-notes-form-reshaped":		{url:"$H/m/library/file-notes-form.html",Table:"file-notes-reshaped",task_name:"Unscheduled - File Notes"},
        "consent-ps-data-reshaped":		        {url:"$H/m/library/consent-data.html",Table:"consent-ps-reshaped",form_module:"consent-ps-form-reshaped",task_name:"Pre-screening - Consent"},
        "consent-ps-form-reshaped":		        {url:"$H/m/library/consent-form.html",Table:"consent-ps-reshaped",task_name:"Pre-screening - Consent"},
        "consent-s-data-reshaped":		        {url:"$H/m/library/consent-data.html",Table:"consent-s-reshaped",form_module:"consent-s-form-reshaped",task_name:"Screening - Consent"},
        "consent-s-form-reshaped":		        {url:"$H/m/library/consent-form.html",Table:"consent-s-reshaped",task_name:"Screening - Consent"},
        "date-ps-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-ps-reshaped",form_module:"date-ps-form-reshaped",task_name:"Pre-screening - Visit Date"},
        "date-ps-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-ps-reshaped",task_name:"Screening - Visit Date"},
        "date-s-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-s-reshaped",form_module:"date-s-form-reshaped",task_name:"Screening - Visit Date"},
        "date-s-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-s-reshaped",task_name:"Screening - Visit Date"},
        "date-bl-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-bl-reshaped",form_module:"date-bl-form-reshaped",task_name:"Baseline - Visit Date"},
        "date-bl-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-bl-reshaped",task_name:"Baseline - Visit Date"},
        "wristox-ps-data-reshaped":	    {url:"$H/m/library/wristox-data.html",Table:"wristox-ps-reshaped",form_module:"wristox-ps-form-reshaped",task_name:"Pre-screening - Wristox"},
        "wristox-ps-form-reshaped":	    {url:"$H/m/library/wristox-form.html",Table:"wristox-ps-reshaped",task_name:"Pre-screening - Wristox"},
        "mmse-ps-data-reshaped":	    {url:"$H/m/library/mmse-data.html",Table:"mmse-ps-reshaped",form_module:"mmse-ps-form-reshaped",task_name:"Pre-screening - MMSE"},
        "mmse-ps-form-reshaped":	    {url:"$H/m/library/mmse-form.html",Table:"mmse-ps-reshaped",task_name:"Pre-screening - MMSE"},
        "medical-history-s-data-reshaped":	    {url:"$H/m/library/medical-history-data.html",Table:"medical-history-s-reshaped",form_module:"medical-history-s-form-reshaped",task_name:"Screening - Medical History Questionnaire"},
        "medical-history-s-form-reshaped":	    {url:"$H/m/library/medical-history-form.html",Table:"medical-history-s-reshaped",task_name:"Screening - Medical History Questionnaire"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
            $vm.module_list[p].Table2="demo-"+$vm.module_list[p].Table2;
        }
    //}

})();
