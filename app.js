'use strict';

// ── Department data (Kanagawa Univ. Yokohama Campus, 2025 entrants) ──
const DEPTS = [

  // ===== 法学部 =====
  {
    id: 'horitsu',
    faculty: '法学部',
    fcolor: '#b91c1c',
    name: '法律学科',
    total: 124,
    courseSelect: {
      storageKey: 'kgnu_yoko_horitsu_course',
      label: 'コース選択',
      hint: '※ コースは記録用です（卒業単位数は変わりません）',
      options: [
        { id: 'horitu_shoku',  label: '法律職コース' },
        { id: 'business_ho',   label: 'ビジネス法コース' },
        { id: 'gendai_shakai', label: '現代社会コース' },
      ]
    },
    sections: [
      {
        id: 'kyoyo', label: '共通教養科目', required: 32,
        items: [
          { id: 'fys',  label: '初年次ゼミナール（FYS）',    min: 2 },
          { id: 'eigo', label: '外国語科目（英語）',          min: 8 },
          { id: 'hum',  label: '人文の分野',                  min: 4 },
          { id: 'soc',  label: '社会の分野',                  min: 4 },
          { id: 'nat',  label: '自然の分野',                  min: 4 },
          { id: 'jink', label: '人間形成の分野',              min: 2 },
          { id: 'civ',  label: '現代社会と市民',              min: 2 },
          { id: 'ext',  label: '超過単位算入分（上限6）',      min: 0 },
        ]
      },
      {
        id: 'a_gun', label: '専攻科目 A群（必修）', required: 28,
        items: [{ id: 'a_gun', label: 'A群必修科目', min: 28 }]
      },
      {
        id: 'b_gun', label: '専攻科目 B群（選択）', required: 28,
        items: [{ id: 'b_gun', label: 'B群選択科目', min: 28 }]
      },
      {
        id: 'c_gun', label: '専攻科目 C群・関連科目', required: 30,
        items: [{ id: 'c_gun', label: 'C群・関連科目', min: 30 }]
      },
      {
        id: 'jiyu', label: '自由選択科目', required: 6,
        items: [{ id: 'jiyu', label: '自由選択科目', min: 6 }]
      },
    ],
    shinkyu: null,
  },

  {
    id: 'jichi',
    faculty: '法学部',
    fcolor: '#b91c1c',
    name: '自治行政学科',
    total: 124,
    sections: [
      {
        id: 'kyoyo', label: '共通教養科目', required: 32,
        items: [
          { id: 'fys',  label: '初年次ゼミナール（FYS）',    min: 2 },
          { id: 'eigo', label: '外国語科目（英語）',          min: 8 },
          { id: 'hum',  label: '人文の分野',                  min: 4 },
          { id: 'soc',  label: '社会の分野',                  min: 4 },
          { id: 'nat',  label: '自然の分野',                  min: 4 },
          { id: 'jink', label: '人間形成の分野',              min: 2 },
          { id: 'civ',  label: '現代社会と市民',              min: 2 },
          { id: 'ext',  label: '超過単位算入分（上限6）',      min: 0 },
        ]
      },
      {
        id: 'a_gun', label: '専攻科目 A群（必修）', required: 28,
        items: [{ id: 'a_gun', label: 'A群必修科目', min: 28 }]
      },
      {
        id: 'b_gun', label: '専攻科目 B群（選択）', required: 28,
        items: [{ id: 'b_gun', label: 'B群選択科目', min: 28 }]
      },
      {
        id: 'c_gun', label: '専攻科目 C群・関連科目', required: 30,
        items: [{ id: 'c_gun', label: 'C群・関連科目', min: 30 }]
      },
      {
        id: 'jiyu', label: '自由選択科目', required: 6,
        items: [{ id: 'jiyu', label: '自由選択科目', min: 6 }]
      },
    ],
    shinkyu: null,
  },

  // ===== 経済学部 =====
  {
    id: 'keizai_gen',
    faculty: '経済学部',
    fcolor: '#d97706',
    name: '経済学科（現代経済専攻）',
    total: 128,
    courseSelect: {
      storageKey: 'kgnu_yoko_keizai_gen_course',
      label: 'コース選択',
      hint: '※ コースは記録用です（卒業単位数は変わりません）',
      options: [
        { id: 'fukushi', label: '福祉・環境・公共政策コース' },
        { id: 'shijo',   label: '市場・産業コース' },
        { id: 'kokusai', label: '国際経済・社会コース' },
      ]
    },
    sections: [
      {
        id: 'kyoyo', label: '共通教養科目', required: 32,
        items: [
          { id: 'fys',  label: '初年次ゼミナール（FYS）',    min: 2 },
          { id: 'eigo', label: '外国語科目（英語）',          min: 8 },
          { id: 'hum',  label: '人文の分野',                  min: 4 },
          { id: 'soc',  label: '社会の分野',                  min: 4 },
          { id: 'nat',  label: '自然の分野',                  min: 4 },
          { id: 'jink', label: '人間形成の分野',              min: 2 },
          { id: 'civ',  label: '現代社会と市民',              min: 2 },
          { id: 'ext',  label: '超過単位算入分（上限6）',      min: 0 },
        ]
      },
      {
        id: 'a_gun', label: '専攻科目 A群（必修）', required: 16,
        items: [{ id: 'a_gun', label: 'A群必修科目', min: 16 }]
      },
      {
        id: 'b_gun', label: '専攻科目 B群（選択）', required: 52,
        items: [{ id: 'b_gun', label: 'B群選択科目', min: 52 }]
      },
      {
        id: 'c_gun', label: '専攻科目 C群', required: 8,
        items: [{ id: 'c_gun', label: 'C群科目', min: 8 }]
      },
      {
        id: 'kanren', label: '関連科目', required: 20,
        items: [{ id: 'kanren', label: '関連科目', min: 20 }]
      },
    ],
    shinkyu: {
      label: '2→3年次進級要件',
      checks: [
        { label: 'FYS含む合計44単位以上修得', type: 'total', target: 44 },
      ]
    },
  },

  {
    id: 'keizai_data',
    faculty: '経済学部',
    fcolor: '#d97706',
    name: '経済学科（経済データ分析専攻）',
    total: 128,
    courseSelect: {
      storageKey: 'kgnu_yoko_keizai_data_course',
      label: 'コース選択',
      hint: '※ コースは記録用です（卒業単位数は変わりません）',
      options: [
        { id: 'seisaku', label: '政策分析コース' },
        { id: 'shijo',   label: '市場分析コース' },
      ]
    },
    sections: [
      {
        id: 'kyoyo', label: '共通教養科目', required: 32,
        items: [
          { id: 'fys',  label: '初年次ゼミナール（FYS）',    min: 2 },
          { id: 'eigo', label: '外国語科目（英語）',          min: 8 },
          { id: 'hum',  label: '人文の分野',                  min: 4 },
          { id: 'soc',  label: '社会の分野',                  min: 4 },
          { id: 'nat',  label: '自然の分野',                  min: 4 },
          { id: 'jink', label: '人間形成の分野',              min: 2 },
          { id: 'civ',  label: '現代社会と市民',              min: 2 },
          { id: 'ext',  label: '超過単位算入分（上限6）',      min: 0 },
        ]
      },
      {
        id: 'a_gun', label: '専攻科目 A群（必修）', required: 20,
        items: [{ id: 'a_gun', label: 'A群必修科目', min: 20 }]
      },
      {
        id: 'b_gun', label: '専攻科目 B群（選択）', required: 48,
        items: [{ id: 'b_gun', label: 'B群選択科目', min: 48 }]
      },
      {
        id: 'c_gun', label: '専攻科目 C群', required: 8,
        items: [{ id: 'c_gun', label: 'C群科目', min: 8 }]
      },
      {
        id: 'kanren', label: '関連科目', required: 20,
        items: [{ id: 'kanren', label: '関連科目', min: 20 }]
      },
    ],
    shinkyu: {
      label: '2→3年次進級要件',
      checks: [
        { label: 'FYS含む合計44単位以上修得', type: 'total', target: 44 },
      ]
    },
  },

  {
    id: 'biz',
    faculty: '経済学部',
    fcolor: '#d97706',
    name: '現代ビジネス学科',
    total: 128,
    courseSelect: {
      storageKey: 'kgnu_yoko_biz_course',
      label: 'コース選択',
      hint: '※ コースは記録用です（卒業単位数は変わりません）',
      options: [
        { id: 'keiei',     label: '経営・国際ビジネスコース' },
        { id: 'marketing', label: 'マーケティング・流通コース' },
        { id: 'kaikei',    label: '企業・会計コース' },
      ]
    },
    sections: [
      {
        id: 'kyoyo', label: '共通教養科目', required: 32,
        items: [
          { id: 'fys',  label: '初年次ゼミナール（FYS）',    min: 2 },
          { id: 'eigo', label: '外国語科目（英語）',          min: 8 },
          { id: 'hum',  label: '人文の分野',                  min: 4 },
          { id: 'soc',  label: '社会の分野',                  min: 4 },
          { id: 'nat',  label: '自然の分野',                  min: 4 },
          { id: 'jink', label: '人間形成の分野',              min: 2 },
          { id: 'civ',  label: '現代社会と市民',              min: 2 },
          { id: 'ext',  label: '超過単位算入分（上限6）',      min: 0 },
        ]
      },
      {
        id: 'a_gun', label: '専攻科目 A群（必修）', required: 16,
        items: [{ id: 'a_gun', label: 'A群必修科目', min: 16 }]
      },
      {
        id: 'b_gun', label: '専攻科目 B群（選択）', required: 42,
        items: [{ id: 'b_gun', label: 'B群選択科目', min: 42 }]
      },
      {
        id: 'c_gun', label: '専攻科目 C群', required: 18,
        items: [{ id: 'c_gun', label: 'C群科目', min: 18 }]
      },
      {
        id: 'kanren', label: '関連科目', required: 20,
        items: [{ id: 'kanren', label: '関連科目', min: 20 }]
      },
    ],
    shinkyu: {
      label: '2→3年次進級要件',
      checks: [
        { label: 'FYS含む合計44単位以上修得', type: 'total', target: 44 },
      ]
    },
  },

  // ===== 人間科学部 =====
  {
    id: 'ningen',
    faculty: '人間科学部',
    fcolor: '#0369a1',
    name: '人間科学科',
    total: 126,
    courseSelect: {
      storageKey: 'kgnu_yoko_ningen_course',
      label: 'コース選択',
      hint: '※ コースは記録用です（卒業単位数は変わりません）',
      options: [
        { id: 'shinri',  label: '心理発達コース' },
        { id: 'sports',  label: 'スポーツ健康コース' },
        { id: 'shakai',  label: '人間社会コース' },
      ]
    },
    sections: [
      {
        id: 'kyoyo', label: '共通教養科目', required: 32,
        items: [
          { id: 'fys',  label: '初年次ゼミナール（FYS）',              min: 2 },
          { id: 'eigo', label: '外国語科目（英語）',                    min: 8 },
          { id: 'hum',  label: '人文の分野',                            min: 4 },
          { id: 'soc',  label: '社会の分野',                            min: 4 },
          { id: 'nat',  label: '自然の分野',                            min: 4 },
          { id: 'jink', label: '人間形成の分野（健康科学とスポーツⅠ・Ⅱ含む）', min: 2 },
          { id: 'civ',  label: '現代社会と市民',                        min: 2 },
          { id: 'ext',  label: '超過単位算入分（上限6）',                min: 0 },
        ]
      },
      {
        id: 'kiso', label: '基礎科目', required: 14,
        items: [
          { id: 'kiso_hisshu',  label: '基礎科目（必修）', min: 8 },
          { id: 'kiso_sentaku', label: '基礎科目（選択）', min: 0 },
        ]
      },
      {
        id: 'kikan', label: '基幹科目', required: 22,
        items: [{ id: 'kikan', label: '基幹科目（コース必修含む）', min: 22 }]
      },
      {
        id: 'tenkai', label: '展開科目', required: 30,
        items: [{ id: 'tenkai', label: '展開科目', min: 30 }]
      },
      {
        id: 'kanren', label: '関連科目', required: 16,
        items: [{ id: 'kanren', label: '関連科目', min: 16 }]
      },
      {
        id: 'sogoenshu', label: '総合演習', required: 12,
        items: [{ id: 'sogoenshu', label: '専門ゼミナールⅠ・Ⅱ・卒業研究', min: 12 }]
      },
    ],
    shinkyu: null,
  },

  // ===== 建築学部 =====
  {
    id: 'kenchiku_gaku',
    faculty: '建築学部',
    fcolor: '#65a30d',
    name: '建築学科（建築学系）',
    total: 125,
    courseSelect: {
      storageKey: 'kgnu_yoko_kenchiku_gaku_course',
      label: 'コース選択',
      hint: '※ コースを選択するとコース必修・基礎科目の必要単位数が変わります',
      options: [
        { id: 'kozo',   label: '構造コース' },
        { id: 'kankyo', label: '環境コース' },
        { id: 'design', label: 'デザインコース' },
      ]
    },
    sections: [
      {
        id: 'kyoyo', label: '共通教養科目', required: 32,
        items: [
          { id: 'fys',  label: '初年次ゼミナール（FYS）',    min: 2 },
          { id: 'eigo', label: '外国語科目（英語）',          min: 8 },
          { id: 'hum',  label: '人文の分野',                  min: 4 },
          { id: 'soc',  label: '社会の分野',                  min: 4 },
          { id: 'nat',  label: '自然の分野',                  min: 4 },
          { id: 'jink', label: '人間形成の分野',              min: 2 },
          { id: 'civ',  label: '現代社会と市民',              min: 2 },
          { id: 'ext',  label: '超過単位算入分（上限6）',      min: 0 },
        ]
      },
      {
        id: 'senkou', label: '専攻科目', required: 93,
        items: [
          { id: 'kiso_hisshu',    label: '基礎必修科目', min: 14,
            courseMin: { design: 8 } },
          { id: 'kiso_sentaku',   label: '基礎選択科目', min: 0,
            courseMin: { design: 6 } },
          { id: 'gakubu_hisshu',  label: '学部必修科目', min: 36 },
          { id: 'gakukei_hisshu', label: '学系必修科目', min: 13 },
          { id: 'course_hisshu',  label: 'コース必修科目', min: 15,
            courseMin: { kankyo: 17 } },
          { id: 'senmon_sentaku', label: '専門選択科目', min: 15,
            courseMin: { kankyo: 13 } },
        ]
      },
    ],
    shinkyuList: [
      {
        label: '1→2年次進級要件',
        checks: [
          { label: '合計26単位以上修得', type: 'total', target: 26 },
          { label: 'FYS含む1年次専門必修から10単位以上', type: 'sum', ids: ['fys', 'kiso_hisshu'], target: 10 },
        ]
      },
      {
        label: '3→4年次進級要件',
        checks: [
          { label: '合計100単位以上修得', type: 'total', target: 100 },
        ]
      },
    ],
  },

  {
    id: 'kenchiku_toshi',
    faculty: '建築学部',
    fcolor: '#65a30d',
    name: '建築学科（都市生活学系）',
    total: 125,
    courseSelect: {
      storageKey: 'kgnu_yoko_kenchiku_toshi_course',
      label: 'コース選択',
      hint: '※ コースを選択するとコース必修・専門選択の必要単位数が変わります',
      options: [
        { id: 'toshi_design',   label: 'デザインコース' },
        { id: 'toshi_seikatsu', label: '住生活創造コース' },
        { id: 'toshi_machi',    label: 'まち再生コース' },
      ]
    },
    sections: [
      {
        id: 'kyoyo', label: '共通教養科目', required: 32,
        items: [
          { id: 'fys',  label: '初年次ゼミナール（FYS）',    min: 2 },
          { id: 'eigo', label: '外国語科目（英語）',          min: 8 },
          { id: 'hum',  label: '人文の分野',                  min: 4 },
          { id: 'soc',  label: '社会の分野',                  min: 4 },
          { id: 'nat',  label: '自然の分野',                  min: 4 },
          { id: 'jink', label: '人間形成の分野',              min: 2 },
          { id: 'civ',  label: '現代社会と市民',              min: 2 },
          { id: 'ext',  label: '超過単位算入分（上限6）',      min: 0 },
        ]
      },
      {
        id: 'senkou', label: '専攻科目', required: 93,
        items: [
          { id: 'kiso',           label: '基礎科目', min: 8 },
          { id: 'gakubu_hisshu',  label: '学部必修科目', min: 36 },
          { id: 'course_hisshu',  label: 'コース必修科目', min: 15,
            courseMin: { toshi_seikatsu: 21, toshi_machi: 21 } },
          { id: 'senmon_sentaku', label: '専門選択科目', min: 34,
            courseMin: { toshi_seikatsu: 28, toshi_machi: 28 } },
        ]
      },
    ],
    shinkyuList: [
      {
        label: '1→2年次進級要件',
        checks: [
          { label: '合計26単位以上修得', type: 'total', target: 26 },
          { label: 'FYS含む1年次専門必修から10単位以上', type: 'sum', ids: ['fys', 'kiso'], target: 10 },
        ]
      },
      {
        label: '3→4年次進級要件',
        checks: [
          { label: '合計100単位以上修得', type: 'total', target: 100 },
        ]
      },
    ],
  },
];

