(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},22:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(16),r=a.n(o),i=(a(22),a(2)),l=a(3),u=a(5),c=a(4),d=a(6),m=a(7),g=(a(23),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=this,t=document.getElementById("hangman-canvas");if(t){var a=t.getContext("2d");a.fillStyle="#d8a200",a.fillRect(0,0,500,250),a.strokeStyle="white",a.moveTo(125,105),a.lineTo(175,105),a.stroke(),a.moveTo(135,105),a.lineTo(135,40),a.stroke(),a.moveTo(125,45),a.lineTo(160,45),a.stroke(),a.moveTo(150,45),a.lineTo(150,65),a.stroke();return[void(e.props.remainingGuesses<1&&(a.moveTo(150,90),a.lineTo(158,97),a.stroke())),void(e.props.remainingGuesses<2&&(a.moveTo(150,90),a.lineTo(142,97),a.stroke())),void(e.props.remainingGuesses<3&&(a.moveTo(150,75),a.lineTo(158,82),a.stroke())),void(e.props.remainingGuesses<4&&(a.moveTo(150,75),a.lineTo(142,82),a.stroke())),void(e.props.remainingGuesses<5&&(a.moveTo(150,75),a.lineTo(150,90),a.stroke())),void(e.props.remainingGuesses<6&&(a.beginPath(),a.arc(150,70,5,0,2*Math.PI),a.stroke()))]}}},{key:"render",value:function(){return!0===this.props.showCanvas?s.a.createElement("canvas",{id:"hangman-canvas"}):s.a.createElement("canvas",{id:"empty-canvas"})}}]),t}(n.Component)),h=function(e){return s.a.createElement("span",{className:"letter-space white-text"},e.spaceValue)},p=function(e){if(e.wordToGuess.length>1){var t=e.wordToGuess,a=e.playerCorrectGuesses,n=0;return t.map(function(e){return n++,a.indexOf(e)>-1||" "===e?s.a.createElement(h,{spaceValue:e,key:n}):s.a.createElement(h,{spaceValue:"_",key:n})})}return s.a.createElement("p",{id:"render-spaces-enter-word-prompt",className:"white-text"},"Please choose a category or enter a word or phrase consisting of two or more letters")},v=function(e){return s.a.createElement("div",{id:"select-word-div",className:"row"},s.a.createElement("div",{id:"choose-category-div",className:"col-6"},s.a.createElement("span",{id:"choose-category-header",className:"select-word-subheader text yellow-box-shadow"},"Choose a category"),s.a.createElement("div",{id:"choose-category-buttons"},s.a.createElement("button",{onClick:function(t){return e.getDogs(t)},className:"category-button text black-border yellow-box-shadow"},"Random Dog Breed"),s.a.createElement("button",{onClick:function(t){return e.getCountry(t)},className:"category-button text black-border yellow-box-shadow"},"Random Country"),s.a.createElement("button",{onClick:function(t){return e.getPokemon(t)},className:"category-button text black-border yellow-box-shadow"},"Random Pokemon"))),s.a.createElement("div",{id:"enter-word-div",className:"col-6"},s.a.createElement("span",{id:"set-word-header",className:"select-word-subheader text black-border"},"Enter a word to guess using only letters"),s.a.createElement("div",{id:"enter-word-body"},s.a.createElement("input",{onChange:function(t){return e.changed(t)},id:"set-word-input",className:"white-text yellow-box-shadow"}),s.a.createElement("div",{className:"input-buttons-div"},s.a.createElement("button",{id:"set-word-done",className:"set-word-button hangman-input-button text black-border yellow-box-shadow",onClick:function(t){return e.setDoneButtonClicked(t)}},"Done")))))},y=function(e){return s.a.createElement("div",{id:"guess-div",className:"row black-border yellow-box-shadow"},s.a.createElement("span",{className:"text black-border yellow-box-shadow",id:"guess-letter-prompt"},"Type a letter to guess:"),s.a.createElement("div",{id:"guess-div-input"},s.a.createElement("input",{onChange:function(t){return e.changed(t)},id:"guess-letter-input",className:"white-text yellow-box-shadow"}),s.a.createElement("button",{id:"guess-letter-quit",className:"guess-letter-button hangman-input-button text black-border yellow-box-shadow",onClick:function(t){return e.guessQuitButtonClicked(t)}},"Quit")))},w=function(e){return e.toggleInput?s.a.createElement(y,{changed:function(t){return e.guessLetterChanged(t)},guessQuitButtonClicked:function(t){return e.guessQuitButtonClicked(t)}}):s.a.createElement(v,{changed:function(t){return e.setWordChanged(t)},setDoneButtonClicked:function(t){return e.setDoneButtonClicked(t)},setQuitButtonClicked:function(t){return e.quitButtonClicked(t)},getDogs:function(t){return e.getDogs(t)},getCountry:function(t){return e.getCountry(t)},getPokemon:function(t){return e.getPokemon(t)}})},f=function(e){return s.a.createElement("div",{id:"hangman-scoreboard",className:"row"},s.a.createElement("span",{id:"incorrect-guesses-display",className:"text col-6 black-border yellow-box-shadow"},"Incorrect guesses: ",e.playerIncorrectGuesses),s.a.createElement("span",{id:"remaining-guesses-display",className:"text col-6 black-border yellow-box-shadow"},"Remaining Guesses: ",e.remainingGuesses))},b=a(8),k=a.n(b),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={wordToGuess:[],playerCorrectGuesses:[],playerIncorrectGuesses:[],remainingGuesses:6,gameOn:!0,gameWon:!1,showCanvas:!0,toggleInput:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.checkProgress()}},{key:"playGame",value:function(){var e=this;return this.state.gameOn?s.a.createElement("div",{className:"hangman-overlay-div"},s.a.createElement("div",{id:"player-feedback-div"},s.a.createElement(f,{playerIncorrectGuesses:this.state.playerIncorrectGuesses,remainingGuesses:this.state.remainingGuesses}),s.a.createElement(g,{remainingGuesses:this.state.remainingGuesses,gameOn:this.state.gameOn,showCanvas:this.state.showCanvas})),s.a.createElement("div",{id:"display-guess-word"},s.a.createElement(p,{wordToGuess:this.state.wordToGuess,playerCorrectGuesses:this.state.playerCorrectGuesses})),s.a.createElement(w,{setWordChanged:function(t){return e.setGuessWord(t)},getDogs:function(t){return e.getDogBreed(t)},getCountry:function(t){return e.getCountryName(t)},getPokemon:function(t){return e.getPokemon(t)},setDoneButtonClicked:function(t){e.toggleInput(t),e.checkWordLength(t),e.setState({showCanvas:!0})},guessQuitButtonClicked:function(t){e.setState({gameOn:!1,showCanvas:!1})},toggleInput:this.state.toggleInput,guessLetterChanged:function(t){return e.guessLetter(t)}})):this.state.gameWon?s.a.createElement("div",{className:"hangman-overlay-div"},s.a.createElement("div",{id:"you-win-header",className:"row"},s.a.createElement("h1",{className:"col-12 white-text",id:"you-win-display"},"You win")),s.a.createElement("div",{id:"you-win-buttons",className:"row"},s.a.createElement("button",{onClick:function(t){return e.restartGame(t)},className:"text col-3 play-again-button black-border yellow-box-shadow",id:"you-win-play-again"},"Play Again"))):s.a.createElement("div",{className:"hangman-overlay-div",id:"game-over-screen"},s.a.createElement("div",{id:"game-over-header",className:"row"},s.a.createElement("h1",{id:"game-over-text",className:"col-12 text"},"Game Over")),s.a.createElement("div",{className:"row"},s.a.createElement("span",{id:"game-over-word-reveal",className:"col-12 white-text"},"The word was ",s.a.createElement("strong",null,this.state.wordToGuess))),s.a.createElement("div",{id:"game-over-button-div",className:"row"},s.a.createElement("button",{onClick:function(t){return e.restartGame(t)},id:"game-over-button",className:"col-3 text black-border"},"Play Again?")))}},{key:"toggleInput",value:function(e){var t=!this.state.toggleInput;this.state.toggleInput?this.restartGame():this.setState({toggleInput:t})}},{key:"getDogBreed",value:function(){var e=this;this.toggleInput(),k.a.get("https://dog.ceo/api/breeds/list/all").then(function(e){return e.data}).then(function(e){return e.message}).then(function(t){var a=Object.keys(t),n=a.length-1,s=a[Math.floor(Math.random()*n)].split(""),o=e.state.playerCorrectGuesses;e.fillSpecialChars(s,o),e.setState({wordToGuess:s})})}},{key:"getCountryName",value:function(){var e=this;this.toggleInput(),k.a.get("https://restcountries.eu/rest/v2/all").then(function(e){return e.data}).then(function(t){var a=t,n=a.length,s=a[Math.floor(Math.random()*n)],o=e.state.playerCorrectGuesses;s=s.name.toLowerCase().split(""),e.fillSpecialChars(s,o),e.setState({wordToGuess:s,playerCorrectGuesses:o})})}},{key:"getPokemon",value:function(){var e=this;this.toggleInput(),k.a.get("https://pokeapi.co/api/v2/pokemon-species/").then(function(e){return e.data}).then(function(e){return e.results}).then(function(t){var a=t,n=a.length,s=a[Math.floor(Math.random()*n)],o=e.state.playerCorrectGuesses;s=s.name.toLowerCase().split(""),e.fillSpecialChars(s,o),e.setState({wordToGuess:s,playerCorrectGuesses:o})})}},{key:"setGuessWord",value:function(e){var t=e.target.value.toString().toLowerCase().split("");console.log(e.target.value[t.length-1]);for(var a="abcdefghijklmnopqrstuvwxyz ".split(""),n=this.state.playerCorrectGuesses,s=0;s<t.length;s++)if(!a.includes(t[s]))return alert("Please enter letters only"),t.pop(),e.target.value=t.join(""),null;this.fillSpecialChars(t,n),t&&t.length>=1?this.setState({wordToGuess:t,playerCorrectGuesses:n}):alert("Please only enter letters")}},{key:"fillSpecialChars",value:function(e,t){var a=e.includes(" "),n=e.includes("("),s=e.includes(")"),o=e.includes("-"),r=e.includes("."),i=e.includes(","),l=e.includes("'");0===t.length&&a&&t.push(" "),n&&t.push("("),s&&t.push(")"),o&&t.push("-"),r&&t.push("."),i&&t.push(","),l&&t.push("'")}},{key:"checkWordLength",value:function(){1===this.state.wordToGuess.length&&this.setState({toggleInput:!1})}},{key:"guessLetter",value:function(e){var t=e.target.value.toString().toLowerCase(),a="abcdefghijklmnopqrstuvwxyz".split("").includes(t),n=this.state.wordToGuess,s=Object(m.a)(this.state.playerCorrectGuesses),o=Object(m.a)(this.state.playerIncorrectGuesses),r=this.state.remainingGuesses;if(a)if(" "===t)s.push(t);else if(-1===s.indexOf(t)&&n.indexOf(t)>-1){for(var i=0;i<n.length;i++)n[i]===t&&s.push(t);this.setState({playerCorrectGuesses:s})}else-1===o.indexOf(t)&&-1===s.indexOf(t)&&(r-=1,o.push(t),this.setState({playerIncorrectGuesses:o,remainingGuesses:r}));else alert("Please only enter letters");e.target.value=null}},{key:"checkProgress",value:function(){var e=this.state.remainingGuesses,t=this.state.gameWon,a=this.state.wordToGuess;a=Object(m.a)(new Set(a));var n=this.state.playerCorrectGuesses;n=Object(m.a)(new Set(n)),a.length===n.length&&a.length>1&&!1===t?(t=!0,this.setState({remainingGuesses:6,gameOn:!1,gameWon:t})):e<1&&this.setState({remainingGuesses:6,gameOn:!1})}},{key:"restartGame",value:function(e){var t=[];this.setState({wordToGuess:t,playerCorrectGuesses:t,playerIncorrectGuesses:t,gameOn:!0,gameWon:!1,toggleInput:!1,showCanvas:!0,remainingGuesses:6})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},this.playGame())}}]),t}(n.Component),G=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.964d8ac5.chunk.js.map