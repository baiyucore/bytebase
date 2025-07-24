import React from "react";
import "./LoginPage.css";
import { faGithub,faGoogle , faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const client_id = 'Ov23ctwUERJDbiUNb2NO';
const redirect_uri = 'http://localhost:5173/callback';
export default function LoginPage() {
  const handleGitHubLogin = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=read:user`;
    window.location.href = githubAuthUrl;
  };

  return (
    <div className="login-container">
      <div className="left-bg"></div>
      <div className="right-content">

        <div className="card">
          <header className="header">
            <img
              src="https://www.bytebase.com/images/logo.svg"
              alt="Bytebase Logo"
              className="login-logo"
            />
            <h1 className="login-title">欢迎</h1>
            <p className="login-desc">登录 Bytebase 以继续使用 Bytebase Hub。</p>

          </header>

          <div className="formButton">
            <button className="buttonStyle" onClick={handleGitHubLogin}>
            <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
              使用 Goolge 登录
            </button>


            <button className="buttonStyle" onClick={handleGitHubLogin}>
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />

              使用 GitHub 登录
            </button>
            <button className="buttonStyle" onClick={handleGitHubLogin}>
            <FontAwesomeIcon icon={faMicrosoft} style={{ marginRight: '8px' }} />
              使用 Microsoft Account
            </button>
          </div>

          <div className="divider">
            <span>或</span>
          </div>

          <form className="formStyle">
            <input placeholder="电子邮件地址" className="buttonStyle"></input>
            <button className="buttonStyle" >继续</button>
            <div className="pStyle">
              <p>
                没有账户？ <a href="/u/signup/identifier?state=hKFo2SBPaFJsR1FEbko5VFhoeFNaVW9SMUVOdlBkX0F6emZxeqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEhjenVHTG9mYk9rdVdxMW8tazA5WUgxVmxjV3hwVUNLo2NpZNkgN0IySDFrb05Sa3hQY0pENzBHeVJEbzVIbVNNMGI5V1E">注册</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
