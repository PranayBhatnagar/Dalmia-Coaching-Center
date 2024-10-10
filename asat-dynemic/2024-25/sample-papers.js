// JavaScript Document

function samplePapers(paper, $) {
    for (var i = 0; i < paper.length; i++) {
        $('<tr>' + paper[i] + '</tr>').appendTo('#samplePapers .data');
    }
}


/*====== Gateway Notification=====*/

kota_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    //    //'<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER PLUS (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_kota_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];



alwar_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_alwar_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


jaipur_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    //    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    // '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_jaipur_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

ahmedabad_sample_papers = [


    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>NURTURE (X to XI Moving) (Gurjarati Medium) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/GUJARATI/CLASS-XI-Nurture-SAMPLE-TEST-PAPER-GUJARATI.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving) (Gujarati Medium) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/GUJARATI/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER-GUJARATI.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed) (Gujarati Medium)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/GUJARATI/CLASS-XII-leader-SAMPLE-TEST-PAPER-GUJARATI.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    //    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    //    '<td>LEADER (XII Passed) (Gujarati Medium) </td><td class="text-center"><a href="/asat-sample-papers/2023-24/gujarati-medium/class-xii-leader-sample-test-paper.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VIII to IX (Gujarati Medium)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/GUJARATI/CLASS-IX-SAMPLE-TEST-PAPER-GUJARATI.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X (Gujarati Medium)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/GUJARATI/CLASS-X-SAMPLE-TEST-PAPER-GUJARATI.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_ahmedabad_sample_papers = [

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VIII to IX (Gujarati Medium)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/GUJARATI/CLASS-IX-SAMPLE-TEST-PAPER-GUJARATI.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X (Gujarati Medium)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/GUJARATI/CLASS-X-SAMPLE-TEST-PAPER-GUJARATI.pdf" target="_blank"><b>Click Here</b></a></td>',

];




bikaner_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    //'<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_bikaner_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];




mangaluru_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


];

