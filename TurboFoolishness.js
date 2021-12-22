const vers = '1.0';
const auth = 'M.D. Walters';
const cl_icon = 'https://mwalters75.github.io/TurboFoolishness/img/extension.svg';
const cl_block = 'https://mwalters75.github.io/TurboFoolishness/img/block.svg';
class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',
      menuIconURI: cl_icon,
      blockIconURI: cl_block,
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
          opcode: 'rickroll',
          blockType: Scratch.BlockType.COMMAND,
          text: '(beta) rickroll me',
        },
      ]
    };
  }
version() {
    return vers;
  };
author() {
    return auth;
  };
supportededitors() {
    return 'TurboWarp E羊icques';
  };
rickroll() {
    return 'Never gonna give you up, never gonna let you down, never gonna leave you in the dust and dessert you';
  };
}
Scratch.extensions.register(new turboFoolishness());