/**
 * Обрезает описание до указанной длины и добавляет многоточие
 */
export const truncateDescription = (description: string, length: number = 100): string => {
  return `${description.slice(0, length)}...`;
};

/**
 * Делает первую букву строки заглавной
 */
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};