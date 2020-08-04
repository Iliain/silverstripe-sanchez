const snippets = require('./snippets')
const init = require('./init')
const injection = require('./injection')
const theming = require('./theming')
const { match } = require('./utilities/strings')

module.exports = class {
  constructor (options) {
    this.data = init(options)
  }

  // Return all snippets with absolutely no filtering.
  get allSnippets () {
    return this.data.snippets
  }

  // Return all snippets only filtering out the composer and node package requirements.
  get snippets () {
    return snippets.filter(
      this.data.snippets,
      true,
      true,
      true,
      this.data.composerPackages,
      this.data.nodePackages
    )
  }

  // Return a list of snippets that match the given filters.
  snippets ({
    scope,
    prefix,
    language
  }) {
    return snippets.filter(
      this.data.snippets,
      scope,
      prefix,
      language,
      this.data.composerPackages,
      this.data.nodePackages
    )
  }

  getUseItemLoc ({ text, useItems }) {
    return injection.getUseItemLoc(
      text,
      useItems,
      this.data.useItems
    )
  }

  getDefinitionPath ({ root, type, definition }) {
    let paths = []
    switch (type) {
      case 'include':
        paths = theming.include([root])
        break;
      case 'ThemedCSS':
        paths = theming.themedcss([root])
        break;
      case 'ThemedJavascript':
        paths = theming.themedcss([root])
        break;
    }

    return paths.find(p => {
      return p.definition === definition
    }).path
  }
}
