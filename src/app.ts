// @ts-ignore
import aposToLexForm from "apos-to-lex-for"
import { WordTokenizer } from "natural"

// @ts-ignore
import SpellCorrector from "spelling-corrector";

const tokenizer = new WordTokenizer();
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

function getSentiment(str: String): -1 | 0 | 1 {
    if (!str.trim()) {
        return 0;
    }
    const lexed = aposToLexForm(str).toLowerCase().replace(/[^a-zA-Z\s]+/g, "");

    const tokenized = tokenizer.tokenize(lexed);
}