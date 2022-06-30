type ReadonlyRecord<K extends string, V> = Readonly<Record<K, V>>;

export type JobNames = 'frontend' |
                       'backend' |
                       'fullstack' |
                       'designer' |
                       'planner';

export const JobTypes: ReadonlyRecord<JobNames, JobNames> = {
  frontend: 'frontend',
  backend: 'backend',
  fullstack: 'fullstack',
  designer: 'designer',
  planner: 'planner',
}