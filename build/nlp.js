"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const apos_to_lex_form_1 = __importDefault(require("apos-to-lex-form"));
const natural_1 = require("natural");
// @ts-ignore
const spelling_corrector_1 = __importDefault(require("spelling-corrector"));
const stopword_1 = __importDefault(require("stopword"));
const tokenizer = new natural_1.WordTokenizer();
const spellCorrector = new spelling_corrector_1.default();
spellCorrector.loadDictionary();
const analyzer = new natural_1.SentimentAnalyzer("English", natural_1.PorterStemmer, "afinn");
const getSentiment = (str) => {
    if (!str.trim()) {
        return 0;
    }
    const lexed = (0, apos_to_lex_form_1.default)(str).toLowerCase().replace(/[^a-zA-Z\s]+/g, "");
    const tokenized = tokenizer.tokenize(lexed);
    const fixedSpelling = tokenized.map((word) => spellCorrector.correct(word));
    const stopWordsRemoved = stopword_1.default.removeStopwords(fixedSpelling);
    const analyzed = analyzer.getSentiment(stopWordsRemoved);
    if (analyzed >= 1)
        return 1;
    else if (analyzed === 0)
        return 0;
    else
        return -1;
};
exports.default = getSentiment;
