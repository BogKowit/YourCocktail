import { DataUser } from '../data'

function fakeBackend () {
  window.fetch = function(url, options) {    
    return new Promise((resolve, reject) => {
      if (url.endsWith("/auth/login") && options.method === "POST") {
        const params = JSON.parse(options.body);
        const userFound = DataUser.filter(
          (user) =>
            user.username === params.username &&
            user.password === params.password
        );
        if (userFound.length > 0) {
          const user = { ...userFound[0], logged_at: new Date() };
          resolve({ ok: true, text: () => Promise.resolve(user) });
        } else {
          reject("Error: User not found!");
        }
      }
      reject("URL not found");
    });
  };
}

export default fakeBackend;
