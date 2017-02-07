import * as React from 'react'

interface TypeaheadTextInputProps {
  onTypeahead: (text:string)=>void;
  value?: string;
  placeholder?: string;
}

interface TypeaheadTextInputState {
  text: string;
}

class TypeaheadTextInput extends React.Component<TypeaheadTextInputProps, TypeaheadTextInputState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.value || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    this.props.onTypeahead(text);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const text = this.props.value || this.state.text;

    return (
      <div className="u-posRelative">
        <input className="Typeahead-hint" type="text" />
        <input className="Typeahead-input tt-input"
          type="text"
          placeholder={this.props.placeholder}
          autoFocus={true}
          value={text}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}


export default TypeaheadTextInput