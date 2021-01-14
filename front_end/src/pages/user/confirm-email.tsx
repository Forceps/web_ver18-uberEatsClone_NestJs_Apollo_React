import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useHistory } from "react-router-dom";
import {
  verifyEmail,
  verifyEmailVariables,
} from "../../GlobalLib/Apollo/ApolloTypes/verifyEmail";
import { VERIFY_EMAIL_MUTATION } from "../../GlobalLib/Apollo/GraphQL_Client/User/UserM";
import { useMe } from "../../GlobalLib/Apollo/GraphQL_Client/User/UserQ";

export const ConfirmEmail = () => {
  const { data: userData } = useMe();
  const client = useApolloClient();
  const history = useHistory();
  const [verifyEmail] = useMutation<verifyEmail, verifyEmailVariables>(
    VERIFY_EMAIL_MUTATION,
    {
      onCompleted: ({ verifyEmail }: verifyEmail) => {
        if (verifyEmail.ok && userData?.me.id) {
          client.writeFragment({
            id: `user:${userData.me.id}`,
            fragment: gql`
              fragment VerifiedUser on user {
                verified
              }
            `,
            data: {
              verified: true,
            },
          });
        }
        history.push("/");
      },
    }
  );
  useEffect(() => {
    const [, code] = window.location.href.split("code=");
    verifyEmail({
      variables: {
        input: {
          code,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-52 flex flex-col items-center justify-center">
      <Helmet>
        <title>Verify Email | Nuber Eats</title>
      </Helmet>
      <h2 className="text-lg mb-1 font-medium">Confirming email...</h2>
      <h4 className="text-gray-700 text-sm">
        Please wait, don't close this page...
      </h4>
    </div>
  );
};
