// 04-styled-components/src/components/ProductCard/ProductCard.jsx
import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 200ms, box-shadow 200ms;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.skeletonBase};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Tag = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  right: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.tagText};
  font-size: 0.75rem;
  font-weight: bold;
  background-color: ${({ theme, tagType }) =>
    tagType === 'Novo'? theme.colors.tagNewBg : theme.colors.tagPromoBg};
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing[1]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  height: 2.5em;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing[3]};
`;

const Price = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Rating = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  span {
    color: ${({ theme }) => theme.colors.star};
  }
`;

const ProductCard = ({ product }) => {
  const { title, price, rating, tag, imageUrl } = product;

  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={imageUrl} alt={title} loading="lazy" />
        {tag && <Tag tagType={tag}>{tag}</Tag>}
      </ImageWrapper>
      <Content>
        <Title title={title}>{title}</Title>
        <Details>
          <Price>R$ {price.toFixed(2)}</Price>
          <Rating aria-label={`Avaliação: ${rating} de 5 estrelas`}>
            {rating} <span>★</span>
          </Rating>
        </Details>
        <Button variant="solid">Adicionar</Button>
      </Content>
    </CardWrapper>
  );
};

export default ProductCard;