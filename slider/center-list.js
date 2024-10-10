// JavaScript Document

$(document).ready(function() {

    var center = ['/', 'default.asp', 'ahmedabad', 'bengaluru', 'bhilwara', 'bhopal', 'bhubaneswar', 'bilaspur', 'bundi', 'chandigarh', 'chennai', 'coimbatore', 'delhi', 'dehradun', 'durgapur', 'guwahati', 'gwalior', 'hisar', 'indore', 'jaipur', 'jammu', 'jodhpur', 'kochi', 'kota', 'mangaluru', 'mumbai', 'mysuru', 'nagpur', 'nanded', 'nashik', 'puducherry', 'pune', 'raipur', 'rajkot', 'ranchi', 'rawatbhata', 'sikar', 'siliguri', 'srinagar', 'surat', 'taranagar', 'ujjain', 'vadodara', 'buldana', 'jhunjhunu', 'pavaai', 'tirupati', 'kolkata', 'amritsar', 'bathinda', 'rohtak', 'latur', 'paavai', 'dibrugarh', 'patna', 'lucknow', 'madurai', 'hubballi', 'akola', 'aurangabad', 'kuchaman', 'alwar', 'bikaner', 'udaipur', 'palanpur', 'sambhajinagar', 'khanapara', 'hyderabad'];

    var host = window.location.pathname.split('/');
    var hostlowercase = host[1].toLowerCase();

    //console.log(hostlowercase);

    if (center[2] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/IIT-JEE-ADVANCED-result-ahmedabad-champions.jpg" alt="IIT JEE ADVANCED RESULT"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/neet-ug-ahmedabad-result-blockbuster.jpg" alt="NEET UG RESULT"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/national-standerd-examination-ahmedabad-junior-science.jpg" alt="NSEJS"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-junior-science-olympiads-guj.jpg" alt="IJSO"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/meet-the-super-toppers-guj-dwija-patel.jpg" alt="MEET THE SUPER TOPPERS"/>',

            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',

            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-allen-ahmedabad.jpg" alt="jee main 2024 result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-allen-gujarati.jpg" alt="jee main 2024 result gujarati"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/top-rankers-jee-main-2024-allen-gujarat.jpg" alt="jee main 2024 result top ranks"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/international-olympiad-result-allen-gujarat.jpg" alt="olympiad result allen gujarat"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-session1-result-allen-ahmedabad.jpg" alt="je main 2024 session1 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(ahmedabad, results);


    } else if (center[3] === hostlowercase) {
        common.unshift(


            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-bengaluru.jpg" alt="rmo 2023 Result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/IOAA-2023-result-silver-medal-bengaluru.jpg" alt="IOAA 2023 Result Silver Medal Bengaluru"/>',

            //'<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/imo-2023-result-allen-bengaluru.jpg" alt="IMO 2023 Result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/17th-ieso-result-allen-bengaluru.jpg" alt="IESO 2023 Result"/>',
        );
        var images = common.concat(bengaluru, results);


    } else if (center[4] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(bhilwara, results);

    } else if (center[5] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',


        );
        var images = common.concat(bhopal, results);

    } else if (center[6] === hostlowercase) {
        common.unshift(


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(bhubaneswar, results);

    } else if (center[7] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(bilaspur, results);

    } else if (center[8] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(bundi, results);

    } else if (center[9] === hostlowercase) {
        common.unshift(


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/goat-24-allen-chandigarh.jpg" alt="GOAT 24, Chandigarh">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/scholarship/icho-2024-result-allen-chandigarh.jpg" alt="ICHO 2024 Result, Chandigarh">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/scholarship/neet-ug-2024-result-allen-chandigarh.jpg" alt="NEET (UG) 2024 Result, Chandigarh">',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-advanced-2024-result-allen-chandigarh.jpg" alt="jee-advanced-2024-result">',

            //'<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/neet-2024-result-allen-chandigarh.jpg" alt="neet-2024-result">',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allen.ac.in/apps2425/ccp/register" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ALLEN-pncf-arise-workshop-for-nmtc-wm.jpg" alt="ALLEN PNCF ARISE"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            //'<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/international-chemistry-olympiads-icho-chandigarh.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-chandigarh.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://www.allen.ac.in/apps2425/ccp/register?leadtype=CCP&referral=https://www.allen.ac.in&utm_source=web&utm_medium=slider&utm_campaign=chandigarh-nurture-leader" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/nurture-leader-course-allen-chandigarh.jpg" alt="nurture leader course"/></a>',

            '<a href="https://www.allen.ac.in/apps2425/ccp/register" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/pncf-course-04-jul-chandigarh.jpg" alt="PNCF Course, Chandigarh"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ijso-olympiads-junior-science-chandigarh.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IPHO_result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho-2023-silver-medal-raghav-goyal.jpg" alt="IPHO 2023"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/11-Years-Celebration-Chandigarh.jpg" alt="10 Years Celebration Chandigarh">',
        );

        var images = common.concat(chandigarh, results);

    } else if (center[10] === hostlowercase) {
        common.unshift(


            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/uieo-2023-result-allen-chennai.jpg" alt="uieo 2023 Result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-chennai.jpg" alt="rmo 2023 result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/vanda-international-competetition-2023-chennai.jpg" alt="Vanda International Competetion 2023 Chennai"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/IISER-CHENNAI.jpg" alt="IISER CHENNAI"/>',
        );
        var images = common.concat(chennai, results);

    } else if (center[11] === hostlowercase) {
        common.unshift(


            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(coimbatore, results);

    } else if (center[12] === hostlowercase) {
        common.unshift(


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-session1-result-allen-delhi-2.jpg" alt="JEE Main 2023 Result allen delhi"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-session1-result-allen-delhi.jpg" alt="JEE Main 2023 Result allen delhi"/>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(delhi, results);

    } else if (center[13] === hostlowercase) {
        common.unshift(


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(dehradun, results);

    } else if (center[14] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/IISER-DURGAPUR.jpg" alt="IISER DURGAPUR"/>',

        );

        var images = common.concat(durgapur, results);

    } else if (center[15] === hostlowercase) {
        common.unshift(
			
			'<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/neeg-ug-2024-results-allen-guwahati.jpg" alt="neet 2024 result"/>',
			
			'<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/2023-24-batch-iit-jee-college-allotment-allen-guwahati.jpg" alt="college allotment"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/je-advanced-2024-toppers-allen-guwahati.jpg" alt="jee adv result"/>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',

            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allen-jee-main-result-2024-guwahati.jpg" alt="jee main result 2024, Guwahati"/>',

            '<a href="https://www.allen.ac.in/khanapara/"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allen-now-also-in-khanapara-meghalaya.jpg" alt="ALLEN Now also in Kahanpara"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-session1-result-allen-guwahati.jpg" alt="jee main result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/nso-2023-24-result-allen-guwahati.jpg" alt="nso result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/nso-2023-24-results-allen-guwahati.jpg" alt="nso result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/imo-2024-stage-1-result-guwahati.jpg" alt="imo result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/inmo-stage-3-result-guwahati.jpg" alt="inmo result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/uieo-2023-24-result-guwahati.jpg" alt="uieo result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/neet-ug-top-college-allotment.jpg" alt="neet college allotment"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/nmtc-prelims-2023-24-result-allen-guwahati.jpg" alt="nmtc result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/vvm-2023-24-level-1-result-allen-guwahati.jpg" alt="vvm result"/>',

        );

        var images = common.concat(guwahati, results);

    } else if (center[16] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(gwalior, results);

    } else if (center[17] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(hisar, results);

    } else if (center[18] === hostlowercase) {
        common.unshift(


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(indore, results);

    } else if (center[19] === hostlowercase) {
        var images = common.concat(jaipur, results);

    } else if (center[20] === hostlowercase) {
        common.unshift(


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(jammu, results);

    } else if (center[21] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(jodhpur, results);

    } else if (center[22] === hostlowercase) {
        common.unshift(


            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/IISER-KOCHI.jpg" alt="IISER KOCHI"/>',

        );

        var images = common.concat(kochi, results);

    } else if (center[23] === hostlowercase) {
        common.unshift();
        var images = common.concat(kota, results);

    } else if (center[24] === hostlowercase) {
        common.unshift(


            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',

            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(mangaluru, results);

    } else if (center[25] === hostlowercase) {
        common.unshift(


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/mht-cet-2024-result-allen-mumbai.jpg" alt="MHT-CET 2024 result, Mumbai"/>',

            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',

            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result-allen-mumbai.jpg" alt="JEE Advanced 2024 result, Mumbai"/>',


            //'<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/neet-ug-blockbuster-result-maulik-patel-mumbai.jpg" alt="NEET (UG) 2024 result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/state-board-clas-10th-allen-mumbai.jpg" alt="class 10 state board result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/class10th-cbse-result-allen-mumbai.jpg" alt="class 10 cbse result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/class10th-icse-result-2024-allen-mumbai.jpg" alt="class 10 icse result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-main-result-2024-allen-mumbai.jpg" alt="JEE (Main) Result 2024, Mumbai"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ioqm-2023-mumbai-result-46-students-qualified.jpg" alt="TALLENTAX 2024"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/mht-cet-2023-result-mumbai.jpg" alt="MHT-CET result">',
        );

        var images = common.concat(mumbai, results);

    } else if (center[26] === hostlowercase) {
        common.unshift(


            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/IOAA-3-students-result-2023-bengaluru.jpg" alt="IOAA 3 Students 2023 Result">',


        );
        var images = common.concat(mysuru, results);

    } else if (center[27] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ioaa-result-2023-allen-nagpur.jpg" alt="IOAA Result 2023 ALLEN Nagpur"/>',

        );
        var images = common.concat(nagpur, results);

    } else if (center[28] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(nanded, results);

    } else if (center[29] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(nashik, results);

    } else if (center[30] === hostlowercase) {
        common.unshift(


            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-puducherry.jpg" alt="rmo 2023 result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(puducherry, results);

    } else if (center[31] === hostlowercase) {
        common.unshift(

            //'<a href="https://www.allen.ac.in/pune/xenon" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/xat-2024-allen-pune-sept2024.jpg" alt="XAT 2024 ALLEN Pune"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-adv-2024-result-allen-pune-top-rank.jpg" alt="JEE Adv 2024 result ALLEN Pune"/>',

            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-junior-science-oly-shah-pune.jpg" alt="Xth board 2024 result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allen-pune-extra-ordinary-result.jpg" alt="Xth board 2024 result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allen-pune-class-x-board-result.jpg" alt="Xth board 2024 result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/cbse-x-result-pune.jpg" alt="Xth board 2024 result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ioaa-2024-result-allen-pune.jpg" alt="IOAA 2024 result">',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-allen-pune.jpg" alt="JEE MAIN 2024 result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-2024-result-allen-pune-center.jpg" alt="ino 2024 result">',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-session1-result-allen-pune-center.jpg" alt="jee main 2024 session 1 result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/vvm-2023-24-result-allen-pune.jpg" alt="vvm result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-2024-result-allen-pune.jpg" alt="ino 2024 result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/dhbbc-result-2023-24.jpg" alt="dhbbc result 2023-24">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-pune.jpg" alt="rmo 2023 result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/world-rank-1-dhruv-aalop-shah.jpg" alt="dhruv">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-pune-zion-2023-24-result.jpg" alt="zio result">',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',
        );

        var images = common.concat(pune, results);

    } else if (center[32] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result-allen-raipur.jpg" alt="JEE ADVANCED 2024 RESULT, RAIPUR"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-session1-result-allen-raipur.jpg" alt="jee main 2024 result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/vvm-2023-24-result-allen-raipur.jpg" alt="vvm result"/>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(raipur, results);

    } else if (center[33] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/top-rankers-jee-main-2024-allen-gujarat.jpg" alt="jee main 2024 result top ranks"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/international-olympiad-result-allen-gujarat.jpg" alt="olympiad result allen gujarat"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',


        );

        var images = common.concat(rajkot, results);

    } else if (center[34] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(ranchi, results);

    } else if (center[35] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(rawatbhata, results);

    } else if (center[36] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result-allen-sikar.jpg" alt="JEE Advanced 2024 result, ALLEN Sikar"/>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/10-cbse-top-scorer-allen-sikar.jpg" alt="class 10 cbse result"/>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jeemain-topper-allen-sikar-jee-main-2024-result.jpg" alt="JEE Main Result Top Ranks, Sikar">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-main-2024-allen-sikar-result.jpg" alt="JEE Main Result Top Ranks, Sikar">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/fist-4-sikar-topper-in-jee-main2024-result-sikar.jpg" alt="JEE Main Result Top Ranks, Sikar">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/8-times-sikar-topper-neet-ug-jee-main-jee-adv.jpg" alt="8 Times Sikar Topper NEET-UG, JEE (Main), JEE Advanced, Sikar">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/8-Times-Air-in-top-50-10-results-sikar.jpg" alt="8 Times AIR in Top 50 10 Result, Sikar">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-sikar-hundred-percentile-jee-main.jpg" alt="jee main">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-sikar-students-selected-for-aiims-delhi.jpg" alt="aiims delhi">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-sikar-toppers-last-9years.jpg" alt="toppers">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/girls-residential-campus-allen-sikar.jpg" alt="residential campus">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/neet-ug-historical-result-allen-sikar.jpg" alt="NEET (UG) Result">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/perfect-score-himanshu-allen-sikar.jpg" alt="Himanshu">',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/result-of-jee-main-session-1-allen-sikar.jpg" alt="Jee Main Result">',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',


        );
        var images = common.concat(sikar, results);

    } else if (center[37] === hostlowercase) {
        common.unshift(


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(siliguri, results);

    } else if (center[38] === hostlowercase) {
        common.unshift(


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/nmtc-2024-result-allen-kashmir.jpg" alt="nmtc 2024 result allen kashmir"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/neet-ug-2024-result-allen-kashmir.jpg" alt="neet ug 2024 result allen kashmir"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/10th-jkbose-2024-result-allen-kashmir.jpg" alt="10th jkbose 2024 result allen kashmir"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/12th-jkbose-2024-result-allen-kashmir.jpg" alt="12th jkbose 2024 result allen kashmir"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-2024-result-allen-kashmir.jpg" alt="jee 2024 result allen kashmir"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(srinagar, results);

    } else if (center[39] === hostlowercase) {
        common.unshift(


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/top-rankers-jee-main-2024-allen-gujarat.jpg" alt="jee main 2024 result top ranks"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/international-olympiad-result-allen-gujarat.jpg" alt="olympiad result allen gujarat"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(surat, results);

    } else if (center[40] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',


        );
        var images = common.concat(taranagar, results);

    } else if (center[41] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(ujjain, results);

    } else if (center[42] === hostlowercase) {
        common.unshift(


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/top-rankers-jee-main-2024-allen-gujarat.jpg" alt="jee main 2024 result top ranks"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/international-olympiad-result-allen-gujarat.jpg" alt="olympiad result allen gujarat"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(vadodara, results);

    } else if (center[43] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(buldana, results);

    } else if (center[44] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-main-latest-result-jhunjhunu.jpg" alt="jee main result top ranks"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',
        );
        var images = common.concat(jhunjhunu, results);

    } else if (center[45] === hostlowercase) {
        common.unshift(


            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(pavaai, results);

    } else if (center[46] === hostlowercase) {
        common.unshift(


            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(tirupati, results);

    } else if (center[47] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(kolkata, results);

    } else if (center[48] === hostlowercase) {

        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            //'<a href="https://cloud.engage.allen.ac.in/career-webinar?utm_source=web&utm_medium=slider&utm_campaign=webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/success-career-amritsar.jpg" alt="Successful Career"/></a>',

        );
        var images = common.concat(amritsar, results);

    } else if (center[49] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(bathinda, results);

    } else if (center[50] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(rohtak, results);

    } else if (center[51] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(latur, results);

    } else if (center[52] === hostlowercase) {
        common.unshift(

            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(paavai, results);

    } else if (center[53] === hostlowercase) {
        common.unshift(
			
			'<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-results-allen-dibrugarh.jpg" alt="jee main 2024 result"/>',
			
			'<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/neet-ug-2024-results-allen-dibrugarh.jpg" alt="neet 2024 result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allen-jee-main-result-2024-dibrugarh.jpg" alt="jee main result 2024, Dibrugarh"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-session1-result-allen-dibrugarh.jpg" alt="jee main result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(dibrugarh, results);

    } else if (center[54] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(patna, results);

    } else if (center[55] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',
        );

        var images = common.concat(lucknow, results);

    } else if (center[56] === hostlowercase) {
        common.unshift(

            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',
        );
        var images = common.concat(madurai, results);

    } else if (center[57] === hostlowercase) {
        common.unshift(

            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',


        );
        var images = common.concat(hubballi, results);

    } else if (center[58] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',
        );
        var images = common.concat(akola, results);

    } else if (center[59] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(aurangabad, results);

    } else if (center[60] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(kuchaman, results);

    } else if (center[61] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(alwar, results);

    } else if (center[62] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(bikaner, results);

    } else if (center[63] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            //'<a href="https://www.lnmpnyas.org/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ln-maheswari-paramarth-nyas-siksha-sambal.jpg" alt="Siksha Sambal"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(udaipur, results);

    } else if (center[64] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/top-rankers-jee-main-2024-allen-gujarat.jpg" alt="jee main 2024 result top ranks"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/international-olympiad-result-allen-gujarat.jpg" alt="olympiad result allen gujarat"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',
        );

        var images = common.concat(palanpur, results);

    } else if (center[65] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );

        var images = common.concat(sambhajinagar, results);
    } else if (center[66] === hostlowercase) {
        common.unshift(

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://www.allen.ac.in/khanapara/"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allen-now-also-in-khanapara-meghalaya.jpg" alt="ALLEN Now also in Kahanpara"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-session1-result-allen-guwahati.jpg" alt="jee main result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/nso-2023-24-result-allen-guwahati.jpg" alt="nso result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/nso-2023-24-results-allen-guwahati.jpg" alt="nso result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/imo-2024-stage-1-result-guwahati.jpg" alt="imo result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/inmo-stage-3-result-guwahati.jpg" alt="inmo result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/uieo-2023-24-result-guwahati.jpg" alt="uieo result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',
            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/nmtc-prelims-2023-24-result-allen-guwahati.jpg" alt="nmtc result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/vvm-2023-24-level-1-result-allen-guwahati.jpg" alt="vvm result"/>',

        );
        var images = common.concat(khanapara, results);

    } else if (center[67] === hostlowercase) {
        common.unshift(

            '<a href="https://www.allen.ac.in/admission/hyderabad/" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/admission-in-allen-hyderabad-telangana.jpg" alt="ALLEN Hyderabad"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/neet/2024/?utm_source=web&utm_medium=slider&utm_campaign=neet-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/CREATING-CHAMPIONS-CONSISTENTLY-NEET-UG-RESULT-2024.jpg" alt="NEET UG RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.tallentex.com/?utm_source=web&utm_medium=slider&utm_campaign=tallentex2025" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/tallentex-2025-registration.jpg" alt="Tallentex 2025"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',

            //'<a href="https://www.allenglobalstudies.com/webinar/?utm_source=ACIPL_Other_Centers&utm_medium=Brown_Banner&utm_campaign=SAT_Webinar" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/sat-mastry-decoded-globalstudies.jpg" alt="SAT MASTRY DECODED AGSD"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-bengaluru.jpg" alt="rmo 2023 Result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/rmo-2023-result-allen-south-india.jpg" alt="rmo 2023 Result"/>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/IOAA-2023-result-silver-medal-bengaluru.jpg" alt="IOAA 2023 Result Silver Medal Bengaluru"/>',

            //'<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/imo-2023-result-allen-bengaluru.jpg" alt="IMO 2023 Result"/>',

            '<img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/17th-ieso-result-allen-bengaluru.jpg" alt="IESO 2023 Result"/>',
        );
        var images = common.concat(hyderabad, results);

    } else {
        common.unshift(

            '<a href="https://myallen.in/nft" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/neet-ug-fast-track-allen-estore.jpg" alt="NEET (UG) Fast Track ALLEN Estore"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ipho2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ipho2024-allen-result.jpg" alt="IPHO RESULT 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=APhO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/allenites-making-proud-IPHO-1-gold.jpg" alt="APHO 2024"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-advanced/2024/?utm_source=web&utm_medium=slider&utm_campaign=jee-advanced-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/jee-advanced-2024-result.jpg" alt="JEE Advanced 2024 result"/></a>',

            '<a href="https://amzn.to/4fkBJQb" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/race-dpp-allen-e-store.jpg" alt="allen book store"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=imo-2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/IMO-2024-result-rushil-mathur.jpg" alt="IMO 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="International Biology Olympiads"/></a>',


            '<a href="https://www.allen.ac.in/ace2425/AppForms/register?utm_source=web&utm_medium=slider&utm_campaign=commerce-12th-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/Class-12th-Result-allen-ace-commerce.jpg" alt="12th 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-olympiads-on-astronomy-and-astrophysics-for-junior.jpg" alt="IOAA 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/singapore-and-asian-schools-maths-olympiads.jpg" alt="SASMO 2024 result"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IBO-Result-2024" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/35th-international-biology-olympiads.jpg" alt="IBO 2024 result"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Web&utm_medium=Slider&utm_campaign=IJSO2024Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/21st-ijso-2024-result-allen.jpg" alt="ijso 2024 result"/></a>',

            '<a href="https://youtu.be/WBd6Kdr-h24?rel=0" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/allen-app-to-preparation-for-neet-jee.jpg" alt="allen app"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=IChO-2024-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/international-chemistry-olympiads-icho.jpg" alt="International Chemistry Olympiads"/></a>',

            '<a href="https://www.allen.ac.in/results/jee-main/2024/?utm_source=web&utm_medium=slider&utm_campaign=jeemain2024result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/jee-main-2024-result-of-allen-kota.jpg" alt="jee main result top ranks"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=ioaa2024-result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/top-slider/indian-national-junior-astronomy-olympiad-2024-result.jpg" alt="injao 2024"/></a>',

            '<a href="https://workshop.allen.ac.in/?utm_source=web&utm_medium=slider&utm_campaign=INO-Result" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/slider/images/ino-stage2-2024-result-allen-kota.jpg" alt="ino 2024"/></a>',


            '<a href="https://workshop.allen.ac.in/?utm_source=Webs&utm_medium=Slider&utm_campaign=IJSO_Result_2023" target="_blank"><img src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/images/ijso-olympiads-junior-science.jpg" alt="IJSO OLYMPIADS"/></a>',

        );
        var images = common.concat(kota, results);
    }

    //console.log(center[2] == host[1]);

    // console.log(window.location.pathname.split("/"));
    allenslider(images, $);

});


//for (var i = 0; i < center.length; i++) {
//    if (window.location.href.indexOf(center[i]) > -1) {
//		
//		center.splice( 1, 1,   "Kota") ;
//		var images = center || chandigarh;
//        
//	
//		console.log(images);
//    }
//}


//if (center.indexOf(host) !== -1) {
//   var images = center.indexOf(host);	
//	 
//    var images = ahmedabad || bengalurulat;
//    //var images = window.location.pathname;
//
//} else {
//    var images = common;
//}

//console.log( center.indexOf(host));

//console.log(bengalurulat);

//console.log(center.indexOf(host) !== -1);

//alert (center.indexOf(host) !== -1);
//console.log (center.indexOf(host) !== -1);
//center.forEach(function(value) {


//console.log(host == value.indexOf(host));
//	if (host==value.indexOf(host)) {
//		alert("Center Name is : host");
//		//console.log("Center Name is : Kota");
//	}
//	else {
//		
//		alert ("center Not matched");
//	}
//				
//		});
//
// if (host == url[0] || host == url[1]) { 
// 
// };
//console.log (host == center.indexOf(center));ho