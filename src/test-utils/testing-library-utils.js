import { render } from '@testing-library/react';
import AppProvider from '../contexts/appProvider';

const renderWithContext = (ui, options) => 
    render(ui, { wrapper: AppProvider, ...options });

export * from '@testing-library/react'

export { renderWithContext as render };