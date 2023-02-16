import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
  {
    userName: 'fernan942',
    name: 'Fernando Cordero',
    isFollowing: true,
  },
  {
    userName: 'roddotcom',
    name: 'Rodrigo',
    isFollowing: false,
  },
  {
    userName: 'cassidyrecords',
    name: 'Jean Carlos Cassidy',
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

// We can pass things as a props, or as children
