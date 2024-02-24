import { LifeStrategy } from '../types/life-strategy.type';

// TODO just dummy data for now, this can be added by the user as well
export const lifeStrategiesData: LifeStrategy[] = [
  {
    lifeArea: 'Relationships',
    lifeUnits: [
      {
        name: 'Significant Other',
        description: 'Time with your partner/dates',
        code: 'significant_other',
      },
      {
        name: 'Family',
        description: 'Engaging with kids, parents, siblings',
        code: 'family',
      },
      {
        name: 'Friendship',
        description: 'Time with friends',
        code: 'friendship',
      },
    ],
  },
  {
    lifeArea: 'Body, mind & spirituality',
    lifeUnits: [
      {
        name: 'Physical Health/Sport',
        description: 'Exercise/physical therapy',
        code: 'physical_health',
      },
      {
        name: 'Mental Health/Mindfulness',
        description: 'Psychotherapy, meditation',
        code: 'mental_health',
      },
      {
        name: 'Spirituality/Faith',
        description: 'Religious practice',
        code: 'spirituality',
      },
    ],
  },
  {
    lifeArea: 'Community & Society',
    lifeUnits: [
      {
        name: 'Community/Citizenship',
        description: 'Membership in local clubs, jury duty',
        code: 'community',
      },
      {
        name: 'Social Engagement',
        description: 'Volunteering, activism',
        code: 'social_engagement',
      },
    ],
  },
  {
    lifeArea: 'Job, Learning & Finances',
    lifeUnits: [
      {
        name: 'Job/Career',
        description: 'Work',
        code: 'job',
      },
      {
        name: 'Education/Learning',
        description: 'Classes/Training',
        code: 'education',
      },
      {
        name: 'Finances',
        description: 'Planning/Investing',
        code: 'finances',
      },
    ],
  },
  {
    lifeArea: 'Interests & Entertainment',
    lifeUnits: [
      {
        name: 'Hobbies/Interests',
        description: 'Reading/collectibles',
        code: 'hobbies',
      },
      {
        name: 'Online Entertainment',
        description: 'Social media, TV, Gaming',
        code: 'online_entertainment',
      },
      {
        name: 'Offline Entertainment',
        description: 'Vacations, theater, sporting events',
        code: 'offline_entertainment',
      },
    ],
  },
  {
    lifeArea: 'Personal Care',
    lifeUnits: [
      {
        name: 'Physiological Needs',
        description: 'Eating, sleeping',
        code: 'physiological_needs',
      },
      {
        name: 'Activities of Daily Living',
        description: 'Commuting, housework',
        code: 'activities_of_daily_living',
      },
    ],
  },
];
