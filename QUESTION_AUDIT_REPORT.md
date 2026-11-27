# Shqip Quest v0.3B.3.1 — Full Question Audit

Date: 27 November 2026

**Scope:** Eight authored activities (59 questions), the four-question extra listening practice, and Personal Review (which reuses authored questions).

**Result:** 857 automated assertions passed. All 59 authored questions passed the text-leak checks after six picture-question corrections.

## Activity summary

| Activity | Questions audited | Picture corrections | Listening questions |
|---|---:|---:|---:|
| `greetings-1` | 6 | 0 | 1 |
| `greetings-2` | 7 | 0 | 2 |
| `greetings-3` | 5 | 0 | 0 |
| `greetings-review` | 8 | 0 | 1 |
| `family-1` | 5 | 2 | 0 |
| `family-2` | 7 | 0 | 0 |
| `family-3` | 9 | 2 | 2 |
| `family-review` | 12 | 2 | 2 |

## What was corrected

All six picture prompts now show the Albanian term without an English translation in the question. Picture choices show **Picture A**, **Picture B** and **Picture C** instead of relationship labels such as “Grandmother” or “Mother”. Alternative-text descriptions are visual rather than relationship-specific.

| Activity | Question | New prompt | Correct illustration description (not displayed as a caption) |
|---|---:|---|---|
| `family-1` | 1 | Which picture best illustrates “Nëna”? | Adult woman |
| `family-1` | 3 | Which picture best illustrates “Motra”? | Young girl |
| `family-3` | 1 | Which picture best illustrates “Prindërit”? | Two adults |
| `family-3` | 6 | Which picture best illustrates “Fëmija”? | Young person |
| `family-review` | 2 | Which picture best illustrates “Gjyshja”? | Older woman |
| `family-review` | 11 | Which picture best illustrates “Vajza”? | Young person with long hair |

## Per-question audit (all 59)

“PASS” means the question and correct answer do not repeat literally in the prompt; required option/answer mappings are intact; answers are hidden until selected; listening fallbacks are safe; and picture questions use non-answer captions. It does not establish that each expression is linguistically correct; that remains subject to fluent-speaker review.

