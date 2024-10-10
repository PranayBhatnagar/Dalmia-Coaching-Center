//Kota Start Here (Line no 01)  
var app = angular.module('myApp', []);

//KOTA Start Here (Line no 32)
app.controller('chandigarh', function($scope, $http, $filter) {
    $scope.coursearray = [];

    $http.get("/assest-anguler/2024-25/course-json/chandigarh2024-25.json").then(function(response)

        //$http.get("https://officeweb.allen.ac.in/apps/webservices/ccp/website/ws.asmx/coursedtls?tokenid=UH9PadMGJkmvqwgE8ROmsg&apikey=e51Mg1gmbE2D3R9iSiw41Q&sccity=KOTA&academicsession=2021-2022").then(function (response) 


        {

            //KOTA JEE Main Course 
            $scope.jeemainnur = setData3(response, "ECCP-NURTURE");
            $scope.jeemainenth = setData3(response, "ECCP-ENTHUSIAST");
            //$scope.jeemainnurweekend 	= setData3(response, "ECCP-NURTURE-(WEEKEND)");
            //$scope.jeemainnurguj 		= setData3(response, "ECCP-NURTURE-GUJ");

            //KOTA IIT Course
            $scope.iitnur = setData3(response, "TCCP-NURTURE");
            $scope.iitenth = setData3(response, "TCCP-ENTHUSIAST");
            $scope.iitlead = setData3(response, "TCCP-LEADER");
            $scope.iittallentpro = setData3(response, "TCCP-TALLENTPRO-XI-(JEE)");

            $scope.iitnurvall = setData3(response, "TCCP-NURTURE-(VALLEY)");
            $scope.iitentvall = setData3(response, "TCCP-ENTHUSIAST-(VALLEY)");

            $scope.iitnurlive = setData3(response, "TCCP-NURTURE-(LIVE)");
            $scope.iitentlive = setData3(response, "TCCP-ENTHUSIAST-(LIVE)");
            $scope.iitleadlive = setData3(response, "TCCP-LEADER-(LIVE)");



            //KOTA Medical Course
            $scope.mednur = setData3(response, "MCCP-NURTURE");
            $scope.medenth = setData3(response, "MCCP-ENTHUSIAST");
            $scope.medlead = setData3(response, "MCCP-LEADER");
            $scope.medach = setData3(response, "MCCP-ACHIEVER");
            $scope.mednurtallentpro = setData3(response, "MCCP-TALLENTPRO-XI-(PRE-MEDICAL)");
            $scope.medsparkpro = setData3(response, "MCCP-SPARK-PRO");

            $scope.mednurvall = setData3(response, "MCCP-NURTURE-(VALLEY)");
            $scope.medentvall = setData3(response, "MCCP-ENTHUSIAST-(VALLEY)");

            $scope.mednurlive = setData3(response, "MCCP-NURTURE-(LIVE)");
            $scope.medentlive = setData3(response, "MCCP-ENTHUSIAST-(LIVE)");
            $scope.medleadlive = setData3(response, "MCCP-LEADER-(LIVE)");


            //KOTA PNCF Course  
            $scope.classv = setData3(response, "SCCP-CLASS-V");
            $scope.classvi = setData3(response, "SCCP-CLASS-VI");
            $scope.classvii = setData3(response, "SCCP-CLASS-VII");
            $scope.classviii = setData3(response, "SCCP-CLASS-VIII");
            $scope.classviiiice = setData3(response, "SCCP-CLASS-VIII-FOR-ICSE");
            $scope.classix = setData3(response, "SCCP-CLASS-IX");
            $scope.classx = setData3(response, "SCCP-CLASS-X");

            $scope.classixicse = setData3(response, "SCCP-CLASS-IX-FOR-ICSE");
            $scope.classxicse = setData3(response, "SCCP-CLASS-X-FOR-ICSE");

            $scope.classviiiweekend = setData3(response, "SCCP-CLASS-VIII-(WEEKEND)");
            $scope.classixweekend = setData3(response, "SCCP-CLASS-IX-(WEEKEND)");
            $scope.classxweekend = setData3(response, "SCCP-CLASS-X-(WEEKEND)");

            $scope.classixtallentpro = setData3(response, "SCCP-TALLENTPRO-IX");

            $scope.classviiijso = setData3(response, "SCCP-JSO-CLASS-VIII");
            $scope.classixjso = setData3(response, "SCCP-JSO-CLASS-IX");

            $scope.classviiirmo = setData3(response, "SCCP-PRE-RMO,-RMO-&-NMTC-INMO-CLASS-VIII");
            $scope.classixrmo = setData3(response, "SCCP-PRE-RMO,-RMO-&-NMTC-INMO-CLASS-IX");
            $scope.classxrmo = setData3(response, "SCCP-PRE-RMO,-RMO-&-NMTC-INMO-CLASS-X");

            $scope.classviiivall = setData3(response, "SCCP-CLASS-VIII-(VALLEY)");
            $scope.classixvall = setData3(response, "SCCP-CLASS-IX-(VALLEY)");
            $scope.classxvall = setData3(response, "SCCP-CLASS-X-(VALLEY)");


            $scope.classvilive = setData3(response, "SCCP-CLASS-VI-(LIVE)");
            $scope.classviilive = setData3(response, "SCCP-CLASS-VII-(LIVE)");
            $scope.classviiilive = setData3(response, "SCCP-CLASS-VIII-(LIVE)");
            $scope.classixlive = setData3(response, "SCCP-CLASS-IX-(LIVE)");
            $scope.classxlive = setData3(response, "SCCP-CLASS-X-(LIVE)");



            // Chandigarh Fee
            $scope.iitfee = setData4(response, "TCCP-FEE");
            $scope.medfee = setData4(response, "MCCP-FEE");
            $scope.jeemainfee = setData4(response, "ECCP-FEE");
            $scope.pncffee = setData4(response, "SCCP-FEE");


            $scope.medfeelive = setData4(response, "MCCP-FEE-LIVE");
            $scope.iitfeelive = setData4(response, "TCCP-FEE-LIVE");
            $scope.pncffeelive = setData4(response, "SCCP-FEE-LIVE");





        });
    $scope.datehighlight = function(d) {
        var curDate = new Date();
        return curDate.getTime() <= d.getTime();
    }
});



