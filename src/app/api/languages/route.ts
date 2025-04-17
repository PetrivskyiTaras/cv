export const GET = () => {
  const languages = [
    {
      id: '1',
      name: 'Ukrainian',
      level: 'native speaker',
    },
    {
      id: '2',
      name: 'English',
      level: 'upper intermediate',
    },
  ];

  return new Response(JSON.stringify(languages), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