// ── State ──
let currentDeptId = null;
let wsReferenceRows = null;

// ── Storage ──
function storageKey(deptId, secId, itemId) {
  return `kgnu_yoko_${deptId}_${secId}_${itemId}`;
}
function getCredit(deptId, secId, itemId) {
  return Math.max(0, parseInt(localStorage.getItem(storageKey(deptId, secId, itemId)) || '0', 10));
}
function saveCredit(deptId, secId, itemId, val) {
  localStorage.setItem(storageKey(deptId, secId, itemId), Math.max(0, val));
}
function getSelectedCourse(deptId) {
  const dept = DEPTS.find(d => d.id === deptId);
  if (!dept || !dept.courseSelect) return null;
  return localStorage.getItem(dept.courseSelect.storageKey) || null;
}
function saveSelectedCourse(deptId, courseId) {
  const dept = DEPTS.find(d => d.id === deptId);
  if (!dept || !dept.courseSelect) return;
  localStorage.setItem(dept.courseSelect.storageKey, courseId);
}

// ── Calculations ──
function calcSection(dept, sec, selectedCourse) {
  let total = 0;
  const items = sec.items.map(item => {
    const earned = getCredit(dept.id, sec.id, item.id);
    total += earned;
    const effectiveMin = (item.courseMin && selectedCourse && item.courseMin[selectedCourse] !== undefined)
      ? item.courseMin[selectedCourse]
      : item.min;
    const effectiveLabel = (item.courseLabel && selectedCourse && item.courseLabel[selectedCourse] !== undefined)
      ? item.courseLabel[selectedCourse]
      : item.label;
    return { ...item, label: effectiveLabel, min: effectiveMin, earned };
  });
  const groupChecks = (sec.sectionChecks || []).map(gc => {
    const sum = gc.ids.reduce((a, id) => a + getCredit(dept.id, sec.id, id), 0);
    return { ...gc, earned: sum, met: sum >= gc.target };
  });
  return { id: sec.id, label: sec.label, items, total, required: sec.required, met: total >= sec.required, groupChecks };
}

