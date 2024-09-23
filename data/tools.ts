import { tools as enTools } from '@/data/tools/en';
import { tools as zhTools } from '@/data/tools/zh';

export const getTools = (language: 'en' | 'zh') => {
  return language === 'en' ? enTools : zhTools;
};