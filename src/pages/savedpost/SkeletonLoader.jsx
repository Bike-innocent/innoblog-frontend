import React from 'react';
import { Skeleton } from '@nextui-org/react';

const SkeletonLoader = ({ count, className, height, width }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-full group">
          <div className="block">
            <Skeleton className={`w-full ${width} ${height} object-cover rounded-lg`} />
            <div className="flex pt-2">
              <div className="w-1/5">
                <Skeleton className="w-10 h-10 rounded-full" />
              </div>
              <div className="flex flex-col pl-2 w-full">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-4 w-3/4 mt-1" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