function calcAll(dept) {
  const selectedCourse = getSelectedCourse(dept.id);
  const sections = dept.sections.map(sec => calcSection(dept, sec, selectedCourse));
  const total = sections.reduce((sum, s) => sum + s.total, 0);
  return { sections, total, required: dept.total, met: total >= dept.total };
}

function getAnyCredit(dept, itemId) {
  for (const sec of dept.sections) {
    for (const item of sec.items) {
      if (item.id === itemId) return getCredit(dept.id, sec.id, itemId);
    }
  }
  return 0;
}

function calcShinkyuChecks(dept, checks, totalCredits, selectedCourse) {
  return checks
    .filter(c => !c.onlyCourses || (selectedCourse && c.onlyCourses.includes(selectedCourse)))
    .map(c => {
      let earned = 0;
      if (c.type === 'total') earned = totalCredits;
      else if (c.type === 'sum')  earned = c.ids.reduce((a, id) => a + getAnyCredit(dept, id), 0);
      else if (c.type === 'item') earned = getAnyCredit(dept, c.id);
      return { label: c.label, earned, target: c.target, met: earned >= c.target };
    });
}

function calcShinkyu(dept, totalCredits) {
  if (!dept.shinkyu) return null;
  const selectedCourse = getSelectedCourse(dept.id);
  return {
    label: dept.shinkyu.label,
    checks: calcShinkyuChecks(dept, dept.shinkyu.checks, totalCredits, selectedCourse)
  };
}