pncf_mangaluru_sample_papers = [

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


bengaluru_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_bengaluru_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

bhilwara_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    //    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_bhilwara_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

bhubaneswar_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_bhubaneswar_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


bhopal_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_bhopal_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


pncf_bundi_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


buldana_sample_papers = [

    '<td>TALLENTPRO (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

chennai_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    // '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_chennai_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

chandigarh_sample_papers = [

    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


];

pncf_chandigarh_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

dehradun_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_dehradun_sample_papers = [
    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

delhi_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX Elite</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class X Elite</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_delhi_sample_papers = [

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX Elite</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class X Elite</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


durgapur_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_durgapur_sample_papers = [


    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];





jammu_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_jammu_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];



jhunjhunu_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_jhunjhunu_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


bilaspur_sample_papers = [
    '<td>TALLENTPRO (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    // '<td>TALLENTPRO (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    //// '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>TALLENTPRO VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_bilaspur_sample_papers = [

    '<td>TALLENTPRO VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


taranagar_sample_papers = [


    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>CLASS V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>CLASS VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>CLASS VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>CLASS VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>CLASS IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_taranagar_sample_papers = [

    '<td>CLASS V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>CLASS VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>CLASS VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>CLASS VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>CLASS IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

khanapara_sample_papers = [

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_khanapara_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

dibrugarh_sample_papers = [

    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


];

pncf_dibrugarh_sample_papers = [

    //    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


hisar_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_hisar_sample_papers = [

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];



hubballi_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_hubballi_sample_papers = [
    // '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    // '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


amritsar_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_amritsar_sample_papers = [

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


bathinda_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_bathinda_sample_papers = [

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


rohtak_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_rohtak_sample_papers = [

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


patna_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


];

pncf_patna_sample_papers = [

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

madurai_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


];

pncf_madurai_sample_papers = [

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

lucknow_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX Elite</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class X Elite</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


];

pncf_lucknow_sample_papers = [

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX Elite</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class X Elite</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];


indore_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_indore_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


kochi_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_kochi_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

kolkata_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>ACHIEVER PLUS (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_kolkata_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

mumbai_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_mumbai_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

mysuru_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_mysuru_sample_papers = [

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

jodhpur_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',
    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_jodhpur_sample_papers = [

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

nagpur_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_nagpur_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];



nanded_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>TALLENTPRO (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_nanded_sample_papers = [

    //     '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',
    //
    //     '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',
    //
    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


nashik_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


];

pncf_nashik_sample_papers = [

    //     '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',
    //
    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];



gwalior_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_gwalior_sample_papers = [

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

coimbatore_sample_papers = [
    '<td>TALLENTPRO (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

pncf_coimbatore_sample_papers = [

    '<td>TALLENTPRO V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


siliguri_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_siliguri_sample_papers = [

    ////     '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',
    ////
    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',
    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

pune_sample_papers = [

    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER PLUS (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_pune_sample_papers = [

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

latur_sample_papers = [

    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_latur_sample_papers = [


    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];


akola_sample_papers = [

    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_akola_sample_papers = [


    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];


pavaai_sample_papers = [
    '<td>TALLENTPRO  (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    //    '<td>TALLENTPRO  (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    //
    //    '<td>TALLENTPRO  LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    //
    //    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_pavaai_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


paavai_sample_papers = [
    '<td>TALLENTPRO  (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    //    '<td>TALLENTPRO  (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    //
    //    '<td>TALLENTPRO  LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    //
    //    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_paavai_sample_papers = [
    '<td>TALLENTPRO V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];





palanpur_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>NURTURE (X to XI Moving) (Gurjarati Medium) </td><td class="text-center"><a href="/asat-sample-papers/2023-24/gujarati-medium/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    // '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_palanpur_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


puducherry_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_puducherry_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];


rajkot_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>NURTURE (X to XI Moving) (Gujarati Medium) </td><td class="text-center"><a href="/asat-sample-papers/2023-24/gujarati-medium/CLASS-XI-Gujarati-medium-nurture-sample-test-paper-rajkot.pdf" target="_blank"><b>Click Here</b></a></td>',

    //'<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_rajkot_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

guwahati_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_guwahati_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

raipur_sample_papers = [

    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_raipur_sample_papers = [

    // '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    //  '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

sambhajinagar_sample_papers = [

    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',


    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_sambhajinagar_sample_papers = [

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

sikar_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ACHIEVER (XII Passed / Ex-ALLEN Students)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_sikar_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

surat_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>NURTURE (X to XI Moving) (Gurjarati Medium) </td><td class="text-center"><a href="/asat-sample-papers/2023-24/gujarati-medium/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    //'<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_surat_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];



srinagar_sample_papers = [

    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_srinagar_sample_papers = [



    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];



tirupati_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>TALLENTPRO (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>TALLENTPRO (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>TALLENTPRO LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_tirupati_sample_papers = [
    '<td>TALLENTPRO V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>TALLENTPRO VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>TALLENTPRO IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];



udaipur_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_udaipur_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];



ujjain_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_ujjain_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

vadodara_sample_papers = [
    '<td>NURTURE (X to XI Moving) </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>NURTURE (X to XI Moving) (Gurjarati Medium) </td><td class="text-center"><a href="/asat-sample-papers/2023-24/gujarati-medium/CLASS-XI-Nurture-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>ENTHUSIAST (XI to XII Moving)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XII-Enthusiast-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>LEADER (XII Passed)</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS-XIII-Leader-SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

];

pncf_vadodara_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

pncf_ranchi_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X </td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];

pncf_rawatbhata_sample_papers = [
    '<td>Class V to VI</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VI_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VI to VII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class VII to VIII</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_VIII_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></div></td>',

    '<td>Class VIII to IX</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_IX_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',

    '<td>Class IX to X</td><td class="text-center"><a href="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/pdf/2024-25/sample-paper/CLASS_X_SAMPLE-TEST-PAPER.pdf" target="_blank"><b>Click Here</b></a></td>',
];