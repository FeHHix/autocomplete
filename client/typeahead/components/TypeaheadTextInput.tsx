import * as React from 'react';

interface TypeaheadTextInputProps {
  onTypeahead: (text:string)=>void;
  text?: string;
  placeholder?: string;
}

interface TypeaheadTextInputState {
  text: string;
}

class TypeaheadTextInput extends React.Component<TypeaheadTextInputProps, TypeaheadTextInputState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    this.props.onTypeahead(text);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    console.log('render input');
    return (
      <input className="typeahead-input"
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}


export default TypeaheadTextInput;