import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #283747;

  @media only screen and (max-width: 448px) {
    height: -webkit-fill-available !important;
  }
`;

const Text = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

const Glass = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const SubHeading = styled.h2`
  margin: 10px 0 0 0;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #3498db;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: white;
  }
`;

const MiddleContainer = styled(Glass)`
  width: min-content;
  height: min-content;
  padding: 20px 40px;
`;

const IndexPage = (): JSX.Element => (
  <Page>
    <MiddleContainer>
      <Text>nextboiler</Text>
      <SubHeading>
        made by{' '}
        <Link href="https://shihab.dev" target="_blank">
          shihab
        </Link>
      </SubHeading>
    </MiddleContainer>
  </Page>
);

export default IndexPage;
