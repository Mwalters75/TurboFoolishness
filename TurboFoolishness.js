const version = '1.0';
const author = 'M.D. Walters';
class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',
      menuIconURI: 'https://mwalters75.github.io/TurboFoolishness/img/extension.svg',
      blockIconURI: 'https://mwalters75.github.io/TurboFoolishness/img/block.svg',
      docsURI: 'https://github.com/Mwalters75/TurboFoolishness#the-making-of-turbofoolishnessdocumentation',
      color1: '#9500ff',
      color2: '#000000',
      blocks: [
        {
          opcode: 'version',
          blockType: Scratch.BlockType.REPORTER,
          text: 'version',
        }, 	{
          opcode: 'author',
          blockType: Scratch.BlockType.REPORTER,
          text: 'author',
        },  {
          opcode: 'supportededitors',
          blockType: Scratch.BlockType.REPORTER,
          text: 'supported editors',
        },  {
          opcode: 'sing',
          blockType: Scratch.BlockType.REPORTER,
          text: 'sing',
        },  {
          opcode: 'eat',
          blockType: Scratch.BlockType.REPORTER,
          text: 'eat'
        },  {
          opcode: 'dummy-hat',
          blockType: Scratch.BlockType.HAT,
          text: 'dummy hat',
        },  {
          opcode: 'dummy-block',
          blockType: Scratch.BlockType.COMMAND,
          text: 'dummy block',
        },  {
          opcode: 'dummyreporter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'dummy reporter',
        },  {
          opcode: 'dummyboolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'dummy boolean'
        },  {
          opcode: 'dummy-conditional-one',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditional with one branch',
          branchCount: 1,
        },  {
          opcode: 'dummy-conditional-two',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditional with two branches',
          branchCount: 2,
        },  {
          opcode: 'dummy-conditional-three',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditional with three branches',
          branchCount: 3,
        },  {
          opcode: 'dummy-conditional-four',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditonal with four branches',
          branchCount: 4,
        },  {
          opcode: 'dummy-conditional-five',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditional with five branches',
          branchCount: 5,
        },  {
          opcode: 'fetch',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch [url]',
          "arguments": {
            "url": {
              "type": "string",
              "defaultValue": "https://mwalters75.github.io/TurboFoolishness/fetch",
            }
          }
        },  {
          opcode: 'equalto',
          blockType: Scratch.BlockType.COMMAND,
          text: 'comment: [comment]',
          "arguments": {
            "comment": {
              "type": "string",
              "defaultValue": "This is a comment",
            }
          }
        },  {
          opcode: 'transfer',
          blockType: Scratch.BlockType.COMMAND,
          text: 'transfer [data] to transfer reporter',
          "arguments": {
            "data": {
              "type": "string",
              "defaultValue": "foo",
            }
          }
        }, {
          opcode: 'transferedcontent',
          blockType: Scratch.BlockType.REPORTER,
          text: 'transfered content',
        },
      ]
    };
  }
version() {
    return version;
  };
author() {
    return author;
  };
supportededitors() {
    return 'TurboWarp E羊icques';
  };
sing() {
    return 'La, la, la!';
  };
eat() {
    return 'Num, num, crunch, crunch, chew, chew';
  };
dummyreporter() {
    return '';
  };
dummyboolean() {
    return '';
  };
fetch({url}) {
    return fetch(url).then(response => response.text())
  };
transfer({transfer}) {
    const transfer = transfer;
  };
transferedcontent() {
    return data;
  };
}
Scratch.extensions.register(new turboFoolishness());