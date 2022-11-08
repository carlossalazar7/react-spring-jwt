export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("token"));

  if (user && user.accessToken) {
    console.log(user);
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
}
