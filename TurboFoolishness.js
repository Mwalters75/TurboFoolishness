class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',
      docsURI: 'https://github.com/Mwalters75/TurboFoolishness#documentation',
      color1: '#9500ff',
      color2: '#9500ff',
      blocks: [
        {
          opcode: 'get',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get [url]',
          "arguments": {
            "url": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "https://reqbin.com/echo/get/json",
            }
          }
        },  {
          opcode: 'get_old',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get [url] with old fetcher',
          "arguments": {
            "url": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "https://reqbin.com/echo/get/json",
            }
          }
      },  '---',  {
          opcode: 'comment',
          blockType: Scratch.BlockType.COMMAND,
          text: 'comment: [comment]',
          "arguments": {
            "comment": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "foo",
            }
          }
        },  '---',  {
          opcode: 'join',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one][two][three]',
          "arguments": {
            "one": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "apple ",
            },
            "two": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "banana ",
            },
            "three": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "pineapple",
            }
          }
        },  '---',  {
          opcode: 'equaltotrue',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[boolean] returns true?',
          "arguments": {
            "boolean": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        }, {
          opcode: 'equaltofalse',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[boolean] returns false?',
          "arguments": {
            "boolean": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        },  {
          opcode: 'equaltonothing',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[boolean] returns nothing?',
          "arguments": {
            "boolean": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        },  '---',  {
          opcode: 'miliseconds',
          blockType: Scratch.BlockType.REPORTER,
          text: 'miliseconds',
        },  '---',  {
          opcode: 'ifthenelse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [if] then [text] else [else]',
          "arguments": {
            "text": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "foo",
            },
            "if": {
              "type": Scratch.ArgumentType.BOOLEAN,
            },
            "else": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "foobar",
            }
          }
        },  {
          opcode: 'ifthen',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [if] then [text]',
          "arguments": {
            "if": {
            "type": Scratch.ArgumentType.BOOLEAN,
            },
            "text": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "foo",
            }
          }
        },  '---',  {
        opcode: 'parseJSON',
        blockType: Scratch.BlockType.REPORTER,
        text: 'extract [PATH] of [JSON_STRING]',
        "arguments": {
          "PATH": {
            "type":Scratch.ArgumentType.STRING,
            "defaultValue":"foo"
          },
          "JSON_STRING": {
            "type":Scratch.ArgumentType.STRING,
            "defaultValue":'{ "foo": "foobar" }'
            }
          }
        },  '---',  {
          opcode: 'js',
          blockType: Scratch.BlockType.COMMAND,
          text: 'execute [js]',
          "arguments": {
            "js": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue":'"Fo" + "o" + "bar"',
            }
          }
        },  '---',  {
          opcode: 'true',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true',
        },  {
          opcode: 'false',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false',
        },  {
          opcode: 'stringtoboolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[string]',
          "arguments": {
            "string": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue":"true",
            }
          }
        },  '---',  {
          opcode: 'strict_equality',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is [sentance] EXACTLY [other_sentance]?',
          "arguments": {
            "sentance": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "Foo"
            },
            "other_sentance": {
              "type": Scratch.ArgumentType.STRING,
              "defaultValue": "Foobar"
            }
          }
        },
      ]
    }  
  }
get(args) {
    return fetch("https://api.allorigins.win/raw?url=" + args.url).then(response => response.text());
  };
get_old(args) {
    return fetch(args.url).then(response => response.text());
  };
join(args) {
    return args.one + args.two + args.three;
  };
equaltotrue(args) {
    if (args.boolean == true) {
      return true;
    } else {
      return false;
    }
  };
equaltofalse(args) {
    if (args.boolean == false) {
      return true;
    } else {
      return false;
    }
  };
equaltonothing(args) {
    if (args.boolean == '') {
      return true;
    } else {
      return false;
    }
  };
miliseconds() {
  const date = new Date();
  const miliseconds = date.getMilliseconds();
  return miliseconds;
  };
ifthenelse(args) {
  if (args.if) {
    return args.text;
  } else {
    return args.else;
  }
  };
ifthen(args) {
  if (args.if == true) {
    return args.text;
  }
  };
parseJSON(args) {
  try {
    const path = args.PATH.toString().split('/').map(prop => decodeURIComponent(prop));
    if (path[0] === '') path.splice(0, 1);
    if (path[path.length - 1] === '') path.splice(-1, 1);
    let json;
    try {
      json = JSON.parse(' ' + args.JSON_STRING);
    } catch (e) {
      return e.message;
    }
    path.forEach(prop => json = json[prop]);
    if (json === null) return 'null';
    else if (json === undefined) return '';
    else if (typeof json === 'object') return JSON.stringify(json);
    else return json.toString();
  } catch (err) {
    return '';
  }
  };
js(args) {
  const javascript = eval(args.js);
  return javascript;
  };
true() {
  return true;
  };
false() {
  return false;
  };
stringtoboolean(args) {
  return args.string.toString().toLowerCase();
  };
strict_equality(args) {
  return (args.sentance === args.other_sentance);
  };
}
Scratch.extensions.register(new turboFoolishness());
