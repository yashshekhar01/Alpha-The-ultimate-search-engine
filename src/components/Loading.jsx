import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export const Loading = () => {
    return (
        <div className="flex justify-center items-center">
           <TailSpin type="Puff" color="#00BFFF" height={600} width={92} />
        </div>
    );
}