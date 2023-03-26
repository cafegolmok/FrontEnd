const cafeDataList = [
  {
    id: 1,
    cafeName: '오쎄',
    starRating: 4.61,
    location: '사당역 11번 출구에서264m',
    tags: ['커피', '디저트', '브런치'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjlfODUg%2FMDAxNjI0OTIzOTcyNzA1.GVjt2m62_xl3U54uzu2ckUDZMmyZd6TcIc1ziTOgcUgg.vEvhXJS_zRbdTVdydtKj8WK6G98n0l_fLiJjwJI8MzMg.JPEG.thddldlsrks%2FIMG_3209.jpg',
    phoneNumber: '02-523-0077',
    information: ['포장', '남/녀 화장실 구분'],
    homepageUrl: 'http://instagram.com/osee_seoul'
  },
  {
    id: 2,
    cafeName: '스타벅스 사당로데오점',
    starRating: 4.39,
    location: '사당역 12번 출구에서75m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDZfMTcw%2FMDAxNjQ0MTIzODQyMjg5.iaqOBnDDUI_T8miUBdymDNO15v8rO8Z5ptpgTwTpPx8g.EH6vpjCOwbO_TcfjmYXcohu7H3VJ8kTSb4_QCGha8SAg.JPEG.future23%2FIMG_9836.JPG',
    phoneNumber: '1522-3232',
    information: ['주차불가능'],
    homepageUrl: 'http://www.starbucks.co.kr/'
  },
  {
    id: 3,
    cafeName: '투썸플레이스 사당역로데오점',
    starRating: 4.3,
    location: '사당역 14번 출구에서116m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200923_212%2F16008555630119gfJP_JPEG%2FFG6qvaECBBcQTvhYlZKDmQsg.jpg',
    phoneNumber: '02-582-7791',
    information: [
      '단체석',
      '주차',
      '포장',
      '배달',
      '예약',
      '무선 인터넷',
      '남/녀 화장실 구분'
    ],
    homepageUrl: ''
  },
  {
    id: 4,
    cafeName: '랭스터디카페 사당역점',
    starRating: 4.84,
    location: '사당역 14번 출구에서223m',
    tags: ['24시간', '장소대여'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220407_239%2F1649286048818qCWXX_JPEG%2F20220206_074623.jpg',
    phoneNumber: '0507-1356-3740',
    information: ['단체석', '포장', '예약', '무선 인터넷', '남/녀 화장실 구분'],
    homepageUrl: 'http://langstudycafesadang.modoo.at/'
  },

  {
    id: 5,
    cafeName: '비지엠커피',
    starRating: 4.79,
    location: '사당역 14번 출구에서346mm',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220128_256%2F1643381444451mdAyg_JPEG%2F4A951935-1071-4552-B649-B7A553B58A78.jpeg',
    phoneNumber: '0507-1331-5940',
    information: ['포장', '무선 인터넷'],
    homepageUrl: 'http://instagram.com/bgm.coffee'
  },

  {
    id: 6,
    cafeName: '생각이나서 방배본점',
    starRating: 4.4,
    location: '사당역 14번 출구에서359m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjJfMjA0%2FMDAxNjY5MDg3OTUxNjMy.sjB_7bLJZQNXzDWii9wHbyROJbjrYfob41HH1-1tJhog.3mRQfoGYsvp6PM-tuy-wlcNUIORwTDaTycq_l4QUNi8g.JPEG.msy28%2F1669087950389.jpg',
    phoneNumber: '0507-1320-1211',
    information: [
      ' 단체석',
      '포장',
      '배달',
      '예약',
      '무선 인터넷',
      '반려동물 동반',
      '남/녀 화장실 구분'
    ],
    homepageUrl: ''
  },

  {
    id: 7,
    cafeName: '카페 아뜰리에',
    starRating: 4.53,
    location: '사당역 11번 출구에서318m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjBfOTMg%2FMDAxNjQ3NzY4ODM0NjE4.dDHliZmG730VhKPrwIntsrtWfH9v3VNMi1n3UQnsomIg.1rcg1HK9CuTBjZQzBZVzwcD2fDFF6aRm24yJlv1Uo2og.JPEG.godjulia259%2F1647768833891.jpg',
    phoneNumber: '0507-1442-1434',
    information: ['단체석', '포장', '예약', '무선 인터넷', ' 반려동물 동반'],
    homepageUrl: 'http://instagram.com/cafeatelier_bb'
  },

  {
    id: 8,
    cafeName: '오우아',
    starRating: 4.34,
    location: '사당역 11번 출구에서224m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA3MDNfMjAx%2FMDAxNTMwNTk2MzY4Mjcw.LU-nJfarJ2dNnBcT8zdSbFTNguMaOG8shF-Wjid5tz0g.Uz2viVhReLcfKtFg1GllRYsP5teDHXWdXmis3-7VXDcg.JPEG.chelddkdl%2F20180628_181248.jpg',
    phoneNumber: '02-6498-4998',
    information: ['포장', '무선 인터넷'],
    homepageUrl: 'http://instagram.com/ohwoahcoffee'
  },

  {
    id: 9,
    cafeName: '요고당',
    starRating: 4.34,
    location: '사당역 13번 출구에서194m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzAzMTZfMjYy%2FMDAxNjc4OTE2MTgzNTAx.Fq3ISj85C2d5aGCqj5N88BHp5v6hyTBq-DO_2DSNkjAg.y_2A4HrdfMsAmasuutjfriS-7ej-7QSCe--1Eo82d0gg.JPEG%2F20230302_121514.jpg',
    phoneNumber: '010-3067-8254',
    information: ['단체석', '포장', '예약', '무선 인터넷', '남/녀 화장실 구분'],
    homepageUrl: ''
  },
  {
    id: 10,
    cafeName: '생각이나서 사당점',
    starRating: 4.32,
    location: '사당역 11번 출구에서267m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDZfMzAw%2FMDAxNjU0NDQ0ODQxNDk4.G8g6ea6IFcYCX5LgilmLbI0kIZIlOqg_e5ZQnPGoi_og.xkGEoM5yd_JS4Ma-iD1VwOlGDj5wojEy5J7tAnMNr_Ug.JPEG.joos031%2FIMG_0362.jpg',
    phoneNumber: '',
    information: [
      '단체석',
      '포장',
      '배달',
      '예약',
      '무선 인터넷',
      '반려동물 동반',
      '남/녀 화장실 구분'
    ],
    homepageUrl: ''
  },

  {
    id: 11,
    cafeName: '초록창고',
    starRating: 4.46,
    location: '사당역 14번 출구에서297m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_152%2F1441052388262FiM0U_JPEG%2FSUBMIT_1378705029763_33213563.jpg',
    phoneNumber: '0507-1423-7470',
    information: ['포장', '무선 인터넷'],
    homepageUrl: ''
  },

  {
    id: 12,
    cafeName: '올웨이즈온',
    starRating: 4.65,
    location: '사당역 11번 출구에서343m',
    tags: ['커피', '브런치'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MjVfNTYg%2FMDAxNjUwODQ3MTM5MTA3.Sn34LQkukvyMRUWIGL7T-G_lYRDVrElqbK6S5ynLfyog.y0OT8IHHZ7hpRs7kZ-2WP8sMJXFRGIAR6jcmOwL0mwwg.JPEG.coralwood%2F20220422%25A3%25DF184540.jpg',
    phoneNumber: '02-584-7974',
    information: [
      '단체석',
      '포장',
      '배달',
      '무선 인터넷',
      '반려동물 동반',
      '남/녀 화장실 구분'
    ],
    homepageUrl: ''
  },

  {
    id: 13,
    cafeName: '태양커피',
    starRating: 4.61,
    location: '사당역 11번 출구에서182m',
    tags: ['커피'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200430_125%2F1588248361367Ihyqi_JPEG%2FpszSuJpS1XHYlsvIO_9ACfus.jpg',
    phoneNumber: '0507-1372-8182',
    information: ['포장', '무선 인터넷'],
    homepageUrl: ''
  },

  {
    id: 14,
    cafeName: '수프링',
    starRating: 4.63,
    location: '사당역 11번 출구에서261m',
    tags: ['커피', '브런치'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjNfMTkz%2FMDAxNjQ4MDI0ODk4MzYy.biQCFQzQ1mt81znifNZY3bP1vKjS9jCFSMcjWAJBSBcg.MviYxus6Hz2sIN2fAPSZrB5Tymu9aFfxwtEQiAuQKhkg.JPEG.sotkfkdzhddl46%2FIMG_3187.jpg',
    phoneNumber: '0507-1478-2471',
    information: ['포장', '배달', '예약', '무선 인터넷', '반려동물 동반'],
    homepageUrl: ''
  },

  {
    id: 15,
    cafeName: '카페 달달하다',
    starRating: 4.78,
    location: '사당역 11번 출구에서325m',
    tags: ['커피', '브런치'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMThfMTQ0%2FMDAxNjc0MDA5NDg3NzA0.lDl6ooUL02lUblV2kixTCPtTRLVKrV8blMTfX51zkHYg.4onb7Z25SZ51gjQD6ymD5HUqCEppEcFEEaRjin121fMg.JPEG.crys204%2F20230118%25A3%25DF113443.jpg',
    phoneNumber: '0507-1348-6084',
    information: ['포장', '무선 인터넷', '반려동물 동반'],
    homepageUrl: 'https://www.instagram.com/cafe.daldalhada'
  },

  {
    id: 16,
    cafeName: '커피IT수다',
    starRating: 4.51,
    location: '사당역 11번 출구에서339m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190423_209%2F15559831264547z34T_JPEG%2FW3jbvoOrgiQM5NFVLabRgkds.jpg',
    phoneNumber: '070-8810-4837',
    information: ['포장', '예약', '무선 인터넷'],
    homepageUrl: 'http://instagram.com/zong_garcia'
  },

  {
    id: 17,
    cafeName: '조이플',
    starRating: 4.72,
    location: '사당역 11번 출구에서454m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200424_176%2F158770932349955lxV_JPEG%2FiZztIcn_nz5ZY_G32OZ0JUKM.jpeg.jpg',
    phoneNumber: '0507-778-8694',
    information: ['포장', '배달'],
    homepageUrl: 'http://instagram.com/JOYFFLE'
  },

  {
    id: 18,
    cafeName: '액트커피',
    starRating: 4.51,
    location: '사당역 11번 출구에서305m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MDFfMTk5%2FMDAxNjE3MjYyNTU5NzI5.Y4sVQWmfXF458zXoiMfW7Fi4pMe3eOUuYZh-EnGD1tcg.r7SJRm1Vd4JCtFUVvbfMisQXipR2EesGlYnQj-qCZXcg.JPEG.hana4017%2F20210314_140929.jpg',
    phoneNumber: '0507-1329-4213',
    information: ['예약', '무선 인터넷'],
    homepageUrl: 'http://www.instagram.com/a.c.t_coffee'
  },

  {
    id: 19,
    cafeName: '거북이',
    starRating: 4.6,
    location: '사당역 11번 출구에서350m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MTdfMTE5%2FMDAxNjYzMzQxNjY3MTg4.Aj8HeekV48Ca9IqiuNtUZ-oYxaCKbmPKOQ7q_ocgOasg.bRAIJnolHSinSs4o-kdjG5BqN2dUehNUqsndPNdXSE0g.JPEG.hys1257%2FIMG_6847.jpg',
    phoneNumber: '070-4015-5314',
    information: ['포장', '무선 인터넷', '반려동물 동반'],
    homepageUrl: 'http://www.instagram.com/_cafe_turtle_'
  },

  {
    id: 20,
    cafeName: '헬무트커피',
    starRating: 4.45,
    location: '사당역 11번 출구에서253m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTZfMjEw%2FMDAxNjQ3NDEwNjI3MDYw.bVlK2XelfFINtxCZPu5cMAJ0OQ0lZ1T7FG3fQBA4xDIg.2sMKmNi3v8CgVYBF-oxGS7dSxuwOFtL-YA-t4rDil48g.JPEG.lawyerd%2FKakaoTalk_20220314_093408443.jpg',
    phoneNumber: '070-7776-3748',
    information: ['무선 인터넷'],
    homepageUrl: ''
  },

  {
    id: 21,
    cafeName: '율목커피',
    starRating: 4.51,
    location: '사당역 11번 출구에서439m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMDJfMjA4%2FMDAxNjc1MzQ5MTY5NjAz.pz7DqP1rbGbI_6aMeZUvlWS8jS7xBWDYhCDaZJgnF20g.jQQC4zL_eDwQonetD5XZwwI_CXU9b9Crfmcezg9VXiwg.JPEG.mdgml1281%2Foutput_653817245.jpg',
    phoneNumber: '02-597-0405',
    information: ['포장', '무선 인터넷', '반려동물 동반'],
    homepageUrl: 'https://www.instagram.com/yulmok_coffee'
  },

  {
    id: 22,
    cafeName: '참새방앗간',
    starRating: 4.8,
    location: '사당역 11번 출구에서422m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MTVfNzcg%2FMDAxNjI4OTU0ODM4NjA4.iwzxXVcT7c0VpZ8-kypCelvNtfQyqS6t0Y2WN1KbtHgg.ieHzuqEXwWY20gzCDOCbgVenAQekMoNZvAq_RInvZkQg.JPEG.kimg0603%2Fout1.jpg',
    phoneNumber: '02-6951-3776',
    information: ['포장', '배달', '예약', '무선 인터넷', '남/녀 화장실 구분'],
    homepageUrl: 'https://www.instagram.com/cafechamsae'
  },

  {
    id: 23,
    cafeName: '자판기가게',
    starRating: 4.32,
    location: '사당역 11번 출구에서539m',
    tags: ['24시간', '무인카페'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjJfMjc0%2FMDAxNjY5MTIyMzEyNzE4.oVSi-nJ_k3QEgNpTdYWnPE1JR8HwQi82ZCvK-tUeLigg.dj_4Pk1EdT1Fqv0PnP4sfD9sTh_9uoLPsdKegu3nAo4g.JPEG.goiefr%2FIMG_3828.jpg',
    phoneNumber: '0507-1378-3484',
    information: ['포장', '무선 인터넷'],
    homepageUrl: 'http://instagram.com/japangigage'
  },

  {
    id: 24,
    cafeName: '언니가 숨겨놓은 과자상자',
    starRating: 4.64,
    location: '사당역 11번 출구에서486m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190724_177%2F1563980036108SfHVO_JPEG%2Fkk8qTePLylgFG8cFYhtwneQX.jpg',
    phoneNumber: '02-6959-7666',
    information: ['포장', '배달', '예약', '무선 인터넷', '반려동물 동반'],
    homepageUrl: 'http://instagram.com/unni_cookie'
  },

  {
    id: 25,
    cafeName: '창신 561',
    starRating: 4.23,
    location: '동대문역 1번 출구에서76m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220522_277%2F1653215551017CvkIL_JPEG%2F1653214882027.jpg',
    phoneNumber: '010-9124-2442',
    information: ['포장', '무선 인터넷', '남/녀 화장실 구분'],
    homepageUrl: 'https://www.instagram.com/changsin561'
  },

  {
    id: 26,
    cafeName: 'HAUKE',
    starRating: 4.64,
    location: '동대문역 1번 출구에서872m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTZfMjAg%2FMDAxNjYwNjA4NDc2NTM0.XCMyCBAdq07D6GrZ8cvhJ9UYhMnJQP0s8c_BOfjVGJog.LaJYxYNHVZYFxwGmnxhmdL-WFMmBR2EFWcig1PKlb5Ug.JPEG.1020_jooh%2FR0004678.JPG',
    phoneNumber: '0507-1325-5250',
    information: [],
    homepageUrl: 'https://www.instagram.com/hauke_seoul'
  },

  {
    id: 27,
    cafeName: '딥다이브',
    starRating: 4.35,
    location: '총신대입구(이수)역 6번 출구에서496m',
    tags: ['커피', '디저트'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MTNfMjUw%2FMDAxNjE4MzA5NDA5ODE2.awy9GxYXA7B5QlHNsafJiYzkdruxaWWoa8KlDncIgJ0g.oyt5uHRLUhpuVEmz95YprHnQZE346OfOkxXWoo38u94g.JPEG.dmsalstj%2F1618301983826.jpg',
    phoneNumber: '0507-1424-2104',
    information: [
      '단체석',
      '주차',
      '포장',
      '배달',
      '예약',
      '무선 인터넷',
      '반려동물 동반'
    ],
    homepageUrl: 'http://www.instagram.com/deepdive_cafe'
  },

  {
    id: 28,
    cafeName: '솔라스',
    starRating: 4.37,
    location: '총신대입구(이수)역 6번 출구에서443m',
    tags: ['커피', '베이커리'],
    imgToUrl:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMjRfMjcx%2FMDAxNTgyNDcxMTAzNzIy.iiRt23TPFykuMrPfxNF1GQAe02ObIYzcM7ITRiY8IaAg.J2zzMf-hY51J0O7IRgiQWNehS6txqGFcvmcjQuUQruAg.JPEG.5rangdesign%2FKakaoTalk_20200224_000903628.jpg',
    phoneNumber: '070-8809-7711',
    information: ['단체석', '주차', '무선 인터넷'],
    homepageUrl: ''
  }
];

export default cafeDataList;
