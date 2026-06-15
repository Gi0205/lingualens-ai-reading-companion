const STORAGE_KEY = "lingualens-state-v2";
const DEFAULT_PROVIDER = "deepseek";
const DEFAULT_MODEL = "deepseek-v4-flash";
const DEFAULT_UI_LANGUAGE = "zh-CN";
const DEFAULT_OUTPUT_LANGUAGE = "zh-CN";

const UI_TEXT = {
  "zh-CN": {
    upload: "上传",
    sample: "示例",
    resetBook: "重置本书",
    fontSize: "字号",
    autoExplain: "自动解释",
    emptyReader: "上传 .txt / .md 文件，或打开示例文本开始阅读。",
    aiPanelTitle: "讲解与对话",
    provider: "服务商",
    model: "模型",
    uiLanguage: "界面语言",
    outputLanguage: "讲解语言",
    currentSelection: "当前选中",
    clear: "清空",
    noSelection: "还没有选中文本。",
    explain: "解释",
    translate: "翻译",
    summarizeContext: "总结上下文",
    highlight: "高亮",
    removeHighlight: "取消高亮",
    save: "保存",
    clearChat: "清空聊天",
    clearNotes: "清空笔记",
    exportNotes: "导出笔记",
    chat: "聊天",
    notes: "笔记",
    send: "发送",
    chatPlaceholder: "继续追问当前文本、章节观点或术语含义",
    checking: "检查中",
    connected: "{provider} 已连接",
    missingKey: "缺少 {provider} Key",
    localMode: "本地模式",
    untitled: "未选择书籍",
    characterUnit: "字",
    noteUnit: "笔记",
    highlightUnit: "高亮",
    userLabel: "你",
    systemLabel: "系统",
    generating: "生成中",
    delete: "删除",
    emptyNotes: "保存的选中文本会出现在这里。",
    systemInitial: "先上传文本或点击示例。选中左侧词句后，可以在右侧生成翻译、语义和上下文讲解。",
    loadedBook: "已载入《{title}》。现在可以在左侧选中词、句子或段落。",
    sampleLoaded: "示例文本已载入。试着选中 “model alignment” 看右侧讲解。",
    savedNote: "已保存到笔记。",
    savedHighlight: "已添加高亮。",
    removedHighlight: "已取消高亮。",
    duplicateHighlight: "这段文本已经高亮过了。",
    noHighlightSelection: "请先选中文本再添加高亮。",
    readingPdf: "正在读取 PDF，请稍等...",
    pdfLoaded: "已载入 PDF《{title}》，共 {pages} 页。当前版本会先提取文本用于阅读和解释。",
    pdfLoadFailed: "PDF 读取失败。请确认文件不是扫描图片型 PDF，或稍后换一个 PDF 再试。",
    chatCleared: "聊天已清空。",
    confirmClearNotes: "确定要清空所有笔记吗？这个操作只影响本地浏览器数据。",
    notesCleared: "笔记已清空。",
    confirmResetBook: "确定要重置当前书籍吗？笔记会保留。",
    bookReset: "当前书籍已重置，已保存的笔记仍然保留。",
    noExportNotes: "还没有可导出的笔记。",
    exportedNotes: "笔记已导出为 Markdown。",
    loadingExplain: "正在用{language}生成讲解...",
    loadingAnswer: "正在用{language}回答...",
    explainThis: "解释这段",
    translateThis: "翻译这段",
    summarizeThis: "总结上下文",
    missingKeyNextStep: "请先在 PowerShell 里设置对应服务商的 API Key，然后重新启动 run.ps1。",
    retryNextStep: "请稍后重试，或检查 PowerShell 窗口里的服务输出。",
    temporaryFailure: "AI 服务暂时不可用",
    sourceText: "选中文本",
    promptPreview: "当前提示词预览：",
    apiNoResult: "AI 服务暂时没有返回结果。你仍然可以继续阅读、保存笔记，稍后再试。",
    missingKeyExplain: "配置对应服务商的 API Key 后，这里会生成：自然翻译、词义解释、上下文含义和可继续追问的问题。",
    rateLimitTitle: "本地模式：{provider} API 返回 429 Too Many Requests。",
    rateLimitBody: "这通常不是代码错误，而是 API 请求太频繁、账户额度不足、billing 未设置，或当前模型暂时没有可用配额。",
    rateLimitSteps: "你可以先这样处理：\n1. 等 1-2 分钟后再试。\n2. 暂时关闭右上角“自动解释”，改成选中文本后手动点“解释”。\n3. 到 {provider} 的 Usage / Billing 页面确认 API 额度和付款方式。\n4. 如果持续 429，换成更便宜或更轻的模型再试。",
    badRequestTitle: "本地模式：{provider} API 返回 400 Bad Request。",
    badRequestBody: "这通常是请求格式或模型名不匹配。请先确认：\n1. 服务商选择是否正确。\n2. DeepSeek 推荐先用 deepseek-v4-flash。\n3. 重新启动 run.ps1，确保正在运行的是最新代码。",
    upstreamError: "上游错误信息：",
    uiChinese: "中文",
    uiJapanese: "日本語",
    uiEnglish: "English",
    outputChinese: "中文",
    outputJapanese: "日本語",
    outputEnglish: "English",
  },
  ja: {
    upload: "アップロード",
    sample: "サンプル",
    resetBook: "本文をリセット",
    fontSize: "文字サイズ",
    autoExplain: "自動解説",
    emptyReader: ".txt / .md ファイルをアップロードするか、サンプル本文を開いてください。",
    aiPanelTitle: "解説とチャット",
    provider: "サービス",
    model: "モデル",
    uiLanguage: "UI言語",
    outputLanguage: "解説言語",
    currentSelection: "選択中のテキスト",
    clear: "クリア",
    noSelection: "まだテキストが選択されていません。",
    explain: "解説",
    translate: "翻訳",
    summarizeContext: "文脈を要約",
    highlight: "ハイライト",
    removeHighlight: "ハイライト解除",
    save: "保存",
    clearChat: "チャットを消去",
    clearNotes: "ノートを消去",
    exportNotes: "ノートを出力",
    chat: "チャット",
    notes: "ノート",
    send: "送信",
    chatPlaceholder: "選択テキスト、章の要点、用語の意味について質問する",
    checking: "確認中",
    connected: "{provider} 接続済み",
    missingKey: "{provider} Key がありません",
    localMode: "ローカルモード",
    untitled: "未選択",
    characterUnit: "文字",
    noteUnit: "ノート",
    highlightUnit: "ハイライト",
    userLabel: "あなた",
    systemLabel: "システム",
    generating: "生成中",
    delete: "削除",
    emptyNotes: "保存した選択テキストがここに表示されます。",
    systemInitial: "テキストをアップロードするかサンプルを開いてください。左側で語句を選択すると、右側で翻訳・意味・文脈解説を生成できます。",
    loadedBook: "「{title}」を読み込みました。左側で単語、文、段落を選択できます。",
    sampleLoaded: "サンプル本文を読み込みました。“model alignment” を選択して右側の解説を試してください。",
    savedNote: "ノートに保存しました。",
    savedHighlight: "ハイライトを追加しました。",
    removedHighlight: "ハイライトを解除しました。",
    duplicateHighlight: "このテキストはすでにハイライトされています。",
    noHighlightSelection: "先にテキストを選択してください。",
    readingPdf: "PDFを読み込んでいます。少しお待ちください...",
    pdfLoaded: "PDF「{title}」を読み込みました。全 {pages} ページです。現在の版ではまずテキストを抽出して表示します。",
    pdfLoadFailed: "PDFの読み込みに失敗しました。スキャン画像型PDFではないか確認するか、別のPDFで試してください。",
    chatCleared: "チャットを消去しました。",
    confirmClearNotes: "すべてのノートを消去しますか？この操作はローカルブラウザ内のデータだけに影響します。",
    notesCleared: "ノートを消去しました。",
    confirmResetBook: "現在の本文をリセットしますか？ノートは保持されます。",
    bookReset: "現在の本文をリセットしました。保存済みノートは保持されています。",
    noExportNotes: "出力できるノートがまだありません。",
    exportedNotes: "ノートを Markdown として出力しました。",
    loadingExplain: "{language}で解説を生成中...",
    loadingAnswer: "{language}で回答中...",
    explainThis: "この部分を解説",
    translateThis: "この部分を翻訳",
    summarizeThis: "文脈を要約",
    missingKeyNextStep: "PowerShell で対応する API Key を設定し、run.ps1 を再起動してください。",
    retryNextStep: "少し待ってから再試行するか、PowerShell のサービス出力を確認してください。",
    temporaryFailure: "AI サービスは一時的に利用できません",
    sourceText: "選択テキスト",
    promptPreview: "現在のプロンプトプレビュー：",
    apiNoResult: "AI サービスから結果が返りませんでした。読書やノート保存は続けられます。後でもう一度試してください。",
    missingKeyExplain: "対応する API Key を設定すると、自然な翻訳、語彙解説、文脈上の意味、追加質問を生成できます。",
    rateLimitTitle: "ローカルモード：{provider} API が 429 Too Many Requests を返しました。",
    rateLimitBody: "通常、リクエストが多すぎる、残高不足、billing 未設定、または現在のモデルに利用可能なクォータがないことが原因です。",
    rateLimitSteps: "まず以下を試してください：\n1. 1〜2分待ってから再試行する。\n2. 右上の「自動解説」をオフにし、手動で「解説」を押す。\n3. {provider} の Usage / Billing で残高と支払い設定を確認する。\n4. それでも続く場合は、より軽いモデルに変更する。",
    badRequestTitle: "ローカルモード：{provider} API が 400 Bad Request を返しました。",
    badRequestBody: "通常、リクエスト形式またはモデル名が合っていません。確認してください：\n1. サービス選択が正しいか。\n2. DeepSeek はまず deepseek-v4-flash を使う。\n3. run.ps1 を再起動し、最新コードが動いているか。",
    upstreamError: "上流エラー情報：",
    uiChinese: "中国語",
    uiJapanese: "日本語",
    uiEnglish: "英語",
    outputChinese: "中国語",
    outputJapanese: "日本語",
    outputEnglish: "英語",
  },
  en: {
    upload: "Upload",
    sample: "Sample",
    resetBook: "Reset Book",
    fontSize: "Font",
    autoExplain: "Auto explain",
    emptyReader: "Upload a .txt / .md file, or open the sample text to start reading.",
    aiPanelTitle: "Explanation & Chat",
    provider: "Provider",
    model: "Model",
    uiLanguage: "UI language",
    outputLanguage: "Explanation language",
    currentSelection: "Current selection",
    clear: "Clear",
    noSelection: "No text selected yet.",
    explain: "Explain",
    translate: "Translate",
    summarizeContext: "Summarize context",
    highlight: "Highlight",
    removeHighlight: "Remove highlight",
    save: "Save",
    clearChat: "Clear chat",
    clearNotes: "Clear notes",
    exportNotes: "Export notes",
    chat: "Chat",
    notes: "Notes",
    send: "Send",
    chatPlaceholder: "Ask about the selected text, chapter ideas, or term meaning",
    checking: "Checking",
    connected: "{provider} connected",
    missingKey: "Missing {provider} key",
    localMode: "Local mode",
    untitled: "No book selected",
    characterUnit: "chars",
    noteUnit: "notes",
    highlightUnit: "highlights",
    userLabel: "You",
    systemLabel: "System",
    generating: "generating",
    delete: "Delete",
    emptyNotes: "Saved selections will appear here.",
    systemInitial: "Upload a text file or open the sample. Select words or sentences on the left to generate translation, meaning, and context explanations.",
    loadedBook: "Loaded “{title}”. You can now select words, sentences, or paragraphs on the left.",
    sampleLoaded: "Sample text loaded. Try selecting “model alignment” to see the explanation panel.",
    savedNote: "Saved to notes.",
    savedHighlight: "Highlight added.",
    removedHighlight: "Highlight removed.",
    duplicateHighlight: "This text is already highlighted.",
    noHighlightSelection: "Select text before adding a highlight.",
    readingPdf: "Reading PDF. Please wait...",
    pdfLoaded: "Loaded PDF “{title}” with {pages} pages. This version extracts text first for reading and explanation.",
    pdfLoadFailed: "Could not read the PDF. Make sure it is not a scanned-image PDF, or try another file.",
    chatCleared: "Chat cleared.",
    confirmClearNotes: "Clear all notes? This only affects data stored in this browser.",
    notesCleared: "Notes cleared.",
    confirmResetBook: "Reset the current book? Saved notes will be kept.",
    bookReset: "Current book reset. Saved notes were kept.",
    noExportNotes: "There are no notes to export yet.",
    exportedNotes: "Notes exported as Markdown.",
    loadingExplain: "Generating explanation in {language}...",
    loadingAnswer: "Answering in {language}...",
    explainThis: "Explain this",
    translateThis: "Translate this",
    summarizeThis: "Summarize context",
    missingKeyNextStep: "Set the API key for the selected provider in PowerShell, then restart run.ps1.",
    retryNextStep: "Try again later, or check the service output in PowerShell.",
    temporaryFailure: "AI service is temporarily unavailable",
    sourceText: "Selected text",
    promptPreview: "Prompt preview:",
    apiNoResult: "The AI service did not return a result. You can keep reading and saving notes, then try again later.",
    missingKeyExplain: "After configuring the selected provider's API key, this area will generate translation, vocabulary, contextual meaning, and follow-up questions.",
    rateLimitTitle: "Local mode: {provider} API returned 429 Too Many Requests.",
    rateLimitBody: "This is usually caused by too many requests, insufficient balance, missing billing setup, or unavailable quota for the current model.",
    rateLimitSteps: "Try this first:\n1. Wait 1-2 minutes and retry.\n2. Keep Auto explain off and click Explain manually.\n3. Check Usage / Billing for {provider}.\n4. If it continues, switch to a cheaper or lighter model.",
    badRequestTitle: "Local mode: {provider} API returned 400 Bad Request.",
    badRequestBody: "This usually means the request format or model name does not match. Check:\n1. The selected provider is correct.\n2. For DeepSeek, try deepseek-v4-flash first.\n3. Restart run.ps1 so the latest code is running.",
    upstreamError: "Upstream error:",
    uiChinese: "Chinese",
    uiJapanese: "Japanese",
    uiEnglish: "English",
    outputChinese: "Chinese",
    outputJapanese: "Japanese",
    outputEnglish: "English",
  },
};

