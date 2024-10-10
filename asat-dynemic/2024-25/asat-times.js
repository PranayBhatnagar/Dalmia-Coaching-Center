// JavaScript Document



function asatTimes(times, $) {
    for (var i = 0; i < times.length; i++) {
        $('<tr>' + times[i] + '</tr>').appendTo('#asatTimes .timedata');
    }
}



/*====== AHMEDABAD MAIN TIME=====*/

ahmedabad_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">ACHIEVER (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',

];

/*====== AHMEDABAD PNCF TIME =====*/
pncf_ahmedabad_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];


alwar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_alwar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];


/*====== KOTA MAIN TIME=====*/

kota_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>-->   <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER PLUS (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">ACHIEVER (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_kota_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
];


/*====== jaipur MAIN TIME=====*/

jaipur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>-->   <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
    // 
    //// 
];

/*====== KOTA PNCF TIME =====*/
pncf_jaipur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
];


bengaluru_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];


bikaner_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    //'<td>6.</td><td class="text-left">ACHIEVER (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_bikaner_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

/*====== AHMEDABAD PNCF TIME =====*/
pncf_bengaluru_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

mangaluru_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== AHMEDABAD PNCF TIME =====*/
pncf_mangaluru_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

bhilwara_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];

/*====== AHMEDABAD PNCF TIME =====*/
pncf_bhilwara_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

bhubaneswar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">ACHIEVER (XII Passed/Ex-ALLEN/Student)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_bhubaneswar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];


bhopal_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_bhopal_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];


/*====== Bundi PNCF TIME =====*/
pncf_bundi_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

buldana_asat_times = [
    // '<td>1.</td><td class="text-left">TALLENTPRO VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    // '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>1.</td><td class="text-left">TALLENTPRO (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td> 2.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

chandigarh_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_chandigarh_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

chennai_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_chennai_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];


dehradun_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== Dehradun PNCF TIME =====*/
pncf_dehradun_asat_times = [
    '<td>1.</td><td class="text-left">CLASS  VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

delhi_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">CLASS IX Elite & X Elite</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== Delhi PNCF TIME =====*/
pncf_delhi_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">CLASS IX Elite & X Elite</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];




durgapur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII, VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">ACHIEVER (XII Passed/Ex-ALLEN/Student)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== Dehradun PNCF TIME =====*/
pncf_durgapur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII, VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];







/*====== Hisar MAIN TIME =====*/

hisar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== Hisar PNCF TIME =====*/
pncf_hisar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== Hubballi MAIN TIME=====*/

hubballi_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VIII</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>-->   <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_hubballi_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VIII</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>-->  <td>01:00 PM to 03:00 PM</td>',
];


/*====== amritsar MAIN TIME =====*/

amritsar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== amritsar PNCF TIME =====*/
pncf_amritsar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== bathinda MAIN TIME =====*/

bathinda_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== bathinda PNCF TIME =====*/
pncf_bathinda_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== rohtak MAIN TIME =====*/

rohtak_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== rohtak PNCF TIME =====*/
pncf_rohtak_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

patna_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">ACHIEVER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== rohtak PNCF TIME =====*/
pncf_patna_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

madurai_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== rohtak PNCF TIME =====*/
pncf_madurai_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

