import { useEffect, useState } from "react";
import Home from "./Home";
import Login from "./Login";
import { supabase } from "./supabase";

const App = () => {
  const [session, setSession] = useState(null);

  const getSessionStatus = async () => {
    console.log("loading get session");
    const { data, error } = await supabase.auth.getSession();
    console.log(data);
    setSession(data.session);
  };

  useEffect(() => {
    const result = getSessionStatus();

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setSession(session);
    });
  }, []);

  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {session ? <Home user={session} /> : <Login />}
    </div>
  );
};

export default App;
