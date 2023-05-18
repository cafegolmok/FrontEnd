// src/pages/cafe/[id].jsx

import React from 'react';
import { useRouter } from 'next/router';

import { MainContainer } from '../../styles/commonStyle';

const CafeDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return <MainContainer>{id} 카페 상세페이지</MainContainer>;
};

export default CafeDetail;
