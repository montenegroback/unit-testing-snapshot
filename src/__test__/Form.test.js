import React from 'react';
import { create, act } from 'react-test-renderer';
import Form from '../components/Form';

let component;
const props = {
  history: {},
  handleSubmit: () => {},
};

describe('<Form />', () => {
  beforeEach(() => {
    component = create(<Form {...props} />);
  });

  it('Renderizado del componente', () => {
    expect(component).toBeDefined();
    expect(component.toJSON().type).toEqual('form');
    expect(component.root.findByType('input')).toBeDefined();
    expect(component.root.findByType('button')).toBeDefined();
    expect(component.root.findByType('svg')).toBeDefined();
  });

  it('Toggle Button - Para cuando exista o no una busqueda', () => {
    const form = component.root.findByType('form');
    const input = form.findByType('input');
    const button = form.findByType('button');

    expect(button.props.disabled).toBeTruthy();
    expect(button.props.className).toEqual('search-button null');

    act(() => {
      input.props.onChange({ target: { value: 'dogs' } });
    });

    expect(button.props.disabled).toBeFalsy();
    expect(button.props.className).toEqual('search-button active');
  });

  it('Success call - onSubmit form', () => {
    const form = component.root.findByType('form');
    form.props.onSubmit();
  });
});
