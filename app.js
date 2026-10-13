const lessons = [
  { day: 1, stage: '基础沟通', title: 'Hello, I’m…', goal: '能用 3 句话介绍自己、职位和所在公司。', tags: ['打招呼', '自我介绍'], listen: 'Hello. My name is Chen. I work for a technology company. Nice to meet you.', transcript: [
    ['Hello. My name is Chen.', '你好。我叫 Chen。'], ['I work for a technology company.', '我在一家科技公司工作。'], ['Nice to meet you.', '很高兴认识你。']
  ], words: [['name', '名字', 'My name is Chen.'], ['work for', '为……工作', 'I work for a technology company.'], ['technology', '技术；科技', 'technology company'], ['nice to meet you', '很高兴认识你', 'Nice to meet you.']], keywords: ['name', 'company', 'work', 'nice'], retell: '请用关键词说一段 20 秒的自我介绍。', work: ['I work for a technology company.', '我在一家科技公司工作。', 'I work with customers and provide technical support.'], workSteps: [['I work.', '我工作。', '先只读主干'], ['I work for a company.', '我在一家公司工作。', '加上 for a company'], ['I work for a technology company.', '我在一家科技公司工作。', '最后再加 technology'], ['I work with customers.', '我和客户打交道。', '今天先练这一句，不要求连成长句']], quiz: { q: '“我在一家科技公司工作。”应该说：', options: ['I work for a technology company.', 'I am work technology company.', 'I working to a company.'], answer: 0 } },
  { day: 2, stage: '基础沟通', title: 'What do you do?', goal: '能说出自己的职位，并询问客户的工作。', tags: ['职位', '问答'], listen: 'What do you do? I am an engineer. I work with customers and products.', transcript: [
    ['What do you do?', '你是做什么工作的？'], ['I am an engineer.', '我是一名工程师。'], ['I work with customers and products.', '我和客户及产品打交道。']
  ], words: [['what do you do', '你做什么工作', 'What do you do?'], ['engineer', '工程师', 'I am an engineer.'], ['customer', '客户', 'I work with customers.'], ['product', '产品', 'I work with products.']], keywords: ['job', 'engineer', 'customer', 'product'], retell: '用关键词介绍你的职位和工作对象。', work: ['I am a [your job].', '我是一名……', 'I work with customers and technical teams.'], quiz: { q: '询问对方职业，应该说：', options: ['What do you do?', 'What you are do?', 'How do you work?'], answer: 0 } },
  { day: 3, stage: '基础沟通', title: 'This is our product.', goal: '能介绍一个产品或技术文件。', tags: ['产品', '指示'], listen: 'This is our product. It is a technical device. This is the user guide.', transcript: [
    ['This is our product.', '这是我们的产品。'], ['It is a technical device.', '它是一台技术设备。'], ['This is the user guide.', '这是用户指南。']
  ], words: [['this is', '这是', 'This is our product.'], ['our', '我们的', 'our product'], ['technical', '技术的', 'a technical device'], ['user guide', '用户指南', 'This is the user guide.']], keywords: ['this', 'product', 'technical', 'guide'], retell: '假装把一个产品或文件递给客户，做 3 句介绍。', work: ['This is our technical document.', '这是我们的技术文件。', 'This is the product specification.'], quiz: { q: '“这是我们的产品。”应该说：', options: ['This is our product.', 'That are our product.', 'This our is product.'], answer: 0 } },
  { day: 4, stage: '客户沟通', title: 'How can I help you?', goal: '能询问客户需求，并听懂最基础的请求。', tags: ['需求', '服务'], listen: 'How can I help you? I need some information about your product. Sure. What information do you need?', transcript: [
    ['How can I help you?', '我能怎么帮助你？'], ['I need some information about your product.', '我需要一些关于你们产品的信息。'], ['What information do you need?', '你需要什么信息？']
  ], words: [['help', '帮助', 'How can I help you?'], ['need', '需要', 'I need some information.'], ['information', '信息', 'some information about…'], ['about', '关于', 'about your product']], keywords: ['help', 'need', 'information', 'product'], retell: '复述一次客户来询问产品信息的对话。', work: ['How can I help you with the technical document?', '关于技术文件，我能怎么帮助你？', 'What information do you need?'], quiz: { q: '客户说“我需要一些信息”，可用：', options: ['I need some information.', 'I am need information.', 'I need a inform.'], answer: 0 } },
  { day: 5, stage: '客户沟通', title: 'The model number is…', goal: '能读出并确认型号、数量等基本信息。', tags: ['数字', '型号'], listen: 'The model number is T twenty-four. The quantity is ten units. Please check the information.', transcript: [
    ['The model number is T twenty-four.', '型号是 T24。'], ['The quantity is ten units.', '数量是 10 台。'], ['Please check the information.', '请检查信息。']
  ], words: [['model number', '型号', 'The model number is T24.'], ['quantity', '数量', 'The quantity is ten units.'], ['unit', '台；个；单位', 'ten units'], ['check', '检查；核对', 'Please check the information.']], keywords: ['model', 'number', 'quantity', 'check'], retell: '向客户报出一个你虚构的型号和数量。', work: ['The model number is A-100.', '型号是 A-100。', 'The quantity is five units. Please check it.'], quiz: { q: '“请确认信息”最合适的是：', options: ['Please confirm the information.', 'Please information confirm.', 'Confirm please to information.'], answer: 0 } },
  { day: 6, stage: '客户沟通', title: 'Could you repeat that?', goal: '听不懂时礼貌地请求重复、慢一点或写下来。', tags: ['听不懂', '礼貌表达'], listen: 'I am sorry, I do not understand. Could you repeat that, please? Could you speak more slowly?', transcript: [
    ['I am sorry, I do not understand.', '不好意思，我听不懂。'], ['Could you repeat that, please?', '请您再说一遍，好吗？'], ['Could you speak more slowly?', '您能说慢一点吗？']
  ], words: [['understand', '理解；听懂', 'I do not understand.'], ['repeat', '重复', 'Could you repeat that?'], ['slowly', '慢一点地', 'speak more slowly'], ['write down', '写下来', 'Could you write it down?']], keywords: ['sorry', 'understand', 'repeat', 'slowly'], retell: '想象客户说得太快，用 2 句礼貌表达应对。', work: ['Could you repeat the model number, please?', '请您重复一下型号，好吗？', 'Could you write it down, please?'], quiz: { q: '听不懂时最自然的说法是：', options: ['Could you repeat that, please?', 'Repeat you now.', 'I not understand you repeat.'], answer: 0 } },
  { day: 7, stage: '第一周复习', title: 'Week 1 · Tell your story', goal: '把前 6 天的句型串起来，完成 30 秒工作介绍。', tags: ['复习', '输出'], listen: 'Hello. My name is Chen. I work for a technology company. This is our product. How can I help you?', transcript: [
    ['Hello. My name is Chen.', '你好。我叫 Chen。'], ['I work for a technology company.', '我在一家科技公司工作。'], ['This is our product. How can I help you?', '这是我们的产品。我能怎么帮助你？']
  ], words: [['tell', '讲述', 'Tell your story.'], ['story', '故事；经历', 'your work story'], ['company', '公司', 'technology company'], ['support', '支持', 'technical support']], keywords: ['name', 'work', 'product', 'help'], retell: '不看原文，完成一段 30 秒自我介绍和产品开场。', work: ['I work with customers. This is our product. How can I help you?', '我和客户打交道。这是我们的产品。我能怎么帮助你？', '先说完整，再追求自然。'], quiz: { q: '下面哪段最适合作为客户开场？', options: ['Hello. I work with customers. How can I help you?', 'Hello. You give me customer.', 'I am help product customer.'], answer: 0 } },
  { day: 8, stage: '工作表达', title: 'I usually…', goal: '能简单讲述日常工作流程。', tags: ['日常工作', '频率'], listen: 'I usually check emails in the morning. Then I talk with customers and update the project.', transcript: [
    ['I usually check emails in the morning.', '我通常早上查看邮件。'], ['Then I talk with customers.', '然后我和客户沟通。'], ['I update the project.', '我更新项目进展。']
  ], words: [['usually', '通常', 'I usually check emails.'], ['check emails', '查看邮件', 'check emails in the morning'], ['then', '然后', 'Then I talk with customers.'], ['update', '更新', 'update the project']], keywords: ['usually', 'morning', 'customers', 'update'], retell: '用 usually 和 then 讲述你的工作日。', work: ['I usually check the technical file first.', '我通常先检查技术文件。', 'Then I send an update to the customer.'], quiz: { q: '“然后我发送文件”可以说：', options: ['Then I send the file.', 'Then send I file.', 'Then I sending file.'], answer: 0 } },
  { day: 9, stage: '工作表达', title: 'We need / We can…', goal: '能表达需求、能力和下一步。', tags: ['需求', '计划'], listen: 'We need more information. We can check the file today. We can send an update tomorrow.', transcript: [
    ['We need more information.', '我们需要更多信息。'], ['We can check the file today.', '我们今天可以检查文件。'], ['We can send an update tomorrow.', '我们明天可以发送更新。']
  ], words: [['more', '更多', 'more information'], ['can', '可以；能够', 'We can check the file.'], ['today', '今天', 'check it today'], ['tomorrow', '明天', 'send it tomorrow']], keywords: ['need', 'can', 'today', 'tomorrow'], retell: '对客户说出一个今天能做、明天能做的事情。', work: ['We need the customer’s feedback.', '我们需要客户的反馈。', 'We can send the updated document tomorrow.'], quiz: { q: '“我们可以今天检查文件”是：', options: ['We can check the file today.', 'We can checking today file.', 'We today can the file check.'], answer: 0 } },
  { day: 10, stage: '技术资料', title: 'Please see the attached file.', goal: '能读懂并发送简单技术资料说明。', tags: ['文件', '邮件'], listen: 'Please see the attached file. It includes the product specifications. Please let me know if you have questions.', transcript: [
    ['Please see the attached file.', '请查看附件。'], ['It includes the product specifications.', '里面包含产品规格。'], ['Please let me know if you have questions.', '如果你有问题，请告诉我。']
  ], words: [['attached file', '附件', 'see the attached file'], ['include', '包含', 'It includes…'], ['specification', '规格', 'product specifications'], ['question', '问题', 'if you have questions']], keywords: ['attached', 'file', 'specifications', 'questions'], retell: '模拟发一封邮件，介绍附件里有什么。', work: ['Please see the attached technical document.', '请查看附件中的技术文件。', 'It includes the model and specifications.'], quiz: { q: '“请查看附件”是：', options: ['Please see the attached file.', 'Please look attachment file.', 'See please the file attach.'], answer: 0 } },
  { day: 11, stage: '技术资料', title: 'Let me confirm.', goal: '能复述客户信息并请求确认。', tags: ['确认', '细节'], listen: 'Let me confirm the details. You need ten units of model A-100. Is that correct?', transcript: [
    ['Let me confirm the details.', '让我确认一下细节。'], ['You need ten units of model A-100.', '您需要 10 台 A-100 型号的产品。'], ['Is that correct?', '这样对吗？']
  ], words: [['confirm', '确认', 'Let me confirm.'], ['detail', '细节', 'confirm the details'], ['correct', '正确的', 'Is that correct?'], ['mean', '意思是', 'Do you mean…?']], keywords: ['confirm', 'details', 'need', 'correct'], retell: '复述型号和数量，并用 Is that correct? 结尾。', work: ['Let me confirm the model and quantity.', '让我确认一下型号和数量。', 'Is that correct?'], quiz: { q: '“让我确认一下”可以说：', options: ['Let me confirm.', 'Let I confirm.', 'I let confirm it.'], answer: 0 } },
  { day: 12, stage: '会议安排', title: 'When is convenient?', goal: '能询问时间并安排一个简单会议。', tags: ['时间', '会议'], listen: 'When is convenient for you? How about Tuesday at ten? That works for me.', transcript: [
    ['When is convenient for you?', '什么时候对您方便？'], ['How about Tuesday at ten?', '周二十点怎么样？'], ['That works for me.', '这个时间对我可以。']
  ], words: [['convenient', '方便的', 'convenient for you'], ['how about', '……怎么样', 'How about Tuesday?'], ['work for', '对……合适', 'That works for me.'], ['meeting', '会议', 'a short meeting']], keywords: ['when', 'convenient', 'Tuesday', 'works'], retell: '和客户约一个时间，至少说 3 句。', work: ['When is convenient for you for a short meeting?', '您什么时候方便参加一个简短会议？', 'How about tomorrow at three?'], quiz: { q: '“这个时间对我可以”是：', options: ['That works for me.', 'That works me.', 'It work for I.'], answer: 0 } },
  { day: 13, stage: '售后支持', title: 'There is a problem.', goal: '能描述一个简单问题并说明正在处理。', tags: ['问题', '支持'], listen: 'There is a problem with the device. Let me check it. We are working on a solution.', transcript: [
    ['There is a problem with the device.', '设备有一个问题。'], ['Let me check it.', '让我检查一下。'], ['We are working on a solution.', '我们正在处理解决方案。']
  ], words: [['problem', '问题', 'There is a problem.'], ['device', '设备', 'the device'], ['solution', '解决方案', 'work on a solution'], ['check', '检查', 'Let me check it.']], keywords: ['problem', 'device', 'check', 'solution'], retell: '模拟客户报告问题，你先回应并说明下一步。', work: ['I understand the problem. Let me check it with our technical team.', '我了解这个问题。让我和技术团队确认一下。', 'We will update you soon.'], quiz: { q: '“让我检查一下”是：', options: ['Let me check it.', 'Let me checking.', 'I let check it.'], answer: 0 } },
  { day: 14, stage: '第二周复习', title: 'Your first customer call', goal: '完成一次基础客户通话：介绍、询问、确认和下一步。', tags: ['复习', '客户通话'], listen: 'Hello. I work with customers. How can I help you? Let me confirm the details. We can send an update tomorrow.', transcript: [
    ['Hello. I work with customers.', '你好。我负责和客户沟通。'], ['How can I help you?', '我能怎么帮助你？'], ['Let me confirm the details. We can send an update tomorrow.', '让我确认一下细节。我们明天可以发送更新。']
  ], words: [['customer call', '客户通话', 'your first customer call'], ['detail', '细节', 'confirm the details'], ['update', '更新', 'send an update'], ['soon', '很快', 'update you soon']], keywords: ['hello', 'help', 'confirm', 'update'], retell: '完成一段 45 秒客户通话开场。先自我介绍，再询问需求，最后说下一步。', work: ['Hello. I work with customers. How can I help you?', 'Let me confirm the details. We can send an update tomorrow.', '先把意思说完整，不追求复杂。'], quiz: { q: '客户通话中最好的下一步表达是：', options: ['Let me confirm the details.', 'I no know detail.', 'You wait and I maybe.'], answer: 0 } }
];

