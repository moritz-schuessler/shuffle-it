interface Props {
  params: {
    id: string;
  };
}

const Album = ({ params }: Props) => {
  console.log('params', params);

  return (
    <main className='h-full gap-[2rem] overflow-scroll p-[2rem]'>
      {params.id}
    </main>
  );
};

export default Album;
