import {CloseOutlined} from "@ant-design/icons"
import styled from "@emotion/styled"
import { MouseEvent, useState } from "react";


const MyIcon = styled(CloseOutlined)`
    color: red;
    font-size: 100px;
    /* background-color: blue; */
`

export default function LibraryIconPage(): JSX.Element {
     
    const [count, setCount] = useState(0);
    const onClickEvent = (event: MouseEvent<HTMLDivElement>) => {
        console.log(event.currentTarget.id);
        setCount(count+1)
    }
    
    return (
        <>
        <div id="delete" onClick={onClickEvent}>
            <MyIcon rev={undefined} />
        </div>
        <div>
            {count}
        </div>
        </>
    )
}