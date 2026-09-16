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
  const faculties = {};
  DEPTS.forEach(d => { (faculties[d.faculty] = faculties[d.faculty] || []).push(d); });

  let html = '<div class="select-view"><p class="select-intro">所属している学科を選んでください</p><div class="faculties">';

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

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
  if (!loadShareFromHash()) renderSelect();
});
