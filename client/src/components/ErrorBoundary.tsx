import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  // FIX: Removed public access modifier for more conventional React syntax.
  state: State = {
    hasError: false,
    error: null,
  };

  // FIX: Removed public access modifier for more conventional React syntax.
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // FIX: Removed public access modifier for more conventional React syntax.
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  // FIX: Removed public access modifier for more conventional React syntax.
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-gray-900/5">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Something went wrong</h2>
            <p className="mb-6 text-sm text-gray-500">
              The application encountered an unexpected error. Please try refreshing the page.
            </p>
            <div className="rounded-lg bg-gray-50 p-4 mb-6 text-left overflow-auto max-h-32">
                 <code className="text-xs text-red-800 font-mono">
                     {this.state.error?.message}
                 </code>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
