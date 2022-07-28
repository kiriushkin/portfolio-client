import './Loader.scss';
import { withStyle } from 'baseui';
import { Spinner } from 'baseui/spinner';

const ColoredSpinner = withStyle(Spinner, {
  borderTopColor: 'var(--accent-color)',
});

const Loader = ({ isLoading }) => {
  return (
    <div
      className={(isLoading ? 'is-loading ' : '') + 'loader loader__container'}
    >
      <ColoredSpinner $size={72} $borderWidth={8} />
    </div>
  );
};

export default Loader;
