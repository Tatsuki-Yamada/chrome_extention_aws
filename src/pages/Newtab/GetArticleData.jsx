import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@yamada-ui/react';

const GetArticleData = () => {
  const [articleData, setArticleData] = useState([['testurl1 ', 'testtitle1']]);

  useEffect(() => {
    const url =
      'https://zmkkfgpqde6eds4tkt6ehny35e0mbtux.lambda-url.ap-northeast-3.on.aws/ ';
    //   'https://hogehogehogehogehugahugaoiuaoiuaoiuaoiua';

    const fetchArticleData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setArticleData(json);
        console.log(json);
      } catch (e) {
        console.log('Error', e);
      }
    };
    fetchArticleData();
  }, []);
  return (
    <div>
      {articleData.map((item, index) => (
        <Button key={index} as="a" href={item[0]}>
          {item[1]}
          {/* You can set the button label/text here */}
        </Button>
      ))}
    </div>
  );
};

export default GetArticleData;
