/** imports */
import { authors } from "./utils/authors.js";
import { createHeader } from "./components/header/header.js";
import { createCard } from "./components/card/card.js";
/**
 * Cipher
 * https://en.wikipedia.org/wiki/Caesar_cipher
 */

/** Get root element */

const root = document.querySelector("#root");

/** Header */

const header = createHeader();

root.append(header);

/** Main: Author Cards */

authors.forEach((author) => {
  const card = createCard(author);
  root.append(card);
});
