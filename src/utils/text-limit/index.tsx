/**
 * IMPORTS
 */

interface ILimitProps {
  text: string;
  limit: number;
}
const handleLimitTextdisplayByAmount = ({ text, limit }: ILimitProps) => {
  if (text?.length > limit) {
    return `${text.substring(0, limit)}...`;
  } else {
    return text;
  }
};

const handleLimitTextDate = ({ text, limit }: ILimitProps) => {
  if (text?.length > limit) {
    return `${text.substring(0, limit)}`;
  } else {
    return text;
  }
};

/**
 * EXPORTS
 */
export { handleLimitTextdisplayByAmount, handleLimitTextDate };