const sampleText = `# The Design of Everyday AI Tools

When people read in a second language, the hardest part is not always vocabulary. Often the difficulty is holding several layers of meaning at the same time: the literal sentence, the author's intention, the cultural context, and the reader's own question.

An AI reading companion should therefore avoid acting like a simple dictionary. It should help the reader slow down, notice structure, and ask better questions. A good explanation is short enough to keep the reading flow, but precise enough to make the next paragraph easier.

For technical and academic texts, this matters even more. A term can have a common meaning and a field-specific meaning. The phrase "model alignment", for example, does not simply mean arranging objects in a line. In AI research, it refers to making a model's behavior better match human goals, instructions, or values.

The product challenge is to make the assistant present at the right moment without taking over the reading experience. Selection-based interaction is useful because it lets the reader decide what deserves attention.
`;

const ACCESS_CODE_COPY = {
  "zh-CN": {
    label: "访问码",
    placeholder: "在线 demo 可选",
    required: "这个在线 demo 需要访问码。请输入访问码后再试一次。",
  },
  ja: {
    label: "アクセスコード",
    placeholder: "オンライン demo 用",
    required: "このオンライン demo にはアクセスコードが必要です。入力してからもう一度お試しください。",
  },
  en: {
    label: "Access code",
    placeholder: "For online demo",
    required: "This online demo requires an access code. Enter it and try again.",
  },
};

