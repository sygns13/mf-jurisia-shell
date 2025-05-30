(function (window) {

    window.__env = {
        "APP": {
        "STAGE": "DEV" // LOCAL | DEV | QA | LIVE
      },

      "API_GATEWAY_URL": "http://localhost:8020",
      "AUTH_GRANT_TYPE": "password",
      "REFRESH_GRANT_TYPE": "refresh_token",
      "AUTH_CLIENTID": "appjurisia",
      "AUTH_SECRET": "US2Pb4eljpZERhQ5KHHoDQ8fce1osVd7",
      "AUTH_TOKEN_NAME": "access_token_jurisia",
      "AUTH_REFRESH_TOKEN": "refresh_token_jurisia",
      "KEY_USER_ID": "preferred_username",
      "AUTH_USERNAME_NAME": "username_jurisia",
      "AUTH_SESSION_ID_NAME": "session_jurisia",

      "API_PATH_SECURITY": "api/security/v1",
      "API_PATH_CONSULTAIA": "api/consultaia/v1",
      "API_PATH_EXPEDIENTES": "api/expedientes/v1",


      "CONSULTAIA_MF_URL"         : '' || 'http://localhost:4201',
      "EXPEDIENTES_MF_URL"         : '' || 'http://localhost:4202',
      "METRICAS_MF_URL"         : '' || 'http://localhost:4203',

    }
  
}(this));