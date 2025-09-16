// 04-styled-components/src/components/Skeleton/Skeleton.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(to right, ${({ theme }) => theme.colors.skeletonBase} 8%, ${({ theme }) => theme.colors.skeletonHighlight} 18%, ${({ theme }) => theme.colors.skeletonBase} 33%);
  background-size: 2000px 100%;
  animation: ${shimmer} 1.5s linear infinite;
  border-radius: ${({ theme }) => theme.radius.md};
`;

const SkeletonCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 0;
`;

const SkeletonContent = styled.div`
  padding: ${({ theme }) => theme.spacing[1]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-grow: 1;
`;

const SkeletonText = styled(SkeletonBase)`
height: 1.25em;
width: ${({ width }) => width || '100%'};
`;

const SkeletonFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing[3]};
`;

const SkeletonButton = styled(SkeletonBase)`
  height: 40px;
  width: 100%;
`;

const Skeleton = () => {
  return (
    <SkeletonCardWrapper>
      <SkeletonImage />
      <SkeletonContent>
        <SkeletonText />
        <SkeletonText width="60%" />
        <SkeletonFooter>
          <SkeletonText width="30%" style={{ height: '1.5em' }} />
          <SkeletonText width="20%" />
        </SkeletonFooter>
        <SkeletonButton />
      </SkeletonContent>
    </SkeletonCardWrapper>
  );
};

export default Skeleton;