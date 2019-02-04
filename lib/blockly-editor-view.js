'use babel';

// import React, {Component, PropTypes} from 'react';
// import ReactDOM from 'react-dom';
// // import Blockly from 'node-blockly';
// import Blockly from 'node-blockly/browser';


// var fs = require('fs');

let {File, Disposable, CompositeDisposable} = require('atom');
import $ from 'jquery';

// require('./../node_modules/pdfjs-dist/build/pdf.js');

// function include(path) {
//     var code = fs.readFileSync(path, 'utf-8');
//     vm.runInThisContext(code, path);
// }
//
// include('./../external/blockly_compressed.js');
// include('./../external/blocks_compressed.js');



// var Blockly = require('node-blockly');

var xmlText = `<xml xmlns="http://www.w3.org/1999/xhtml">
        <block type="variables_set">
            <field name="VAR">blockly</field>
            <value name="VALUE">
                <block type="text">
                    <field name="TEXT">Hello Node.js!</field>
                </block>
            </value>
        </block>
    </xml>`;

    import React from 'react'
    import Blockly from 'node-blockly/browser'
    const toolbox = `
             <xml>
               <block type="controls_if"></block>
               <block type="controls_whileUntil"></block>
             </xml>`


export default class BlocklyEditorView extends React.Component {

  constructor(serializedState) {
    super();

     // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('language-blockly');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The LanguageBlockly package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  render() {
  return(
    <div style={{height: '100%', width: '100%', position: 'relative'}}>
      <div ref={(editorDiv) => { this.editorDiv = editorDiv; }}
/>
    </div>
  )
      // <div ref={ ele => this.innerBlocklyDiv = ele } style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}} />
      // <div dangerouslySetInnerHTML={{__html: require('text-loader!./toolbox.xml')}} />
}
componentDidMount() {
  var div = this.editorDiv;
  $(() => {
    // inject blockly
    var workspace = Blockly.inject(div,
      {toolbox: document.getElementById('toolbox'),
        grid: {spacing: 40, colour: 'rgb(57, 65, 90)', length: 42},
        zoom: {controls: false, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2},
      });
});


  // inject blockly
  // var workspace = Blockly.inject(this.innerBlocklyDiv,
  //   {toolbox: document.getElementById('toolbox'),
  //     grid: {spacing: 40, colour: 'rgb(57, 65, 90)', length: 42},
  //     zoom: {controls: false, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2},
  //   });
}

//   componentDidMount() {
//     console.log(this.blocklyDiv);
//     Blockly.inject(this.blocklyDiv, {toolbox: toolbox});
// }
//
//   render() {
//
//     return (
//         <div className="editor">
//             <div id="blocklyContainer">
//                 <div id="blocklyDiv" ref={(d) => {this.blocklyDiv = d}}></div>
//             </div>
//         </div>
//     );

    //
    // // var editor = null;
    // // var code = document.getElementById('startBlocks')
    //
    //   // if( editor ) {
    //     // editor.removeChangeListener(updateCode);
    //     var code = Blockly.Xml.workspaceToDom(xmlText);
    //     // editor.dispose()
    //   // }
    //   var editor = Blockly.inject(element, {
    //     toolbox: document.getElementById(toolbox)
    //   })
    //
    //   Blockly.Xml.domToWorkspace(code, editor);
    //
    //   // editor.addChangeListener(updateCode);
    //
    //   return editor


    // try {
    //     var xml = Blockly.Xml.textToDom(xmlText);
    // }
    // catch (e) {
    //     console.log(e);
    //     return
    // }
    //
    // var workspace = new Blockly.Workspace();
    // console.log(workspace);
    // Blockly.Xml.domToWorkspace(xml, workspace);
    // var code = Blockly.JavaScript.workspaceToCode(workspace);
    //
    // console.log(code)


    // return (
    //     <div id="blocklyDiv" style="height: 480px; width: 600px;">
    //     <xml id="toolbox" style="display: none">
    //       <block type="controls_if"></block>
    //       <block type="logic_compare"></block>
    //       <block type="controls_repeat_ext"></block>
    //       <block type="math_number">
    //         <field name="NUM">123</field>
    //       </block>
    //       <block type="math_arithmetic"></block>
    //       <block type="text"></block>
    //       <block type="text_print"></block>
    //     </xml>
    //     </div>
    // );


        // <script>
        //   var demoWorkspace = Blockly.inject('blocklyDiv',
        //       {media: '../../media/',
        //        toolbox: document.getElementById('toolbox')});
        // </script>
  // }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
