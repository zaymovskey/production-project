import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { PageError } from 'shared/ui/PageError';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError (_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render (): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <PageError/>;
    }

    return children;
  }
}

export default ErrorBoundary;
