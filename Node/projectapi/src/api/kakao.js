import axios from "axios";

export const getKakaoToken = async (code) => {
    const data = {
      grant_type: "authorization_code",
      client_id: "187694ad650249534f9a075439d6e84e", // 카카오 REST API 키
      redirect_uri: "http://localhost:8080/login", // Redirect URI
      code: code,
    };
  
    const queryString = Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  
    return axios.post("https://kauth.kakao.com/oauth/token", queryString, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
  };
  
  // 카카오 사용자 정보 조회
  export const getKakaoUserInfo = async () => {
    return window.Kakao.API.request({
      url: "/v2/user/me",
    });
  };
  
