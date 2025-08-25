import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  enabled?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ enabled = false }) => {
  const [metrics, setMetrics] = useState({
    totalImages: 0,
    loadedImages: 0,
    failedImages: 0,
    averageLoadTime: 0,
    startTime: Date.now()
  });

  useEffect(() => {
    if (!enabled) return;

    const updateMetrics = () => {
      const images = document.querySelectorAll('img');
      const loadedImages = Array.from(images).filter(img => img.complete);
      const failedImages = Array.from(images).filter(img => img.naturalWidth === 0 && img.complete);
      
      setMetrics(prev => ({
        ...prev,
        totalImages: images.length,
        loadedImages: loadedImages.length,
        failedImages: failedImages.length
      }));
    };

    // Monitor image loading
    const observer = new MutationObserver(updateMetrics);
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial check
    updateMetrics();

    // Periodic updates
    const interval = setInterval(updateMetrics, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-xs z-50">
      <div className="font-bold mb-1">Performance Monitor</div>
      <div>Images: {metrics.loadedImages}/{metrics.totalImages}</div>
      <div>Failed: {metrics.failedImages}</div>
      <div>Time: {Math.round((Date.now() - metrics.startTime) / 1000)}s</div>
    </div>
  );
};

export default PerformanceMonitor;

