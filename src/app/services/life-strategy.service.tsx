import { LifeData } from '../types/life-strategy.type';

const data: LifeData = {};

// TODO refactor to have only one function (attribute, unitCode) => data[unitCode][attribute] = attribute;
const setLifeUnit = (attribute: string, unitCode: string, value: number) => {
  data[unitCode] = {
    ...data[unitCode],
    [attribute]: value,
  };
};

const getData = () => {
  return data;
};

export const LifeStrategyService = { setLifeUnit, getData };
