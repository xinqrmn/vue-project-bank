import { mount } from '@vue/test-utils';

const TestComponent = {
  template: '<div>{{ message }}</div>',
  props: {
    message: String,
  },
};

describe('TestComponent', () => {
  it('renders the message prop', () => {
    const wrapper = mount(TestComponent, {
      props: { message: 'Hello, Vue!' },
    });
    expect(wrapper.text()).toBe('Hello, Vue!');
  });
});
