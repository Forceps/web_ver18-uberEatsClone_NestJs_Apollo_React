export default {
  Mutation: {
    historyAdd: (_: void, { token }: any, { cache }: any) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: { isLoggedIn: true },
      });
      window.location.reload();
      return null;
    },
    historyDeleteAll: (_: void, __: void, { cache }: any) => {
      localStorage.removeItem("token");
      cache.writeData({
        data: { isLoggedIn: false },
      });
      window.location.href = "/";
      return null;
    },
  },
};
//cache에 저장할 것이냐 localstorage에 저장할 것이냐. 그것이 문제로다.
