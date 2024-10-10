// JavaScript Document

function asatDates(dates, $) {
    for (var i = 0; i < dates.length; i++) {
        $('<tr>' + dates[i] + '</tr>').appendTo('#asatDates .data');
    }
}

/*====== AHMEDABAD MAIN DATE=====*/

ahmedabad_asat = [

    '<td>JEE (Main+ Advanced) Nurture (X to XI)</td> <td> 19/05/2024, 26/05/2024, 02/06/2024 </td> <td rowspan="12">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>  21/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical  Achiever (XII Passed / Ex-ALLEN Students)</td><td> 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 14/07/2024*, 21/07/2024*, 28/07/2024*, 18/08/2024*, 25/08/2024*, 01/09/2024*, 08/09/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td rowspan="7"> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX (AMBITION)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class X (ASPIRE)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== AHMEDABAD PNCF DATE=====*/

pncf_ahmedabad_asat = [
    '<td>Class V to VI</td><td rowspan="7">           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td rowspan="7">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX (AMBITION)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class X (ASPIRE)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== ALWAR DATE=====*/

alwar_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 31/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td rowspan="5">         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== ALWAR PNCF DATE=====*/
pncf_alwar_asat = [

    '<td>Class V to VI</td><td rowspan="5">         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Bikaner DATE=====*/

bikaner_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    //'<td>Pre-Medical  Achiever (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td>            19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>                   19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>               19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Bikaner PNCF DATE=====*/
pncf_bikaner_asat = [

    '<td>Class V to VI</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Puducherry DATE=====*/

puducherry_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td> <td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td> <td rowspan="15">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>   28/04/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main + Advanced) & Pre-Medical Leader (XII Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS V to VI</td> <td rowspan="3">   28/04/2024 </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS VI to VII</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS VII to VIII</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS VIII to IX</td> <td>         19/05/2024, 26/05/2024, 02/06/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== puducherry PNCF DATE=====*/

pncf_puducherry_asat = [

    '<td>Class V to VI</td><td >   28/04/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>   28/04/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>   28/04/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== KOTA MAIN DATE=====*/

kota_asat = [

    '<td> JEE (Main + Advanced) Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td> <td rowspan=11">Objective</td> <td ><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>  Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td ><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main + Advanced) Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main + Advanced) Leader Plus (XII Passed / Ex-ALLEN Students)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical  Achiever (XII Passed / Ex-ALLEN Students)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td rowspan="5"> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 14/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td> ',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',



    '<td>Class V to VI (FOCUS) </td><td rowspan="5">     09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 14/07/2024*, 21/07/2024*  </td> <td rowspan="5">Objective</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td> ',

    '<td>Class VI to VII (FOCUS)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII (FOCUS)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX (FOCUS)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',



];

/*====== KOTA PNCF DATE=====*/

pncf_kota_asat = [

    '<td>Class V to VI</td><td rowspan="5">       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td>Class V to VI (FOCUS) </td><td rowspan="5">   09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 14/07/2024*, 21/07/2024* </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII (FOCUS) </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII (FOCUS) </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX (FOCUS) </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',


];

/*====== Jaipur MAIN DATE=====*/

jaipur_asat = [

    '<td> JEE (Main + Advanced ) Nurture (X to XI)</td><td> </td> <td rowspan=9">Objective</td> <td ><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Nurture (X to XI)</td><td> </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main + Advanced ) Enthusiast (XI to XII)</td><td> </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Enthusiast (XI to XII)</td><td> </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td>Class V to VI</td><td rowspan="5"> </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td> ',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== KOTA PNCF DATE=====*/

pncf_jaipur_asat = [
    '<td>Class V to VI</td><td rowspan="5"> </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== PAAVAI DATE=====*/
paavai_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (X to XI)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (XI to XII)</td><td>           19/05/2024, 26/05/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main + Advanced) & Pre-Medical TALLENTPRO Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO V to VI</td><td>                   19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VI to VII</td><td>                   19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VII to VIII</td><td>                   19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td>                   19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== Pavaai PNCF DATE=====*/

pncf_paavai_asat = [

    '<td>TALLENTPRO V to VI</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VI to VII</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VII to VIII</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td>        19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== PALANPUR DATE=====*/

palanpur_asat = [

    '<td> Pre-Medical Nurture (X to XI)</td><td>               19/05/2024, 26/05/2024, 02/06/2024  </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Jee Main Nurture (X to XI)</td><td>             19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Jee Main & Pre-Medical Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td> <td rowspan="5">                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== PALANPUR PNCF DATE=====*/

pncf_palanpur_asat = [
    '<td>Class V to VI</td><td rowspan="5"> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== PUNE DATE=====*/

pune_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 14/07/2024*, 21/07/2024* </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 24/03/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 14/07/2024*, 21/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical  Achiever Plus ( XII Passed / Ex- ALLEN)</td><td> 23/06/2024, 30/06/2024, 14/07/2024*, 21/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== PUNE PNCF DATE=====*/

pncf_pune_asat = [

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== Latur DATE=====*/

latur_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

pncf_latur_asat = [

    '<td>Class VII to VIII</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024  , </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];


/*====== akola DATE=====*/

akola_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced)  (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Pre-Medical Leader (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 07/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>          02/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>          02/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>          02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

pncf_akola_asat = [

    '<td>Class VII to VIII</td><td>        02/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>        02/06/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>        02/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Raipur DATE=====*/

raipur_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>        19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td rowspan="8">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 31/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced)  Leader (XII<sup>th</sup> Passed)</td><td>        19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Pre-Medical Leader (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 07/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Achiever (XII<sup>th</sup> Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Raipur PNCF DATE=====*/

pncf_raipur_asat = [

    '<td>Class VII to VIII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Rajkot PNCF DATE=====*/

rajkot_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td rowspan="7">                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX (AMBITION)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class X (ASPIRE)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== RAJKOT PNCF DATE=====*/

pncf_rajkot_asat = [
    '<td>Class V to VI</td><td rowspan="7">                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024</td><td rowspan="7">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX (AMBITION)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class X (ASPIRE)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Srinagar DATE=====*/

srinagar_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td> <td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td> <td >Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 14/04/2024, 26/05/2024, 02/06/2024 </td><td >Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 30/06/2024   </td><td >Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>        19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td >Objective</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>        19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td >Objective</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>        19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td >Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];
pncf_srinagar_asat = [

    '<td>Class VII to VIII</td><td rowspan="3">       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td> <td rowspan="9">Objective</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== sambhajinagar DATE=====*/

sambhajinagar_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 14/07/2024  </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 24/03/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 30/06/2024, 14/07/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td rowspan="4">         19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== sambhajinagar PNCF DATE=====*/

pncf_sambhajinagar_asat = [

    '<td>Class VI to VII</td><td rowspan="4"> 19/05/2024, 26/05/2024, 02/06/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== SIKAR DATE=====*/

sikar_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed) </td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical  Achiever (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== SIKAR PNCF DATE=====*/

pncf_sikar_asat = [
    '<td>Class V to VI</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== SURAT DATE=====*/

surat_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>              19/05/2024, 26/05/2024  </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    //    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td> <td rowspan="5">              12/05/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== SURAT PNCF DATE=====*/

pncf_surat_asat = [

    '<td>Class V to VI</td><td rowspan="5">                  12/05/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== VADODARA DATE=====*/

vadodara_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>                 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td rowspan="8">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 10/12/2023* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>        19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td rowspan="5">                 19/05/2024, 26/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== VADODARA PNCF DATE=====*/

pncf_vadodara_asat = [

    '<td>Class V to VI</td><td rowspan="5"> 19/05/2024, 26/05/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Udaipur DATE=====*/

udaipur_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>31/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 14/07/2024*    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Achiever (XII Passed / Ex-ALLEN Students)</td><td> 11/08/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== Udaipur PNCF DATE=====*/
pncf_udaipur_asat = [

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== UJJAIN DATE=====*/

ujjain_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (MAIN+ADVANCED) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 21/07/2024*, 28/07/2024*, 04/08/2024* </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== UJJAIN PNCF DATE=====*/

pncf_ujjain_asat = [

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== BENGALURU DATE=====*/

bengaluru_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>           28/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (MAIN+ADVANCED) & Pre-Medical Leader (XII Passed)</td><td>                19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td >                     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== BENGALURU PNCF DATE=====*/

pncf_bengaluru_asat = [

    '<td>Class V to VI</td><td >                     19/05/2024, 26/05/2024, 02/06/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

mangaluru_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="7">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (MAIN+ADVANCED) & Pre-Medical Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>       19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>       19/05/2024, 26/05/2024, 02/06/2024     </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== mangaluru PNCF DATE=====*/

pncf_mangaluru_asat = [

    '<td>Class VII to VIII</td><td>   28/04/2024  </td><td rowspan="7">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>        19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>        19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== BHILWARA DATE=====*/

bhilwara_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td rowspan="8">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>         28/04/2024 </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>               19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== BHILWARA PNCF DATE=====*/

pncf_bhilwara_asat = [

    '<td>Class V to VI</td><td rowspan="5">                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== BHOPAL DATE=====*/

bhopal_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (MAIN+ADVANCED) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== BHOPAL PNCF DATE=====*/

pncf_bhopal_asat = [
    '<td>Class V to VI</td><td rowspan="5"> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== BHUBANESWAR DATE=====*/

bhubaneswar_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td rowspan="13">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 18/02/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader  (XII Passed)</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 14/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>  Pre-Medical Achiever  (XII Passed/Ex-ALLEN Student)</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td rowspan="5">        28/04/2024</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== BHUBANESWAR PNCF DATE=====*/

pncf_bhubaneswar_asat = [
    '<td>Class V to VI</td><td rowspan="5">             28/04/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== BUNDI PNCF DATE=====*/

pncf_bundi_asat = [
    '<td>Class V to VI</td><td rowspan="5">         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Buldana DATE=====*/

buldana_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO  (X to XI)</td><td>        02/06/2024, 09/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>  Pre-Medical TALLENTPRO Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== CHANDIGARH DATE=====*/

chandigarh_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td rowspan="11">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced)  Leader (XII Passed)</td><td>        19/05/2024, 26/05/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Pre-Medical Leader (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>      12/05/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== CHANDIGARH PNCF DATE=====*/

pncf_chandigarh_asat = [

    '<td>Class V to VI</td><td>       07/04/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>       07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>              12/05/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== CHENNAI DATE=====*/

chennai_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main + Advanced) & Pre-Medical Leader (XII Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>       19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== chennai PNCF DATE=====*/

pncf_chennai_asat = [

    '<td>Class V to VI</td><td rowspan="2">   28/04/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>       19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td> <td rowspan="2">         19/05/2024, 26/05/2024, 02/06/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Dehradun DATE=====*/

dehradun_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>     19/05/2024 </td> <td rowspan="10">Objective</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 24/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 31/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 31/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 31/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 31/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',


];

/*====== Dehradun Pncf DATE=====*/

pncf_dehradun_asat = [

    '<td>Class VI to VII</td><td rowspan="5"> 31/03/2024   </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Delhi DATE=====*/

delhi_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture </td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td> <td rowspan="11">Objective</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Tallentpro (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 19/05/2024, 26/05/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Tallentpro (XI to XII)</td><td> 19/05/2024, 26/05/2024 </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 26/05/2024,  02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 26/05/2024,  02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class IX Elite </td><td> 26/05/2024,  02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 26/05/2024,  02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class X Elite </td><td> 26/05/2024,  02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== Delhi PNCF DATE=====*/

pncf_delhi_asat = [

    '<td>Class VII to VIII</td><td>                        26/05/2024,  02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                        26/05/2024,  02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class IX Elite </td><td>                        26/05/2024,  02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                        26/05/2024,  02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td> Class X Elite </td><td>                        26/05/2024,  02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Durgapur DATE=====*/

durgapur_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 14/01/2024*,   24/03/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td>  Pre-Medical Achiever (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td>Class V to VI</td><td >                   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>                   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== durgapur PNCF DATE=====*/

pncf_durgapur_asat = [

    '<td>Class V to VI</td><td rowspan="5">                   28/04/2024  </td><td rowspan="7">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== GUWAHATI DATE=====*/

guwahati_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 26/05/2024, 02/06/2024   </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 31/03/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 31/03/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 12/05/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 12/05/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 12/05/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',


    // '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== GUWAHATI PNCF DATE=====*/

pncf_guwahati_asat = [

    '<td>Class V to VI</td><td>         31/03/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>         31/03/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                  12/05/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                  12/05/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                  12/05/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== GUWAHATI DATE=====*/

khanapara_asat = [

    '<td>Pre-Medical Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024 </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== GUWAHATI PNCF DATE=====*/

pncf_khanapara_asat = [

    '<td>Class V to VI</td><td>         31/03/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>         31/03/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== dibrugarh DATE=====*/

dibrugarh_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 26/05/2024, 02/06/2024   </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== GUWAHATI PNCF DATE=====*/

pncf_dibrugarh_asat = [

    '<td>Class VII to VIII</td><td rowspan="5">                12/05/2024  </td> <td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Hisar DATE=====*/

hisar_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 24/03/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>    12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>      19/05/2024, 26/05/2024, 02/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>     19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== Dehradun PNCF DATE=====*/

pncf_hisar_asat = [
    '<td>Class V to VI</td><td rowspan="2"> 07/04/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>  12/05/2024 </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>    19/05/2024, 26/05/2024, 02/06/2024 </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>   19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Hubballi DATE=====*/

hubballi_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>   28/04/2024 </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td>Class VII to VIII</td><td>         19/05/2024, 26/05/2024, 02/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== Hubballi PNCF DATE=====*/

pncf_hubballi_asat = [

    // '<td>Class V to VI</td><td >             28/04/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VI to VII</td><td>             28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>         19/05/2024, 26/05/2024, 02/06/2024 </td><td rowspan="3">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== amritsar DATE=====*/

amritsar_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>       19/05/2024, 26/05/2024, 02/06/2024  </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>        12/05/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>        12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== Dehradun PNCF DATE=====*/

pncf_amritsar_asat = [
    '<td>Class V to VI</td><td> 07/04/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 07/04/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 07/04/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>        12/05/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>        12/05/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== bathinda_DATE=====*/

bathinda_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== bathinda PNCF DATE=====*/

pncf_bathinda_asat = [
    '<td>Class V to VI</td><td>           07/04/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>           07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>           07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                  12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                  12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== rohtak DATE=====*/

rohtak_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>       12/05/2024  </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 07/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                  12/05/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                  12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== rohtak PNCF DATE=====*/

pncf_rohtak_asat = [

    '<td>Class V to VI</td><td> 07/04/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 12/05/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 12/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== patna DATE=====*/

patna_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 21/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>  Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 14/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>  Pre-Medical Achiever (XII Passed)</td><td> 19/05/2024, 26/05/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 14/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 21/07/2024*, 28/07/2024*, 04/08/2024*   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== patna PNCF DATE=====*/

pncf_patna_asat = [
    '<td>Class V to VI</td><td rowspan="5">          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 21/07/2024*, 28/07/2024, 04/08/2024* </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

madurai_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td rowspan="8">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',
    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>       28/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== patna PNCF DATE=====*/

pncf_madurai_asat = [
    '<td>Class VII to VIII</td><td>   28/04/2024  </td><td rowspan="3">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td> <td>         19/05/2024, 26/05/2024, 02/06/2024 </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

lucknow_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>          26/05/2024, 02/06/2024, 16/06/2024, 23/06/2024 </td><td rowspan="12">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>        12/05/2024, 16/06/2024, 23/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (X to XI)</td><td>          26/05/2024, 02/06/2024, 16/06/2024, 23/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (XI to XII)</td><td>        12/05/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>          26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class IX Elite </td><td>          26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>          26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class X Elite </td><td>          26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== patna PNCF DATE=====*/

pncf_lucknow_asat = [
    '<td>Class VIII to IX</td><td>                26/05/2024, 02/06/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class IX Elite </td><td>                26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Class X Elite </td><td>                26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== Jammu DATE=====*/

jammu_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 02/06/2024, 09/06/2024  </td><td rowspan="8">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical ENTHUSIAST (XI to XII)</td><td> 24/03/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 07/04/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 07/04/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>     05/05/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>     05/05/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>     05/05/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== Jammu PNCF DATE=====*/

pncf_jammu_asat = [

    '<td>Class V to VI</td><td rowspan="2">       07/04/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td rowspan="3">           05/05/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== JHUNJHUNU DATE=====*/

jhunjhunu_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*  </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>   28/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    //    '<td>Pre-Medical Achiever (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== JHUNJHUNU PNCF DATE=====*/

pncf_jhunjhunu_asat = [

    '<td>Class V to VI</td><td rowspan="5">          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== bilaspur DATE=====*/

bilaspur_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (X to XI)</td><td>        19/05/2024, 26/05/2024, 02/06/2024 </td><td rowspan="7">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Leader (XII<sup>th</sup> Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (XI to XII)</td><td> </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VI to VII</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VII to VIII</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== bilaspur PNCF DATE=====*/

pncf_bilaspur_asat = [


    '<td>TALLENTPRO VI to VII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024    </td><td rowspan="7">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VII to VIII</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== TARANAGAR DATE=====*/

taranagar_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical NURTURE (X to XI)</td><td>            7/04/2024,     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td rowspan="11">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>JEE (Main+ Advanced) & Pre-Medical ENTHUSIAST (XI to XII)</td><td> </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>Pre-Medical Leader (XII Passed)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main + Advanced) & Pre-Medical Leader (XII Passed)</td><td>                19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 07/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS V to VI</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS VI to VII</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS VII to VIII</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS VIII to IX</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS IX to X</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== TARANAGAR PNCF DATE=====*/

pncf_taranagar_asat = [

    '<td>CLASS V to VI</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS VI to VII</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS VII to VIII</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS VIII to IX</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>CLASS IX to X</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];


/*====== INDORE DATE=====*/

indore_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (MAIN+ADVANCED) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== INDORE PNCF DATE=====*/

pncf_indore_asat = [
    '<td>Class V to VI</td><td rowspan="5"> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== nashik DATE=====*/

nashik_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>                         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="8">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>       07/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII<sup>th</sup> Passed)</td><td>               19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td>Class VI to VII</td><td>                         23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== nashik PNCF DATE=====*/

pncf_nashik_asat = [

    '<td>Class VI to VII</td><td>                         23/06/2024 </td><td rowspan="4">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== gwalior DATE=====*/

gwalior_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 28/04/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (MAIN+ADVANCED) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== gwalior PNCF DATE=====*/

pncf_gwalior_asat = [

    '<td>Class V to VI</td><td rowspan="5"> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*,  21/07/2024*, 28/07/2024*, 04/08/2024* </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== cuttack DATE=====*/

cuttack_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="7">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td rowspan="5">                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];
/*====== cuttack PNCF DATE=====*/

pncf_cuttack_asat = [
    '<td>Class V to VI</td><td rowspan="5">                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

//coimbatore

coimbatore_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (X to XI)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>   28/04/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main + Advanced) & Pre-Medical Leader (XII Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td> Pre-Medical Leader (XIIth Passed)</td><td> 24/12/2023, 07/01/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',
    //
    // '<td>JEE (Main+ Advanced) Leader (XIIth Passed)</td><td> 24/12/2023, 07/01/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    //	 '<td>JEE (Main + Advanced ) Leader (XII Passed)</td><td> 08/01/2023 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO V to VI</td><td >             28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VI to VII</td><td>             28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VII to VIII</td><td>             28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td>                   19/05/2024, 26/05/2024, 02/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td>                   19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== coimbatore PNCF DATE =====*/

pncf_coimbatore_asat = [

    '<td>TALLENTPRO V to VI</td><td>   28/04/2024  </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VI to VII</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VII to VIII</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== siliguri DATE=====*/

siliguri_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024  </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>    24/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) Leader (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Leader (XII Passed)</td><td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>JEE (Main + Advanced) Leader (XII Passed)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',
    //
    // '<td> Pre-Medical Leader (XII Passed)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td rowspan="5">                  12/05/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== siliguri PNCF DATE=====*/

pncf_siliguri_asat = [
    // '<td>Class V to VI</td><td rowspan="5"> 08/01/2023 </td> <td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td rowspan="5">                  12/05/2024  </td><td rowspan="5">Objective</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== KOCHI DATE=====*/

kochi_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td rowspan="11">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td>JEE (MAIN+ADVANCED) & Pre-Medical Leader (XII Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td>Class V to VI</td><td >     19/05/2024, 26/05/2024, 02/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>     19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>     19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== kochi PNCF DATE=====*/

pncf_kochi_asat = [

    '<td>Class V to VI</td><td>     19/05/2024, 26/05/2024, 02/06/2024   </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>     19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>     19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024    </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== kolkata DATE=====*/

kolkata_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>   24/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Achiever (XII<sup>th</sup> Passed & Ex-ALLEN Students)</td><td>   19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Pre-Medical Achiever Plus (XII<sup>th</sup> Passed & Ex-ALLEN Students)</td><td>   07/07/2024*, 14/07/2024*, 21/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== kolkata PNCF DATE=====*/

pncf_kolkata_asat = [

    '<td>Class V to VI</td><td>     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== MUMBAI DATE=====*/

mumbai_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>                    19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td rowspan="11">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII<sup>th</sup> Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    // '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 17/12/2023* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td>                 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX (ELITE)</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X (ELITE)</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== MUMBAI PNCF DATE=====*/

pncf_mumbai_asat = [

    '<td>Class V to VI</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td rowspan="7">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX (ELITE)</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X (ELITE)</td><td>                  19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== MYSURU DATE=====*/

mysuru_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td rowspan="8">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td>            28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (MAIN+ADVANCED) & Pre-Medical Leader (XII Passed)</td><td>                19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>                   19/05/2024, 26/05/2024, 02/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                   19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== MYSURU PNCF DATE=====*/

pncf_mysuru_asat = [

    '<td>Class VIII to IX</td><td>                   19/05/2024, 26/05/2024, 02/06/2024   </td><td rowspan="2">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>                   19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];

/*====== jodhpur DATE=====*/

jodhpur_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 14/07/2024*  </td><td rowspan="10">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 31/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024, 07/07/2024*, 14/07/2024*   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Pre-Medical Achiever (XII Passed)</td><td>     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 07/07/2024*, 14/07/2024*  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td> <td> 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td> <td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td> <td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td> <td>          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== MYSURU PNCF DATE=====*/

pncf_jodhpur_asat = [

    '<td>Class V to VI</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td >          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td> <td >Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td >          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td >          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td >          19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];


/*====== NAGPUR DATE=====*/


nagpur_asat = [

    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>        19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024  </td><td rowspan="9">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 31/03/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) Leader (XII Passed)</td><td>        19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> Pre-Medical Leader (XII Passed)</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 07/07/2024* </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class V to VI</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td> <td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>       19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td>       19/05/2024, 26/05/2024, 02/06/2024   </td> <td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== NAGPUR PNCF DATE=====*/

pncf_nagpur_asat = [

    '<td>Class V to VI</td><td>                 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td> <td>                 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td>                 19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024  </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td>               19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td >              19/05/2024, 26/05/2024, 02/06/2024   </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];


/*====== Nanded DATE=====*/

nanded_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical Nurture (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Enthusiast (XI to XII)</td><td> 04/02/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (X to XI)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (XI to XII)</td><td> 04/02/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical Leader (XII Passed)</td><td>         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024 </td><td>Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td> TALLENTPRO VII to VIII</td><td rowspan="3">         19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== Nanded PNCF DATE=====*/

pncf_nanded_asat = [

    '<td> TALLENTPRO VII to VIII</td><td rowspan="3">                     19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== RANCHI PNCF DATE=====*/

pncf_ranchi_asat = [
    '<td>Class V to VI</td><td rowspan="8">                     19/05/2024  </td><td rowspan="8">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII (ICSE)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus_icse.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX  (ICSE)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus_icse.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X  (ICSE)</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus_icse.pdf" target="_blank">Click Here</a></td>',

];

/*====== RAWATBHATA PNCF DATE=====*/

pncf_rawatbhata_asat = [
    '<td>Class V to VI</td><td rowspan="5">                       19/05/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VI to VII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VII to VIII</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class VIII to IX</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>Class IX to X</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',
];


/*====== TIRPUPATI DATE=====*/
tirupati_asat = [
    '<td>JEE (Main+ Advanced) & Pre-Medical NURTURE (X to XI)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td rowspan="12">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical ENTHUSIAST (XI to XII)</td><td>   28/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical  LEADER (XII Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',


    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (X to XI)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/11-nurture-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO (XI to XII)</td><td>   28/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-enthus-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>JEE (Main+ Advanced) & Pre-Medical TALLENTPRO Leader (XII Passed)</td><td>           19/05/2024, 26/05/2024, 02/06/2024, 09/06/2024, 16/06/2024, 23/06/2024, 30/06/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/12-passed-leader-asat-syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO V to VI</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VI to VII</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VII to VIII</td><td>   28/04/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];

/*====== tirupati PNCF DATE=====*/

pncf_tirupati_asat = [

    '<td>TALLENTPRO V to VI</td><td>   28/04/2024 </td><td rowspan="5">Objective</td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/6_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VI to VII</td><td>   28/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/7_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VII to VIII</td><td>   28/04/2024 </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/8_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO VIII to IX</td><td>         19/05/2024, 26/05/2024, 02/06/2024  </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/9_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

    '<td>TALLENTPRO IX to X</td><td>         19/05/2024, 26/05/2024, 02/06/2024   </td><td><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/asat-syllabus/2024-25/10_asat_syllabus.pdf" target="_blank">Click Here</a></td>',

];