const state = {
  bookTitle: "",
  bookText: "",
  bookType: "text",
  pdfDocument: null,
  pdfPageCount: 0,
  pdfPageTexts: [],
  pdfRenderToken: 0,
  selectedText: "",
  selectedContext: "",
  selectedBlockId: "",
  selectedRects: [],
  messages: [],
  notes: [],
  highlights: [],
  readingPositions: {},
  apiReady: false,
  lastExplained: "",
  isRequesting: false,
  pendingSelectionTimer: null,
  scrollSaveTimer: null,
};

const els = {
  fileInput: document.querySelector("#fileInput"),
  sampleButton: document.querySelector("#sampleButton"),
  resetBookButton: document.querySelector("#resetBookButton"),
  fontSize: document.querySelector("#fontSize"),
  autoExplain: document.querySelector("#autoExplain"),
  readerTitle: document.querySelector("#readerTitle"),
  reader: document.querySelector("#reader"),
  wordCount: document.querySelector("#wordCount"),
  noteCount: document.querySelector("#noteCount"),
  highlightCount: document.querySelector("#highlightCount"),
  progressCount: document.querySelector("#progressCount"),
  apiStatus: document.querySelector("#apiStatus"),
  providerSelect: document.querySelector("#providerSelect"),
  modelInput: document.querySelector("#modelInput"),
  uiLanguageSelect: document.querySelector("#uiLanguageSelect"),
  languageSelect: document.querySelector("#languageSelect"),
  accessCodeRow: document.querySelector("#accessCodeRow"),
  accessCodeLabel: document.querySelector("#accessCodeLabel"),
  accessCodeInput: document.querySelector("#accessCodeInput"),
  selectedText: document.querySelector("#selectedText"),
  clearSelection: document.querySelector("#clearSelection"),
  explainButton: document.querySelector("#explainButton"),
  translateButton: document.querySelector("#translateButton"),
  summarizeButton: document.querySelector("#summarizeButton"),
  highlightButton: document.querySelector("#highlightButton"),
  saveNoteButton: document.querySelector("#saveNoteButton"),
  clearChatButton: document.querySelector("#clearChatButton"),
  clearNotesButton: document.querySelector("#clearNotesButton"),
  exportNotesButton: document.querySelector("#exportNotesButton"),
  chatTab: document.querySelector("#chatTab"),
  notesTab: document.querySelector("#notesTab"),
  chatView: document.querySelector("#chatView"),
  notesView: document.querySelector("#notesView"),
  messages: document.querySelector("#messages"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  sendButton: document.querySelector("#sendButton"),
  notesList: document.querySelector("#notesList"),
  selectionMenu: document.querySelector("#selectionMenu"),
  menuExplain: document.querySelector("#menuExplain"),
  menuTranslate: document.querySelector("#menuTranslate"),
  menuHighlight: document.querySelector("#menuHighlight"),
  menuSave: document.querySelector("#menuSave"),
};

function init() {
  loadState();
  bindEvents();
  syncProviderDefaults();
  applyUILanguage();
  renderBook();
  renderSelection();
  renderMessages();
  renderNotes();
  updateStats();
  checkApiStatus();

  if (!state.messages.length) {
    addMessage("system", t("systemInitial"));
  }
}

function bindEvents() {
  els.fileInput.addEventListener("change", handleFileUpload);
  els.sampleButton.addEventListener("click", loadSample);
  els.resetBookButton.addEventListener("click", resetBook);
  els.fontSize.addEventListener("input", () => {
    els.reader.style.fontSize = `${els.fontSize.value}px`;
    persistState();
  });
  els.autoExplain.addEventListener("change", persistState);

  els.reader.addEventListener("mouseup", () => {
    window.setTimeout(captureSelection, 0);
  });
  els.reader.addEventListener("keyup", () => {
    window.setTimeout(captureSelection, 0);
  });
  els.reader.addEventListener("click", handleReaderClick);
  els.reader.addEventListener("scroll", handleReaderScroll);
  document.addEventListener("mousedown", (event) => {
    if (!els.selectionMenu.contains(event.target)) {
      hideSelectionMenu();
    }
  });

  els.clearSelection.addEventListener("click", clearSelection);
  els.explainButton.addEventListener("click", () => explainSelection("explain"));
  els.translateButton.addEventListener("click", () => explainSelection("translate"));
  els.summarizeButton.addEventListener("click", () => explainSelection("summarize"));
  els.highlightButton.addEventListener("click", saveHighlight);
  els.saveNoteButton.addEventListener("click", saveCurrentNote);
  els.menuExplain.addEventListener("click", () => explainSelection("explain"));
  els.menuTranslate.addEventListener("click", () => explainSelection("translate"));
  els.menuHighlight.addEventListener("click", saveHighlight);
  els.menuSave.addEventListener("click", saveCurrentNote);

  els.clearChatButton.addEventListener("click", clearChat);
  els.clearNotesButton.addEventListener("click", clearNotes);
  els.exportNotesButton.addEventListener("click", exportNotesMarkdown);

  els.chatForm.addEventListener("submit", handleChatSubmit);
  els.chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      els.chatForm.requestSubmit();
    }
  });

  els.chatTab.addEventListener("click", () => setActiveTab("chat"));
  els.notesTab.addEventListener("click", () => setActiveTab("notes"));
  els.providerSelect.addEventListener("change", () => {
    syncProviderDefaults();
    checkApiStatus();
    persistState();
  });
  els.modelInput.addEventListener("change", persistState);
  els.uiLanguageSelect.addEventListener("change", () => {
    applyUILanguage();
    checkApiStatus();
    persistState();
  });
  els.languageSelect.addEventListener("change", persistState);
  els.accessCodeInput.addEventListener("input", persistState);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state.bookTitle = normalizeStoredBookTitle(saved.bookTitle || "");
    state.bookText = saved.bookText || "";
    state.bookType = "text";
    state.notes = Array.isArray(saved.notes) ? saved.notes : [];
    state.highlights = Array.isArray(saved.highlights) ? saved.highlights : [];
    state.readingPositions = saved.readingPositions && typeof saved.readingPositions === "object"
      ? saved.readingPositions
      : {};
    state.messages = Array.isArray(saved.messages) ? saved.messages : [];
    els.providerSelect.value = saved.provider || DEFAULT_PROVIDER;
    els.modelInput.value = saved.model || DEFAULT_MODEL;
    els.uiLanguageSelect.value = saved.uiLanguage || DEFAULT_UI_LANGUAGE;
    els.languageSelect.value = saved.outputLanguage || DEFAULT_OUTPUT_LANGUAGE;
    els.accessCodeInput.value = saved.accessCode || "";
    els.fontSize.value = saved.fontSize || els.fontSize.value;
    els.autoExplain.checked = Boolean(saved.autoExplain);
    els.reader.style.fontSize = `${els.fontSize.value}px`;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function persistState() {
  const payload = {
    bookTitle: state.bookTitle,
    bookText: state.bookText,
    bookType: "text",
    notes: state.notes,
    highlights: state.highlights,
    readingPositions: state.readingPositions,
    messages: state.messages.slice(-20),
    provider: els.providerSelect.value,
    model: els.modelInput.value.trim(),
    uiLanguage: els.uiLanguageSelect.value,
    outputLanguage: els.languageSelect.value,
    accessCode: els.accessCodeInput.value.trim(),
    fontSize: els.fontSize.value,
    autoExplain: els.autoExplain.checked,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function currentUILanguage() {
  return els.uiLanguageSelect.value || DEFAULT_UI_LANGUAGE;
}

function t(key, vars = {}) {
  const dict = UI_TEXT[currentUILanguage()] || UI_TEXT[DEFAULT_UI_LANGUAGE];
  const fallback = UI_TEXT[DEFAULT_UI_LANGUAGE][key] || key;
  let text = dict[key] || fallback;
  Object.entries(vars).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, String(value));
  });
  return text;
}