function calcShinkyuList(dept, totalCredits) {
  if (!dept.shinkyuList) return null;
  const selectedCourse = getSelectedCourse(dept.id);
  return dept.shinkyuList.map(s => ({
    label: s.label,
    checks: calcShinkyuChecks(dept, s.checks, totalCredits, selectedCourse)
  }));
}

// ── Rendering: Select View ──
function renderSelect() {
  currentDeptId = null;
  syncRefBtn();
  const faculties = {};
  DEPTS.forEach(d => { (faculties[d.faculty] = faculties[d.faculty] || []).push(d); });

  let html = '<div class="select-view">';
  html += '<div class="select-ws-bar"><button class="ws-import-top-btn" onclick="showWsGuide()">📥 WebStation 自動取込</button></div>';
  html += '<p class="select-intro">所属している学科を選んでください</p><div class="faculties">';

  for (const [fac, depts] of Object.entries(faculties)) {
    const fcolor = depts[0].fcolor;
    html += `<div class="faculty-group">
      <h2 class="faculty-title" style="border-color:${fcolor};color:${fcolor}">${fac}</h2>
      <div class="dept-cards">`;

    depts.forEach(d => {
      const prog = calcAll(d);
      const pct  = Math.min(100, prog.required ? Math.round(prog.total / prog.required * 100) : 0);
      html += `<button class="dept-card" onclick="selectDept('${d.id}')">
        <div class="dept-name">${d.name}</div>
        <div class="dept-total">卒業要件 ${d.total}単位</div>
        ${prog.total > 0 ? `<div class="mini-progress">
          <div class="mini-bar"><div class="mini-fill${prog.met ? ' done' : ''}" style="width:${pct}%"></div></div>
          <span class="mini-pct">${prog.total} / ${prog.required} 単位</span>
        </div>` : ''}
      </button>`;
    });

    html += '</div></div>';
  }

  html += '</div></div>';
  document.getElementById('app').innerHTML = html;
}

