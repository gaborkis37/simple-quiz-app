import { useState } from "react";
import { UserObject } from "./types/UserObject";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserObject>(null);

  return user ? (
    <Quiz
      loading={loading}
      onLoadingChange={setLoading}
      user={user}
      onUserChange={setUser}
    />
  ) : (
    <HomeScreen
      loading={loading}
      username={username}
      onUsernameChange={setUsername}
      onLoadingChange={setLoading}
      onUserChange={setUser}
    />
  );
}

export default App;
