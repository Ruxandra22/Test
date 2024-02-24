'use client';

import { FormEvent } from 'react';
import { StrategyList } from '../strategies-list/strategies.list';
import { LifeStrategyService } from '@/app/services/life-strategy.service';

export const StrategiesForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    const data = LifeStrategyService.getData();
    console.log('Data', data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <StrategyList />
      <button className='btn btn-primary' type='submit'>
        See Graph
      </button>
    </form>
  );
};
