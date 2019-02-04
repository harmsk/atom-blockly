'use babel';

/* "activationCommands": {
  "atom-workspace": "language-blockly:toggle"
}, */

import React from 'react';
import ReactDOM from 'react-dom';

import BlocklyEditor from './blockly-editor';
import BlocklyEditorView from './blockly-editor-view';
import { CompositeDisposable } from 'atom';

export default {

  blocklyEditorView: null,
  // modalPanel: null,
  subscriptions: null,

  activate(state) {
    console.log("BLOCKLY!");
    this.blocklyEditorView = new BlocklyEditorView(state.blocklyEditorViewState);
    // this.modalPanel = atom.workspace.addModalPanel({
    //   item: this.blocklyEditorView.getElement(),
    //   visible: false
    // });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    // this.subscriptions.add(atom.commands.add('atom-workspace', {
    //   'language-blockly:toggle': () => this.toggle()
    // }));



    this.openerDisposable = atom.workspace.addOpener(openURI);
    atom.views.addViewProvider(BlocklyEditor,
      model => {
        let el = document.createElement('div');
        el.classList.add('blockly-wrapper');
        let viewComponent = ReactDOM.render(
          <BlocklyEditorView store={model} />,
          el);
        return el;
      }
    );


  },

  deactivate() {
    // this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.openerDisposable.dispose();
    this.blocklyEditorView.destroy();
  },

  serialize() {
    return {
      blocklyEditorViewState: this.blocklyEditorView.serialize()
    };
  },

  // toggle() {
  //   console.log('LanguageBlockly was toggled!');
  //   return (
  //     this.modalPanel.isVisible() ?
  //     this.modalPanel.hide() :
  //     this.modalPanel.show()
  //   );
  // }

};

function openURI(uriToOpen) {
  console.log("open URI");
  const extensions = ['.blockly'];
  let uriExtension = path.extname(uriToOpen).toLowerCase();
  if (extensions.find(extension => extension === uriExtension)) {
    console.log("Open now!");
    return new BlocklyEditor(uriToOpen);
  }
  console.log("no open");
}
