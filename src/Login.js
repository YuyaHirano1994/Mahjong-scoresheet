import { useState } from "react";
import { supabase } from "./supabase";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        console.log(data);
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) throw error;
      }
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Log in</h1>
      </div>
      <div>
        <form onSubmit={handleAuth}>
          <div style={{ marginBottom: "16px" }}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <span onClick={() => setIsLogin(!isLogin)}>{`${
              isLogin ? "reg" : "login"
            }mode (click to change mode)`}</span>
          </div>
          <div>
            <button type="submit">{isLogin ? "login" : "reg"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
