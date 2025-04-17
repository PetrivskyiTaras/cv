export const GET = () => {
  const educationData = [
    {
      id: '1',
      placeName: 'Infopulse - Frontend development',
      date: '2014 year',
      degree: 'Programming course',
    },
    {
      id: '2',
      placeName: 'Ternopil Ivan Pul’uj National Technical University specialty',
      date: '2004 - 2009',
      degree: 'Bachelor\'s degree -  “Automated Control of Technological Processes”',
    },
  ];

  return new Response(JSON.stringify(educationData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