function setData3(response, param) {
    $data = response.data[param];
    if ($data == undefined)
        return null;

    return $data
        .map(function(value, index) {

            var commdate = new Date(value.commdate);
            value.commdate = commdate;

            var phase = value.phase;
            var ccode = value.ccode;
            var mode = value.mode;
            var med = value.med;
            var cent = value.cent;

            var lstdate = new Date(value.Inst_0);
            var istdate = new Date(value.Inst_1);
            var iistdate = new Date(value.Inst_2);
            var iiistdate = new Date(value.Inst_3);

            if (value.Inst_1 == null || value.Inst_1 == "" || value.Inst_1 == "null" || value.Inst_1 == "-") {
                istdate = "-";
            }

            if (value.Inst_2 == null || value.Inst_2 == "" || value.Inst_2 == "null" || value.Inst_2 == "-") {
                iistdate = "-";
            }

            if (value.Inst_3 == null || value.Inst_3 == "" || value.Inst_3 == "null" || value.Inst_3 == "-") {
                iiistdate = "-";
            }


            //refund with date
            var istref = new Date(value.commdate);
            istref.setDate(istref.getDate() + 14);

            var laststref = new Date(value.commdate);
            laststref.setDate(laststref.getDate() + 29);

            //refund with days	

            //var istref = value.Refno_1;
            //var laststref = value.Refno_2;

            var refflag = value.Refund_Flag;

            return {
                commdate: commdate,
                phase: phase,
                ccode: ccode,
                mode: mode,
                med: med,
                cent: cent,

                old: value,
                Lstinst: lstdate,
                Istinst: istdate,
                IIndinst: iistdate,
                IIIndinst: iiistdate,

                Iref: istref,
                Lastref: laststref,

                refflag: refflag,

            }
        });
}

function setData4(response, param) {
    $data = response.data[param];
    if ($data == undefined)
        return null;
    //console.log($data);
    return $data
        .map(function(value, index) {
            var cname = value.shortcoursename;
            var phase = value.phase;

            var lstdate = value.Inst_0;
            var istdate = value.Inst_1;
            var iistdate = value.Inst_2;
            var iiistdate = value.Inst_3;

            var totamt = istdate + iistdate + iiistdate;

            var istref = value.Refno_1;
            var laststref = value.Refno_2;

            var slabstartdate = new Date(value.slabstartdate);
            var slabenddate = new Date(value.slabenddate);
            var sortby = value.sortby;
            var slabheader = value.slabheader;

            return {
                cname: cname,
                phase: phase,

                lstdate: lstdate,
                istdate: istdate,
                iistdate: iistdate,
                iiistdate: iiistdate,
                totamt: totamt,

                istref: istref,
                laststref: laststref,

                slabstartdate: slabstartdate,
                slabenddate: slabenddate,
                sortby: sortby,
                slabheader: slabheader

            }
        });
}