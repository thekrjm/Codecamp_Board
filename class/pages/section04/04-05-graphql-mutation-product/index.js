import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createBoard($seller:String, createProductInput:CreateProductInput!) {
    createProduct(seller:$seller, createProductInput:$createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async (e) => {
    const result = await createProduct({
      variables: {
        seller: "젬",
        createProductInput: {
          name: "파는 거",
          detail: "조금 비싼 거",
          price: 9000000,
        },
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
