//styles
import * as S from './styles';
//components
import AppBar from 'components/AppBar';
import Card from 'components/Card';
import TaskContainer from 'components/TaskContainer';

function Home() {
  return (
    <>
      <AppBar />
      <S.BoardContainer>
        <TaskContainer title='TODO'>
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Low'
            status='todo'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='High'
            status='todo'
          />
        </TaskContainer>
        <TaskContainer title='In Progress'>
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='progress'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='progress'
          />
        </TaskContainer>
        <TaskContainer title='Done'>
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
          <Card
            title='this is new ticket'
            description='this is new ticket this is new ticket'
            priority='Medium'
            status='done'
          />
        </TaskContainer>
      </S.BoardContainer>
    </>
  );
}

export default Home;