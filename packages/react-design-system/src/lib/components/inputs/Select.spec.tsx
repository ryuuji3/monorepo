import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C', disabled: true },
];

describe('Select', () => {
  it('renders a select element', () => {
    render(<Select />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders options', () => {
    render(<Select options={options} />);
    expect(screen.getByRole('option', { name: 'Option A' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option B' })).toBeInTheDocument();
  });

  it('renders a disabled option', () => {
    render(<Select options={options} />);
    expect(screen.getByRole('option', { name: 'Option C' })).toBeDisabled();
  });

  it('renders placeholder option', () => {
    render(<Select options={options} placeholder="Select..." />);
    expect(screen.getByRole('option', { name: 'Select...' })).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<Select label="Country" />);
    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  it('associates label with select', () => {
    render(<Select label="Country" id="country-select" />);
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(<Select error="Please select an option" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Please select an option');
  });

  it('sets aria-invalid when error is provided', () => {
    render(<Select error="Required" />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders hint text', () => {
    render(<Select hint="Choose your country" />);
    expect(screen.getByText('Choose your country')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Select disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
