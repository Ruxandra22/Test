'use client';
import { render } from 'react-dom';
import { lifeStrategiesData } from '../../shared/data';
import { LifeStrategyService } from '@/app/services/life-strategy.service';
import { useState } from 'react';

export const StrategyList = () => {
  const handleOnChange = (e: any, unitCode: string) => {
    const { name, value } = e.target;
    LifeStrategyService.setLifeUnit(name, unitCode, value);
  };

  const renderStrategies = () => {
    return lifeStrategiesData.map((strategy, listIndex) => {
      return [
        <h2 key={`h2_${listIndex}`}>{strategy.lifeArea}</h2>,
        <ul key={`ul_${listIndex}`}>
          {strategy.lifeUnits.map((unit, i) => {
            const { name, code } = unit;
            return [
              <li key={`${listIndex}_${i}`}>{name}</li>,
              <div className='mb-3' key={i}>
                <input
                  type='text'
                  name='time'
                  className='form-control'
                  placeholder='Time spent'
                  onChange={(e) => handleOnChange(e, code)}
                />
                <div className='d-flex'>
                  <label htmlFor='importanceRange' className='form-label'>
                    Importance
                  </label>
                  <input
                    id='importanceRange'
                    name='importance'
                    min='0'
                    max='10'
                    step='1'
                    type='range'
                    className='form-range'
                    list='optionsList'
                    onInput={(e) => handleOnChange(e, code)}
                  />
                </div>
                <div className='d-flex'>
                  <label htmlFor='satisfactionRange' className='form-label'>
                    Satisfaction
                  </label>
                  <input
                    id='satisfactionRange'
                    name='satisfaction'
                    min='0'
                    max='10'
                    step='1'
                    type='range'
                    className='form-range'
                    list='optionsList'
                    onInput={(e) => handleOnChange(e, code)}
                  />
                </div>
              </div>,
            ];
          })}
        </ul>,
      ];
    });
  };

  return <div>{renderStrategies()}</div>;
};