// ── Rendering: Detail View ──
function renderDetail(deptId, isShared) {
  const dept = DEPTS.find(d => d.id === deptId);
  if (!dept) { renderSelect(); return; }
  currentDeptId = deptId;

  const prog    = calcAll(dept);
  const pct     = Math.min(100, Math.round(prog.total / prog.required * 100));
  const fillCls = prog.met ? 'done' : pct >= 50 ? 'mid' : 'low';
  const shinkyu     = calcShinkyu(dept, prog.total);
  const shinkyuList = calcShinkyuList(dept, prog.total);

  const sharedBanner = isShared
    ? '<div class="shared-banner">共有された単位データを表示中 — 編集して自分の単位を入力できます</div>'
    : '';

  let html = `<div class="detail-view">
    ${sharedBanner}
    <div class="detail-top-bar">
      <button class="back-btn" onclick="renderSelect()">← 学科を変更</button>
      <button class="ws-import-top-btn" onclick="showWsGuide()">📥 自動取込</button>
      <button class="share-btn" onclick="copyShareLink('${dept.id}')">リンクを共有</button>
    </div>
    <div class="dept-header" style="--fcolor:${dept.fcolor}">
      <div class="dept-header-faculty">${dept.faculty}</div>
      <h2 class="dept-header-name">${dept.name}</h2>
      <div class="total-progress">
        <div class="total-nums">
          <span class="total-earned">${prog.total}</span>
          <span class="total-sep">/</span>
          <span class="total-req">${prog.required}単位</span>
          ${prog.met
            ? '<span class="badge-done">卒業要件達成！</span>'
            : `<span class="remaining">残り ${prog.required - prog.total} 単位</span>`}
        </div>
        <div class="progress-bar">
          <div class="progress-fill ${fillCls}" style="width:${pct}%"></div>
        </div>
      </div>
    </div>`;

  if (dept.courseSelect) html += renderCourseSelectHTML(dept);
  if (shinkyu)     html += renderShinkyuHTML(shinkyu.checks, shinkyu.label);
  if (shinkyuList) shinkyuList.forEach(s => { html += renderShinkyuHTML(s.checks, s.label); });

  prog.sections.forEach((calcedSec, i) => {
    html += renderSectionHTML(dept, dept.sections[i], calcedSec);
  });

  html += '<p class="disclaimer">※ このアプリは非公式です。単位認定・卒業要件は必ず公式の履修要覧および教務課でご確認ください。</p>';
  html += '</div>';

  document.getElementById('app').innerHTML = html;
  syncRefBtn();
}

function renderCourseSelectHTML(dept) {
  const cs = dept.courseSelect;
  const selected = getSelectedCourse(dept.id);
  let html = `<div class="section course-select-section">
    <div class="section-header"><h3 class="section-title">${cs.label}</h3></div>
    <div class="course-options">`;
  cs.options.forEach(opt => {
    const isSel = opt.id === selected;
    html += `<button class="course-option${isSel ? ' selected' : ''}"
      onclick="changeCourse('${dept.id}','${opt.id}')">${opt.label}</button>`;
  });
  html += '</div>';
  if (!selected) {
    const hint = cs.hint || '※ コースを選択すると必要単位数が変わります';
    html += `<p class="course-hint">${hint}</p>`;
  }
  html += '</div>';
  return html;
}

function renderShinkyuHTML(checks, label) {
  const allMet = checks.every(c => c.met);
  let html = `<div class="section shinkyu-section${allMet ? ' all-met' : ''}">
    <div class="section-header"><h3 class="section-title shinkyu-title">${label}</h3></div>
    <div class="shinkyu-checks">`;
  checks.forEach(c => {
    html += `<div class="shinkyu-item ${c.met ? 'met' : 'unmet'}">
      <span class="check-icon">${c.met ? '✓' : '✗'}</span>
      <span class="check-label">${c.label}</span>
      <span class="check-nums">${c.earned} / ${c.target}</span>
    </div>`;
  });
  html += '</div></div>';
  return html;
}

function renderSectionHTML(dept, sec, calc) {
  const secId = sec.id;
  let html = `<div class="section">
    <div class="section-header">
      <h3 class="section-title">${sec.label}</h3>
      <span class="${calc.met ? 'nums-met' : 'nums-unmet'}">${calc.total} / ${calc.required} 単位</span>
    </div>`;

  if (calc.groupChecks && calc.groupChecks.length > 0) {
    html += '<div class="group-checks">';
    calc.groupChecks.forEach(gc => {
      html += `<div class="group-check ${gc.met ? 'met' : 'unmet'}">
        <span class="check-icon">${gc.met ? '✓' : '○'}</span>
        <span>${gc.label}</span>
        <span class="check-nums">${gc.earned} / ${gc.target}</span>
      </div>`;
    });
    html += '</div>';
  }

  const hasGroups = calc.items.some(i => i.group);
  if (hasGroups) {
    const groups = {};
    calc.items.forEach(item => {
      const g = item.group || 'その他';
      (groups[g] = groups[g] || []).push(item);
    });
    for (const [gname, items] of Object.entries(groups)) {
      html += `<div class="item-group"><div class="item-group-label">${gname}</div>`;
      items.forEach(item => { html += renderItemHTML(dept, secId, item); });
      html += '</div>';
    }
  } else {
    calc.items.forEach(item => { html += renderItemHTML(dept, secId, item); });
  }

  html += '</div>';
  return html;
}

