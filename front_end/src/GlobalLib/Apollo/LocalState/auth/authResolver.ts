export default {
  Mutation: {
    logUserIn: (_: void, { token }: any, { cache }: any) => {
      localStorage.setItem("token", token);
      cache.modify({
        fields: {
          isLoggedIn: () => true,
        },
      });
      window.location.reload();
      return null;
    },
    logUserOut: (_: void, __: void, { cache }: any) => {
      localStorage.removeItem("token");
      cache.modify({
        fields: {
          isLoggedIn: () => false,
        },
      });
      window.location.href = "/";
      return null;
    },
  },
};
//cache에 저장할 것이냐 localstorage에 저장할 것이냐. 그것이 문제로다.
