'use babel';

import NotebookEditorView from './blockly-editor-view';

export default class BlocklyEditor {

    constructor(uri) {
      console.log('NotebookEditor created for', uri);
      // this.loadNotebookFile(uri);
      // this.emitter = new Emitter();
      // this.subscriptions = new CompositeDisposable();
    }

    // addStateChangeListener(callback) {
    //   return this.emitter.on('state-changed', callback);
    // }
    //
    // _onChange = () => {
    //   this.emitter.emit('state-changed');
    // }
    //
    // getState() {
    //   return this.state;
    // }
    //
    // loadNotebookFile(uri) {
    //   // // console.log('LOAD NOTEBOOK FILE');
    //   // this.file = new File(uri);
    //   // let parsedFile = this.parseNotebookFile(this.file);
    //   // if (parsedFile.cells) {
    //   //   parsedFile.cells = parsedFile.cells.map(cell => {
    //   //     cell.metadata.id = uuid.v4();
    //   //     cell.metadata.focus = false;
    //   //     return cell;
    //   //   });
    //   // } else {
    //   //   parsedFile.cells = [
    //   //    {
    //   //     cell_type: 'code',
    //   //     execution_count: null,
    //   //     metadata: {
    //   //      collapsed: true
    //   //     },
    //   //     outputs: [],
    //   //     source: []
    //   //    }
    //   //  ];
    //   // }
    //   // if (parsedFile.cells.length > 0) parsedFile.cells[0].metadata.focus = true;
    //   // this.state = Immutable.fromJS(parsedFile);
    // }
    //
    // parseNotebookFile(file) {
    //   // let fileString = this.file.readSync();
    //   // return JSON.parse(fileString);
    // }
    //
    // save() {
    //   this.saveAs(this.getPath());
    // }
    //
    // saveAs(uri) {
    //   // let nbData = this.asJSON()
    //   // try {
    //   //   fs.writeFileSync(uri, nbData);
    //   //   this.modified = false;
    //   // } catch(e) {
    //   //   console.error(e.stack);
    //   //   debugger;
    //   // }
    //   // this.emitter.emit('did-change-modified');
    // }
    //
    // asJSON() {
    //   // return JSON.stringify(this.state.toJSON(), null, 4);
    // }
    //
    // shouldPromptToSave() {
    //   // return this.isModified();
    // }
    //
    // getSaveDialogOptions() {
    //   return {};
    // }
    //
    // modified = false;
    // // modifiedCallbacks = [];
    //
    // isModified() {
    //   return this.modified;
    // }
    //
    // setModified(modified) {
    //   // console.log('setting modified');
    //   this.modified = modified;
    //   this.emitter.emit('did-change-modified');
    // }
    //
    // onDidChangeModified(callback) {
    //   return this.emitter.on('did-change-modified', callback);
    // }
    //
    // //----------------------------------------
    // // Listeners, currently never called
    // //----------------------------------------
    //
    // onDidChange(callback) {
    //   return this.emitter.on('did-change', callback);
    // }
    //
    // onDidChangeTitle(callback) {
    //   return this.emitter.on('did-change-title', callback);
    // }
    //
    // //----------------------------------------
    // // Various info-fetching methods
    // //----------------------------------------
    //
    getTitle() {
      // let filePath = this.getPath();
      // if (filePath !== undefined && filePath !== null) {
      //   return path.basename(filePath);
      // } else {
      //   return 'untitled';
      // }
      return "blah";
    }
    //
    // getURI() {
    //   // console.log('getURI called');
    //   return this.getPath();
    // }
    //
    // getPath() {
    //   // console.log('getPath called');
    //   return this.file.getPath();
    // }
    //
    // isEqual(other) {
    //   return (other instanceof ImageEditor && this.getURI() == other.getURI());
    // }
    //
    // destroy() {
    //   console.log('destroy called');
    //   if (this.subscriptions) this.subscriptions.dispose();
    // }




    //----------------------------------------
    // Serialization (one of these days...)
    //----------------------------------------

    // static deserialize({filePath}) {
    //     if (fs.isFileSync(filePath)) {
    //         new NotebookEditor(filePath);
    //     } else {
    //         console.warn(`Could not deserialize notebook editor for path \
    //                      '${filePath}' because that file no longer exists.`);
    //     }
    // }

    // serialize() {
    //     return {
    //         filePath: this.getPath(),
    //         deserializer: this.constructor.name
    //     }
    // }

}

// atom.deserializers.add(NotebookEditor);