function renderItemHTML(dept, secId, item) {
  const status = item.min === 0 ? 'na'
               : item.earned >= item.min ? 'met'
               : item.earned > 0 ? 'partial'
               : 'empty';
  const icon   = status === 'met' ? '✓' : status === 'na' ? '—' : status === 'partial' ? '○' : '×';
  const reqTxt = item.min > 0 ? `必要: ${item.min}単位` : '（任意）';

  return `<div class="credit-item status-${status}">
    <span class="item-icon">${icon}</span>
    <div class="item-info">
      <span class="item-label">${item.label}</span>
      <span class="item-req">${reqTxt}</span>
    </div>
    <div class="item-input-wrap">
      <button class="inc-btn"
        onclick="adjustCredit('${dept.id}','${secId}','${item.id}',-2)">－</button>
      <input type="number" class="credit-input"
        value="${item.earned}" min="0" max="120" step="2"
        onchange="changeCredit('${dept.id}','${secId}','${item.id}',this.value)">
      <button class="inc-btn"
        onclick="adjustCredit('${dept.id}','${secId}','${item.id}',2)">＋</button>
    </div>
  </div>`;
}

// ── Event handlers ──
function selectDept(id) {
  renderDetail(id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeCredit(deptId, secId, itemId, val) {
  saveCredit(deptId, secId, itemId, parseInt(val, 10) || 0);
  refreshDetail(deptId);
}

function changeCourse(deptId, courseId) {
  saveSelectedCourse(deptId, courseId);
  refreshDetail(deptId);
}

function adjustCredit(deptId, secId, itemId, delta) {
  const cur = getCredit(deptId, secId, itemId);
  saveCredit(deptId, secId, itemId, cur + delta);
  refreshDetail(deptId);
}

let _rafPending = false;
function refreshDetail(deptId) {
  if (_rafPending) return;
  _rafPending = true;
  requestAnimationFrame(() => {
    _rafPending = false;
    const scrollY = window.scrollY;
    renderDetail(deptId);
    window.scrollTo(0, scrollY);
  });
}

// ── Share ──
function buildShareData(deptId) {
  const dept = DEPTS.find(d => d.id === deptId);
  if (!dept) return null;
  const credits = {};
  dept.sections.forEach(sec => {
    sec.items.forEach(item => {
      const v = getCredit(deptId, sec.id, item.id);
      if (v > 0) credits[`${sec.id}__${item.id}`] = v;
    });
  });
  const course = getSelectedCourse(deptId);
  return { d: deptId, c: course || '', cr: credits };
}

function copyShareLink(deptId) {
  const data = buildShareData(deptId);
  if (!data) return;
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
  const url = `${location.origin}${location.pathname}#share=${encoded}`;
  showToast('短縮URL作成中…');
  fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`)
    .then(r => r.json())
    .then(json => {
      const shortUrl = json.shorturl || url;
      navigator.clipboard.writeText(shortUrl).then(() => {
        showToast('リンクをコピーしました！');
      }).catch(() => {
        prompt('このURLをコピーしてください:', shortUrl);
      });
    })
    .catch(() => {
      navigator.clipboard.writeText(url).then(() => {
        showToast('リンクをコピーしました！');
      }).catch(() => {
        prompt('このURLをコピーしてください:', url);
      });
    });
}

function showToast(msg) {
  const el = document.createElement('div');
  el.className = 'share-toast';
  el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(() => { el.classList.add('visible'); });
  setTimeout(() => {
    el.classList.remove('visible');
    setTimeout(() => el.remove(), 300);
  }, 2500);
}

function loadShareFromHash() {
  const hash = location.hash;
  if (!hash.startsWith('#share=')) return false;
  try {
    const encoded = hash.slice(7);
    const data = JSON.parse(decodeURIComponent(escape(atob(encoded))));
    const dept = DEPTS.find(d => d.id === data.d);
    if (!dept) return false;
    // Write shared data into localStorage
    Object.entries(data.cr || {}).forEach(([key, val]) => {
      const [secId, itemId] = key.split('__');
      localStorage.setItem(storageKey(data.d, secId, itemId), val);
    });
    if (data.c && dept.courseSelect) {
      localStorage.setItem(dept.courseSelect.storageKey, data.c);
    }
    renderDetail(data.d, true);
    history.replaceState(null, '', location.pathname);
    return true;
  } catch (e) {
    return false;
  }
}

// ── WebStation Import ──
function parseWebStationText(text) {
  const lines = text.split(/\r?\n/).map(l => l.trimEnd());
  const courses = [];
  let passCol = -1, creditsCol = -1, catCol = -1, bigCatCol = -1;
  let headerFound = false;

  for (const line of lines) {
    const cols = line.split('\t');
    if (!headerFound) {
      const clean = cols.map(c => c.replace(/\s/g, ''));
      const pi = clean.findIndex(c => c === '合否');
      if (pi !== -1) {
        passCol    = pi;
        creditsCol = clean.findIndex(c => c === '単位数');
        catCol     = clean.findIndex(c => c.includes('中区分'));
        bigCatCol  = clean.findIndex(c => c.includes('大区分'));
        headerFound = true;
      }
      continue;
    }
    if (cols.length < 3) continue;
    const pass = (cols[passCol] || '').trim();
    if (pass.trim() !== '合') continue;
    const credits = parseFloat(cols[creditsCol]);
    if (isNaN(credits) || credits <= 0) continue;
    const cat    = catCol    >= 0 ? (cols[catCol]    || '').trim() : '';
    const bigCat = bigCatCol >= 0 ? (cols[bigCatCol] || '').trim() : '';
    courses.push({ cat, bigCat, credits });
  }
  return courses;
}

const KYOYO_WS_MAP = {
  fys:  ['初年次ゼミナール'],
  eigo: ['外国語科目'],
  hum:  ['人文の分野'],
  soc:  ['社会の分野'],
  nat:  ['自然の分野'],
  jink: ['人間形成の分野'],
  civ:  ['現代社会と市民'],
};

function applyWebStationImport(deptId, courses) {
  const dept = DEPTS.find(d => d.id === deptId);
  if (!dept) return 0;
  let matched = 0;

  for (const sec of dept.sections) {
    if (sec.id !== 'kyoyo') continue;
    for (const item of sec.items) {
      const wsCats = KYOYO_WS_MAP[item.id];
      if (!wsCats) continue;
      const hits = courses.filter(c =>
        wsCats.some(wc => c.cat.replace(/\s/g, '').includes(wc.replace(/\s/g, '')))
      );
      if (hits.length === 0) continue;
      const credits = hits.reduce((s, c) => s + c.credits, 0);
      saveCredit(deptId, sec.id, item.id, credits);
      matched += hits.length;
    }
  }
  return matched;
}

function normalizeWsText(text) {
  return text
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/　/g, ' ')
    .replace(/\r\n/g, '\n').replace(/\r/g, '\n')
    .split('\n').map(l => l.trimEnd()).join('\n');
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function renderWsPreview(text) {
  const el = document.getElementById('ws-preview');
  if (!el) return;
  if (!text.trim()) { el.innerHTML = ''; return; }

  const lines = text.split('\n').filter(l => l.trim());
  let passCol = -1, creditsCol = -1, catCol = -1, bigCatCol = -1, nameCol = -1, headerIdx = -1;

  for (let i = 0; i < lines.length; i++) {
    const cols = lines[i].split('\t');
    const clean = cols.map(c => c.replace(/\s/g, ''));
    const pi = clean.findIndex(c => c === '合否');
    if (pi !== -1) {
      passCol    = pi;
      creditsCol = clean.findIndex(c => c === '単位数');
      catCol     = clean.findIndex(c => c.includes('中区分'));
      bigCatCol  = clean.findIndex(c => c.includes('大区分'));
      nameCol    = clean.findIndex(c => c === '開講科目');
      if (nameCol === -1) nameCol = clean.findIndex((c,idx) => idx !== bigCatCol && idx !== catCol && c.includes('科目'));
      headerIdx  = i;
      break;
    }
  }

  if (headerIdx === -1) {
    el.innerHTML = '<div class="ws-preview-warn">⚠ 見出し行（「合否」の列がある行）が見つかりません。見出し行の先頭からコピーし直してください。</div>';
    return;
  }

  const rows = [];
  for (const line of lines.slice(headerIdx + 1)) {
    const cols = line.split('\t');
    if (cols.length < 3) continue;
    const pass    = (cols[passCol]    || '').trim();
    const credits = parseFloat(cols[creditsCol >= 0 ? creditsCol : 0]);
    const cat     = catCol    >= 0 ? (cols[catCol]    || '').trim() : '';
    const bigCat  = bigCatCol >= 0 ? (cols[bigCatCol] || '').trim() : '';
    const name    = nameCol   >= 0 ? (cols[nameCol]   || '').trim() : '';
    rows.push({ pass, credits, cat, bigCat, name });
  }

  if (rows.length === 0) {
    el.innerHTML = '<div class="ws-preview-warn">データ行が見つかりません。</div>';
    return;
  }

  wsReferenceRows = rows;
  syncRefBtn();
  const passRows = rows.filter(r => r.pass.trim() === '合' && !isNaN(r.credits) && r.credits > 0);
  const totalCredits = passRows.reduce((s, r) => s + r.credits, 0);

  let html = `<div class="ws-preview-stat">認識: ${rows.length}行　<span class="ws-stat-ok">✓ 合格 ${passRows.length}科目 / ${totalCredits}単位</span></div>`;
  html += '<div class="ws-preview-wrap"><table class="ws-preview-table"><thead><tr><th>大区分</th><th>中区分</th><th>科目名</th><th>単位</th><th>合否</th></tr></thead><tbody>';

  for (const r of rows) {
    const ok = r.pass.trim() === '合' && !isNaN(r.credits) && r.credits > 0;
    html += `<tr class="${ok ? 'ws-row-pass' : 'ws-row-fail'}">
      <td>${escHtml(r.bigCat)}</td><td>${escHtml(r.cat)}</td><td>${escHtml(r.name)}</td>
      <td>${isNaN(r.credits) ? '–' : r.credits}</td><td>${ok ? '✓ 合' : escHtml(r.pass) || '–'}</td>
    </tr>`;
  }

  html += '</tbody></table></div>';
  el.innerHTML = html;
}

function importFromPaste() {
  const area = document.getElementById('ws-paste-area');
  const text = area ? normalizeWsText(area.value) : '';
  const courses = parseWebStationText(text);
  if (courses.length === 0) {
    alert('WebStationの「単位修得状況照会」ページで、表の見出し行（「科目大区分」「合否」などの行）から最後の行末まで選択してコピーしてください。');
    return;
  }
  const deptSelect = document.getElementById('ws-dept-select');
  const targetDeptId = deptSelect ? deptSelect.value : currentDeptId;
  if (!targetDeptId) {
    alert('学科を選択してください。');
    return;
  }
  const count = applyWebStationImport(targetDeptId, courses);
  closeWsGuide();
  if (count === 0) {
    alert('共通教養科目の修得済み科目が見つかりませんでした。\n見出し行から最後の行末まで選択してコピーしてください。');
    return;
  }
  renderDetail(targetDeptId, false);
  showToast(`共通教養${count}科目の単位を取り込みました`);
}

function showWsGuide() {
  if (document.getElementById('ws-guide-overlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'ws-guide-overlay';
  overlay.className = 'ws-guide-overlay';
  overlay.addEventListener('click', e => { if (e.target === overlay) closeWsGuide(); });
  const deptPickerHtml = currentDeptId ? '' : `<select id="ws-dept-select" class="ws-dept-select">
    <option value="">— 学科を選択してください —</option>
    ${DEPTS.map(d => `<option value="${d.id}">${d.faculty}　${d.name}</option>`).join('')}
  </select>`;

  overlay.innerHTML = `<div class="ws-guide-modal">
    <div class="ws-guide-header">
      <span class="ws-guide-title">WebStation から自動取込</span>
      <button class="ws-guide-close" onclick="closeWsGuide()">✕</button>
    </div>
    <div class="ws-guide-body">
      <div class="ws-step">
        <div class="ws-step-num">1</div>
        <div class="ws-step-content">
          <div class="ws-step-title">WebStationで「単位修得状況照会」を開く</div>
          <div class="ws-step-desc">教務/授業関連 → 成績 → 単位修得状況照会</div>
          <a href="https://www.kanagawa-u.ac.jp/webstation/" target="_blank" rel="noopener" class="ws-link-btn">WebStation を開く →</a>
        </div>
      </div>
      <div class="ws-step">
        <div class="ws-step-num">2</div>
        <div class="ws-step-content">
          <div class="ws-step-title">表の<strong>見出し行</strong>から最後の行末までを選択してコピー</div>
          <div class="ws-step-desc">Ctrl+A は不可。<strong>見出し行（「科目大区分」「合否」などの行）の先頭から、最後の行の末尾まで</strong>をドラッグで選択してコピー（Ctrl+C）してください。</div>
          <div class="ws-copy-example">
            <div class="ws-copy-example-label">▼ コピー開始（見出し行の先頭）</div>
            <div class="ws-copy-table-wrap">
              <table class="ws-copy-table">
                <tr><th>No.</th><th>科目大区分</th><th>科目中区分</th><th>開講科目</th><th>単位数</th><th>…</th><th>合否</th></tr>
                <tr><td>1</td><td>共通教養科目…</td><td>初年次ゼミ…</td><td>ＦＹＳ</td><td>2.0</td><td>…</td><td>合</td></tr>
                <tr><td>2</td><td>共通教養科目…</td><td>外国語科目</td><td>英語I（Ｌ）</td><td>1.0</td><td>…</td><td>合</td></tr>
                <tr class="ws-mid-row"><td colspan="7">︙（中略）</td></tr>
                <tr><td>N</td><td>専攻科目</td><td>…</td><td>…</td><td>2.0</td><td>…</td><td>合</td></tr>
              </table>
            </div>
            <div class="ws-copy-example-label-end">▲ コピー終了（最後の行末）</div>
          </div>
          <div class="ws-hint-ok">※ 専攻科目は自動取込されません。手動で入力してください。</div>
        </div>
      </div>
      <div class="ws-step">
        <div class="ws-step-num">3</div>
        <div class="ws-step-content">
          <div class="ws-step-title">下の欄に貼り付ける — 自動でプレビュー表示されます</div>
          <textarea id="ws-paste-area" class="ws-paste-area" placeholder="ここにペーストしてください（Ctrl+V）" rows="3"></textarea>
          <div id="ws-preview" class="ws-preview"></div>
        </div>
      </div>
    </div>
    <div class="ws-guide-footer">
      ${deptPickerHtml}
      <button class="ws-import-btn" onclick="importFromPaste()">📥 取込</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  const pasteArea = document.getElementById('ws-paste-area');
  pasteArea.addEventListener('input', () => renderWsPreview(normalizeWsText(pasteArea.value)));
}

function closeWsGuide() {
  const el = document.getElementById('ws-guide-overlay');
  if (el) el.remove();
}

function syncRefBtn() {
  let btn = document.getElementById('ws-ref-btn');
  if (!wsReferenceRows || !currentDeptId) {
    if (btn) btn.remove();
    const panel = document.getElementById('ws-ref-panel');
    if (panel) panel.remove();
    return;
  }
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'ws-ref-btn';
    btn.className = 'ws-ref-toggle';
    btn.addEventListener('click', toggleWsRef);
    document.body.appendChild(btn);
  }
  const passCount = wsReferenceRows.filter(r => r.pass.trim() === '合' && !isNaN(r.credits) && r.credits > 0).length;
  btn.textContent = `📋 成績表 (${passCount}科目)`;
}

function toggleWsRef() {
  const panel = document.getElementById('ws-ref-panel');
  if (panel) { panel.remove(); return; }

  const groups = {};
  for (const r of wsReferenceRows) {
    const key = r.bigCat || '区分不明';
    (groups[key] = groups[key] || []).push(r);
  }

  let body = '';
  for (const [bigCat, rows] of Object.entries(groups)) {
    body += `<div class="ws-ref-group">
      <div class="ws-ref-group-label">${escHtml(bigCat)}</div>
      <table class="ws-ref-table"><tbody>`;
    for (const r of rows) {
      const ok = r.pass.trim() === '合' && !isNaN(r.credits) && r.credits > 0;
      body += `<tr class="${ok ? 'ws-row-pass' : 'ws-row-fail'}">
        <td class="ws-ref-cat">${escHtml(r.cat)}</td>
        <td class="ws-ref-name">${escHtml(r.name)}</td>
        <td class="ws-ref-cr">${isNaN(r.credits) ? '–' : r.credits + '単位'}</td>
        <td class="ws-ref-pass">${ok ? '✓ 合' : (escHtml(r.pass) || '–')}</td>
      </tr>`;
    }
    body += '</tbody></table></div>';
  }

  const el = document.createElement('div');
  el.id = 'ws-ref-panel';
  el.className = 'ws-ref-panel';
  el.innerHTML = `
    <div class="ws-ref-header">
      <span>📋 WebStation 成績表</span>
      <button class="ws-ref-close" onclick="document.getElementById('ws-ref-panel').remove()">✕</button>
    </div>
    <div class="ws-ref-body">${body}</div>`;
  document.body.appendChild(el);
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
  if (!loadShareFromHash()) renderSelect();
});
