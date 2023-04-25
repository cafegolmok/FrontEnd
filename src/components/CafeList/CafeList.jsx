import cafeDataList from '../../../data';
import React from 'react';
import { MainContainer, ScreenOut } from '../../styles/commonStyle';
import {
  Posts,
  Post,
  ThumbnailImg,
  BookmarkBtn,
  Tags,
  Tag,
  CafeContainer,
  CafeName,
  CafeStarContainer,
  CafeStar,
  CafeLocation
} from './CafeListStyle';

const CafeList = () => {
  return (
    <MainContainer>
      <div>
        <ScreenOut as="h2">가고 싶은 카페를 클릭해 보세요</ScreenOut>
        <Posts>
          {cafeDataList.map((cafe, index) => (
            <Post key={index}>
              <article>
                <ThumbnailImg src={cafe.imgToUrl} alt="섬네일 이미지" />
                <BookmarkBtn
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" />
                </BookmarkBtn>
                <Tags>
                  <ScreenOut as="dt">카페의 태그입니다.</ScreenOut>
                  {cafe.tags.map((tag, index) => (
                    <Tag key={index}>
                      {tag}
                    </Tag>
                  ))}
                </Tags>
                <CafeContainer>
                  <CafeName>{cafe.cafeName}</CafeName>
                  <CafeStarContainer>
                    <CafeStar>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" />
                      </svg>
                    </CafeStar>
                    <dd>{cafe.starRating}</dd>
                  </CafeStarContainer>
                </CafeContainer>
                <CafeLocation>{cafe.location}</CafeLocation>
              </article>
            </Post>
          ))}
        </Posts>
      </div>
    </MainContainer>
  );
};

export default CafeList;
