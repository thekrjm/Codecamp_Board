import { useState } from "react"
import BoardCommentWriteUI from "./BoardCommentWrite.presenter"
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentWrite() {
    const router = useRouter;
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    const onClickSubmit = async () => {
        const result = await createBoardComment({
            variables: {
                createBoardCommentInput: {
                    writer: writer,
                    password: password,
                    contents: contents,
                },
                boardId: router.query.boardId

            },
            refetchQueries: {
                query: FETCH_BOARD_COMMENTS,
                boardId: router.query.boardId
            }
        })
    }
    return (
        <BoardCommentWriteUI
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            contents={contents}
        />
    )
}