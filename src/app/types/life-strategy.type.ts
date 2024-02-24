export type LifeStrategy = {
  lifeArea: string;
  lifeUnits: LifeUnit[];
};

export type LifeUnit = {
  name: string;
  description: string;
  code: string;
};

export type LifeData = {
  [key: string]: {
    time: number;
    importance: number;
    satisfaction: number;
  };
};
