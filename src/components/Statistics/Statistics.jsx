import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={css.list}>
        <li className="">
          <p className="">Good:{good}</p>
        </li>
        <li className="">
          <p className="">Neutral:{neutral}</p>
        </li>
        <li className="">
          <p className="">Bad:{bad}</p>
        </li>

        <li className="">
          <p className="">Total:{total}</p>
        </li>
        <li className="">
          <p className={css.positiveFeedback}>
            Positive Feedback:{' '}
            <span className={css.span}>{positivePercentage || 0}%</span>
          </p>
        </li>
      </ul>
    </>
  );
};
