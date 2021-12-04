// @ts-ignore
import aposToLexForm from "apos-to-lex-form"
import { WordTokenizer, SentimentAnalyzer, PorterStemmer } from "natural"
// @ts-ignore
import SpellCorrector from "spelling-corrector";
import stopword from "stopword";

const tokenizer = new WordTokenizer();
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

const getSentiment = (str: String): -1 | 0 | 1 => {
    if (!str.trim()) {
        return 0;
    }
    const lexed = aposToLexForm(str).toLowerCase().replace(/[^a-zA-Z\s]+/g, "");

    const tokenized = tokenizer.tokenize(lexed);

    const fixedSpelling = tokenized.map((word) => spellCorrector.correct(word));

    const stopWordsRemoved = stopword.removeStopwords(fixedSpelling);

    console.log(stopWordsRemoved);

    return 0;
}

console.log(getSentiment("This is awesome!"));