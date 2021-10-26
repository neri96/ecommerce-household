import { useRef, useEffect } from 'react';
import { isEqual } from 'lodash';

const useCompareObjects = () => {
    const deepCompareEquals = (value: any, prevValue: any) => {
        return isEqual(value, prevValue);
    }
      
    const useDeepCompareMemoize = (value: any) => {
        const ref = useRef();
      
        if (!deepCompareEquals(value, ref.current)) {
          ref.current = value;
        }
      
        return ref.current;
    }
      
    const useDeepCompareEffect = (callback: any, dependencies: any) => {
        useEffect(
          callback,
          dependencies.map(useDeepCompareMemoize)
        )
    }

    return { useDeepCompareEffect };
}

export default useCompareObjects;