(function (window) {

    window.__env = {
        "APP": {
        "STAGE": "DEV" // LOCAL | DEV | QA | LIVE
      },

      "API_GATEWAY_URL": "http://localhost:8020",
      "API_AUTH_URL": "http://localhost:8080",
      "AUTH_RUTA_LOGIN": "realms/jurisia/protocol/openid-connect/token",
      "AUTH_RUTA_LOGOUT": "realms/jurisia/protocol/openid-connect/logout",
      "AUTH_RUTA_VERIFY_SESION": "realms/jurisia/protocol/openid-connect/userinfo",
      "AUTH_GRANT_TYPE": "password",
      "AUTH_CLIENTID": "appjurisia",
      "AUTH_SECRET": "FLSl4WBvhPqhTUfICEShYeihxDuCPcJy",
      "AUTH_TOKEN_NAME": "access_token_jurisia",
      "AUTH_REFRESH_TOKEN": "refresh_token_jurisia",
      "KEY_USER_ID": "preferred_username",

      "API_PATH_SECURITY": "api/security/v1",

    }
  
}(this));