function normalizeStoredBookTitle(title) {
  const untitledValues = new Set([
    "未选择书籍",
    "未選択",
    "No book selected",
  ]);
  return untitledValues.has(title) ? "" : title;
}

function applyUILanguage() {
  document.documentElement.lang = currentUILanguage();

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  setOptionLabels(els.uiLanguageSelect, {
    "zh-CN": t("uiChinese"),
    ja: t("uiJapanese"),
    en: t("uiEnglish"),
  });

  setOptionLabels(els.languageSelect, {
    "zh-CN": t("outputChinese"),
    ja: t("outputJapanese"),
    en: t("outputEnglish"),
  });

  applyAccessCodeLanguage();
  renderSelection();
  renderMessages();
  renderNotes();
  updateStats();
  updateApiPill(state.apiReady ? "ready" : "missing");
  if (!state.bookText.trim()) {
    renderBook();
  } else {
    els.readerTitle.textContent = state.bookTitle || t("untitled");
  }
}

function applyAccessCodeLanguage() {
  const copy = ACCESS_CODE_COPY[currentUILanguage()] || ACCESS_CODE_COPY[DEFAULT_UI_LANGUAGE];
  els.accessCodeLabel.textContent = copy.label;
  els.accessCodeInput.setAttribute("placeholder", copy.placeholder);
}

function setOptionLabels(select, labels) {
  Array.from(select.options).forEach((option) => {
    option.textContent = labels[option.value] || option.textContent;
  });
}

async function checkApiStatus() {
  try {
    const response = await fetch("./api/health", { cache: "no-store" });
    if (!response.ok) throw new Error("health check failed");
    const data = await response.json();
    const provider = els.providerSelect.value;
    const providers = data.providers || { openai: data.hasApiKey };
    els.accessCodeRow.classList.toggle("hidden", !data.requiresAccessCode);
    state.apiReady = Boolean(providers[provider]);
    updateApiPill(state.apiReady ? "ready" : "missing");
  } catch {
    state.apiReady = false;
    els.accessCodeRow.classList.add("hidden");
    updateApiPill("offline");
  }
}

function updateApiPill(status) {
  els.apiStatus.className = "status-pill";
  const providerLabel = getProviderLabel();
  if (status === "ready") {
    els.apiStatus.classList.add("ready");
    els.apiStatus.textContent = t("connected", { provider: providerLabel });
    return;
  }
  if (status === "missing") {
    els.apiStatus.classList.add("missing");
    els.apiStatus.textContent = t("missingKey", { provider: providerLabel });
    return;
  }
  els.apiStatus.classList.add("missing");
  els.apiStatus.textContent = t("localMode");
}

function syncProviderDefaults() {
  const provider = els.providerSelect.value;
  const model = els.modelInput.value.trim();

  if (provider === "deepseek" && (!model || model.startsWith("gpt-"))) {
    els.modelInput.value = DEFAULT_MODEL;
  }

  if (provider === "openai" && model.startsWith("deepseek-")) {
    els.modelInput.value = "gpt-5.4-mini";
  }
}

function getProviderLabel() {
  return els.providerSelect.value === "deepseek" ? "DeepSeek" : "OpenAI";
}

function getLanguageLabel() {
  const labels = {
    "zh-CN": "Simplified Chinese",
    ja: "Japanese",
    en: "English",
  };
  return labels[els.languageSelect.value] || labels[DEFAULT_OUTPUT_LANGUAGE];
}

function getLanguageNativeName() {
  const labels = {
    "zh-CN": t("outputChinese"),
    ja: t("outputJapanese"),
    en: t("outputEnglish"),
  };
  return labels[els.languageSelect.value] || t("outputChinese");
}

async function handleFileUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    resetReadingStateForNewBook();
    state.bookTitle = file.name.replace(/\.(txt|md|markdown|html|pdf)$/i, "");

    if (isPdfFile(file)) {
      addMessage("system", t("readingPdf"));
      const result = await loadPdfBook(file);
      state.bookType = "pdf";
      state.pdfDocument = result.pdf;
      state.pdfPageCount = result.pageCount;
      state.pdfPageTexts = result.pageTexts;
      state.bookText = result.text;
      renderBook();
      renderSelection();
      renderMessages();
      addMessage("system", getPdfLoadedMessage(state.bookTitle, result.pageCount));
    } else {
      const text = await file.text();
      clearPdfDocument();
      state.bookType = "text";
      state.bookText = normalizeInput(text, file.name);
      renderBook();
      renderSelection();
      renderMessages();
      addMessage("system", t("loadedBook", { title: state.bookTitle }));
    }

    updateStats();
    persistState();
  } catch (error) {
    addMessage("system", `${t("pdfLoadFailed")}\n\n${error.message || error}`);
  }
}

function resetReadingStateForNewBook() {
  state.messages = [];
  state.selectedText = "";
  state.selectedContext = "";
  state.selectedBlockId = "";
  state.selectedRects = [];
  state.highlights = [];
  state.lastExplained = "";
  clearPdfDocument();
  els.reader.scrollTop = 0;
}

function isPdfFile(file) {
  return file.type === "application/pdf" || /\.pdf$/i.test(file.name);
}

function clearPdfDocument() {
  state.bookType = "text";
  state.pdfDocument = null;
  state.pdfPageCount = 0;
  state.pdfPageTexts = [];
  state.pdfRenderToken += 1;
}

function isRenderedPdfBook() {
  return state.bookType === "pdf" && state.pdfDocument;
}

function getPdfLoadedMessage(title, pages) {
  const safeTitle = title || "PDF";
  if (currentUILanguage() === "ja") {
    return `PDF「${safeTitle}」を読み込みました。全 ${pages} ページです。ページの見た目を保ちながら、選択できる文字レイヤーを重ねて表示します。`;
  }
  if (currentUILanguage() === "en") {
    return `Loaded PDF "${safeTitle}" with ${pages} pages. Pages now keep their visual layout and include a selectable text layer.`;
  }
  return `已载入 PDF《${safeTitle}》，共 ${pages} 页。现在会保留页面版式，并叠加可选中文字层。`;
}

async function loadPdfBook(file) {
  const pdfjsLib = await loadPdfJs();
  const data = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;
  const pages = [];
  const pageTexts = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const pageText = normalizePdfPageText(textContent.items);
    pageTexts.push(pageText);
    pages.push(`## Page ${pageNumber}\n\n${pageText || "(No extractable text on this page.)"}`);
  }

  return {
    pdf,
    text: pages.join("\n\n"),
    pageTexts,
    pageCount: pdf.numPages,
  };
}

function normalizePdfPageText(items) {
  let text = "";
  items.forEach((item) => {
    if (!item.str) return;
    text += item.str;
    text += item.hasEOL ? "\n" : " ";
  });

  return text
    .replace(/[ \t]+\n/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function loadPdfJs() {
  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib);
  }

  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector("script[data-pdfjs]");
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(window.pdfjsLib));
      existingScript.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.async = true;
    script.dataset.pdfjs = "true";
    script.onload = () => {
      if (!window.pdfjsLib) {
        reject(new Error("PDF.js did not load."));
        return;
      }
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      resolve(window.pdfjsLib);
    };
    script.onerror = () => reject(new Error("Could not load PDF.js from CDN."));
    document.head.appendChild(script);
  });
}

function loadSample() {
  clearPdfDocument();
  state.bookTitle = "The Design of Everyday AI Tools";
  state.bookType = "text";
  state.bookText = sampleText;
  state.selectedText = "";
  state.selectedContext = "";
  state.selectedBlockId = "";
  state.selectedRects = [];
  state.lastExplained = "";
  renderBook();
  renderSelection();
  addMessage("system", t("sampleLoaded"));
  updateStats();
  persistState();
}

