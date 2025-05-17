// const Homepage = () => {
//   return (
//     <div>Homepage</div>
//   )
// }

// export default Homepage
// import React from 'react'
// import Card from '../app/ui/dashboard/card/card'
// import Rightbar from '../app/ui/dashboard/rightbar/rightbar'
// import Transactions from '../app/ui/dashboard/transactions/transactions'
// import Chart from '../app/ui/dashboard/chart/chart'
// import styles from '../app/ui/dashboard/dashboard.module.css'

// const Dashboard = () => {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.main}>
//         <div className={styles.cards}>
//           <Card/>
//           <Card/>
//           <Card/>
//         </div>
//         <Transactions/>
//         <Chart/>
//       </div>
//       <div className={styles.side}>
//         <Rightbar/>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

'use client';
import React from 'react';
import styled from 'styled-components';
import Card from '../app/ui/dashboard/card/card';
import Rightbar from '../app/ui/dashboard/rightbar/rightbar';
import Transactions from '../app/ui/dashboard/transactions/transactions';
import Chart from '../app/ui/dashboard/chart/chart';

// Styled components
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Main = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const Side = styled.div`
  flex: 1;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Main>
        <Cards>
          <Card />
          <Card />
          <Card />
        </Cards>
        <Transactions />
        <Chart />
      </Main>
      <Side>
        <Rightbar />
      </Side>
    </Wrapper>
  );
};

export default Dashboard;
