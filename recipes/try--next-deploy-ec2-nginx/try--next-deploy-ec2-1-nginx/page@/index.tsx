import { GetServerSideProps } from 'next';

// @ts-ignore
const Page = ({ ran }) => {
  return <div>hello page@: {ran}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(`< hello page@ getServerSideProps >`);
  return {
    props: { ran: Math.random().toString() },
  };
};

export default Page;