function normalizeInput(text, fileName) {
  const normalized = text.replace(/\r\n/g, "\n").trim();
  if (/\.html?$/i.test(fileName)) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(normalized, "text/html");
    return doc.body.innerText.trim();
  }
  return normalized;
}

function renderBook() {
  els.readerTitle.textContent = state.bookTitle || t("untitled");

  if (!state.bookText.trim()) {
    els.reader.innerHTML = `<div class="empty-state"><p>${escapeHtml(t("emptyReader"))}</p></div>`;
    return;
  }

  if (isRenderedPdfBook()) {
    renderPdfBook();
    return;
  }

  const blocks = state.bookText
    .replace(/\n{3,}/g, "\n\n")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const html = blocks.map(renderBlock).join("");
  els.reader.innerHTML = `<div class="reader-inner">${html}</div>`;
  window.requestAnimationFrame(restoreReadingPosition);
}

function renderPdfBook() {
  const token = ++state.pdfRenderToken;
  const pageCount = state.pdfPageCount || state.pdfDocument.numPages || 0;
  const placeholders = Array.from({ length: pageCount }, (_, index) => {
    const pageNumber = index + 1;
    return `<section id="pdf-page-${pageNumber}" class="pdf-page" data-page-number="${pageNumber}">
      <div class="pdf-page-loading">Page ${pageNumber}</div>
    </section>`;
  }).join("");

  els.reader.innerHTML = `<div class="pdf-reader-inner">${placeholders}</div>`;
  renderPdfPages(token).catch((error) => {
    if (token !== state.pdfRenderToken) return;
    addMessage("system", `${t("pdfLoadFailed")}\n\n${error.message || error}`);
  });
}

async function renderPdfPages(token) {
  if (!isRenderedPdfBook()) return;
  const pdfjsLib = await loadPdfJs();
  const pageCount = state.pdfPageCount || state.pdfDocument.numPages || 0;

  for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
    if (token !== state.pdfRenderToken || !isRenderedPdfBook()) return;
    const pageEl = els.reader.querySelector(`#pdf-page-${pageNumber}`);
    if (!pageEl) continue;

    try {
      const page = await state.pdfDocument.getPage(pageNumber);
      await renderPdfPage(pdfjsLib, page, pageEl, pageNumber, token);
      if (pageNumber === 1) {
        window.requestAnimationFrame(restoreReadingPosition);
      }
    } catch (error) {
      pageEl.innerHTML = `<div class="pdf-page-error">Page ${pageNumber} failed to render.</div>`;
    }
  }

  if (token === state.pdfRenderToken) {
    window.requestAnimationFrame(restoreReadingPosition);
  }
}

async function renderPdfPage(pdfjsLib, page, pageEl, pageNumber, token) {
  const baseViewport = page.getViewport({ scale: 1 });
  const availableWidth = Math.max(320, Math.min(920, els.reader.clientWidth - 48));
  const scale = Math.min(1.75, Math.max(0.72, availableWidth / baseViewport.width));
  const viewport = page.getViewport({ scale });
  const outputScale = window.devicePixelRatio || 1;

  const pageBody = document.createElement("div");
  pageBody.className = "pdf-page-body";
  pageBody.style.width = `${viewport.width}px`;
  pageBody.style.height = `${viewport.height}px`;

  const canvas = document.createElement("canvas");
  canvas.className = "pdf-canvas";
  canvas.width = Math.floor(viewport.width * outputScale);
  canvas.height = Math.floor(viewport.height * outputScale);
  canvas.style.width = `${viewport.width}px`;
  canvas.style.height = `${viewport.height}px`;

  const context = canvas.getContext("2d");
  await page.render({
    canvasContext: context,
    viewport,
    transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null,
  }).promise;

  if (token !== state.pdfRenderToken) return;

  const highlightLayer = document.createElement("div");
  highlightLayer.className = "pdf-highlight-layer";
  highlightLayer.setAttribute("aria-hidden", "true");

  const textLayer = document.createElement("div");
  textLayer.className = "pdf-text-layer";
  textLayer.style.width = `${viewport.width}px`;
  textLayer.style.height = `${viewport.height}px`;
  textLayer.style.setProperty("--scale-factor", String(viewport.scale));

  pageBody.append(canvas, highlightLayer, textLayer);
  pageEl.innerHTML = "";
  pageEl.style.width = `${viewport.width}px`;
  pageEl.append(pageBody);
  renderPdfHighlightsForPage(pageEl, pageNumber);

  if (typeof pdfjsLib.renderTextLayer === "function") {
    const textContent = await page.getTextContent();
    if (token !== state.pdfRenderToken) return;
    await pdfjsLib.renderTextLayer({
      textContentSource: textContent,
      container: textLayer,
      viewport,
      textDivs: [],
      enhanceTextSelection: true,
    }).promise;
  }
}

