import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

const Editor = function(){
  return (
  // console.log(this)
  <div style={{padding:'2vh 2vw'}}>
  <AceEditor
  mode="javascript"
  theme="monokai"
  name="UNIQUE_ID_OF_DIV"
  editorProps={{
    $blockScrolling: true
  }}
  value={this.state.editorText}
  onChange={this.onChange}
  showGutter={false}
  ref="editor"
  minHeight="40vh"
  width="90vw"
  showPrintMargin={false}
  />
</div>
)
}



export default Editor;
