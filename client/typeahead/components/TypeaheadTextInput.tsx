import * as React from 'react';
import * as classNames from 'classnames';

interface TypeaheadTextInputProps {
  onTypeahead: (text:string)=>void;
  text?: string;
  placeholder?: string,
  editing?: boolean;
  newTodo?: boolean;
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
    if (e.which === 13) {
      this.props.onTypeahead(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onTypeahead(e.target.value);
    }
  }

  render() {
    return (
      <input className={
        classNames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}


export default TypeaheadTextInput;