(function(){
    var modules={
        "panel-main-reshaped":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child-reshaped":              {url:"$H/m/panel-child.html"},
        "panel-library-reshaped":    		{url:"$H/m/panel-library.html",router:1},
        "panel-export-screening-reshaped":   {url:"$H/m/export/panel-export-screened.html",router:1},
        "panel-export-enrolled-reshaped":    {url:"$H/m/export/panel-export-enrolled.html",router:1},
        "export-data":		                {url:"$H/m/export/export-data.html",Table:"export-reshaped",form_module:"export-form"},
        "export-form":		                {url:"$H/m/export/export-form.html",Table:"export-reshaped"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"reshaped-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-reshaped",
                                                questionnaire_setup:"online-questionnaire-setup-reshaped",
                                                online_questionnaire:"online-questionnaire-app-reshaped",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                                                participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB"
                                            },
       "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"reshaped-participant"},

        "online-questionnaire-setup-reshaped": {url:"$H/m/oq-setup.html",Table:"reshaped-participant"},
        "online-questionnaire-app-reshaped":   {url:"$H/oq.html"},

        "progress-reshaped-data":   		{url:"$H/m/participant/progress-data.html",Table:"reshaped-participant",form_module:"progress-reshaped-form"},
        "progress-reshaped-form":              {url:"$H/m/participant/progress-form.html",Table:"reshaped-participant",task_name:"Progress"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"reshaped-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"reshaped-notes"},

        "randomisation-table-data-reshaped":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-reshaped",form_module:"randomisation-table-form-reshaped"},
        "randomisation-table-form-reshaped":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-reshaped"},

        "file-notes-data-reshaped":		{url:"$H/m/library/file-notes-data.html",Table:"file-notes-reshaped",form_module:"file-notes-form-reshaped",task_name:"Unscheduled - File Notes"},
        "file-notes-form-reshaped":		{url:"$H/m/library/file-notes-form.html",Table:"file-notes-reshaped",task_name:"Unscheduled - File Notes"},
        "consent-data-reshaped":		        {url:"$H/m/library/consent-data.html",Table:"consent-reshaped",form_module:"consent-form-reshaped",task_name:"Self Report Screening - Consent"},
        "consent-form-reshaped":		        {url:"$H/m/library/consent-form.html",Table:"consent-reshaped",task_name:"Self Report Screening - Consent"},
        "gds-data-reshaped":		{url:"$H/m/library/gds-data.html",Table:"gds-reshaped",form_module:"gds-form-reshaped",task_name:"Self Report Screening - Geriatric Depression Scale"},
        "gds-form-reshaped":		{url:"$H/m/library/gds-form.html",Table:"gds-reshaped",task_name:"Self Report Screening - Geriatric Depression Scale"},
        "isi-data-reshaped":	    {url:"$H/m/library/isi-data.html",Table:"isi-reshaped",form_module:"isi-form-reshaped",task_name:"Self Report Screening - Insomnia Severity Index"},
        "isi-form-reshaped":	    {url:"$H/m/library/isi-form.html",Table:"isi-reshaped",task_name:"Self Report Screening - Insomnia Severity Index"},
        "medical-history-data-reshaped":	    {url:"$H/m/library/medical-history-data.html",Table:"medical-history-reshaped",form_module:"medical-history-form-reshaped",task_name:"Self Report Screening - Medical History Questionnaire"},
        "medical-history-form-reshaped":	    {url:"$H/m/library/medical-history-form.html",Table:"medical-history-reshaped",task_name:"Self Report Screening - Medical History Questionnaire"},
        "medication-data-reshaped":	    {url:"$H/m/library/medications-data.html",Table:"medication-reshaped",form_module:"medication-form-reshaped",task_name:"Self Report Screening - Medication Questionnaire"},
        "medication-form-reshaped":	    {url:"$H/m/library/medications-form.html",Table:"medication-reshaped",task_name:"Self Report Screening - Medication Questionnaire"},
        "lifestyle-data-reshaped":	    {url:"$H/m/library/lifestyle-data.html",Table:"lifestyle-reshaped",form_module:"lifestyle-form-reshaped",task_name:"Self Report Screening - Lifestyle questionnaire"},
        "lifestyle-form-reshaped":	    {url:"$H/m/library/lifestyle-form.html",Table:"lifestyle-reshaped",task_name:"Self Report Screening - Lifestyle questionnaire"},
        "ethnicity-data-reshaped":	    {url:"$H/m/library/ethnicity-data.html",Table:"ethnicity-reshaped",form_module:"ethnicity-form-reshaped",task_name:"Self Report Screening - Ethnicity questionnaire"},
        "ethnicity-form-reshaped":	    {url:"$H/m/library/ethnicity-form.html",Table:"ethnicity-reshaped",task_name:"Self Report Screening - Ethnicity questionnaire"},
        "education-data-reshaped":	    {url:"$H/m/library/education-data.html",Table:"education-reshaped",form_module:"education-form-reshaped",task_name:"Self Report Screening - Education questionnaire"},
        "education-form-reshaped":	    {url:"$H/m/library/education-form.html",Table:"education-reshaped",task_name:"Self Report Screening - Education questionnaire"},
        "wristox-data-reshaped":	    {url:"$H/m/library/wristox-data.html",Table:"wristox-reshaped",form_module:"wristox-form-reshaped",task_name:"Screening - Wristox"},
        "wristox-form-reshaped":	    {url:"$H/m/library/wristox-form.html",Table:"wristox-reshaped",task_name:"Screening - Wristox"},

        "date-s-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-s-reshaped",form_module:"date-s-form-reshaped",task_name:"Screening - Visit Date"},
        "date-s-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-s-reshaped",task_name:"Screening - Visit Date"},
        "dsm-s-data-reshaped":                {url:"$H/m/library/dsm-data.html",Table:"dsm-s-reshaped",form_module:"dsm-s-form-reshaped",task_name:"Screening - DSM-IV M.I.N.I"},
        "dsm-s-form-reshaped":                {url:"$H/m/library/dsm-form.html",Table:"dsm-s-reshaped",task_name:"Screening - DSM-IV M.I.N.I"},
        "wtars-s-data-reshaped":                {url:"$H/m/library/wtars-data.html",Table:"wtars-s-reshaped",form_module:"wtars-s-form-reshaped",task_name:"Screening - Wechsler Test of Adult Reading Score"},
        "wtars-s-form-reshaped":                {url:"$H/m/library/wtars-form.html",Table:"wtars-s-reshaped",task_name:"Screening - Wechsler Test of Adult Reading Score"},
        "ravlts-s-data-reshaped":                {url:"$H/m/library/ravlts-data.html",Table:"ravlts-s-reshaped",form_module:"ravlts-s-form-reshaped",task_name:"Screening - Rey Auditory Verbal Learning Test Scores"},
        "ravlts-s-form-reshaped":                {url:"$H/m/library/ravlts-form.html",Table:"ravlts-s-reshaped",task_name:"Screening - Rey Auditory Verbal Learning Test Scores"},
        "tmts-s-data-reshaped":                {url:"$H/m/library/tmts-data.html",Table:"tmts-s-reshaped",form_module:"tmts-s-form-reshaped",task_name:"Screening - Trail Making Test Scores"},
        "tmts-s-form-reshaped":                {url:"$H/m/library/tmts-form.html",Table:"tmts-s-reshaped",task_name:"Screening - Trail Making Test Scores"},
        "stroop-text-s-data-reshaped":		            {url:"$H/m/neurocog/stroop-text-data.html",Table:"stroop-text-s-reshaped",form_module:"stroop-text-s-form-reshaped",task_name:"Screening - Stroop Text"},
        "stroop-text-s-form-reshaped":		            {url:"$H/m/neurocog/stroop-text-form.html",Table:"stroop-text-s-reshaped",task_name:"Screening - Stroop Text"},
        "stroop-colour-s-data-reshaped":		            {url:"$H/m/neurocog/stroop-colour-data.html",Table:"stroop-colour-s-reshaped",form_module:"stroop-colour-s-form-reshaped",task_name:"Screening - Stroop Colour"},
        "stroop-colour-s-form-reshaped":		            {url:"$H/m/neurocog/stroop-colour-form.html",Table:"stroop-colour-s-reshaped",task_name:"Screening - Stroop Colour"},

        "date-ssn-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-ssn-reshaped",form_module:"date-ssn-form-reshaped",task_name:"Sleep Study - Visit Date"},
        "date-ssn-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-ssn-reshaped",task_name:"Sleep Study - Visit Date"},
        "anthropometry-ssn-data-reshaped":                {url:"$H/m/library/anthropometry-data.html",Table:"anthropometry-ssn-reshaped",form_module:"anthropometry-ssn-form-reshaped",task_name:"Sleep Study - Anthropometry"},
        "anthropometry-ssn-form-reshaped":                {url:"$H/m/library/anthropometry-form.html",Table:"anthropometry-ssn-reshaped",task_name:"Sleep Study - Anthropometry"},
        "hads-ssn-data-reshaped":                {url:"$H/m/library/hads-data.html",Table:"hads-ssn-reshaped",form_module:"hads-ssn-form-reshaped",task_name:"Sleep Study - Hospital Anxiety and Depression Scale"},
        "hads-ssn-form-reshaped":                {url:"$H/m/library/hads-form.html",Table:"hads-ssn-reshaped",task_name:"Sleep Study - Hospital Anxiety and Depression Scale"},
        "me-ssn-data-reshaped":                {url:"$H/m/library/me-data.html",Table:"me-ssn-reshaped",form_module:"me-ssn-form-reshaped",task_name:"Sleep Study - Horne and Ӧstberg Morningness‐Eveningness Questionnaire"},
        "me-ssn-form-reshaped":                {url:"$H/m/library/me-form.html",Table:"me-ssn-reshaped",task_name:"Sleep Study - Horne and Ӧstberg Morningness‐Eveningness Questionnaire"},
        "psqi-ssn-data-reshaped":                {url:"$H/m/library/psqi-data.html",Table:"psqi-ssn-reshaped",form_module:"psqi-ssn-form-reshaped",task_name:"Sleep Study - Pittsburgh Sleep Quality Index"},
        "psqi-ssn-form-reshaped":                {url:"$H/m/library/psqi-form.html",Table:"psqi-ssn-reshaped",task_name:"Sleep Study - Pittsburgh Sleep Quality Index"},
        "ffs-ssn-data-reshaped":                {url:"$H/m/library/ffs-data.html",Table:"ffs-ssn-reshaped",form_module:"ffs-ssn-form-reshaped",task_name:"Sleep Study - Flinders Fatigue Scale Score"},
        "ffs-ssn-form-reshaped":                {url:"$H/m/library/ffs-form.html",Table:"ffs-ssn-reshaped",task_name:"Sleep Study - Flinders Fatigue Scale Score"},
        "ess-ssn-data-reshaped":                {url:"$H/m/library/ess-data.html",Table:"ess-ssn-reshaped",form_module:"ess-ssn-form-reshaped",task_name:"Sleep Study - Epworth Sleepiness Scale (ESS)"},
        "ess-ssn-form-reshaped":                {url:"$H/m/library/ess-form.html",Table:"ess-ssn-reshaped",task_name:"Sleep Study - Epworth Sleepiness Scale (ESS)"},
        "kss-ssne-data-reshaped":                {url:"$H/m/library/kss-data.html",Table:"kss-ssne-reshaped",form_module:"kss-ssne-form-reshaped",task_name:"Sleep Study - Karolinska Sleepiness Scale (Evening)"},
        "kss-ssne-form-reshaped":                {url:"$H/m/library/kss-form.html",Table:"kss-ssne-reshaped",task_name:"Sleep Study - Karolinska Sleepiness Scale (Evening)"},
        "kss-ssnm-data-reshaped":                {url:"$H/m/library/kss-data.html",Table:"kss-ssnm-reshaped",form_module:"kss-ssnm-form-reshaped",task_name:"Sleep Study - Karolinska Sleepiness Scale (Morning)"},
        "kss-ssnm-form-reshaped":                {url:"$H/m/library/kss-form.html",Table:"kss-ssnm-reshaped",task_name:"Sleep Study - Karolinska Sleepiness Scale (Morning)"},

        "iapsl-ssn-data-reshaped":                {url:"$H/m/library/iapsl-data.html",Table:"iapsl-ssn-reshaped",form_module:"iapsl-ssn-form-reshaped",task_name:"Sleep Study - International Affective Picture System task evening learning"},
        "iapsl-ssn-form-reshaped":                {url:"$H/m/library/iapsl-form.html",Table:"iapsl-ssn-reshaped",task_name:"Sleep Study - International Affective Picture System task evening learning"},
        "iapsr1-ssne-data-reshaped":                {url:"$H/m/library/iapsr1-data.html",Table:"iapsr1-ssne-reshaped",form_module:"iapsr1-ssne-form-reshaped",task_name:"Sleep Study - International Affective Picture System task evening recognition"},
        "iapsr1-ssne-form-reshaped":                {url:"$H/m/library/iapsr1-form.html",Table:"iapsr1-ssne-reshaped",task_name:"Sleep Study - International Affective Picture System task evening recognition"},
        "iapsr2-ssnm-data-reshaped":                {url:"$H/m/library/iapsr2-data.html",Table:"iapsr2-ssnm-reshaped",form_module:"iapsr2-ssnm-form-reshaped",task_name:"Sleep Study - International Affective Picture System task morning recognition"},
        "iapsr2-ssnm-form-reshaped":                {url:"$H/m/library/iapsr2-form.html",Table:"iapsr2-ssnm-reshaped",task_name:"Sleep Study - International Affective Picture System task morning recognition"},
        "pupillometry-ssn-data-reshaped":                {url:"$H/m/library/pupillometry-data.html",Table:"pupillometry-ssn-reshaped",form_module:"pupillometry-ssn-form-reshaped",task_name:"Sleep Study - Pupillometry output"},
        "pupillometry-ssn-form-reshaped":                {url:"$H/m/library/pupillometry-form.html",Table:"pupillometry-ssn-reshaped",task_name:"Sleep Study - Pupillometry output"},
        "cavl-ssn-data-reshaped":                {url:"$H/m/library/cavl-data.html",Table:"cavl-ssn-reshaped",form_module:"cavl-ssn-form-reshaped",task_name:"Sleep Study - Cognitive Affective Verbal Learning task scores"},
        "cavl-ssn-form-reshaped":                {url:"$H/m/library/cavl-form.html",Table:"cavl-ssn-reshaped",task_name:"Sleep Study - Cognitive Affective Verbal Learning task scores"},

        "psggrr-ssn-data-reshaped":                    {url:"$H/m/library/psggrr-data.html",Table:"psggrr-ssn-reshaped",form_module:"psggrr-ssn-form-reshaped",task_name:"Sleep Study - Grael Research PSG Report"},
        "psggrr-ssn-form-reshaped":                    {url:"$H/m/library/psggrr-form.html",Table:"psggrr-ssn-reshaped",task_name:"Sleep Study - Grael Research PSG Report"},
        "psg-edf-ssn-data-reshaped":                    {url:"$H/m/library/upload-file-data.html",Table:"psg-edf-ssn-reshaped",form_module:"psg-edf-ssn-form-reshaped",task_name:"Sleep Study - PSG EDF"},
        "psg-edf-ssn-form-reshaped":                    {url:"$H/m/library/upload-file-form.html",Table:"psg-edf-ssn-reshaped",task_name:"Sleep Study - PSG EDF"},
        "sleep-scoring-ssn-data-reshaped":                    {url:"$H/m/library/upload-file-data.html",Table:"sleep-scoring-ssn-reshaped",form_module:"sleep-scoring-ssn-form-reshaped",task_name:"Sleep Study - Sleep Scoring/Staging upload (hypnogram)"},
        "sleep-scoring-ssn-form-reshaped":                    {url:"$H/m/library/upload-file-form.html",Table:"sleep-scoring-ssn-reshaped",task_name:"Sleep Study - Sleep Scoring/Staging upload (hypnogram)"},
        "source-doc-ssn-data-reshaped":                    {url:"$H/m/library/upload-file-data.html",Table:"source-doc-ssn-reshaped",form_module:"source-doc-ssn-form-reshaped",task_name:"Sleep Study - Source Documentation"},
        "source-doc-ssn-form-reshaped":                    {url:"$H/m/library/upload-file-form.html",Table:"source-doc-ssn-reshaped",task_name:"Sleep Study - Source Documentation"},
        "geoscan-ssn-data-reshaped":                    {url:"$H/m/library/upload-file-data.html",Table:"geoscan-ssn-reshaped",form_module:"geoscan-ssn-form-reshaped",task_name:"Sleep Study - Geoscan File upload"},
        "geoscan-ssn-form-reshaped":                    {url:"$H/m/library/upload-file-form.html",Table:"geoscan-ssn-reshaped",task_name:"Sleep Study - Geoscan File upload"},
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