function renderBlock(block, index) {
  const id = `block-${index}`;
  if (/^###\s+/.test(block)) {
    const text = block.replace(/^###\s+/, "");
    return `<h3 id="${id}" class="book-block">${renderHighlightedText(text, id)}</h3>`;
  }
  if (/^##\s+/.test(block)) {
    const text = block.replace(/^##\s+/, "");
    return `<h2 id="${id}" class="book-block">${renderHighlightedText(text, id)}</h2>`;
  }
  if (/^#\s+/.test(block)) {
    const text = block.replace(/^#\s+/, "");
    return `<h1 id="${id}" class="book-block">${renderHighlightedText(text, id)}</h1>`;
  }
  return `<p id="${id}" class="book-block">${renderHighlightedText(block, id).replace(/\n/g, "<br>")}</p>`;
}

function renderHighlightedText(text, blockId) {
  let html = escapeHtml(text);
  const highlights = getCurrentBookHighlights()
    .filter((highlight) => {
      if (highlight.blockId && highlight.blockId !== blockId) return false;
      return text.includes(highlight.quote);
    })
    .sort((a, b) => b.quote.length - a.quote.length);

  highlights.forEach((highlight) => {
    const escapedQuote = escapeHtml(highlight.quote);
    if (!escapedQuote || !html.includes(escapedQuote)) return;
    const mark = `<mark class="reader-highlight" data-highlight-id="${escapeHtml(highlight.id)}">${escapedQuote}</mark>`;
    html = html.replaceAll(escapedQuote, mark);
  });

  return html;
}

function renderCurrentPdfHighlights() {
  if (!isRenderedPdfBook()) return;
  els.reader.querySelectorAll(".pdf-page").forEach((pageEl) => {
    renderPdfHighlightsForPage(pageEl, Number(pageEl.dataset.pageNumber));
  });
}

function renderPdfHighlightsForPage(pageEl, pageNumber) {
  const layer = pageEl.querySelector(".pdf-highlight-layer");
  if (!layer) return;

  layer.innerHTML = "";
  getCurrentBookHighlights().forEach((highlight) => {
    const rects = Array.isArray(highlight.rects) ? highlight.rects : [];
    rects
      .filter((rect) => rect.pageNumber === pageNumber)
      .forEach((rect) => {
        const marker = document.createElement("span");
        marker.className = "pdf-highlight-rect";
        marker.dataset.highlightId = highlight.id;
        marker.style.left = `${rect.left * 100}%`;
        marker.style.top = `${rect.top * 100}%`;
        marker.style.width = `${rect.width * 100}%`;
        marker.style.height = `${rect.height * 100}%`;
        layer.appendChild(marker);
      });
  });
}

function captureSelection() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || !selection.toString().trim()) {
    return;
  }

  const anchor = selection.anchorNode;
  const focus = selection.focusNode;
  if (!els.reader.contains(anchor) || !els.reader.contains(focus)) {
    return;
  }

  const selected = selection.toString().trim().slice(0, 4000);
  state.selectedText = selected;
  state.selectedRects = getSelectionRects(selection);
  state.selectedContext = findNearestBlockText(anchor, selected);
  state.selectedBlockId = findNearestBlockId(anchor);
  if (!state.selectedBlockId && state.selectedRects.length) {
    state.selectedBlockId = `pdf-page-${state.selectedRects[0].pageNumber}`;
  }
  renderSelection();
  showSelectionMenu(selection);
  persistState();

  if (els.autoExplain.checked && selected !== state.lastExplained) {
    window.clearTimeout(state.pendingSelectionTimer);
    state.pendingSelectionTimer = window.setTimeout(() => {
      explainSelection("explain", { silentUserMessage: true });
    }, 650);
  }
}

function findNearestBlockText(node, selectedText = "") {
  const element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  const pdfPage = element?.closest?.(".pdf-page");
  if (pdfPage) {
    return getPdfPageContext(Number(pdfPage.dataset.pageNumber), selectedText);
  }

  const block = element?.closest?.(".book-block");
  return (block?.innerText || "").trim().slice(0, 2500);
}

function findNearestBlockId(node) {
  const element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  const block = element?.closest?.(".book-block, .pdf-page");
  return block?.id || "";
}

function getPdfPageContext(pageNumber, selectedText = "") {
  const pageText = normalizeWhitespace(state.pdfPageTexts[pageNumber - 1] || "");
  if (!pageText) return "";

  const selected = normalizeWhitespace(selectedText).slice(0, 240);
  const selectedIndex = selected ? pageText.indexOf(selected) : -1;
  if (selectedIndex < 0) {
    return pageText.slice(0, 2500);
  }

  const start = Math.max(0, selectedIndex - 900);
  const end = Math.min(pageText.length, selectedIndex + selected.length + 900);
  return pageText.slice(start, end);
}

function normalizeWhitespace(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function getSelectionRects(selection) {
  if (!isRenderedPdfBook() || !selection.rangeCount) return [];

  const range = selection.getRangeAt(0);
  const fallbackPage = getClosestPdfPage(selection.anchorNode);
  const rects = Array.from(range.getClientRects())
    .map((rect) => {
      if (rect.width < 2 || rect.height < 2) return null;
      const page = getPdfPageFromRect(rect) || fallbackPage;
      if (!page) return null;
      const pageRect = page.getBoundingClientRect();
      if (!pageRect.width || !pageRect.height) return null;
      return {
        pageNumber: Number(page.dataset.pageNumber),
        left: clamp01((rect.left - pageRect.left) / pageRect.width),
        top: clamp01((rect.top - pageRect.top) / pageRect.height),
        width: clamp01(rect.width / pageRect.width),
        height: clamp01(rect.height / pageRect.height),
      };
    })
    .filter(Boolean);

  return mergeAdjacentSelectionRects(rects);
}

function getClosestPdfPage(node) {
  const element = node?.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  return element?.closest?.(".pdf-page") || null;
}

function getPdfPageFromRect(rect) {
  const points = [
    [rect.left + 1, rect.top + 1],
    [rect.left + rect.width / 2, rect.top + rect.height / 2],
    [rect.right - 1, rect.bottom - 1],
  ];

  for (const [x, y] of points) {
    const element = document.elementFromPoint(x, y);
    const page = element?.closest?.(".pdf-page");
    if (page) return page;
  }
  return null;
}

function mergeAdjacentSelectionRects(rects) {
  return rects.reduce((merged, rect) => {
    const last = merged[merged.length - 1];
    const sameLine = last
      && last.pageNumber === rect.pageNumber
      && Math.abs(last.top - rect.top) < 0.004
      && Math.abs(last.height - rect.height) < 0.004;
    if (sameLine && rect.left <= last.left + last.width + 0.006) {
      const right = Math.max(last.left + last.width, rect.left + rect.width);
      last.left = Math.min(last.left, rect.left);
      last.width = right - last.left;
      return merged;
    }
    merged.push({ ...rect });
    return merged;
  }, []);
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function showSelectionMenu(selection) {
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  if (!rect.width && !rect.height) return;

  els.selectionMenu.classList.remove("hidden");
  const menuWidth = els.selectionMenu.offsetWidth || 190;
  const left = Math.min(
    window.innerWidth - menuWidth - 10,
    Math.max(10, rect.left + rect.width / 2 - menuWidth / 2)
  );
  const top = Math.max(10, rect.top - 48);
  els.selectionMenu.style.left = `${left}px`;
  els.selectionMenu.style.top = `${top}px`;
}

function hideSelectionMenu() {
  els.selectionMenu.classList.add("hidden");
}

function clearSelection() {
  state.selectedText = "";
  state.selectedContext = "";
  state.selectedBlockId = "";
  state.selectedRects = [];
  state.lastExplained = "";
  window.getSelection()?.removeAllRanges();
  hideSelectionMenu();
  renderSelection();
  persistState();
}

function renderSelection() {
  els.selectedText.textContent = state.selectedText || t("noSelection");
  const hasSelection = Boolean(state.selectedText);
  [els.explainButton, els.translateButton, els.summarizeButton, els.highlightButton, els.saveNoteButton].forEach((button) => {
    button.disabled = !hasSelection;
  });
  const highlightLabel = hasSelection && getMatchingHighlightForSelection()
    ? t("removeHighlight")
    : t("highlight");
  els.highlightButton.textContent = highlightLabel;
  els.menuHighlight.textContent = highlightLabel;
}

function handleReaderClick(event) {
  const pdfHighlight = event.target.closest?.(".pdf-highlight-rect");
  if (pdfHighlight) {
    const highlight = state.highlights.find((item) => item.id === pdfHighlight.dataset.highlightId);
    if (!highlight) return;
    state.selectedText = highlight.quote;
    state.selectedContext = highlight.context || "";
    state.selectedBlockId = highlight.blockId || "";
    state.selectedRects = Array.isArray(highlight.rects) ? highlight.rects : [];
    window.getSelection()?.removeAllRanges();
    renderSelection();
    persistState();
    return;
  }

  const mark = event.target.closest?.(".reader-highlight");
  if (!mark) return;

  const block = mark.closest(".book-block");
  state.selectedText = mark.textContent.trim();
  state.selectedContext = (block?.innerText || "").trim().slice(0, 2500);
  state.selectedBlockId = block?.id || "";
  state.selectedRects = [];
  window.getSelection()?.removeAllRanges();
  renderSelection();
  persistState();
}

async function explainSelection(mode, options = {}) {
  if (!state.selectedText) return;
  hideSelectionMenu();
  state.lastExplained = state.selectedText;

  const label = {
    explain: t("explainThis"),
    translate: t("translateThis"),
    summarize: t("summarizeThis"),
  }[mode];

  if (!options.silentUserMessage) {
    addMessage("user", `${label}：\n${state.selectedText}`);
  }

  const prompt = buildPrompt(mode);
  await askAssistant(prompt, { loadingText: t("loadingExplain", { language: getLanguageNativeName() }) });
}

async function handleChatSubmit(event) {
  event.preventDefault();
  const userText = els.chatInput.value.trim();
  if (!userText) return;

  els.chatInput.value = "";
  addMessage("user", userText);
  const prompt = buildPrompt("chat", userText);
  await askAssistant(prompt, { loadingText: t("loadingAnswer", { language: getLanguageNativeName() }) });
}

function buildPrompt(mode, userText = "") {
  const outputLanguage = getLanguageLabel();
  const recentChat = state.messages
    .filter((message) => {
      if (!["user", "assistant"].includes(message.role)) return false;
      if (message.pending) return false;
      if (looksLikeMojibake(message.content)) return false;
      return !isLocalModeMessage(message.content);
    })
    .slice(-6)
    .map((message) => `${message.role}: ${message.content.slice(0, 800)}`)
    .join("\n\n");

  const taskMap = {
    explain:
      "Explain the selected text for a reader. Include: 1. natural translation or paraphrase in the output language; 2. key words or phrases; 3. meaning in context; 4. one useful follow-up question.",
    translate:
      "Translate the selected text into the output language. Then briefly explain the difference between a literal translation and a natural translation. Keep it concise.",
    summarize:
      "Summarize the nearby context and explain how it relates to the selected text.",
    chat: `Answer the user's follow-up question: ${userText}`,
  };

  return [
    `Book title: ${state.bookTitle}`,
    `Output language: ${outputLanguage}`,
    `Task: ${taskMap[mode]}`,
    `Selected text:\n${state.selectedText || "(none)"}`,
    `Nearby context:\n${state.selectedContext || "(none)"}`,
    `Recent chat:\n${recentChat || "(none)"}`,
    [
      "Requirements:",
      `- Write the whole answer in ${outputLanguage}.`,
      "- Keep important source-language terms when useful.",
      "- Do not invent facts that are not supported by the text.",
      "- If you need to infer something, clearly mark it as an inference.",
    ].join("\n"),
  ].join("\n\n");
}

async function askAssistant(input, options = {}) {
  if (state.isRequesting) return;

  const loadingId = addMessage("assistant", options.loadingText || t("generating"), {
    pending: true,
  });
  state.isRequesting = true;
  setBusy(true);

  try {
    const text = await requestAI(input);
    updateMessage(loadingId, text);
  } catch (error) {
    const fallback = buildLocalFallback(input, error);
    updateMessage(loadingId, fallback, "system");
  } finally {
    state.isRequesting = false;
    setBusy(false);
    persistState();
  }
}

async function requestAI(input) {
  const model = els.modelInput.value.trim() || DEFAULT_MODEL;
  const headers = { "Content-Type": "application/json" };
  const accessCode = els.accessCodeInput.value.trim();
  if (accessCode) {
    headers["x-demo-access-code"] = accessCode;
  }

  const response = await fetch("./api/chat", {
    method: "POST",
    headers,
    body: JSON.stringify({
      provider: els.providerSelect.value,
      model,
      instructions:
        "You are a careful, friendly AI reading coach. You help with translation, vocabulary, contextual meaning, technical reading, and thoughtful follow-up questions.",
      input,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error || `API request failed: ${response.status}`);
    error.status = response.status;
    error.statusCode = data.statusCode;
    throw error;
  }
  if (!data.text) {
    throw new Error("Empty assistant response");
  }
  return data.text;
}

function buildLocalFallback(input, error) {
  const reason = error?.message || t("temporaryFailure");
  const isMissingKey = /(OPENAI_API_KEY|DEEPSEEK_API_KEY) is not set/i.test(reason);
  const isRateLimited = error?.status === 429 || error?.statusCode === 429 || /429|Too Many Requests/i.test(reason);
  const isBadRequest = error?.status === 400 || error?.statusCode === 400 || /HTTP 400|400.*Bad Request|错误的请求/i.test(reason);
  const isUnauthorized = error?.status === 401 || error?.statusCode === 401;
  const providerLabel = getProviderLabel();

  if (isUnauthorized) {
    return getAccessCodeRequiredMessage();
  }

  if (isRateLimited) {
    return [
      t("rateLimitTitle", { provider: providerLabel }),
      "",
      t("rateLimitBody"),
      "",
      t("rateLimitSteps", { provider: providerLabel }),
      "",
      state.selectedText ? `${t("sourceText")}：${state.selectedText}` : "",
      "",
      t("promptPreview"),
      input.slice(0, 700),
    ].join("\n");
  }

  if (isBadRequest) {
    return [
      t("badRequestTitle", { provider: providerLabel }),
      "",
      t("badRequestBody"),
      "",
      t("upstreamError"),
      reason.slice(0, 900),
      "",
      state.selectedText ? `${t("sourceText")}：${state.selectedText}` : "",
    ].join("\n");
  }

  if (!state.selectedText) {
    const nextStep = isMissingKey
      ? t("missingKeyNextStep")
      : t("retryNextStep");
    return `${t("localMode")}：${reason}\n\n${nextStep}`;
  }

  return [
    `${t("localMode")}：${reason}`,
    "",
    `${t("sourceText")}：${state.selectedText}`,
    "",
    isMissingKey
      ? t("missingKeyExplain")
      : t("apiNoResult"),
    "",
    t("promptPreview"),
    input.slice(0, 700),
  ].join("\n");
}

function getAccessCodeRequiredMessage() {
  const copy = ACCESS_CODE_COPY[currentUILanguage()] || ACCESS_CODE_COPY[DEFAULT_UI_LANGUAGE];
  return copy.required;
}

function addMessage(role, content, options = {}) {
  const message = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    role,
    content,
    pending: Boolean(options.pending),
    createdAt: new Date().toISOString(),
  };
  state.messages.push(message);
  renderMessages();
  persistState();
  return message.id;
}

function updateMessage(id, content, role) {
  const message = state.messages.find((item) => item.id === id);
  if (!message) return;
  message.content = content;
  message.pending = false;
  if (role) message.role = role;
  renderMessages();
}

function renderMessages() {
  if (!state.messages.length) {
    els.messages.innerHTML = "";
    return;
  }

  els.messages.innerHTML = state.messages
    .map((message) => {
      const label = message.role === "user" ? t("userLabel") : message.role === "assistant" ? "AI" : t("systemLabel");
      const pending = message.pending ? ` · ${t("generating")}` : "";
      return `<div class="message ${message.role}">
        <div class="meta">${label}${pending}</div>
        <div class="bubble">${formatAssistantText(message.content)}</div>
      </div>`;
    })
    .join("");
  els.messages.scrollTop = els.messages.scrollHeight;
}

function saveCurrentNote() {
  if (!state.selectedText) return;
  hideSelectionMenu();
  const latestAssistant = getLatestAssistantMessage();
  state.notes.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    type: "selection-note",
    bookKey: getBookKey(),
    quote: state.selectedText,
    context: state.selectedContext,
    bookTitle: state.bookTitle,
    explanation: latestAssistant?.content || "",
    provider: els.providerSelect.value,
    model: els.modelInput.value.trim() || DEFAULT_MODEL,
    uiLanguage: els.uiLanguageSelect.value,
    outputLanguage: els.languageSelect.value,
    blockId: state.selectedBlockId,
    createdAt: new Date().toISOString(),
  });
  renderNotes();
  updateStats();
  persistState();
  addMessage("system", t("savedNote"));
}

function getLatestAssistantMessage() {
  return [...state.messages]
    .reverse()
    .find((message) => message.role === "assistant" && !message.pending && !looksLikeMojibake(message.content));
}

function saveHighlight() {
  if (!state.selectedText) {
    addMessage("system", t("noHighlightSelection"));
    return;
  }

  hideSelectionMenu();
  const duplicate = getMatchingHighlightForSelection();

  if (duplicate) {
    removeHighlight(duplicate.id);
    return;
  }

  const bookKey = getBookKey();
  state.highlights.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    bookKey,
    bookTitle: state.bookTitle,
    quote: state.selectedText,
    context: state.selectedContext,
    blockId: state.selectedBlockId,
    rects: isRenderedPdfBook() ? state.selectedRects : [],
    provider: els.providerSelect.value,
    model: els.modelInput.value.trim() || DEFAULT_MODEL,
    outputLanguage: els.languageSelect.value,
    createdAt: new Date().toISOString(),
  });

  saveReadingPosition();
  if (isRenderedPdfBook()) {
    renderCurrentPdfHighlights();
  } else {
    renderBook();
  }
  renderNotes();
  updateStats();
  persistState();
  addMessage("system", t("savedHighlight"));
}

