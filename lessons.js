/*
  Content is kept separate from the app so additional units are easy to add.
  Language-learning content is a prototype and should be reviewed by fluent
  Standard Albanian and Kosovo/Gheg speakers before wider educational use.
*/
export const LESSONS = [
  {
    id: 'greetings-1', short: 'Hello & goodbye', title: 'Tung! Hello & goodbye', unit: 'Përshëndetjet', emoji: '👋', kind: 'lesson',
    desc: 'Say hello and goodbye in two everyday styles.',
    cards: [
      { al: 'Përshëndetje', en: 'Hello / Greetings', variety: 'Standard', note: 'A common standard greeting.' },
      { al: 'Tung', en: 'Hi / Bye', variety: 'Kosovo / Gheg', note: 'A friendly, informal greeting often heard in Kosovo.' },
      { al: 'Mirupafshim', en: 'Goodbye', variety: 'Standard / Both', note: 'A polite way to say goodbye.' }
    ],
    questions: [
      { type:'choice', prompt:'Which is a standard Albanian greeting?', options:['Përshëndetje','Faleminderit','Familja'], answer:'Përshëndetje', note:'Përshëndetje means hello or greetings.' },
      { type:'choice', prompt:'What does “Tung” commonly mean in Kosovo?', options:['Hi or bye','Good morning only','Thank you'], answer:'Hi or bye', note:'Tung is used informally as a greeting or farewell.' },
      { type:'choice', prompt:'You are leaving a friend. Which word means “goodbye”?', options:['Mirupafshim','Numrat','Jam mirë'], answer:'Mirupafshim', note:'Mirupafshim means goodbye.' },
      { type:'choice', prompt:'Which greeting is associated with everyday Kosovo speech?', options:['Tung','Tre','Mami'], answer:'Tung', note:'Tung is a common informal form in Kosovo.' },
      { type:'choice', prompt:'What is the meaning of “Përshëndetje”?', options:['Hello','Please','One'], answer:'Hello', note:'You have learned a useful first greeting!' },
      { type:'listen', audioWord:'Përshëndetje', variety:'Standard / Shared', prompt:'Listen to the Albanian greeting. What does it mean?', fallbackPrompt:'What does “Përshëndetje” mean?', options:['Hello','Goodbye','Please'], answer:'Hello', note:'Përshëndetje means hello or greetings.' }
    ]
  },
  {
    id: 'greetings-2', short: 'How are you?', title: 'Si je? How are you?', unit: 'Përshëndetjet', emoji: '💬', kind: 'lesson',
    desc: 'Ask how someone feels and reply.',
    cards: [
      { al: 'Si je?', en: 'How are you?', variety: 'Standard', note: 'A standard informal question to one person.' },
      { al: 'Qysh je?', en: 'How are you?', variety: 'Kosovo / Gheg', note: 'A widely used conversational Kosovo expression.' },
      { al: 'Jam mirë', en: "I'm well / I'm fine", variety: 'Standard / Both', note: 'A simple, positive reply.' }
    ],
    questions: [
      { type:'choice', prompt:'What does “Si je?” mean?', options:['How are you?','Where is it?','What is your name?'], answer:'How are you?', note:'Si je? is a standard way to ask how someone is.' },
      { type:'choice', prompt:'Which is a common Kosovo/Gheg version of “How are you?”', options:['Qysh je?','Natën e mirë','Faleminderit'], answer:'Qysh je?', note:'Qysh je? is a familiar conversational form in Kosovo.' },
      { type:'arrange', prompt:'Put the words in order to say “I am fine”.', tokens:['mirë','Jam'], answer:'Jam mirë', note:'Jam mirë means I am well / I am fine.' },
      { type:'choice', prompt:'Someone asks “Qysh je?” What are they asking?', options:['How are you?','Are you hungry?','Where are you going?'], answer:'How are you?', note:'The question has the same meaning as standard Si je?' },
      { type:'choice', prompt:'Which phrase is a good reply to “Si je?”', options:['Jam mirë','Mirupafshim','Përshëndetje'], answer:'Jam mirë', note:'Jam mirë: I am fine.' },
      { type:'listen', audioWord:'Si je?', variety:'Standard / Shared', prompt:'Listen to the question. What does it mean?', fallbackPrompt:'What does “Si je?” mean?', options:['How are you?','Where are you?','Thank you'], answer:'How are you?', note:'Si je? asks how someone is doing.' },
      { type:'listen', audioWord:'Qysh je?', variety:'Kosovo/Gheg', prompt:'Listen to the Kosovo expression. What does it mean?', fallbackPrompt:'What does “Qysh je?” mean?', options:['Where are you?','How are you?','Please'], answer:'How are you?', note:'Qysh je? is common conversational Kosovo Albanian.' }
    ]
  },
  {
    id: 'greetings-3', short: 'Kind words', title: 'Fjalë të mira: Kind words', unit: 'Përshëndetjet', emoji: '💛', kind: 'lesson',
    desc: 'Use thank you, please and friendly replies.',
    cards: [
      { al: 'Faleminderit', en: 'Thank you', variety: 'Standard / Both', note: 'Useful across Albanian-speaking communities.' },
      { al: 'Të lutem', en: 'Please', variety: 'Standard / Both', note: 'A polite expression when requesting something.' },
      { al: 'S’ka përse', en: "You're welcome", variety: 'Standard', note: 'A common reply when someone thanks you.' }
    ],
    questions: [
      { type:'choice', prompt:'How do you say “thank you”?', options:['Faleminderit','Mirupafshim','Si je?'], answer:'Faleminderit', note:'Faleminderit means thank you.' },
      { type:'choice', prompt:'What does “Të lutem” mean?', options:['Please','Goodbye','Hello'], answer:'Please', note:'Të lutem is a useful polite expression.' },
      { type:'choice', prompt:'What does “S’ka përse” mean?', options:["You're welcome",'I am tired','Good morning'], answer:"You're welcome", note:'S’ka përse is one way to answer a thank you.' },
      { type:'arrange', prompt:'Arrange the words to say “please”.', tokens:['lutem','Të'], answer:'Të lutem', note:'Të lutem means please.' },
      { type:'choice', prompt:'Someone helps you. What could you say?', options:['Faleminderit','Numrat','Qysh je?'], answer:'Faleminderit', note:'A little kindness goes a long way.' }
    ]
  },
  {
    id: 'greetings-review', short: 'Unit challenge', title: 'Greetings challenge', unit: 'Përshëndetjet', emoji: '🏆', kind: 'challenge',
    desc: 'Put your new words together and earn your first badge.',
    cards: [
      { al: 'Përshëndetje · Tung', en: 'Hello · Hi', variety: 'Both forms', note: 'Two useful ways to greet people.' },
      { al: 'Si je? · Qysh je?', en: 'How are you?', variety: 'Standard · Kosovo/Gheg', note: 'Both ask how someone is doing.' },
      { al: 'Faleminderit', en: 'Thank you', variety: 'Standard / Both', note: 'Your everyday polite phrase.' }
    ],
    questions: [
      { type:'choice', prompt:'Which phrase is standard Albanian for “How are you?”', options:['Si je?','Faleminderit','Mirupafshim'], answer:'Si je?', note:'Si je? is the standard form.' },
      { type:'choice', prompt:'Which phrase is common in conversational Kosovo Albanian?', options:['Qysh je?','Të lutem','Jam mirë'], answer:'Qysh je?', note:'Qysh je? asks how someone is.' },
      { type:'choice', prompt:'What does “Mirupafshim” mean?', options:['Goodbye','Please','Thank you'], answer:'Goodbye', note:'Mirupafshim means goodbye.' },
      { type:'arrange', prompt:'Create the reply “I am fine”.', tokens:['mirë','Jam'], answer:'Jam mirë', note:'Well done: Jam mirë.' },
      { type:'choice', prompt:'Choose the word for “thank you”.', options:['Faleminderit','Tung','Përshëndetje'], answer:'Faleminderit', note:'A phrase to use every day!' },
      { type:'listen', audioWord:'Faleminderit', variety:'Standard / Shared', prompt:'Listen to this phrase. What does it mean?', fallbackPrompt:'What does “Faleminderit” mean?', options:['Hello','Thank you','Goodbye'], answer:'Thank you', note:'Faleminderit means thank you.' },
      { type:'choice', prompt:'Which phrase means “please”?', options:['Të lutem','Si je?','Mirupafshim'], answer:'Të lutem', note:'Të lutem means please.' },
      { type:'choice', prompt:'Which informal word can mean both “hi” and “bye” in Kosovo?', options:['Tung','Jam','Mirë'], answer:'Tung', note:'Tung can be used for hello or goodbye.' }
    ]
  },
  {
    id:'family-1', short:'Family pictures', title:'Familja: Family pictures', unit:'Familja', emoji:'👨‍👩‍👧', kind:'lesson',
    desc:'Meet familiar family words with picture-matching practice.',
    cards:[
      {al:'Nëna',en:'Mother',variety:'Standard',note:'A standard Albanian word for mother. Family usage may also include mami.'},
      {al:'Baba',en:'Dad / Father',variety:'Common Kosovo/Gheg',note:'A familiar everyday expression for dad in Kosovo.'},
      {al:'Motra',en:'Sister',variety:'Standard / Both',note:'A word used to refer to your sister.'}
    ],
    questions:[
      {type:'picture',prompt:'Which picture best represents “nëna” (mother)?',options:['👩','🐈','🚗'],labels:['Mother','Cat','Car'],answer:'👩',note:'Nëna means mother.'},
      {type:'choice',prompt:'What does “baba” commonly mean in Kosovo Albanian?',options:['Dad','Sister','Grandma'],answer:'Dad',note:'Baba is a familiar word for dad.'},
      {type:'picture',prompt:'Choose a picture representing a sister.',options:['🚲','👧','🍎'],labels:['Bicycle','Girl','Apple'],answer:'👧',note:'Motra means sister. The picture is a visual clue, not a definition of family relationships.'},
      {type:'choice',prompt:'What does “motra” mean?',options:['Sister','Brother','Mother'],answer:'Sister',note:'Motra is Albanian for sister.'},
      {type:'arrange',prompt:'Put the words together to say “my sister”.',tokens:['ime','Motra'],answer:'Motra ime',note:'Motra ime means my sister.'}
    ]

  },
  {
    id:'family-2',short:'More family words',title:'Familja: Meet the family',unit:'Familja',emoji:'🏡',kind:'lesson',
    desc:'Learn more Albanian family words. New vocabulary is a draft for fluent-speaker review.',
    cards:[
      {al:'Babai',en:'Father / dad',variety:'Standard (review pending)',note:'Babai is a common form for father.'},
      {al:'Vëllai',en:'Brother',variety:'Standard (review pending)',note:'Vëllai refers to a brother.'},
      {al:'Gjyshja',en:'Grandmother',variety:'Standard (review pending)',note:'A family word for grandmother.'},
      {al:'Gjyshi',en:'Grandfather',variety:'Standard (review pending)',note:'A family word for grandfather.'},
      {al:'Familja',en:'Family',variety:'Standard (review pending)',note:'The word for family.'},
      {al:'Mami',en:'Mum / mummy',variety:'Everyday speech (review pending)',note:'An affectionate everyday word for mother.'}
    ],
    questions:[
      {type:'choice',prompt:'What does “Vëllai” mean?',options:['Brother','Sister','Father'],answer:'Brother',note:'Vëllai means brother.'},
      {type:'choice',prompt:'Which word means “grandmother”?',options:['Gjyshja','Gjyshi','Babai'],answer:'Gjyshja',note:'Gjyshja means grandmother.'},
      {type:'choice',prompt:'What does “Gjyshi” mean?',options:['Grandfather','Brother','Mother'],answer:'Grandfather',note:'Gjyshi means grandfather.'},
      {type:'choice',prompt:'Choose the Albanian word for “family”.',options:['Familja','Motra','Mami'],answer:'Familja',note:'Familja means family.'},
      {type:'choice',prompt:'Which word can mean “father”?',options:['Babai','Gjyshja','Vëllai'],answer:'Babai',note:'Babai is a form for father.'},
      {type:'arrange',prompt:'Arrange the words to say “my father”.',tokens:['im','Babai'],answer:'Babai im',note:'Babai im means my father.'},
      {type:'choice',prompt:'Which familiar word might a child use for “mum”?',options:['Mami','Gjyshi','Vëllai'],answer:'Mami',note:'Mami is an everyday word for mum.'}
    ]

  }

  ,{
    id:'family-3',short:'People in my family',title:'Familja: Children and parents',unit:'Familja',emoji:'🧒',kind:'lesson',
    desc:'Meet four more useful words for parents and children. New wording is awaiting fluent-speaker review.',
    cards:[
      {al:'Prindërit',en:'Parents',variety:'Standard proposal · review pending',note:'This word refers to parents. Families can have many different shapes.'},
      {al:'Fëmija',en:'Child',variety:'Standard proposal · review pending',note:'A word for a child.'},
      {al:'Djali',en:'Boy / Son',variety:'Standard proposal · review pending',note:'Can mean a boy, or a son when discussing family.'},
      {al:'Vajza',en:'Girl / Daughter',variety:'Standard proposal · review pending',note:'Can mean a girl, or a daughter when discussing family.'}
    ],
    questions:[
      {type:'picture',prompt:'Which picture best shows “prindërit” (parents)?',options:['👨‍👩','👵','👶'],labels:['Two parents','A grandparent','A baby'],answer:'👨‍👩',note:'Prindërit refers to parents. This icon is only one possible family arrangement.'},
      {type:'choice',prompt:'What does “Fëmija” mean?',options:['Child','Father','Grandfather'],answer:'Child',note:'Fëmija means the child.'},
      {type:'choice',prompt:'In a family, what can “Djali” mean?',options:['Boy / Son','Girl / Daughter','Grandmother'],answer:'Boy / Son',note:'Djali can mean the boy or the son, depending on context.'},
      {type:'choice',prompt:'In a family, what can “Vajza” mean?',options:['Girl / Daughter','Boy / Son','Grandfather'],answer:'Girl / Daughter',note:'Vajza can mean the girl or the daughter, depending on context.'},
      {type:'arrange',prompt:'Put the words in order for “my son”.',tokens:['im','Djali'],answer:'Djali im',note:'Djali im means my son.'},
      {type:'picture',prompt:'Which picture best illustrates “fëmija” (child)?',options:['🧒','👴','🚙'],labels:['A child','An older adult','A car'],answer:'🧒',note:'Fëmija means the child.'},
      {type:'listen',audioWord:'Prindërit',variety:'Standard proposal · pending review',prompt:'Listen. What does this family word mean?',fallbackPrompt:'What does “Prindërit” mean?',options:['Parents','Children','Grandparents'],answer:'Parents',note:'Prindërit refers to parents.'},
      {type:'arrange',prompt:'Put the words in order for “my daughter”.',tokens:['ime','Vajza'],answer:'Vajza ime',note:'Vajza ime means my daughter.'},
      {type:'listen',audioWord:'Vajza',variety:'Standard proposal · pending review',prompt:'Listen. Which meaning matches?',fallbackPrompt:'What does “Vajza” mean in a family?',options:['Girl / Daughter','Boy / Son','Sister'],answer:'Girl / Daughter',note:'Vajza can mean girl or daughter.'}
    ]
  },
  {
    id:'family-review',short:'Family challenge',title:'Familja: Family challenge',unit:'Familja',emoji:'🌳',kind:'challenge',
    desc:'Bring together your family vocabulary with pictures, word building and listening where recordings are ready.',
    cards:[
      {al:'Nëna · Babai',en:'Mother · Father',variety:'Standard · review pending',note:'Different family words for people who care for us.'},
      {al:'Motra · Vëllai',en:'Sister · Brother',variety:'Shared / Standard proposal',note:'Two familiar words for siblings.'},
      {al:'Gjyshja · Gjyshi',en:'Grandmother · Grandfather',variety:'Standard proposal · review pending',note:'Grandparent words.'},
      {al:'Prindërit · Fëmija',en:'Parents · Child',variety:'Standard proposal · review pending',note:'Two useful words about families.'}
    ],
    questions:[
      {type:'choice',prompt:'What does “Nëna” mean?',options:['Mother','Sister','Grandmother'],answer:'Mother',note:'Nëna is a word for mother.'},
      {type:'picture',prompt:'Which picture shows a grandmother?',options:['👵','👧','👨'],labels:['Grandmother','Girl','Man'],answer:'👵',note:'Gjyshja means grandmother.'},
      {type:'choice',prompt:'What does “Vëllai” mean?',options:['Brother','Father','Son'],answer:'Brother',note:'Vëllai is a word for brother.'},
      {type:'choice',prompt:'What does “Gjyshi” mean?',options:['Grandfather','Grandmother','Brother'],answer:'Grandfather',note:'Gjyshi means grandfather.'},
      {type:'arrange',prompt:'Put the words together to say “my brother”.',tokens:['im','Vëllai'],answer:'Vëllai im',note:'Vëllai im means my brother.'},
      {type:'choice',prompt:'Which Albanian word means “parents”?',options:['Prindërit','Fëmija','Gjyshja'],answer:'Prindërit',note:'Prindërit refers to parents.'},
      {type:'choice',prompt:'Which word means “child”?',options:['Fëmija','Babai','Gjyshi'],answer:'Fëmija',note:'Fëmija means the child.'},
      {type:'listen',audioWord:'Djali',variety:'Standard proposal · pending review',prompt:'Listen to the word. What could it mean?',fallbackPrompt:'What can “Djali” mean in a family?',options:['Boy / Son','Girl / Daughter','Mother'],answer:'Boy / Son',note:'Djali can mean a boy or a son.'},
      {type:'listen',audioWord:'Gjyshja',variety:'Standard proposal · pending review',prompt:'Listen to this family word. What does it mean?',fallbackPrompt:'What does “Gjyshja” mean?',options:['Grandmother','Grandfather','Sister'],answer:'Grandmother',note:'Gjyshja means grandmother.'},
      {type:'choice',prompt:'What does “Familja” mean?',options:['Family','Friend','School'],answer:'Family',note:'Familja means family.'},
      {type:'picture',prompt:'Which picture best represents a girl or daughter?',options:['👧','👴','👨'],labels:['Girl','Older man','Man'],answer:'👧',note:'Vajza can refer to a girl or daughter.'},
      {type:'choice',prompt:'Which everyday word may a child use for their mum?',options:['Mami','Gjyshi','Vëllai'],answer:'Mami',note:'Mami is a familiar word for mum.'}
    ]
  }

];

export const BADGES = [
  { id:'first-steps', emoji:'🚀', name:'First Steps', description:'Finish your first lesson.' },
  { id:'curious-mind', emoji:'🧠', name:'Curious Mind', description:'Finish all three greetings lessons.' },
  { id:'greeting-hero', emoji:'🏆', name:'Greeting Hero', description:'Complete the greetings challenge.' },
  { id:'hundred-xp', emoji:'⭐', name:'100 XP Club', description:'Earn at least 100 XP.' },
  { id:'perfect-lesson', emoji:'💎', name:'Perfect Lesson', description:'Answer every question correctly in a lesson.' },
  { id:'three-day-streak', emoji:'🔥', name:'On a Roll', description:'Practise on three consecutive days.' },
  { id:'family-explorer', emoji:'🌳', name:'Family Explorer', description:'Finish the Family challenge.' }
];
