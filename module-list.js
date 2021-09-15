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
                                                Table2:"site-permission-reshaped",
                                            },
       "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"participant-reshaped"},

        "online-questionnaire-setup-reshaped": {url:"$H/m/oq-setup.html",Table:"participant-reshaped"},
        "online-questionnaire-app-reshaped":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"notes-reshaped",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"notes-reshaped"},

        "site-data-reshaped":  	            {url:"$H/m/library/site-data.html",Table:"site-reshaped",form_module:"site-form-reshaped",task_name:"Site List",router:1},
        "site-form-reshaped":  	            {url:"$H/m/library/site-form.html",Table:"site-reshaped",task_name:"Site List"},
        "site-permission-data-reshaped":  	{url:"$H/m/library/site-permission-data.html",Table:"site-permission-reshaped",form_module:"site-permission-form-reshaped",task_name:"Site Permission List",router:1},
        "site-permission-form-reshaped":  	{url:"$H/m/library/site-permission-form.html",Table:"site-permission-reshaped",task_name:"Site Permission List"},


        "randomisation-table-data-reshaped":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-reshaped",form_module:"randomisation-table-form-reshaped"},
        "randomisation-table-form-reshaped":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-reshaped"},

        "adverse-event-data-reshaped":		{url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-reshaped",form_module:"adverse-event-form-reshaped",task_name:"Unscheduled - Adverse Event"},
        "adverse-event-form-reshaped":		{url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-reshaped",task_name:"Unscheduled - Adverse Event"},
        "concom-medication-data-reshaped":		{url:"$H/m/library/concom-medication-data.html",Table:"concom-medication-reshaped",form_module:"concom-medication-form-reshaped",task_name:"Unscheduled - Concomitant Medication"},
        "concom-medication-form-reshaped":		{url:"$H/m/library/concom-medication-form.html",Table:"concom-medication-reshaped",task_name:"Unscheduled - Concomitant Medication"},
        "file-notes-data-reshaped":		{url:"$H/m/library/file-notes-data.html",Table:"file-notes-reshaped",form_module:"file-notes-form-reshaped",task_name:"Unscheduled - File Notes"},
        "file-notes-form-reshaped":		{url:"$H/m/library/file-notes-form.html",Table:"file-notes-reshaped",task_name:"Unscheduled - File Notes"},
        "consent-ps-data-reshaped":		        {url:"$H/m/library/date-data.html",Table:"consent-ps-reshaped",form_module:"consent-ps-form-reshaped",task_name:"Pre-screening - Date of Consent"},
        "consent-ps-form-reshaped":		        {url:"$H/m/library/date-form.html",Table:"consent-ps-reshaped",task_name:"Pre-screening - Date of Consent"},
        "date-ps-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-ps-reshaped",form_module:"date-ps-form-reshaped",task_name:"Pre-screening - Visit Date"},
        "date-ps-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-ps-reshaped",task_name:"Screening - Visit Date"},
        "wristox-ps-data-reshaped":	    {url:"$H/m/library/wristox-v2-data.html",Table:"wristox-ps-reshaped",form_module:"wristox-ps-form-reshaped",task_name:"Pre-screening - Wristox"},
        "wristox-ps-form-reshaped":	    {url:"$H/m/library/wristox-v2-form.html",Table:"wristox-ps-reshaped",task_name:"Pre-screening - Wristox"},
        "demographics-ps-data-reshaped":	    {url:"$H/m/library/demographics-data.html",Table:"demographics-ps-reshaped",form_module:"demographics-ps-form-reshaped",task_name:"Pre-screening - Demographics"},
        "demographics-ps-form-reshaped":	    {url:"$H/m/library/demographics-form.html",Table:"demographics-ps-reshaped",task_name:"Pre-screening - Demographics"},
        "eligibility-ps-data-reshaped":	    {url:"$H/m/library/eligibility-data.html",Table:"eligibility-ps-reshaped",form_module:"eligibility-ps-form-reshaped",task_name:"Pre-screening - Eligibility"},
        "eligibility-ps-form-reshaped":	    {url:"$H/m/library/eligibility-form.html",Table:"eligibility-ps-reshaped",task_name:"Pre-screening - Eligibility"},

        "date-s-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-s-reshaped",form_module:"date-s-form-reshaped",task_name:"Screening - Visit Date"},
        "date-s-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-s-reshaped",task_name:"Screening - Visit Date"},
        "consent-s-data-reshaped":		        {url:"$H/m/library/date-data.html",Table:"consent-s-reshaped",form_module:"consent-s-form-reshaped",task_name:"Screening - Date of Consent"},
        "consent-s-form-reshaped":		        {url:"$H/m/library/date-form.html",Table:"consent-s-reshaped",task_name:"Screening - Date of Consent"},
        "demographics-s-data-reshaped":	    {url:"$H/m/library/demographics-long-data.html",Table:"demographics-s-reshaped",form_module:"demographics-s-form-reshaped",task_name:"Screening - Demographics"},
        "demographics-s-form-reshaped":	    {url:"$H/m/library/demographics-long-form.html",Table:"demographics-s-reshaped",task_name:"Screening - Demographics"},
        "medical-assessment-s-data-reshaped":	    {url:"$H/m/library/medical-assessment-data.html",Table:"medical-assessment-s-reshaped",form_module:"medical-assessment-s-form-reshaped",task_name:"Screening - Medical Assessment"},
        "medical-assessment-s-form-reshaped":	    {url:"$H/m/library/medical-assessment-form.html",Table:"medical-assessment-s-reshaped",task_name:"Screening - Medical Assessment"},
        "biomedical-measurements-s-data-reshaped":{url:"$H/m/library/biomedical-measurements-data.html",Table:"biomedical-measurements-s-reshaped",form_module:"biomedical-measurements-s-form-reshaped",task_name:"Screening - Biomedical Measurements"},
        "biomedical-measurements-s-form-reshaped":{url:"$H/m/library/biomedical-measurements-form.html",Table:"biomedical-measurements-s-reshaped",task_name:"Screening - Biomedical Measurements"},
        "in-ex-s-data-reshaped":	            {url:"$H/m/library/inclusion-exclusion-data.html",Table:"in-ex-s-reshaped",form_module:"in-ex-s-form-reshaped",task_name:"Screening - Inclusion/ Exclusion Criteria"},
        "in-ex-s-form-reshaped":	            {url:"$H/m/library/inclusion-exclusion-form.html",Table:"in-ex-s-reshaped",task_name:"Screening - Inclusion/ Exclusion Criteria"},

        "date-bl-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-bl-reshaped",form_module:"date-bl-form-reshaped",task_name:"Baseline - Visit Date"},
        "date-bl-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-bl-reshaped",task_name:"Baseline - Visit Date"},
        "btb-bl-data-reshaped":                {url:"$H/m/library/btb-data.html",Table:"btb-bl-reshaped",form_module:"btb-bl-form-reshaped",task_name:"Baseline - Blood Test"},
        "btb-bl-form-reshaped":                {url:"$H/m/library/btb-form.html",Table:"btb-bl-reshaped",task_name:"Baseline - Blood Test"},
        "watchpat-bl-data-reshaped":                {url:"$H/m/library/watchpat-data.html",Table:"watchpat-bl-reshaped",form_module:"watchpat-bl-form-reshaped",task_name:"Baseline - WatchPat"},
        "watchpat-bl-form-reshaped":                {url:"$H/m/library/watchpat-form.html",Table:"watchpat-bl-reshaped",task_name:"Baseline - WatchPat"},
        "mri-bl-data-reshaped":                {url:"$H/m/library/mri-data.html",Table:"mri-bl-reshaped",form_module:"mri-bl-form-reshaped",task_name:"Baseline - MRI data"},
        "mri-bl-form-reshaped":                {url:"$H/m/library/mri-form.html",Table:"mri-bl-reshaped",task_name:"Baseline - MRI data"},
        "pet-bl-data-reshaped":                {url:"$H/m/library/pet-data.html",Table:"pet-bl-reshaped",form_module:"pet-bl-form-reshaped",task_name:"Baseline - PET data"},
        "pet-bl-form-reshaped":                {url:"$H/m/library/pet-form.html",Table:"pet-bl-reshaped",task_name:"Baseline - PET data"},
        "biomedical-measurements-bl-data-reshaped":                {url:"$H/m/library/biomedical-measurements-data.html",Table:"biomedical-measurements-bl-reshaped",form_module:"biomedical-measurements-bl-form-reshaped",task_name:"Baseline - Biomedical Measurements"},
        "biomedical-measurements-bl-form-reshaped":                {url:"$H/m/library/biomedical-measurements-form.html",Table:"biomedical-measurements-bl-reshaped",task_name:"Baseline - Biomedical Measurements"},
        "stop-bang-bl-data-reshaped":                {url:"$H/m/library/stop-bang-data.html",Table:"stop-bang-bl-reshaped",form_module:"stop-bang-bl-form-reshaped",task_name:"Baseline - STOP BANG"},
        "stop-bang-bl-form-reshaped":                {url:"$H/m/library/stop-bang-form.html",Table:"stop-bang-bl-reshaped",task_name:"Baseline - STOP BANG"},
        "cirs-bl-data-reshaped":                {url:"$H/m/library/cirs-data.html",Table:"cirs-bl-reshaped",form_module:"cirs-bl-form-reshaped",task_name:"Baseline - Cumulative Illness Rating Scale"},
        "cirs-bl-form-reshaped":                {url:"$H/m/library/cirs-form.html",Table:"cirs-bl-reshaped",task_name:"Baseline - Cumulative Illness Rating Scale"},
        "ravlt-7-bl-data-reshaped":                {url:"$H/m/library/ravlt-data.html",Table:"ravlt-bl-reshaped",form_module:"ravlt-7-bl-form-reshaped",task_name:"Baseline - RAVLT Trials"},
        "ravlt-7-bl-form-reshaped":                {url:"$H/m/library/ravlt-form.html",Table:"ravlt-bl-reshaped",task_name:"Baseline - RAVLT Trials"},
        "trail-part-b-bl-data-reshaped":                {url:"$H/m/library/trail-part-b-data.html",Table:"trail-part-b-bl-reshaped",form_module:"trail-part-b-bl-form-reshaped",task_name:"Baseline - Trail Making Test Part B"},
        "trail-part-b-bl-form-reshaped":                {url:"$H/m/library/trail-part-b-form.html",Table:"trail-part-b-bl-reshaped",task_name:"Baseline - Trail Making Test Part B"},
        "dkefs-bl-data-reshaped":                {url:"$H/m/library/dkefs-data.html",Table:"dkefs-bl-reshaped",form_module:"dkefs-bl-form-reshaped",task_name:"Baseline - Delis Kaplan Executive Functioning System"},
        "dkefs-bl-form-reshaped":                {url:"$H/m/library/dkefs-form.html",Table:"dkefs-bl-reshaped",task_name:"Baseline - Delis Kaplan Executive Functioning System"},
        "sdmt-bl-data-reshaped":                {url:"$H/m/library/sdmt-data.html",Table:"sdmt-bl-reshaped",form_module:"sdmt-bl-form-reshaped",task_name:"Baseline - Symbol Digit Modalities Test"},
        "sdmt-bl-form-reshaped":                {url:"$H/m/library/sdmt-form.html",Table:"sdmt-bl-reshaped",task_name:"Baseline - Symbol Digit Modalities Test"},
        "cantab-bl-data-reshaped":                {url:"$H/m/library/cantab-data.html",Table:"cantab-bl-reshaped",form_module:"cantab-bl-form-reshaped",task_name:"Baseline - CANTAB"},
        "cantab-bl-form-reshaped":                {url:"$H/m/library/cantab-form.html",Table:"cantab-bl-reshaped",task_name:"Baseline - CANTAB"},
        "gad-7-bl-data-reshaped":                {url:"$H/m/library/gad7-data.html",Table:"gad-7-bl-reshaped",form_module:"gad-7-bl-form-reshaped",task_name:"Baseline - Generalised Anxiety Disorder – 7 (GAD-7)"},
        "gad-7-bl-form-reshaped":                {url:"$H/m/library/gad7-form.html",Table:"gad-7-bl-reshaped",task_name:"Baseline - Generalised Anxiety Disorder – 7 (GAD-7)"},
        "psqi-bl-data-reshaped":                {url:"$H/m/library/psqi-data.html",Table:"psqi-bl-reshaped",form_module:"psqi-bl-form-reshaped",task_name:"Baseline - The Pittsburgh Sleep Quality Index (PSQI)"},
        "psqi-bl-form-reshaped":                {url:"$H/m/library/psqi-form.html",Table:"psqi-bl-reshaped",task_name:"Baseline - The Pittsburgh Sleep Quality Index (PSQI)"},
        "audit-part-bl-data-reshaped":                {url:"$H/m/library/audit-part-data.html",Table:"audit-part-bl-reshaped",form_module:"audit-part-bl-form-reshaped",task_name:"Baseline - Alcohol Use Disorders Identification Test (Audit)"},
        "audit-part-bl-form-reshaped":                {url:"$H/m/library/audit-part-form.html",Table:"audit-part-bl-reshaped",task_name:"Baseline - Alcohol Use Disorders Identification Test (Audit)"},
        "phq-9-bl-data-reshaped":                {url:"$H/m/library/phq-data.html",Table:"phq-9-bl-reshaped",form_module:"phq-9-bl-form-reshaped",task_name:"Baseline - The Patient Health Questionnaire-9 (PHQ-9)"},
        "phq-9-bl-form-reshaped":                {url:"$H/m/library/phq-form.html",Table:"phq-9-bl-reshaped",task_name:"Baseline - The Patient Health Questionnaire-9 (PHQ-9)"},
        "bc-cci-bl-data-reshaped":                {url:"$H/m/library/bc-cci-data.html",Table:"bc-cci-bl-reshaped",form_module:"bc-cci-bl-form-reshaped",task_name:"Baseline - Brittish Colombia Cognitive Complaints Inventory"},
        "bc-cci-bl-form-reshaped":                {url:"$H/m/library/bc-cci-form.html",Table:"bc-cci-bl-reshaped",task_name:"Baseline - Brittish Colombia Cognitive Complaints Inventory"},
        "eq-5d-bl-data-reshaped":                {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-bl-reshaped",form_module:"eq-5d-bl-form-reshaped",task_name:"Baseline - Quality of life inventory (EQ-5D-5L)"},
        "eq-5d-bl-form-reshaped":                {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-bl-reshaped",task_name:"Baseline - Quality of life inventory (EQ-5D-5L)"},
        "ess-bl-data-reshaped":                {url:"$H/m/library/ess-data.html",Table:"ess-bl-reshaped",form_module:"ess-bl-form-reshaped",task_name:"Baseline - Epworth Sleepiness Scale (ESS)"},
        "ess-bl-form-reshaped":                {url:"$H/m/library/ess-form.html",Table:"ess-bl-reshaped",task_name:"Baseline - Epworth Sleepiness Scale (ESS)"},

        "date-6-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-6-reshaped",form_module:"date-6-form-reshaped",task_name:"6 Months - Visit Date"},
        "date-6-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-6-reshaped",task_name:"6 Months - Visit Date"},
        "btb-6-data-reshaped":                {url:"$H/m/library/btb-data.html",Table:"btb-6-reshaped",form_module:"btb-6-form-reshaped",task_name:"6 Months - Blood Test"},
        "btb-6-form-reshaped":                {url:"$H/m/library/btb-form.html",Table:"btb-6-reshaped",task_name:"6 Months - Blood Test"},
        "watchpat-6-data-reshaped":                {url:"$H/m/library/watchpat-6-data.html",Table:"watchpat-6-reshaped",form_module:"watchpat-6-form-reshaped",task_name:"6 Months - WatchPat"},
        "watchpat-6-form-reshaped":                {url:"$H/m/library/watchpat-6-form.html",Table:"watchpat-6-reshaped",task_name:"6 Months - WatchPat"},
        "biomedical-measurements-6-data-reshaped":                {url:"$H/m/library/biomedical-measurements-6-data.html",Table:"biomedical-measurements-6-reshaped",form_module:"biomedical-measurements-6-form-reshaped",task_name:"6 Months - Biomedical Measurements"},
        "biomedical-measurements-6-form-reshaped":                {url:"$H/m/library/biomedical-measurements-6-form.html",Table:"biomedical-measurements-6-reshaped",task_name:"6 Months  - Biomedical Measurements"},
        "ravlt-7-6-data-reshaped":                {url:"$H/m/library/ravlt-data.html",Table:"ravlt-6-reshaped",form_module:"ravlt-7-6-form-reshaped",task_name:"6 Months - RAVLT Trials"},
        "ravlt-7-6-form-reshaped":                {url:"$H/m/library/ravlt-form.html",Table:"ravlt-6-reshaped",task_name:"6 Months - RAVLT Trials"},
        "trail-part-b-6-data-reshaped":                {url:"$H/m/library/trail-part-b-data.html",Table:"trail-part-b-6-reshaped",form_module:"trail-part-b-6-form-reshaped",task_name:"6 Months - Trail Making Test Part B"},
        "trail-part-b-6-form-reshaped":                {url:"$H/m/library/trail-part-b-form.html",Table:"trail-part-b-6-reshaped",task_name:"6 Months - Trail Making Test Part B"},
        "dkefs-6-data-reshaped":                {url:"$H/m/library/dkefs-data.html",Table:"dkefs-6-reshaped",form_module:"dkefs-6-form-reshaped",task_name:"6 Months - Delis Kaplan Executive Functioning System"},
        "dkefs-6-form-reshaped":                {url:"$H/m/library/dkefs-form.html",Table:"dkefs-6-reshaped",task_name:"6 Months - Delis Kaplan Executive Functioning System"},
        "sdmt-6-data-reshaped":                {url:"$H/m/library/sdmt-data.html",Table:"sdmt-6-reshaped",form_module:"sdmt-6-form-reshaped",task_name:"6 Months - Symbol Digit Modalities Test"},
        "sdmt-6-form-reshaped":                {url:"$H/m/library/sdmt-form.html",Table:"sdmt-6-reshaped",task_name:"6 Months - Symbol Digit Modalities Test"},
        "cantab-6-data-reshaped":                {url:"$H/m/library/cantab-data.html",Table:"cantab-6-reshaped",form_module:"cantab-6-form-reshaped",task_name:"6 Months - CANTAB"},
        "cantab-6-form-reshaped":                {url:"$H/m/library/cantab-form.html",Table:"cantab-6-reshaped",task_name:"6 Months - CANTAB"},
        "phq-9-6-data-reshaped":                {url:"$H/m/library/phq-data.html",Table:"phq-9-6-reshaped",form_module:"phq-9-6-form-reshaped",task_name:"6 Months - The Patient Health Questionnaire-9 (PHQ-9)"},
        "phq-9-6-form-reshaped":                {url:"$H/m/library/phq-form.html",Table:"phq-9-6-reshaped",task_name:"6 Months - The Patient Health Questionnaire-9 (PHQ-9)"},
        "bc-cci-6-data-reshaped":                {url:"$H/m/library/bc-cci-data.html",Table:"bc-cci-6-reshaped",form_module:"bc-cci-6-form-reshaped",task_name:"6 Months - Brittish Colombia Cognitive Complaints Inventory"},
        "bc-cci-6-form-reshaped":                {url:"$H/m/library/bc-cci-form.html",Table:"bc-cci-6-reshaped",task_name:"6 Months - Brittish Colombia Cognitive Complaints Inventory"},
        "eq-5d-6-data-reshaped":                {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-6-reshaped",form_module:"eq-5d-6-form-reshaped",task_name:"6 Months - Quality of life inventory (EQ-5D-5L)"},
        "eq-5d-6-form-reshaped":                {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-6-reshaped",task_name:"6 Months - Quality of life inventory (EQ-5D-5L)"},
        "ess-6-data-reshaped":                {url:"$H/m/library/ess-data.html",Table:"ess-6-reshaped",form_module:"ess-6-form-reshaped",task_name:"6 Months - Epworth Sleepiness Scale (ESS)"},
        "ess-6-form-reshaped":                {url:"$H/m/library/ess-form.html",Table:"ess-6-reshaped",task_name:"6 Months - Epworth Sleepiness Scale (ESS)"},

        "date-24-data-reshaped":                {url:"$H/m/library/date-data.html",Table:"date-24-reshaped",form_module:"date-24-form-reshaped",task_name:"24 Months - Visit Date"},
        "date-24-form-reshaped":                {url:"$H/m/library/date-form.html",Table:"date-24-reshaped",task_name:"24 Months - Visit Date"},
        "btb-24-data-reshaped":                {url:"$H/m/library/btb-data.html",Table:"btb-24-reshaped",form_module:"btb-24-form-reshaped",task_name:"24 Months - Blood Test"},
        "btb-24-form-reshaped":                {url:"$H/m/library/btb-form.html",Table:"btb-24-reshaped",task_name:"24 Months - Blood Test"},
        "watchpat-24-data-reshaped":                {url:"$H/m/library/watchpat-24-data.html",Table:"watchpat-24-reshaped",form_module:"watchpat-24-form-reshaped",task_name:"24 Months - WatchPat"},
        "watchpat-24-form-reshaped":                {url:"$H/m/library/watchpat-24-form.html",Table:"watchpat-24-reshaped",task_name:"24 Months - WatchPat"},
        "mri-24-data-reshaped":                {url:"$H/m/library/mri-data.html",Table:"mri-24-reshaped",form_module:"mri-24-form-reshaped",task_name:"24 Months - MRI data"},
        "mri-24-form-reshaped":                {url:"$H/m/library/mri-form.html",Table:"mri-24-reshaped",task_name:"24 Months - MRI data"},
        "biomedical-measurements-24-data-reshaped":                {url:"$H/m/library/biomedical-measurements-24-data.html",Table:"biomedical-measurements-24-reshaped",form_module:"biomedical-measurements-24-form-reshaped",task_name:"24 Months  - Biomedical Measurements"},
        "biomedical-measurements-24-form-reshaped":                {url:"$H/m/library/biomedical-measurements-24-form.html",Table:"biomedical-measurements-24-reshaped",task_name:"24 Months  - Biomedical Measurements"},
        "cirs-24-data-reshaped":                {url:"$H/m/library/cirs-data.html",Table:"cirs-24-reshaped",form_module:"cirs-24-form-reshaped",task_name:"24 Months - Cumulative Illness Rating Scale"},
        "cirs-24-form-reshaped":                {url:"$H/m/library/cirs-form.html",Table:"cirs-24-reshaped",task_name:"24 Months - Cumulative Illness Rating Scale"},
        "ravlt-7-24-data-reshaped":                {url:"$H/m/library/ravlt-data.html",Table:"ravlt-24-reshaped",form_module:"ravlt-7-24-form-reshaped",task_name:"24 Months - RAVLT Trials"},
        "ravlt-7-24-form-reshaped":                {url:"$H/m/library/ravlt-form.html",Table:"ravlt-24-reshaped",task_name:"24 Months - RAVLT Trials"},
        "trail-part-b-24-data-reshaped":                {url:"$H/m/library/trail-part-b-data.html",Table:"trail-part-b-24-reshaped",form_module:"trail-part-b-24-form-reshaped",task_name:"24 Months - Trail Making Test Part B"},
        "trail-part-b-24-form-reshaped":                {url:"$H/m/library/trail-part-b-form.html",Table:"trail-part-b-24-reshaped",task_name:"24 Months - Trail Making Test Part B"},
        "dkefs-24-data-reshaped":                {url:"$H/m/library/dkefs-data.html",Table:"dkefs-24-reshaped",form_module:"dkefs-24-form-reshaped",task_name:"24 Months - Delis Kaplan Executive Functioning System"},
        "dkefs-24-form-reshaped":                {url:"$H/m/library/dkefs-form.html",Table:"dkefs-24-reshaped",task_name:"24 Months - Delis Kaplan Executive Functioning System"},
        "sdmt-24-data-reshaped":                {url:"$H/m/library/sdmt-data.html",Table:"sdmt-24-reshaped",form_module:"sdmt-24-form-reshaped",task_name:"24 Months - Symbol Digit Modalities Test"},
        "sdmt-24-form-reshaped":                {url:"$H/m/library/sdmt-form.html",Table:"sdmt-24-reshaped",task_name:"24 Months - Symbol Digit Modalities Test"},
        "cantab-24-data-reshaped":                {url:"$H/m/library/cantab-data.html",Table:"cantab-24-reshaped",form_module:"cantab-24-form-reshaped",task_name:"24 Months - CANTAB"},
        "cantab-24-form-reshaped":                {url:"$H/m/library/cantab-form.html",Table:"cantab-24-reshaped",task_name:"24 Months - CANTAB"},
        "phq-9-24-data-reshaped":                {url:"$H/m/library/phq-data.html",Table:"phq-9-24-reshaped",form_module:"phq-9-24-form-reshaped",task_name:"24 Months - The Patient Health Questionnaire-9 (PHQ-9)"},
        "phq-9-24-form-reshaped":                {url:"$H/m/library/phq-form.html",Table:"phq-9-24-reshaped",task_name:"24 Months - The Patient Health Questionnaire-9 (PHQ-9)"},
        "bc-cci-24-data-reshaped":                {url:"$H/m/library/bc-cci-data.html",Table:"bc-cci-24-reshaped",form_module:"bc-cci-24-form-reshaped",task_name:"24 Months - Brittish Colombia Cognitive Complaints Inventory"},
        "bc-cci-24-form-reshaped":                {url:"$H/m/library/bc-cci-form.html",Table:"bc-cci-24-reshaped",task_name:"24 Months - Brittish Colombia Cognitive Complaints Inventory"},
        "eq-5d-24-data-reshaped":                {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-24-reshaped",form_module:"eq-5d-24-form-reshaped",task_name:"24 Months - Quality of life inventory (EQ-5D-5L)"},
        "eq-5d-24-form-reshaped":                {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-24-reshaped",task_name:"24 Months - Quality of life inventory (EQ-5D-5L)"},
        "ess-24-data-reshaped":                {url:"$H/m/library/ess-data.html",Table:"ess-24-reshaped",form_module:"ess-24-form-reshaped",task_name:"24 Months - Epworth Sleepiness Scale (ESS)"},
        "ess-24-form-reshaped":                {url:"$H/m/library/ess-form.html",Table:"ess-24-reshaped",task_name:"24 Months - Epworth Sleepiness Scale (ESS)"},

        "treatment-1-data-reshaped":                {url:"$H/m/library/treatment-1-data.html",Table:"treatment-1-reshaped",form_module:"treatment-1-form-reshaped",task_name:"Treatment Visit - First Treatment Visit"},
        "treatment-1-form-reshaped":                {url:"$H/m/library/treatment-1-form.html",Table:"treatment-1-reshaped",task_name:"Treatment Visit - First Treatment Visit"},
        "treatment-fu-data-reshaped":                {url:"$H/m/library/treatment-fu-data.html",Table:"treatment-fu-reshaped",form_module:"treatment-fu-form-reshaped",task_name:"Treatment Visit - Treatment visit follow-up"},
        "treatment-fu-form-reshaped":                {url:"$H/m/library/treatment-fu-form.html",Table:"treatment-fu-reshaped",task_name:"Treatment Visit - Treatment visit follow-up"},

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