function removeHighlight(highlightId) {
  state.highlights = state.highlights.filter((highlight) => highlight.id !== highlightId);
  saveReadingPosition();
  if (isRenderedPdfBook()) {
    renderCurrentPdfHighlights();
  } else {
    renderBook();
  }
  renderSelection();
  renderNotes();
  updateStats();
  persistState();
  addMessage("system", t("removedHighlight"));
}

function getMatchingHighlightForSelection() {
  if (!state.selectedText) return null;
  const bookKey = getBookKey();
  return state.highlights.find((highlight) => {
    if (highlight.bookKey !== bookKey) return false;
    if (highlight.quote !== state.selectedText) return false;
    return (highlight.blockId || "") === (state.selectedBlockId || "");
  }) || null;
}

function getCurrentBookHighlights() {
  const bookKey = getBookKey();
  return state.highlights.filter((highlight) => highlight.bookKey === bookKey);
}

function renderNotes() {
  if (!state.notes.length) {
    els.notesList.innerHTML = `<div class="empty-state"><p>${escapeHtml(t("emptyNotes"))}</p></div>`;
    updateStats();
    return;
  }

  els.notesList.innerHTML = state.notes
    .map(
      (note) => `<div class="note-item">
        <blockquote>${escapeHtml(note.quote)}</blockquote>
        <div class="note-meta">
          <span class="note-chip">${escapeHtml(note.provider || "provider")}</span>
          <span class="note-chip">${escapeHtml(note.model || "model")}</span>
          <span class="note-chip">${escapeHtml(note.outputLanguage || "language")}</span>
        </div>
        ${note.explanation ? `<div class="note-explanation">${formatAssistantText(note.explanation.slice(0, 360))}</div>` : ""}
        <p>${escapeHtml(note.bookTitle)} · ${new Date(note.createdAt).toLocaleString()}</p>
        <div class="note-actions">
          <button type="button" data-delete-note="${note.id}">${escapeHtml(t("delete"))}</button>
        </div>
      </div>`
    )
    .join("");

  els.notesList.querySelectorAll("[data-delete-note]").forEach((button) => {
    button.addEventListener("click", () => {
      state.notes = state.notes.filter((note) => note.id !== button.dataset.deleteNote);
      renderNotes();
      updateStats();
      persistState();
    });
  });
}

