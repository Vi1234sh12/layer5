import styled from "styled-components";

const NewsPageWrapper = styled.div`
 color: #000;     
.single-post-wrapper{
    padding: 50px 0;
}
.single-post-block{
    p{
        line-height: 29px;
        letter-spacing: 0.2px;
    }
    p+p{
        margin-top: 30px;  
    }
}
`;
export default NewsPageWrapper;
