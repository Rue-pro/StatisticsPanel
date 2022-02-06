import { observer } from 'mobx-react';
import React from 'react';
import Users from '../../entities/users';

const StatisticsPage: React.FC = () => {
  return (
    <section>
      <Users />
    </section>
  );
};

export default observer(StatisticsPage);
