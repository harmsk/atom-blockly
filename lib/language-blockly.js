'use babel';

import LanguageBlocklyView from './language-blockly-view';
import { CompositeDisposable } from 'atom';

export default {

  languageBlocklyView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.languageBlocklyView = new LanguageBlocklyView(state.languageBlocklyViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.languageBlocklyView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-blockly:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.languageBlocklyView.destroy();
  },

  serialize() {
    return {
      languageBlocklyViewState: this.languageBlocklyView.serialize()
    };
  },

  toggle() {
    console.log('LanguageBlockly was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