function clearChat() {
  state.messages = [];
  addMessage("system", t("chatCleared"));
  persistState();
}

function clearNotes() {
  if (!state.notes.length) return;
  const ok = window.confirm(t("confirmClearNotes"));
  if (!ok) return;
  state.notes = [];
  renderNotes();
  updateStats();
  persistState();
  addMessage("system", t("notesCleared"));
}

function resetBook() {
  if (!state.bookText && !state.selectedText && !state.pdfDocument) return;
  const ok = window.confirm(t("confirmResetBook"));
  if (!ok) return;
  clearPdfDocument();
  state.bookTitle = "";
  state.bookText = "";
  state.selectedText = "";
  state.selectedContext = "";
  state.selectedBlockId = "";
  state.selectedRects = [];
  state.lastExplained = "";
  state.highlights = [];
  state.messages = [];
  els.fileInput.value = "";
  renderBook();
  renderSelection();
  updateStats();
  addMessage("system", t("bookReset"));
  persistState();
}

function exportNotesMarkdown() {
  if (!state.notes.length) {
    addMessage("system", t("noExportNotes"));
    return;
  }

  const markdown = buildNotesMarkdown();
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(state.bookTitle || "lingualens")}-notes.md`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  addMessage("system", t("exportedNotes"));
}

function buildNotesMarkdown() {
  const lines = [
    `# LinguaLens Notes - ${state.bookTitle || "Untitled"}`,
    "",
    `Exported at: ${new Date().toLocaleString()}`,
    `Reading progress: ${getReadingProgressPercent()}%`,
    `Highlights: ${getCurrentBookHighlights().length}`,
    "",
  ];

  state.notes.forEach((note, index) => {
    lines.push(`## ${index + 1}. ${note.bookTitle || "Untitled"}`);
    lines.push("");
    lines.push(`- Created: ${new Date(note.createdAt).toLocaleString()}`);
    lines.push(`- Provider: ${note.provider || "unknown"}`);
    lines.push(`- Model: ${note.model || "unknown"}`);
    lines.push(`- UI language: ${note.uiLanguage || "unknown"}`);
    lines.push(`- Output language: ${note.outputLanguage || "unknown"}`);
    if (note.blockId) lines.push(`- Block: ${note.blockId}`);
    lines.push("");
    lines.push("### Quote");
    lines.push("");
    lines.push(blockquote(note.quote));
    lines.push("");
    if (note.context) {
      lines.push("### Context");
      lines.push("");
      lines.push(blockquote(note.context));
      lines.push("");
    }
    if (note.explanation) {
      lines.push("### AI Explanation");
      lines.push("");
      lines.push(note.explanation);
      lines.push("");
    }
  });

  const highlights = getCurrentBookHighlights();
  if (highlights.length) {
    lines.push("## Highlights");
    lines.push("");
    highlights.forEach((highlight, index) => {
      lines.push(`### Highlight ${index + 1}`);
      lines.push("");
      lines.push(`- Created: ${new Date(highlight.createdAt).toLocaleString()}`);
      if (highlight.blockId) lines.push(`- Block: ${highlight.blockId}`);
      lines.push("");
      lines.push(blockquote(highlight.quote));
      lines.push("");
    });
  }

  return lines.join("\n");
}

function blockquote(text) {
  return String(text)
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n");
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[\\/:*?"<>|]+/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80) || "lingualens";
}

function handleReaderScroll() {
  updateStats();
  window.clearTimeout(state.scrollSaveTimer);
  state.scrollSaveTimer = window.setTimeout(saveReadingPosition, 250);
}

function saveReadingPosition() {
  if (!state.bookText.trim()) return;
  const key = getBookKey();
  state.readingPositions[key] = {
    scrollTop: els.reader.scrollTop,
    progress: getReadingProgress(),
    updatedAt: new Date().toISOString(),
  };
  persistState();
}

function restoreReadingPosition() {
  if (!state.bookText.trim()) return;
  const position = state.readingPositions[getBookKey()];
  if (!position) {
    updateStats();
    return;
  }

  const maxScroll = Math.max(0, els.reader.scrollHeight - els.reader.clientHeight);
  els.reader.scrollTop = Math.min(position.scrollTop || 0, maxScroll);
  updateStats();
}

function getReadingProgress() {
  const maxScroll = Math.max(0, els.reader.scrollHeight - els.reader.clientHeight);
  if (!state.bookText.trim() || maxScroll === 0) return 0;
  return Math.min(1, Math.max(0, els.reader.scrollTop / maxScroll));
}

function getReadingProgressPercent() {
  return Math.round(getReadingProgress() * 100);
}

function getBookKey() {
  if (!state.bookText.trim()) return "empty";
  return `${slugify(state.bookTitle || "untitled")}-${hashString(state.bookText)}`;
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function updateStats() {
  const compact = state.bookText.replace(/\s+/g, "");
  els.wordCount.textContent = `${compact.length} ${t("characterUnit")}`;
  els.noteCount.textContent = `${state.notes.length} ${t("noteUnit")}`;
  els.highlightCount.textContent = `${getCurrentBookHighlights().length} ${t("highlightUnit")}`;
  els.progressCount.textContent = `${getReadingProgressPercent()}%`;
}

function setActiveTab(tab) {
  const isChat = tab === "chat";
  els.chatTab.classList.toggle("active", isChat);
  els.notesTab.classList.toggle("active", !isChat);
  els.chatTab.setAttribute("aria-selected", String(isChat));
  els.notesTab.setAttribute("aria-selected", String(!isChat));
  els.chatView.classList.toggle("hidden", !isChat);
  els.notesView.classList.toggle("hidden", isChat);
}

function setBusy(isBusy) {
  [els.sendButton, els.explainButton, els.translateButton, els.summarizeButton].forEach((button) => {
    button.disabled = isBusy || (!state.selectedText && button !== els.sendButton);
  });
}

function formatAssistantText(text) {
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function looksLikeMojibake(text) {
  return /æ|ç|ã|ï¼|â|縺|蜈|繧|譁|髮/.test(text);
}

function isLocalModeMessage(text) {
  return /^(本地模式|ローカルモード|Local mode)/.test(text);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

init();
