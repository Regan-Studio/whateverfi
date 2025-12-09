import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex w-80 items-center gap-3 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200 animate-slide-up transition-all"
          >
            {toast.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />}
            {toast.type === 'info' && <Info className="h-5 w-5 text-blue-500 flex-shrink-0" />}
            
            <p className="flex-1 text-sm font-medium text-gray-700">{toast.message}</p>
            
            <button 
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-600"
            >
                <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
