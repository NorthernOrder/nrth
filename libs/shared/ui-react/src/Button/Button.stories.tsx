import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const primary = () => {
  return (
    <div className="flex">
      <Button>Next Page</Button>
    </div>
  );
};
