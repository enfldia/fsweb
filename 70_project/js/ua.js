
/* string(문자열) 객체
문자열a.indexof('문자열b') ~a에 b가 존재하면 idx(색인 번호)를 출력, 아니면 - 1;
문자열.toLowerCase() ~문자열을 소문자로 변환 */
/* 
    http://id.dothome.co.kr/index.html  ->데스크탑
    http://id.dothome.co.kr/m/index.html-> 모바일
*/
const ua = navigator.userAgent.toLowerCase();

if (ua.indexOf('window') > 0) {
    location.href = 'http://enf.dothome.co.kr/index.html';
} else {
    location.href = 'http://enf.dothome.co.kr/m/index.html';
};
