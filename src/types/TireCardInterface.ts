export interface Tire {
  dot: string;
  newTire: string;
  id: number;
  serialNumber: string;
  tireSize: {
    width: number;
    height: number;
    rim: number;
  };
  make: {
    name: string;
  };
  model: {
    name: string;
    treadDepth: string;
    groovesQuantity: string;
  };
  recommendedPressure: string;
  treadDepth: string;
  timesRetreaded: string;
  maxRetreadsExpected: string;
  purchaseCost: string;
  currentRetread: {
    make: {
      name: string;
    };
    model: {
      name: string;
    };
    retreadCost: string;
  };
  disposal: {
    disposalReasonDescription: string;
  };
}
