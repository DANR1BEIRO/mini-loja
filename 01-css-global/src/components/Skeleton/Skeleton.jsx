// 01-css-global/src/components/Skeleton/Skeleton.jsx
import React from 'react';

const Skeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text skeleton-text--short"></div>
        <div className="skeleton-footer">
          <div className="skeleton skeleton-text skeleton-text--price"></div>
          <div className="skeleton skeleton-text skeleton-text--rating"></div>
        </div>
        <div className="skeleton skeleton-button"></div>
      </div>
    </div>
  );
};

export default Skeleton;