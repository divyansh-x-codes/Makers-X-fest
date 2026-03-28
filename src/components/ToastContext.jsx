import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ show: false, type: '', msg: '', sub: '' });

  const showToast = useCallback((type, msg, sub) => {
    setToast({ show: true, type, msg, sub });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4500);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {/* Toast UI */}
      <div id="toast" className={`show ${toast.type}`} style={{ 
        transform: toast.show ? 'translateY(0)' : 'translateY(100px)',
        opacity: toast.show ? 1 : 0
      }}>
        <span className="toast-icon">{toast.type === 'success' ? '✅' : toast.type === 'error' ? '❌' : ''}</span>
        <div>
          <div className="toast-msg">{toast.msg}</div>
          <div className="toast-sub">{toast.sub}</div>
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
