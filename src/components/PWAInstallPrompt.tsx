import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

const isMobile = () =>
  typeof window !== 'undefined' &&
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (isMobile()) setShowPrompt(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setShowPrompt(false);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-card border shadow-lg rounded-xl px-6 py-4 flex items-center gap-4 animate-in fade-in slide-in-from-bottom duration-300 max-w-xs w-full">
      <Download className="w-6 h-6 text-primary" />
      <div className="flex-1">
        <div className="font-semibold text-base">Install Resuminate</div>
        <div className="text-xs text-muted-foreground">Add this app to your home screen for a better experience.</div>
      </div>
      <button
        className="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm font-medium hover:bg-primary/90 transition-colors"
        onClick={handleInstall}
      >
        Install
      </button>
      <button
        className="ml-2 text-muted-foreground hover:text-foreground"
        onClick={() => setShowPrompt(false)}
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PWAInstallPrompt; 