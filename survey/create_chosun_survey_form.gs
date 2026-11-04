/**
 * 조선일보 AI 에이전트 활용 마스터 클래스 1기 사전 설문 생성 스크립트
 * 원본: survey_chosun_preview_20261104.html (문항을 고치면 이 스크립트를 다시 생성)
 * 사용법: script.google.com 새 프로젝트에 붙여 넣고 createChosunSurvey 실행
 * 실행 후 로그에 편집 링크와 응답 링크가 찍힘
 */
function createChosunSurvey() {
  var form = FormApp.create('AI 에이전트 활용 마스터 클래스 1기 사전 설문');
  form.setDescription("11월 11일 첫 수업 전에 여러분의 업무와 AI 사용 현황을 미리 듣고자 합니다.\n\n적어 주신 업무는 수업 예시와 실습 자료를 준비하는 데 씁니다. 회사명·숫자·고객명은 빼고 적으셔도 됩니다.\n\n응답은 5분 정도 걸립니다. 개인 응답은 강사와 운영진만 봅니다. 수업에서 사례로 소개할 때는 미리 여쭙고, 회사명과 숫자는 가립니다.\n\n마감 11월 9일(일) 자정");
  form.setProgressBar(true);
  form.setShuffleQuestions(false);
  form.setAllowResponseEdits(true);
  form.setLimitOneResponsePerUser(false);
  form.setCollectEmail(false);
  form.setConfirmationMessage('응답해 주셔서 감사합니다. 11월 11일 트레이드타워 51층에서 뵙겠습니다.');

  form.addSectionHeaderItem().setTitle("지금의 AI 사용");
  var q1 = form.addTextItem();
  q1.setTitle("Q1. 성함을 적어 주십시오.").setRequired(true);
  var q2 = form.addMultipleChoiceItem();
  q2.setTitle("Q2. 회사 임직원 규모는 어느 정도입니까?").setRequired(true);
  q2.setChoiceValues(["10명 미만","10~49명","50~99명","100~299명","300명 이상"]);
  var q3 = form.addCheckboxItem();
  q3.setTitle("Q3. 현재 유료로 구독 중인 AI 서비스를 모두 골라 주십시오.").setRequired(true);
  q3.setHelpText("수업에는 ChatGPT Plus 이상(개인 계정)이 필요합니다.");
  q3.setChoiceValues(["ChatGPT(Plus, Pro)","ChatGPT(회사 계정. Team, Enterprise)","Claude(Pro, Max, Ultra)","Claude(회사 계정. Team, Enterprise)","Gemini","Microsoft Copilot","Genspark","Higgsfield","Liner","유료로 구독 중인 서비스 없음"]);
  q3.showOtherOption(true);
  var q4 = form.addMultipleChoiceItem();
  q4.setTitle("Q4. 최근 4주 동안 업무에 AI를 얼마나 쓰셨습니까?").setRequired(true);
  q4.setChoiceValues(["월 1회 미만","월 2~3회","주 1~2회","주 3~4회","거의 매일"]);
  var q5 = form.addCheckboxItem();
  q5.setTitle("Q5. 지금까지 직접 해 본 것을 모두 골라 주십시오.").setRequired(true);
  q5.setChoiceValues(["묻고 답을 받는 대화 (검색, 요약, 문장 다듬기 등)","한 번 설명해 두고 같은 일을 반복해 맡기기 (프로젝트 지침 설정)","AI로 업무 도구를 직접 만들기 (바이브코딩: 대시보드, 기존 SaaS 서비스 대체, 간단한 앱 등)","업무 절차를 AI에게 가르쳐 두고 필요할 때 불러 쓰기 (스킬: 공시 조회, 뉴스 클리핑 등)","여러 AI에게 역할을 나눠 함께 일하게 하기 (멀티 에이전트)","정해진 시간에 AI가 알아서 일하도록 예약하기 (예약 실행)","아직 해 본 것이 없다"]);
  var q6 = form.addMultipleChoiceItem();
  q6.setTitle("Q6. 회사의 AI 활용 수준에 가장 가까운 것 하나를 골라 주십시오.").setRequired(true);
  q6.setChoiceValues(["거의 쓰지 않는다","회사 방침 없이 구성원이 각자 알아서 쓴다","회사가 유료 계정이나 교육을 지원한다","특정 업무 절차에 AI가 정식으로 들어가 있다","잘 모르겠다"]);

  form.addPageBreakItem().setTitle("앞으로 맡기고 싶은 일");
  var q7 = form.addCheckboxItem();
  q7.setTitle("Q7. 앞으로 AI에게 가장 맡기고 싶은 일을 2개까지 골라 주십시오.").setRequired(true);
  q7.setChoiceValues(["정보 탐색 (시장·경쟁사·공시·법령 조사 등)","자료 요약·검토 (보고서·계약서·회의록 등)","문서 작성 (이메일·공문·제안서·홍보 문구, 번역 등)","내부 데이터 분석 (매출·원가 등)","업무 도구 구축 (슬라이드·대시보드·간단한 앱 등)","콘텐츠 제작 (동영상·이미지·책 등)","의사결정 지원 (기획 아이디어, 검토와 반론 등)"]);
  q7.showOtherOption(true);
  q7.setValidation(FormApp.createCheckboxValidation().setHelpText("2개까지 골라 주십시오.").requireSelectAtMost(2).build());
  var q8 = form.addParagraphTextItem();
  q8.setTitle("Q8. 실습에서 AI에게 맡겨 보고 싶은 업무 하나를 적어 주십시오.").setRequired(true);
  q8.setHelpText("예. 매주 월요일 경쟁사·업계 동향 정리, 월별 원가·불량률 정리\n회사명·숫자·고객명은 빼고 적으셔도 됩니다.");
  var q9 = form.addTextItem();
  q9.setTitle("Q9. 그 업무에 지금 누가 얼마나 시간을 쓰고 있습니까?").setRequired(false);
  q9.setHelpText("예. 기획팀 과장이 주 4시간");
  var q10 = form.addMultipleChoiceItem();
  q10.setTitle("Q10. 그 업무의 결과를 어떤 형태로 받아 보고 싶으십니까?").setRequired(true);
  q10.setChoiceValues(["문서 (보고서·요약문·이메일 등)","표·차트 (엑셀·그래프 등)","발표 자료 (PPT 등)","대시보드·앱 (직접 열어 보는 화면)","영상·이미지"]);
  q10.showOtherOption(true);
  var q11 = form.addParagraphTextItem();
  q11.setTitle("Q11. 첫 수업 전에 강사에게 부탁하거나 당부하고 싶은 것이 있다면 적어 주십시오.").setRequired(false);

  Logger.log('편집 링크: ' + form.getEditUrl());
  Logger.log('응답 링크: ' + form.getPublishedUrl());
}