lucknow_asat_times = [
    '<td>1.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX Elite & X Elite</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== rohtak PNCF TIME =====*/
pncf_lucknow_asat_times = [
    '<td>1.</td><td class="text-left">CLASS IX   & X  </td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX Elite & X Elite</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];


jammu_asat_times = [
    '<td>1.</td><td class="text-left">CLASS  VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== Dehradun PNCF TIME =====*/
pncf_jammu_asat_times = [
    '<td>1.</td><td class="text-left">CLASS  VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];


/*====== JHUNJHUNU PNCF TIME =====*/
jhunjhunu_asat_times = [
    '<td>1.</td><td class="text-left">Class VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">Class IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">ACHIEVER (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

pncf_jhunjhunu_asat_times = [
    '<td>1.</td><td class="text-left">Class VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">Class IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];


/*====== bilaspur PNCF TIME =====*/
bilaspur_asat_times = [
    '<td>1.</td><td class="text-left">TALLENTPRO VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">TALLENTPRO (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">TALLENTPRO LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    //    '<td>4.</td><td class="text-left">TALLENTPRO (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

pncf_bilaspur_asat_times = [
    '<td>1.</td><td class="text-left">TALLENTPRO VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];


/*====== Taranagar PNCF TIME =====*/
taranagar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',


];

pncf_taranagar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];





indore_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_indore_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];



kochi_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_kochi_asat_times = [
    '<td>1.</td><td class="text-left">CLASS  VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

kolkata_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS VIII, IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">ACHIEVER (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>7.</td><td class="text-left">ACHIEVER PLUS (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_kolkata_asat_times = [
    '<td>1.</td><td class="text-left">CLASS  VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS VIII, IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

mumbai_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',

];

/*====== KOTA PNCF TIME =====*/
pncf_mumbai_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

mysuru_asat_times = [
    //    '<td>1.</td><td class="text-left">CLASS  VI to VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>1.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_mysuru_asat_times = [
    //    '<td>1.</td><td class="text-left">CLASS  VI to VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>1.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];


jodhpur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII, VIII, IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">ACHIEVER (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_jodhpur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];



nagpur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_nagpur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];



nanded_asat_times = [
    // '<td>1.</td><td class="text-left">CLASS VI & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>1.</td><td class="text-left">TALLENTPRO VIII to X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">TALLENTPRO (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== Nanded PNCF TIME =====*/
pncf_nanded_asat_times = [
    '<td>1.</td><td class="text-left">TALLENTPRO VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];


nashik_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',

];

/*====== Nanded PNCF TIME =====*/
pncf_nashik_asat_times = [
    '<td>1.</td><td class="text-left">CLASS    VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

gwalior_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== gwalior PNCF TIME =====*/
pncf_gwalior_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

coimbatore_asat_times = [
    '<td>1.</td><td class="text-left">TALLENTPRO VI to VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];

/*====== coimbatore PNCF TIME =====*/
pncf_coimbatore_asat_times = [
    '<td>1.</td><td class="text-left">TALLENTPRO VI, VII, & VIII </td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

siliguri_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VII, VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];

/*====== Nanded PNCF TIME =====*/
pncf_siliguri_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VII, VIII </td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];






pune_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">ACHIEVER PLUS (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_pune_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

latur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];
pncf_latur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

akola_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];
pncf_akola_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];



/*====== PUDUCHERRY PNCF TIME =====*/
pncf_puducherry_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

puducherry_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];




pavaai_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">TALLENTPRO (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];

/*====== PAVAAI PNCF TIME =====*/
pncf_pavaai_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];

paavai_asat_times = [
    '<td>1.</td><td class="text-left">TALLENTPRO VI to VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">TALLENTPRO (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">TALLENTPRO (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">TALLENTPRO LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];

/*====== PAVAAI PNCF TIME =====*/
pncf_paavai_asat_times = [
    '<td>1.</td><td class="text-left">TALLENTPRO VI to VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];





palanpur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    // '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];


pncf_palanpur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];




rajkot_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

    //      
];

/*====== KOTA PNCF TIME =====*/
pncf_rajkot_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

guwahati_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',


];

/*====== guwahati PNCF TIME =====*/
pncf_guwahati_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

khanapara_asat_times = [
    //    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    //    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    //    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>1.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',


];

/*====== khanapara PNCF TIME =====*/
pncf_khanapara_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

dibrugarh_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];

/*====== KOTA PNCF TIME =====*/
pncf_dibrugarh_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];


/*====== KOTA PNCF TIME =====*/
pncf_ranchi_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];


/*====== KOTA PNCF TIME =====*/
pncf_rawatbhata_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];



raipur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">ACHIEVER (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== Raipur PNCF TIME =====*/
pncf_raipur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];



sikar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">ACHIEVER (XII Passed / Ex-ALLEN Students)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_sikar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

sambhajinagar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_sambhajinagar_asat_times = [
    '<td>1.</td><td class="text-left">CLASS   VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];


surat_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    // '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_surat_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];



srinagar_asat_times = [
    '<td>1</td><td class="text-left">CLASS VIII  </td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td>  <td>01:00 PM to 03:00 PM</td> ',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

pncf_srinagar_asat_times = [
    //     '<td>1.</td><td class="text-left">CLASS VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>1</td><td class="text-left">CLASS VIII  </td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>2</td><td class="text-left">CLASS IX & X</td> <td>01:00 PM to 03:00 PM</td>  ',
];


/*====== TIRUPATI PNCF TIME =====*/
pncf_tirupati_asat_times = [
    '<td>1.</td><td class="text-left">TALLENTPRO VI to VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

tirupati_asat_times = [
    
    '<td>1.</td><td class="text-left">TALLENTPRO VI to VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">TALLENTPRO IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
    '<td>6.</td><td class="text-left">TALLENTPRO (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>7.</td><td class="text-left">TALLENTPRO (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>8.</td><td class="text-left">TALLENTPRO LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];



udaipur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_udaipur_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];



ujjain_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',

];

/*====== KOTA PNCF TIME =====*/
pncf_ujjain_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];

vadodara_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>3.</td><td class="text-left">NURTURE (X to XI Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>4.</td><td class="text-left">ENTHUSIAST (XI to XII Moving)</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>5.</td><td class="text-left">LEADER (XII Passed)</td> <!--<td>01:00 PM to 02:30 PM</td>--><td>01:00 PM to 03:00 PM</td>',
];

/*====== KOTA PNCF TIME =====*/
pncf_vadodara_asat_times = [
    '<td>1.</td><td class="text-left">CLASS VI, VII & VIII</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
    '<td>2.</td><td class="text-left">CLASS IX & X</td> <!--<td>01:00 PM to 02:30 PM</td>--> <td>01:00 PM to 03:00 PM</td>',
];