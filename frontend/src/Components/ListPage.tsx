import styled from '@emotion/styled';
import * as React from 'react';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 24px;
  align-items: flex-start;
  height: 100%;
`;

const FirstSection = styled.div(
  ({ img }) => `
  position: relative;
  height: 160px;
  width: 100%;
  border-radius: 12px;
  background-color: #272727;
  display: flex;
  justify-content: space-between;
  padding: 4px 32px;
`
);

export const HeaderTextContainer = styled.div`
  padding: 28px 0px;
  display: flex;
  flex-direction: column;
  color: #ca2c92;
  gap: 16px;
`;

const SecondSection = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0px 16px;
`;

const HeaderRow = styled.tr``;

const ColumnHeading = styled.th`
  padding: 16px 16px 0px 16px;
  text-align: left;
  color: #ca2c92;
`;

const ContentRow = styled.tr`
  background-color: #ffffff;
  border: none;
  outline: none;
`;

const Content = styled.td`
  border: 1px solid #fff;
  padding: 10px 16px;
  outline: none;
`;

export const Title = styled.p`
  color: #ca2c92;
  font-size: 24px;
  font-weight: 800;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  align-items: center;
`;

const Description = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.1px;
`;

const Button = styled.button`
  width: fit-content;
  color: #ca2c92;
  border: 3.5px solid #ca2c92;
`;

export const ListPage = ({ column, data, title, filter, description, image, openForm }) => {
  return (
    <ListContainer>
      {title && (
        <FirstSection img={image}>
          <HeaderTextContainer>
            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </div>
            {openForm && <Button onClick={openForm}>Add New </Button>}
          </HeaderTextContainer>
        </FirstSection>
      )}

      <SecondSection>
        <FilterContainer>{filter && filter}</FilterContainer>
        <Table>
          <HeaderRow>
            {column.map((header) => (
              <ColumnHeading>{header}</ColumnHeading>
            ))}
          </HeaderRow>

          {data.map((row) => (
            <ContentRow>
              {row.map((x) => (
                <Content> {x}</Content>
              ))}
            </ContentRow>
          ))}
        </Table>
      </SecondSection>
    </ListContainer>
  );
};
