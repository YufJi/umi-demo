
import withHd from '@/hoc/withHd';
import withQuery from '@/hoc/withQuery';

export default (Component) => {
  return Component |> withQuery;
};