const storageKey = 'engcoach-v1';
const defaultState = { currentDay: 1, taskState: {}, completedDays: [], checkins: [], retells: {}, quizResults: {}, checkResults: {}, voiceRecords: {}, messageRecords: {}, testRecords: {} };
let state = loadState();
let currentLesson = lessons.find((item) => item.day === state.currentDay) || lessons[0];
let deferredInstallPrompt = null;

function loadState() {
  try { return { ...defaultState, ...JSON.parse(localStorage.getItem(storageKey) || '{}') }; } catch { return { ...defaultState }; }
}
function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); }
function appendRecord(bucket, day, record) { state[bucket][day] = [...(state[bucket][day] || []), record]; }
function taskKey(day, index) { return `${day}-${index}`; }
function tasksFor(lesson) { return [
  ['listen', '听今日短对话 3 遍', '先不看中文，抓住熟悉的声音'],
  ['understand', '看英文文本并理解意思', '打开每句中文，理解整体'],
  ['vocab', '读重点词和例句', '只记今天真正用得到的词'],
  ['shadow', '跟读每句话 3 遍', '模仿声音、停顿和语调'],
  ['retell', '看关键词复述一遍', '不会也没关系，先说出来'],
  ['transfer', '完成 1 个工作英语替换', '把教材句型带进你的工作']
]; }
function checkedCount(day) { return tasksFor(lessons.find((item) => item.day === day)).filter((_, index) => state.taskState[taskKey(day, index)]).length; }
function isDayDone(day) { return state.completedDays.includes(day); }
function getStreak() { const days = new Set(state.checkins); let streak = 0; const cursor = new Date(); cursor.setHours(0,0,0,0); while (days.has(cursor.toISOString().slice(0,10))) { streak += 1; cursor.setDate(cursor.getDate() - 1); } return streak; }
function formatDate() { return new Intl.DateTimeFormat('zh-CN', { month: 'numeric', day: 'numeric', weekday: 'short' }).format(new Date()); }
function esc(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char])); }
function showToast(message) { const toast = document.getElementById('toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200); }

function renderHome() {
  currentLesson = lessons.find((item) => item.day === state.currentDay) || lessons[0];
  const done = checkedCount(currentLesson.day); const total = tasksFor(currentLesson).length; const percent = Math.round(done / total * 100); const totalPercent = Math.round(state.completedDays.length / lessons.length * 100);
  document.getElementById('todayDate').textContent = formatDate();
  document.getElementById('dayNumber').textContent = currentLesson.day;
  document.getElementById('lessonStage').textContent = currentLesson.stage;
  document.getElementById('lessonTitle').textContent = currentLesson.title;
  document.getElementById('lessonGoal').textContent = currentLesson.goal;
  document.getElementById('lessonTags').innerHTML = currentLesson.tags.map((tag) => `<span class="tag">${esc(tag)}</span>`).join('');
  document.getElementById('todayPercent').textContent = `${percent}%`;
  document.getElementById('streakStat').textContent = getStreak();
  document.getElementById('completedStat').textContent = state.completedDays.length;
  document.getElementById('totalProgressStat').textContent = `${totalPercent}%`;
  document.getElementById('taskCount').textContent = `${done} / ${total}`;
  const list = document.getElementById('taskList');
  list.innerHTML = tasksFor(currentLesson).map((task, index) => { const checked = !!state.taskState[taskKey(currentLesson.day, index)]; return `<label class="task-item ${checked ? 'done' : ''}"><input type="checkbox" data-task="${index}" ${checked ? 'checked' : ''}><span>${esc(task[1])}<small>${esc(task[2])}</small></span></label>`; }).join('');
  list.querySelectorAll('input').forEach((input) => input.addEventListener('change', (event) => { state.taskState[taskKey(currentLesson.day, Number(event.target.dataset.task))] = event.target.checked; saveState(); renderHome(); updateButtons(); }));
  document.getElementById('checkinBtn').disabled = done < 5 || isDayDone(currentLesson.day);
  document.getElementById('checkinBtn').textContent = isDayDone(currentLesson.day) ? '今天已打卡 ✓' : '完成今天的学习并打卡';
  document.getElementById('checkinHint').textContent = isDayDone(currentLesson.day) ? '做得好，明天继续。你也可以去课程地图提前看看下一课。' : '完成至少 5 项任务后可以打卡。中断了也没关系，回来继续就好。';
}
function renderLesson() {
  const lesson = currentLesson;
  document.getElementById('lessonPageProgress').textContent = `第 ${lesson.day} / ${lessons.length} 天`;
  document.getElementById('pageStage').textContent = `${String(lesson.day).padStart(2, '0')} · ${lesson.stage}`;
  document.getElementById('lessonPageTitle').textContent = lesson.title;
  document.getElementById('pageGoal').textContent = lesson.goal;
  document.getElementById('transcript').innerHTML = lesson.transcript.map((line, index) => `<div class="transcript-line"><button type="button" data-say-index="${index}">${esc(line[0])}</button><p>${esc(line[1])}</p></div>`).join('');
  document.getElementById('transcript').querySelectorAll('[data-say-index]').forEach((btn) => btn.addEventListener('click', () => speak(lesson.transcript[Number(btn.dataset.sayIndex)][0])));
  document.getElementById('vocabGrid').innerHTML = lesson.words.map((word) => `<article class="vocab-card"><b>${esc(word[0])}</b><span class="meaning">${esc(word[1])}</span><p>${esc(word[2])}</p></article>`).join('');
  document.getElementById('shadowList').innerHTML = lesson.transcript.map((line, index) => `<div class="shadow-line"><button type="button" data-say-index="${index}">▶</button><span>${esc(line[0])}</span></div>`).join('');
  document.getElementById('shadowList').querySelectorAll('[data-say-index]').forEach((btn) => btn.addEventListener('click', () => speak(lesson.transcript[Number(btn.dataset.sayIndex)][0], false)));
  document.getElementById('retellPrompt').textContent = lesson.retell;
  document.getElementById('keywordRow').innerHTML = lesson.keywords.map((word) => `<span class="keyword">${esc(word)}</span>`).join('');
  document.getElementById('retellInput').value = state.retells[lesson.day] || '';
  document.getElementById('retellSaved').hidden = !state.retells[lesson.day];
  const workSteps = lesson.workSteps || [[lesson.work[0], lesson.work[1], '先模仿这一句']];
  document.getElementById('workTransfer').innerHTML = `<div class="transfer-intro"><small>不要一次读完整长句。每一级读顺后，再进入下一级。</small></div><div class="work-ladder">${workSteps.map((step, index) => `<div class="work-step"><span>${String(index + 1).padStart(2, '0')}</span><div><strong>${esc(step[0])}</strong><p>${esc(step[1])}</p><small>${esc(step[2])}</small></div><button type="button" data-work-say="${index}">▶</button></div>`).join('')}</div><div class="advanced-note"><b>进阶句（今天先不要求）</b><span>${esc(lesson.work[2])}</span></div>`;
  document.querySelectorAll('[data-work-say]').forEach((button) => button.addEventListener('click', () => speak(workSteps[Number(button.dataset.workSay)][0], true)));
  renderQuiz();
  renderChecks();
}
function renderQuiz() { const quiz = currentLesson.quiz; const result = state.quizResults[currentLesson.day]; document.getElementById('quizBox').innerHTML = `<p>${esc(quiz.q)}</p><div class="quiz-options">${quiz.options.map((option, index) => `<button type="button" class="quiz-option ${result !== undefined && index === quiz.answer ? 'correct' : ''} ${result === index && result !== quiz.answer ? 'wrong' : ''}" data-option="${index}">${esc(option)}</button>`).join('')}</div><p class="quiz-feedback">${result === undefined ? '选一个你认为正确的答案。' : result === quiz.answer ? '答对了。把这个句型再读一遍。' : `再看一眼：${esc(quiz.options[quiz.answer])}`}</p>`; document.getElementById('quizBox').querySelectorAll('.quiz-option').forEach((button) => button.addEventListener('click', () => { const selected = Number(button.dataset.option); state.quizResults[currentLesson.day] = selected; appendRecord('testRecords', currentLesson.day, { type: '选择题', question: quiz.q, selected: quiz.options[selected], correct: selected === quiz.answer }); saveState(); renderQuiz(); })); }
function renderChecks() {
  const saved = state.checkResults[currentLesson.day] || {};
  const example = currentLesson.words[0][2];
  const answer = currentLesson.words[0][0];
  const safeAnswer = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const blanked = example.replace(new RegExp(safeAnswer, 'i'), '_____');
  const voiceSentence = currentLesson.workSteps ? currentLesson.workSteps[0][0] : currentLesson.transcript.reduce((shortest, line) => normalizeSpeech(line[0]).length < normalizeSpeech(shortest[0]).length ? line : shortest, currentLesson.transcript[0])[0];
  document.getElementById('fillCheck').innerHTML = `<h3>① 填空：记得这个词怎么用吗？</h3><div class="fill-sentence">${esc(blanked)}</div><div class="fill-row"><input id="fillInput" class="fill-input" autocomplete="off" placeholder="输入缺少的英文" value="${esc(saved.fillText || '')}"><button id="checkFillBtn" class="check-btn" type="button">检查</button></div><p id="fillFeedback" class="check-feedback ${saved.fill ? 'good' : ''}">${saved.fill ? '答对了。这个词已经放进句子里了。' : '先自己想，不确定再听一遍例句。'}</p>`;
  document.getElementById('voiceCheck').innerHTML = `<h3>② 语音：读出一句最短目标句</h3><div class="voice-line">${esc(voiceSentence)}</div><p class="voice-note">点击开始后读这句话。浏览器只做“听没听到关键词”的基础检查，不是专业发音评分。</p><div class="voice-actions"><button id="startVoiceBtn" class="check-btn" type="button">● 开始朗读</button><button id="manualVoiceBtn" class="outline-btn" type="button">我已经读过了</button><span id="voiceFeedback" class="voice-feedback ${saved.voice ? 'good' : ''}">${saved.voice ? '已完成一次朗读。' : '准备好后再开始。'}</span></div>`;
  document.getElementById('checkFillBtn').addEventListener('click', () => {
    const typed = document.getElementById('fillInput').value.trim().toLowerCase();
    const correct = typed === answer.toLowerCase();
    state.checkResults[currentLesson.day] = { ...(state.checkResults[currentLesson.day] || {}), fill: correct, fillText: document.getElementById('fillInput').value.trim() };
    appendRecord('testRecords', currentLesson.day, { type: '填空', answer: document.getElementById('fillInput').value.trim(), correct });
    saveState();
    const feedback = document.getElementById('fillFeedback'); feedback.className = `check-feedback ${correct ? 'good' : 'try'}`; feedback.textContent = correct ? '答对了。这个词已经放进句子里了。' : '还不对，再听例句一次，然后只改这个空。';
  });
  document.getElementById('manualVoiceBtn').addEventListener('click', () => { state.checkResults[currentLesson.day] = { ...(state.checkResults[currentLesson.day] || {}), voice: true }; appendRecord('voiceRecords', currentLesson.day, { expected: voiceSentence, heard: '手动确认已朗读', passed: true, manual: true }); saveState(); document.getElementById('voiceFeedback').className = 'voice-feedback good'; document.getElementById('voiceFeedback').textContent = '已完成一次朗读。'; });
  document.getElementById('startVoiceBtn').addEventListener('click', () => startVoiceCheck(voiceSentence));
}
function normalizeSpeech(text) { return text.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean); }
function startVoiceCheck(expected) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const feedback = document.getElementById('voiceFeedback');
  if (!Recognition) { feedback.className = 'voice-feedback try'; feedback.textContent = '当前浏览器没有语音识别，请点击“我已经读过了”记录练习。'; return; }
  const recognition = new Recognition(); recognition.lang = 'en-US'; recognition.interimResults = false; recognition.maxAlternatives = 1;
  feedback.className = 'voice-feedback'; feedback.textContent = '正在听，请读出上面的短句…';
  recognition.onresult = (event) => { const heardText = event.results[0][0].transcript; const heard = normalizeSpeech(heardText); const wanted = normalizeSpeech(expected); const matched = wanted.filter((word) => heard.includes(word)).length; const passed = matched / wanted.length >= .6; state.checkResults[currentLesson.day] = { ...(state.checkResults[currentLesson.day] || {}), voice: passed, heard: heardText }; appendRecord('voiceRecords', currentLesson.day, { expected, heard: heardText, passed }); saveState(); feedback.className = `voice-feedback ${passed ? 'good' : 'try'}`; feedback.textContent = passed ? `听到了：${heardText} · 做得好。` : `我听到的是“${heardText}”，先再慢读一次。`; };
  recognition.onerror = () => { feedback.className = 'voice-feedback try'; feedback.textContent = '没有听清。请靠近麦克风、慢一点再试，或手动记录已读。'; };
  recognition.start();
}
function renderCourses() { document.getElementById('courseProgressText').textContent = `${state.completedDays.length} / ${lessons.length}`; document.getElementById('courseList').innerHTML = lessons.map((lesson) => `<div class="course-row ${lesson.day === state.currentDay ? 'current' : ''} ${isDayDone(lesson.day) ? 'done' : ''}"><div class="course-number">${isDayDone(lesson.day) ? '✓' : String(lesson.day).padStart(2, '0')}</div><div><b>${esc(lesson.title)}</b><small>${esc(lesson.stage)} · ${esc(lesson.goal)}</small></div><button type="button" data-course-day="${lesson.day}">${isDayDone(lesson.day) ? '复习' : lesson.day === state.currentDay ? '继续' : '打开'} →</button></div>`).join(''); document.querySelectorAll('[data-course-day]').forEach((button) => button.addEventListener('click', () => { state.currentDay = Number(button.dataset.courseDay); currentLesson = lessons.find((item) => item.day === state.currentDay); saveState(); openView('lesson'); })); }
function buildLearningReport() {
  const lessonsReport = lessons.map((lesson) => ({ day: lesson.day, title: lesson.title, goal: lesson.goal, voiceRecords: state.voiceRecords[lesson.day] || [], messages: state.messageRecords[lesson.day] || [], tests: state.testRecords[lesson.day] || [] }));
  const voiceRecords = lessonsReport.flatMap((item) => item.voiceRecords); const messageRecords = lessonsReport.flatMap((item) => item.messages); const testRecords = lessonsReport.flatMap((item) => item.tests); const passedTests = testRecords.filter((item) => item.correct).length;
  return { reportType: 'engcoach-learning-report', course: '基础职场英语 · 14 天起步', scope: ['voiceRecords', 'messages', 'tests'], summary: { voiceCount: voiceRecords.length, messageCount: messageRecords.length, testCount: testRecords.length, testsPassed: passedTests }, lessons: lessonsReport };
}
function reportAsText(report) { const lines = ['英语学习档案（只记录语音、留言和测试）', `语音记录：${report.summary.voiceCount} 条`, `留言/复述：${report.summary.messageCount} 条`, `测试记录：${report.summary.testCount} 条，答对 ${report.summary.testsPassed} 条`, '', '每日记录：']; report.lessons.forEach((item) => { if (!item.voiceRecords.length && !item.messages.length && !item.tests.length) return; lines.push(`\n第${item.day}天 ${item.title}｜目标：${item.goal}`); item.voiceRecords.forEach((record) => lines.push(`语音｜目标：${record.expected}｜识别：${record.heard}｜${record.passed ? '通过' : '未通过'}`)); item.messages.forEach((record) => lines.push(`留言/复述｜${record.text}`)); item.tests.forEach((record) => lines.push(`测试｜${record.type}｜${record.answer || record.selected || ''}｜${record.correct ? '正确' : '错误'}`)); }); return lines.join('\n'); }
function downloadLearningReport() { const report = buildLearningReport(); const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json;charset=utf-8' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `英语学习档案-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(link.href); showToast('学习档案已下载'); }
function copyLearningReport() { const text = reportAsText(buildLearningReport()); if (!navigator.clipboard) { showToast('当前浏览器不支持复制，请改用下载报告'); return; } navigator.clipboard.writeText(text).then(() => showToast('报告文字已复制，可以发给老师')).catch(() => showToast('复制失败，请改用下载报告')); }
function renderReview() { const retellEntries = Object.entries(state.retells).filter(([, text]) => text && text.trim()); document.getElementById('reviewCount').textContent = Object.keys(state.quizResults).length + retellEntries.length; document.getElementById('retellCount').textContent = retellEntries.length; document.getElementById('reviewStreak').textContent = getStreak(); document.getElementById('downloadReportBtn').onclick = downloadLearningReport; document.getElementById('copyReportBtn').onclick = copyLearningReport; const content = document.getElementById('reviewContent'); if (!retellEntries.length && !Object.keys(state.quizResults).length) { content.innerHTML = `<div class="empty-review"><strong>这里还很清爽</strong><span>完成今天的复述或小测后，它们会自动出现在这里。</span></div>`; return; } content.innerHTML = retellEntries.map(([day, text]) => { const lesson = lessons.find((item) => item.day === Number(day)); return `<article class="review-group"><h3>第 ${day} 天 · ${esc(lesson.title)}</h3><p>${esc(text)}</p><button type="button" data-review-day="${day}">回到这课再说一遍 →</button></article>`; }).join('') + (Object.keys(state.quizResults).length ? `<article class="review-group"><h3>小测记录</h3><p>你已经完成 ${Object.keys(state.quizResults).length} 天的小测。下次复习时，优先重读答错过的句子。</p></article>` : ''); document.querySelectorAll('[data-review-day]').forEach((button) => button.addEventListener('click', () => { state.currentDay = Number(button.dataset.reviewDay); currentLesson = lessons.find((item) => item.day === state.currentDay); saveState(); openView('lesson'); })); }
function speak(text, slow = false) { if (!('speechSynthesis' in window)) { showToast('当前浏览器不支持朗读'); return; } window.speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'en-US'; utterance.rate = slow ? .78 : .92; utterance.pitch = 1; utterance.onstart = () => { document.getElementById('speechStatus').textContent = '正在播放…'; document.querySelector('.audio-card')?.classList.add('playing'); }; utterance.onend = () => { document.getElementById('speechStatus').textContent = '播放完成'; document.querySelector('.audio-card')?.classList.remove('playing'); }; window.speechSynthesis.speak(utterance); }
function speakAll(slow = false) { speak(currentLesson.listen, slow); }
function openView(viewName) { document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active', view.id === `${viewName}View`)); document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === viewName)); if (viewName === 'today') renderHome(); if (viewName === 'courses') renderCourses(); if (viewName === 'review') renderReview(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function updateButtons() { const done = checkedCount(currentLesson.day); document.getElementById('finishLessonBtn').disabled = done < 5 && !isDayDone(currentLesson.day); }

document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => openView(button.dataset.view)));
document.querySelectorAll('[data-go="today"]').forEach((button) => button.addEventListener('click', () => openView('today')));
document.getElementById('startLessonBtn').addEventListener('click', () => { currentLesson = lessons.find((item) => item.day === state.currentDay); renderLesson(); openView('lesson'); });
document.getElementById('playAllBtn').addEventListener('click', () => speakAll(false));
document.getElementById('slowPlayBtn').addEventListener('click', () => speakAll(true));
document.getElementById('playRetellBtn').addEventListener('click', () => speak(currentLesson.listen, true));
document.getElementById('saveRetellBtn').addEventListener('click', () => { const value = document.getElementById('retellInput').value.trim(); if (!value) { showToast('先写下你刚才说的内容'); return; } state.retells[currentLesson.day] = value; appendRecord('messageRecords', currentLesson.day, { type: '留言/复述', text: value }); saveState(); document.getElementById('retellSaved').hidden = false; showToast('复述已保存到复习桌'); });
document.getElementById('checkinBtn').addEventListener('click', () => { if (checkedCount(currentLesson.day) < 5) return; if (!state.completedDays.includes(currentLesson.day)) state.completedDays.push(currentLesson.day); const today = new Date().toISOString().slice(0,10); if (!state.checkins.includes(today)) state.checkins.push(today); state.currentDay = Math.min(currentLesson.day + 1, lessons.length); saveState(); renderHome(); showToast('今日打卡完成，明天继续保持'); });
document.getElementById('finishLessonBtn').addEventListener('click', () => { const done = checkedCount(currentLesson.day); if (done < 5 && !isDayDone(currentLesson.day)) { showToast('先完成至少 5 项今日任务'); return; } if (!isDayDone(currentLesson.day)) state.completedDays.push(currentLesson.day); saveState(); showToast('本课已完成'); openView('today'); });
document.getElementById('nextLessonBtn').addEventListener('click', () => { state.currentDay = Math.min(currentLesson.day + 1, lessons.length); currentLesson = lessons.find((item) => item.day === state.currentDay); saveState(); renderLesson(); });
window.addEventListener('beforeinstallprompt', (event) => { event.preventDefault(); deferredInstallPrompt = event; document.getElementById('installBtn').hidden = false; });
document.getElementById('installBtn').addEventListener('click', async () => { if (!deferredInstallPrompt) { showToast('在浏览器菜单中选择“添加到主屏幕”'); return; } deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt = null; document.getElementById('installBtn').hidden = true; });
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
renderHome(); renderLesson(); updateButtons();
