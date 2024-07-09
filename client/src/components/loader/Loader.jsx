import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import './loader.css'; 
const Loader = () => {
  // simulated loading and updating stages
  const [stage, setStage] = useState('loading');
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('updateImagePresent'), 3000); 
    const timer2 = setTimeout(() => {
      setStage('updating'); 
      const updateInterval = setInterval(() => {
        setPercentage(prev => {
          if (prev >= 100) {
            clearInterval(updateInterval);
            return 100; 
          }
          return prev + 1; 
        });
      }, 100); 
      return () => clearInterval(updateInterval);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div class="loader_container">
      {stage === 'loading' && (
        <div className="loader">
          <div className="loader_inner"></div>
        </div>
      )}
      {stage === 'updateImagePresent' && (
        <div className="message">
            <span>Update image present</span>
        </div>
      )}
      {stage === 'updating' && (
        <div className="update_message">
            <span>Do not switch off the device during update!</span>
            <span>Updating... {percentage}% complete</span>
        </div>
      )}
    </div>
  );
};
export default Loader;


