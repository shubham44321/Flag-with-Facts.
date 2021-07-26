import React, { useState } from "react";
import "./styles.css";

var flagaDictionary = {
  "🇮🇳": {
    name: "India",
    fact: `The national flag of India was adopted in its present form during a meeting of the Constituent Assembly held on 22 July 1947, when it became the official flag of the Dominion of India.`
  },
  "🇬🇧": {
    name: "United Kingdom",
    fact: `The Union Flag also is known as Union Jack, is the national flag of the United Kingdom. It goes by this name because it is made up of symbols from three countries that are united under one Sovereign.These countries are England and Wales, Scotland and Northern Ireland. The flag has been an integral part of Britain’s history and tradition.`
  },
  "🇺🇸": {
    name: "United States",
    fact: `There have been 27 versions of the American Flag.From the 1777 original that had 13 stars and 13 stripes for the American colonies, there have been many changes and iterations of the flag. Each time a state was added to the union, a star was added. We, of course, now stand with 50 stars and 13 stripes.`
  },
  "🇱🇰": {
    name: "Srilanka",
    fact: `The Flag of Sri Lanka, also called the Lion Flag, consists of gold lion passant, holding a sword in its right fore paw, in front of a crimson background with four golden bo leaves in each corner. Around the background is a yellow border, and to its left are two vertical stripes of equal size in saffron and green, with the saffron stripe closest to the lion.`
  },
  "🇦🇷": {
    name: "Argentina",
    fact: `Argentina's flag is a light blue and white triband with a yellow "Sun of May" in the center. The flag is twice as wide as it is tall.This flag was adopted on February 12, 1812, four years before Argentina declared independence from Spain (1816). The "Sun of May" design was added to the flag in 1818.`
  },
  "🇧🇷": {
    name: "Brazil",
    fact: `The flag of Brazil is green with a large yellow diamond in the center. Inside the diamond is a blue circle (globe) with white stars of five different sizes and a white strip. In this white strip is the slogan written in green: Ordem e Progresso ('Order and Progress'). The Brazil flag is sometimes called Auriverde, Portuguese for '(of) Gold and Green'.`
  },
  "🇮🇹": {
    name: "Italy",
    fact: `The Italian flag is tricoloured with vertical stripes, it is Il Tricolore in Italian. The three colours on the flag are pale Green, White and Red. Green represents hope, White represents faith and Red represents charity.The three stripes on the Italian flag are all equal in size. When hoisting the flag, the green stripe is always placed nearest to the flag post.`
  },
  "🇯🇵": {
    name: "Japan",
    fact: `The flag of Japan shows a red sun (rising sun) in the middle of a white field. It is called "Nisshoki" (日章旗) formally in Japan. But Japanese people usually call it "Hinomaru" (日の丸) which means "circle of the sun". The Japanese navy uses the other flag; the sun has rays. This flag represents the heat of the sun. Its colours are red and white.`
  },
  "🇨🇦": {
    name: "Canada",
    fact: `The flag of Canada in the present form was adopted on 15 February 1965, replacing the British flag. Since 1996, February 15 has been observed annually as National Flag of Canada Day.The National Flag of Canada consists of two red rectangles on the both sides, a white square between them and an 11-pointed red maple leaf centred on the white square. The flag is twice as long as it is wide.`
  },
  "🇩🇪": {
    name: "Germany",
    fact: `The German flag is a symbolizes of unity, freedom and democracy. The design of the flag was first done in the 19th century. These colours Black, Red and Gold were only known in the Weimar Republic.`
  },
  "🇫🇷": {
    name: "France",
    fact: `The French flag is known as the “Le drapeau tricolore” as it has three equal vertical bands of blue, white, and red. 2. The white in the flag represents the Bourbon monarchy which ruled France from the late 16th Century AD until the French Revolution. It is also the colour of the Virgin Mary and Joan of Arc.`
  },
  "🇦🇪": {
    name: "UAE",
    fact: `United Arab Emirates,fact:"The flag of the United Arab Emirates contains the Pan-Arab colors red, green, white, and black. It was designed in 1971 by Abdullah Mohammed Al Maainah, who was 19 years old at that time, and was adopted on 2 December 1971. The main theme of the flag's four colors is the unity of Arab nations.`
  }
};

const flagArray = Object.keys(flagaDictionary);

export default function App() {
  const [message, setMessage] = useState("");
  const [fact, setFact] = useState("");
  function decodeEmoji(emoji) {
    var decodedMessage;
    var factMessage;
    if (emoji !== "") {
      if (flagaDictionary.hasOwnProperty(emoji)) {
        //emoji in emojiDictionary
        decodedMessage = flagaDictionary[emoji].name;
        factMessage = flagaDictionary[emoji].fact;
        console.log(decodedMessage);
      } else {
        decodedMessage =
          "Sorry,we dont have the emoji you looking for in our database.";
        factMessage = "";
      }
    } else {
      decodedMessage = "plese select or enter emoji";
      factMessage = "";
    }
    setMessage(decodedMessage);
    setFact(factMessage);
  }
  return (
    <div className="App">
      <h2>Vexillology : The study of Flags.</h2>
      <input onChange={(e) => decodeEmoji(e.target.value)} type="text" />
      <h1>{message}</h1>
      {fact === "" ? (
        ""
      ) : (
        <div className="fact-div">
          <h3>Fact</h3>
          <p className="fact">{fact}</p>
        </div>
      )}
      <h2>List of emojis we can interpret.</h2>
      {flagArray.map((emoji, index) => {
        return (
          <span
            key={index}
            onClick={() => decodeEmoji(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