| Activity | Q | Type | Question shown before answering | Status |
|---|---:|---|---|---|
| `greetings-1` | 1 | choice | Which is a standard Albanian greeting? | PASS |
| `greetings-1` | 2 | choice | What does “Tung” commonly mean in Kosovo? | PASS |
| `greetings-1` | 3 | choice | You are leaving a friend. Which word means “goodbye”? | PASS |
| `greetings-1` | 4 | choice | Which greeting is associated with everyday Kosovo speech? | PASS |
| `greetings-1` | 5 | choice | What is the meaning of “Përshëndetje”? | PASS |
| `greetings-1` | 6 | listen | Listen to the Albanian greeting. What does it mean? | PASS |
| `greetings-2` | 1 | choice | What does “Si je?” mean? | PASS |
| `greetings-2` | 2 | choice | Which is a common Kosovo/Gheg version of “How are you?” | PASS |
| `greetings-2` | 3 | arrange | Put the words in order to say “I am fine”. | PASS |
| `greetings-2` | 4 | choice | Someone asks “Qysh je?” What are they asking? | PASS |
| `greetings-2` | 5 | choice | Which phrase is a good reply to “Si je?” | PASS |
| `greetings-2` | 6 | listen | Listen to the question. What does it mean? | PASS |
| `greetings-2` | 7 | listen | Listen to the Kosovo expression. What does it mean? | PASS |
| `greetings-3` | 1 | choice | How do you say “thank you”? | PASS |
| `greetings-3` | 2 | choice | What does “Të lutem” mean? | PASS |
| `greetings-3` | 3 | choice | What does “S’ka përse” mean? | PASS |
| `greetings-3` | 4 | arrange | Arrange the words to say “please”. | PASS |
| `greetings-3` | 5 | choice | Someone helps you. What could you say? | PASS |
| `greetings-review` | 1 | choice | Which phrase is standard Albanian for “How are you?” | PASS |
| `greetings-review` | 2 | choice | Which phrase is common in conversational Kosovo Albanian? | PASS |
| `greetings-review` | 3 | choice | What does “Mirupafshim” mean? | PASS |
| `greetings-review` | 4 | arrange | Create the reply “I am fine”. | PASS |
| `greetings-review` | 5 | choice | Choose the word for “thank you”. | PASS |
| `greetings-review` | 6 | listen | Listen to this phrase. What does it mean? | PASS |
| `greetings-review` | 7 | choice | Which phrase means “please”? | PASS |
| `greetings-review` | 8 | choice | Which informal word can mean both “hi” and “bye” in Kosovo? | PASS |
| `family-1` | 1 | picture | Which picture best illustrates “Nëna”? | PASS |
| `family-1` | 2 | choice | What does “baba” commonly mean in Kosovo Albanian? | PASS |
| `family-1` | 3 | picture | Which picture best illustrates “Motra”? | PASS |
| `family-1` | 4 | choice | What does “motra” mean? | PASS |
| `family-1` | 5 | arrange | Put the words together to say “my sister”. | PASS |
| `family-2` | 1 | choice | What does “Vëllai” mean? | PASS |
| `family-2` | 2 | choice | Which word means “grandmother”? | PASS |
| `family-2` | 3 | choice | What does “Gjyshi” mean? | PASS |
| `family-2` | 4 | choice | Choose the Albanian word for “family”. | PASS |
| `family-2` | 5 | choice | Which word can mean “father”? | PASS |
| `family-2` | 6 | arrange | Arrange the words to say “my father”. | PASS |
| `family-2` | 7 | choice | Which familiar word might a child use for “mum”? | PASS |
| `family-3` | 1 | picture | Which picture best illustrates “Prindërit”? | PASS |
| `family-3` | 2 | choice | What does “Fëmija” mean? | PASS |
| `family-3` | 3 | choice | In a family, what can “Djali” mean? | PASS |
| `family-3` | 4 | choice | In a family, what can “Vajza” mean? | PASS |
| `family-3` | 5 | arrange | Put the words in order for “my son”. | PASS |
| `family-3` | 6 | picture | Which picture best illustrates “Fëmija”? | PASS |
| `family-3` | 7 | listen | Listen. What does this family word mean? | PASS |
| `family-3` | 8 | arrange | Put the words in order for “my daughter”. | PASS |
| `family-3` | 9 | listen | Listen. Which meaning matches? | PASS |
| `family-review` | 1 | choice | What does “Nëna” mean? | PASS |
| `family-review` | 2 | picture | Which picture best illustrates “Gjyshja”? | PASS |
| `family-review` | 3 | choice | What does “Vëllai” mean? | PASS |
| `family-review` | 4 | choice | What does “Gjyshi” mean? | PASS |
| `family-review` | 5 | arrange | Put the words together to say “my brother”. | PASS |
| `family-review` | 6 | choice | Which Albanian word means “parents”? | PASS |
| `family-review` | 7 | choice | Which word means “child”? | PASS |
| `family-review` | 8 | listen | Listen to the word. What could it mean? | PASS |
| `family-review` | 9 | listen | Listen to this family word. What does it mean? | PASS |
| `family-review` | 10 | choice | What does “Familja” mean? | PASS |
| `family-review` | 11 | picture | Which picture best illustrates “Vajza”? | PASS |
| `family-review` | 12 | choice | Which everyday word may a child use for their mum? | PASS |

## Additional checks

- The extra four-question listening activity displays its audio prompt before revealing the phrase; all four answer buttons were checked.
- Personal Review dynamically uses questions from completed activities, so the six corrected picture prompts and neutral answer labels also apply there.
- Question order and correct answer values were not changed. Correct picture emojis still map to the same original answer.
- Choice randomisation is calculated once per attempt and stays unchanged during feedback, including picture choices.
- Learner database IDs, private audio database ID and existing mastery/completion indexes are unchanged.
- Four bundled Llafazani files, icons, manifest and stylesheet are bit-for-bit unchanged.
- The preview cache version is incremented to `0.3b.3.1`; production is not modified.

## Limits

- Static and simulated JavaScript tests passed. Full browser automation could not load localhost due to `ERR_BLOCKED_BY_ADMINISTRATOR`; Android acceptance testing is therefore required.
- Picture cues are illustrative and cannot prove that an individual is a mother, father, grandmother or other family relation.
- The Albanian phrasing and regional variety metadata remain subject to the user’s fluent-speaker review.
