// src/components/SkeletonComponent.jsx
import React from 'react';
import { Skeleton } from '@nextui-org/react';

const SkeletonComponent = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-full group">
          <div className="block">
            <Skeleton className="w-full h-[180px] sm:h-[280px] md:h-[250px] object-cover rounded-lg" />
            <div className="flex pt-2">
              <div className="flex flex-col w-full">
                <Skeleton className="h-5 w-full " />
                <Skeleton className="h-4 w-3/4 mt-1 " />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonComponent;
