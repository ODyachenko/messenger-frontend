import React, { FC } from 'react';

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return (
    <section className={className}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Wrapper;
