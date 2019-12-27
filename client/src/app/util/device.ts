export interface Device {
  width: number;
  height: number;
  type: 'mobile' | 'table' | 'desktop';
}

export function getDeviceInfo(): Device {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    type: window.innerWidth > 1023 ? 'desktop' : 'mobile'
  };
}
