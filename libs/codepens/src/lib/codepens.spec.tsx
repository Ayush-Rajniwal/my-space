import { render } from '@testing-library/react';

import Codepens from './codepens';

describe('Codepens', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Codepens />);
    expect(baseElement).toBeTruthy();
  });
});
