import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import authService from '../../services/auth.service';

const Test = () => {
  const [userInfo, setUserInfo] = useState({});

  // 처음 렌더링시 userInfo 가져옴
  useEffect(() => {
    const getDataAPI = async () => {
      const response = await authService.getUserInfo();
      setUserInfo(response.data);
      console.log(userInfo);
    };
    getDataAPI();
  }, []);

  // 이메일 true 또는 false 변경

  // 수정 API 날림
  const handleEdit = () => {
    const sendData = {
      ...userInfo,
      isEmailAgreed: !userInfo.isEmailAgreed,
    };
    console.log(sendData);
    api.put('/users/settings', sendData).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <button type="button" onClick={handleEdit}>
        변경 요청
      </button>
    </div>
  );
};

export default Test;
