import { parse } from 'date-fns';

export const sortedListByDate = <
  T extends { startDate: string; endDate: string }
>(
  items: T[]
): T[] => {
  return [...items].sort((a, b) => {
    const parseDate = (dateStr: string) => {
      try {
        return parse(dateStr, 'MMM yyyy', new Date());
      } catch {
        return new Date(0);
      }
    };

    const aStart = parseDate(a.startDate);
    const bStart = parseDate(b.startDate);

    if (aStart.getTime() !== bStart.getTime()) {
      return bStart.getTime() - aStart.getTime();
    }

    const aEnd = a.endDate === 'Present' ? new Date() : parseDate(a.endDate);
    const bEnd = b.endDate === 'Present' ? new Date() : parseDate(b.endDate);

    return bEnd.getTime() - aEnd.getTime();
  });
};
